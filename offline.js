(() => {
  'use strict';
  const catalog = document.getElementById('plate-catalog');
  if (catalog) {
    const cards = Array.from(document.querySelectorAll('.plate-card'));
    const grid = document.getElementById('plate-grid');
    const search = document.getElementById('plate-search');
    const min = document.getElementById('plate-min');
    const max = document.getElementById('plate-max');
    const sort = document.getElementById('plate-sort');
    const more = document.getElementById('plate-more');
    const active = document.getElementById('plate-active-filters');
    const filterPanel = document.querySelector('.plate-filter');
    const showResults = document.getElementById('plate-show-results');
    const choices = Array.from(document.querySelectorAll('[data-brand-filter]'));
    const selected = new Set();
    const temperatureChoices = Array.from(document.querySelectorAll('[data-temperature-filter]'));
    const selectedTemperatures = new Set();
    const initialLimit = 20;
    const moreStep = 4;
    let limit = initialLimit;
    const normalize = value => value.toLocaleLowerCase('ru').replace(/ё/g, 'е').replace(/[\s\-–—_]/g, '');
    function refresh() {
      const q = normalize(search.value.trim());
      const lower = min.value === '' ? null : Number(min.value);
      const upper = max.value === '' ? null : Number(max.value);
      const found = cards.filter(card => {
        const price = card.dataset.price === '' ? null : Number(card.dataset.price);
        return (!q || normalize(card.dataset.search).includes(q)) &&
          (!selected.size || selected.has(card.dataset.brand)) &&
          (!selectedTemperatures.size || selectedTemperatures.has(card.dataset.temperature)) &&
          (lower === null && upper === null || price !== null && (lower === null || price >= lower) && (upper === null || price <= upper));
      });
      const ordered = [...found];
      if (sort.value === 'price-asc') ordered.sort((a,b) => (Number(a.dataset.price) || Infinity) - (Number(b.dataset.price) || Infinity));
      if (sort.value === 'price-desc') ordered.sort((a,b) => (Number(b.dataset.price) || -Infinity) - (Number(a.dataset.price) || -Infinity));
      if (sort.value === 'name') ordered.sort((a,b) => a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent, 'ru'));
      const visible = new Set(ordered.slice(0,limit));
      cards.forEach(card => card.hidden = !visible.has(card));
      ordered.forEach(card => grid.append(card));
      more.hidden = found.length <= limit;
      more.textContent = `Показать ещё (${Math.min(moreStep,found.length-limit)})`;
      choices.forEach(choice => { choice.classList.toggle('is-active',selected.has(choice.dataset.brandFilter)); choice.setAttribute('aria-pressed',selected.has(choice.dataset.brandFilter)); });
      temperatureChoices.forEach(choice => { const isActive=selectedTemperatures.has(choice.dataset.temperatureFilter); choice.classList.toggle('is-active',isActive); choice.setAttribute('aria-pressed',isActive); });
      active.replaceChildren();
      if (q) addTag(`Поиск: ${search.value.trim()}`, () => { search.value=''; update(); });
      selected.forEach(brand => addTag(brand, () => { selected.delete(brand); update(); }));
      selectedTemperatures.forEach(temperature => addTag(temperature.replace('°C',' °C'), () => { selectedTemperatures.delete(temperature); update(); }));
      if (lower !== null || upper !== null) addTag(`Цена: ${lower ?? '0'}–${upper ?? '∞'}`, () => { min.value=''; max.value=''; update(); });
      return found.length;
    }
    function addTag(label, action) { const button=document.createElement('button'); button.type='button'; button.textContent=label+' ×'; button.addEventListener('click',action); active.append(button); }
    function hasFilters() { return Boolean(search.value.trim() || min.value || max.value || selected.size || selectedTemperatures.size); }
    function productWord(number) { const n=number%100; if(n>=11&&n<=14)return 'товаров'; const last=n%10; return last===1?'товар':last>=2&&last<=4?'товара':'товаров'; }
    function previewResults(number, anchor) {
      if (!hasFilters() || number===0) { showResults.hidden=true; return; }
      const panelRect=filterPanel.getBoundingClientRect();
      const anchorRect=anchor.getBoundingClientRect();
      const top=anchorRect.top-panelRect.top+(anchorRect.height-42)/2;
      showResults.style.top=`${Math.max(0,Math.min(top,filterPanel.offsetHeight-42))}px`;
      showResults.textContent=`Показать ${number} ${productWord(number)}`;
      showResults.hidden=false;
    }
    function update(anchor) { limit=initialLimit; const number=refresh(); if(anchor)previewResults(number,anchor); else showResults.hidden=true; }
    [search,min,max].forEach(el => el.addEventListener('input', () => update(el)));
    sort.addEventListener('change', () => update());
    choices.forEach(choice => choice.addEventListener('click', () => { const brand=choice.dataset.brandFilter; selected.has(brand)?selected.delete(brand):selected.add(brand); update(choice); }));
    temperatureChoices.forEach(choice => choice.addEventListener('click', () => { const temperature=choice.dataset.temperatureFilter; selectedTemperatures.has(temperature)?selectedTemperatures.delete(temperature):selectedTemperatures.add(temperature); update(choice); }));
    document.getElementById('plate-reset').addEventListener('click', () => { search.value=''; min.value=''; max.value=''; sort.value='default'; selected.clear(); selectedTemperatures.clear(); update(); });
    showResults.addEventListener('click', () => { showResults.hidden=true; grid.scrollIntoView({behavior:'smooth',block:'start'}); });
    document.addEventListener('click', event => { if (!filterPanel.contains(event.target)) showResults.hidden=true; });
    document.addEventListener('keydown', event => { if (event.key==='Escape') showResults.hidden=true; });
    more.addEventListener('click', () => { showResults.hidden=true; limit += moreStep; refresh(); });
    refresh();
    const dialog = document.getElementById('plate-dialog');
    const close = () => { dialog.hidden=true; document.body.style.overflow=''; };
    document.querySelectorAll('[data-plate-inquiry]').forEach(button => button.addEventListener('click', () => {
      dialog.querySelector('[name=model]').value = button.dataset.plateInquiry;
      dialog.hidden=false; document.body.style.overflow='hidden'; dialog.querySelector('[name=quantity]').focus();
    }));
    dialog.querySelector('.plate-dialog__close').addEventListener('click',close);
    dialog.addEventListener('click',event=>{if(event.target===dialog)close();});
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!dialog.hidden)close();});
    document.getElementById('plate-inquiry').addEventListener('submit',event=>{
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const fields = [['Модель',data.get('model')],['Количество',data.get('quantity')],['Материал',data.get('material')],['Толщина, мм',data.get('thickness')],['Профиль / тип',data.get('profile')],['Комментарий',data.get('comment')]];
      const body = fields.filter(([,v])=>String(v).trim()).map(([k,v])=>`${k}: ${String(v).trim()}`).join('\n')+'\n\nПри необходимости приложите фото шильдика или пластины.';
      location.href='mailto:office@pto-service.com?subject='+encodeURIComponent('Запрос пластин для теплообменника')+'&body='+encodeURIComponent(body);
    });

    const cartView = document.getElementById('plate-cart');
    const cartItems = document.getElementById('plate-cart-items');
    const cartTotal = document.getElementById('plate-cart-total');
    const cartRequest = document.getElementById('plate-cart-request');
    const cartLinks = Array.from(document.querySelectorAll('.app-header__cart'));
    const cardById = new Map(cards.map(card => [card.dataset.id,card]));
    const cartStorageKey = 'pto-service-plate-cart-v1';
    const cartState = new Map();
    const money = value => new Intl.NumberFormat('ru-RU').format(value) + ' руб.';
    const quantity = value => Math.max(1,Math.min(9999,Math.floor(Number(value)||1)));
    try {
      const saved = JSON.parse(localStorage.getItem(cartStorageKey)||'[]');
      if (Array.isArray(saved)) saved.forEach(([id,count]) => { if (cardById.has(id)) cartState.set(id,quantity(count)); });
    } catch (_) {}
    function saveCart() { try { localStorage.setItem(cartStorageKey,JSON.stringify([...cartState])); } catch (_) {} }
    function cartTotals() {
      let count=0,price=0,unknown=false;
      cartState.forEach((qty,id) => { const amount=Number(cardById.get(id).dataset.price); count+=qty; if(amount)price+=amount*qty; else unknown=true; });
      return {count,price,unknown};
    }
    function cartNode(tag,className,textValue) {
      const element=document.createElement(tag);
      if(className) element.className=className;
      if(textValue!==undefined) element.textContent=textValue;
      return element;
    }
    function renderCart() {
      const {count,price,unknown}=cartTotals();
      const totalLabel=count ? unknown ? (price ? `от ${money(price)}` : 'Стоимость уточняется') : money(price) : money(0);
      cartLinks.forEach(link => {
        const amount=link.querySelector('.amount');
        if(amount) amount.textContent=String(count);
        const totalText=[...link.childNodes].find(node => node.nodeType===Node.TEXT_NODE && node.textContent.trim());
        if(totalText) totalText.textContent=` ${totalLabel} `;
      });
      cartItems.replaceChildren();
      if(!count) cartItems.append(cartNode('p','plate-cart__empty','В корзине пока нет товаров.'));
      cartState.forEach((qty,id) => {
        const card=cardById.get(id);
        const item=cartNode('div','plate-cart__item');
        const image=cartNode('img'); image.src=card.querySelector('img').src; image.alt='';
        const details=cartNode('div');
        details.append(cartNode('div','plate-cart__item-name',card.querySelector('h3').textContent));
        details.append(cartNode('div','plate-cart__item-price',card.dataset.price ? `${money(Number(card.dataset.price))} за шт.` : 'Стоимость уточняется'));
        const controls=cartNode('div','plate-cart__item-controls');
        const input=cartNode('input'); input.type='number'; input.min='1'; input.max='9999'; input.step='1'; input.value=String(qty); input.dataset.cartId=id; input.setAttribute('aria-label','Количество');
        const remove=cartNode('button','plate-cart__remove','Удалить'); remove.type='button'; remove.dataset.removeId=id;
        controls.append(input,remove); details.append(controls); item.append(image,details); cartItems.append(item);
      });
      cartTotal.textContent=totalLabel;
      cartRequest.disabled=!count;
      saveCart();
    }
    function openCart() { renderCart(); cartView.hidden=false; document.body.style.overflow='hidden'; cartView.querySelector('.plate-cart__close').focus(); }
    function closeCart() { cartView.hidden=true; document.body.style.overflow=''; }
    grid.addEventListener('click',event => {
      const step=event.target.closest('[data-card-qty]');
      if(step) { const input=step.parentElement.querySelector('input'); input.value=String(quantity(Number(input.value)+Number(step.dataset.cardQty))); return; }
      const add=event.target.closest('.plate-card__button');
      if(!add) return;
      const card=add.closest('.plate-card');
      const input=card.querySelector('.plate-card__quantity input');
      const id=card.dataset.id;
      cartState.set(id,Math.min(9999,(cartState.get(id)||0)+quantity(input.value)));
      input.value='1';
      openCart();
    });
    grid.addEventListener('change',event => { if(event.target.matches('.plate-card__quantity input')) event.target.value=String(quantity(event.target.value)); });
    cartItems.addEventListener('change',event => { if(event.target.matches('[data-cart-id]')) { cartState.set(event.target.dataset.cartId,quantity(event.target.value)); renderCart(); } });
    cartItems.addEventListener('click',event => { const remove=event.target.closest('[data-remove-id]'); if(remove) { cartState.delete(remove.dataset.removeId); renderCart(); } });
    cartLinks.forEach(link => link.addEventListener('click',event => { event.preventDefault(); openCart(); }));
    cartView.querySelector('.plate-cart__close').addEventListener('click',closeCart);
    document.getElementById('plate-cart-continue').addEventListener('click',closeCart);
    cartView.addEventListener('click',event => { if(event.target===cartView) closeCart(); });
    document.addEventListener('keydown',event => { if(event.key==='Escape'&&!cartView.hidden) closeCart(); });
    cartRequest.addEventListener('click',() => {
      if(!cartState.size) return;
      const lines=[...cartState].map(([id,qty]) => `${cardById.get(id).querySelector('h3').textContent} — ${qty} шт.`);
      location.href='mailto:office@pto-service.com?subject='+encodeURIComponent('Запрос пластин из корзины')+'&body='+encodeURIComponent(lines.join('\n'));
    });
    renderCart();
  }
  const consultationForm=document.getElementById('plate-consultation-form');
  if(consultationForm) consultationForm.addEventListener('submit',event => {
    event.preventDefault();
    if(!consultationForm.reportValidity()) return;
    const data=new FormData(consultationForm);
    const body=[
      'Заявка на бесплатную консультацию по пластинам для теплообменника',
      `Имя: ${String(data.get('form_text_6')||'').trim()}`,
      `E-mail: ${String(data.get('form_text_7')||'').trim()}`,
      `Телефон: ${String(data.get('form_text_8')||'').trim()}`,
    ].join('\n');
    location.href='mailto:office@pto-service.com?subject='+encodeURIComponent('Консультация по пластинам для теплообменника')+'&body='+encodeURIComponent(body);
  });
  // Source header and popup forms have no mail transport in a saved page.
  document.querySelectorAll('form:not(#plate-inquiry):not(#plate-consultation-form)').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault(); event.stopImmediatePropagation();
      let message=form.querySelector('.plate-contact-message');
      if (!message) { message=document.createElement('p'); message.className='plate-contact-message'; message.setAttribute('role','status'); form.append(message); }
      message.innerHTML = form.classList.contains('app-header__search') ? 'Для поиска модели воспользуйтесь <a href="index.html#plate-catalog">каталогом пластин</a>.' : 'Свяжитесь с нами: <a href="tel:+74957006202">+7 (495) 700-62-02</a> или <a href="mailto:office@pto-service.com">office@pto-service.com</a>.';
    },true);
  });
  document.querySelectorAll('.app-header__burger,.svg-icon--phones-arrow,.has-sublevel > a > .arrow,.arrow-wrapper').forEach(el=>{
    el.tabIndex=0; el.setAttribute('role','button'); el.setAttribute('aria-label',el.matches('.app-header__burger')?'Открыть меню':el.matches('.svg-icon--phones-arrow')?'Показать телефоны':'Раскрыть раздел');
    el.addEventListener('keydown',event=>{if(event.target===el&&(event.key==='Enter'||event.key===' ')){event.preventDefault();el.click();}});
  });
})();
