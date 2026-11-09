
; /* Start:"a:4:{s:4:"full";s:72:"/local/templates/redisign/js/vendors/jquery-3.4.1.min.js?173281122388147";s:6:"source";s:56:"/local/templates/redisign/js/vendors/jquery-3.4.1.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:60:"/local/templates/redisign/js/plugins.min.js?1732811223129174";s:6:"source";s:43:"/local/templates/redisign/js/plugins.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(d){d.ui=d.ui||{},d.ui.version="1.12.1";var o,s=0,r=Array.prototype.slice;d.cleanData=(o=d.cleanData,function(e){var t,s,i;for(i=0;null!=(s=e[i]);i++)try{(t=d._data(s,"events"))&&t.remove&&d(s).triggerHandler("remove")}catch(e){}o(e)}),d.widget=function(e,s,t){var i,o,n,a={},r=e.split(".")[0],l=r+"-"+(e=e.split(".")[1]);return t||(t=s,s=d.Widget),d.isArray(t)&&(t=d.extend.apply(null,[{}].concat(t))),d.expr[":"][l.toLowerCase()]=function(e){return!!d.data(e,l)},d[r]=d[r]||{},i=d[r][e],o=d[r][e]=function(e,t){return this._createWidget?void(arguments.length&&this._createWidget(e,t)):new o(e,t)},d.extend(o,i,{version:t.version,_proto:d.extend({},t),_childConstructors:[]}),(n=new s).options=d.widget.extend({},n.options),d.each(t,function(t,i){return d.isFunction(i)?void(a[t]=function(){var e,t=this._super,s=this._superApply;return this._super=o,this._superApply=n,e=i.apply(this,arguments),this._super=t,this._superApply=s,e}):void(a[t]=i);function o(){return s.prototype[t].apply(this,arguments)}function n(e){return s.prototype[t].apply(this,e)}}),o.prototype=d.widget.extend(n,{widgetEventPrefix:i&&n.widgetEventPrefix||e},a,{constructor:o,namespace:r,widgetName:e,widgetFullName:l}),i?(d.each(i._childConstructors,function(e,t){var s=t.prototype;d.widget(s.namespace+"."+s.widgetName,o,t._proto)}),delete i._childConstructors):s._childConstructors.push(o),d.widget.bridge(e,o),o},d.widget.extend=function(e){for(var t,s,i=r.call(arguments,1),o=0,n=i.length;o<n;o++)for(t in i[o])s=i[o][t],i[o].hasOwnProperty(t)&&void 0!==s&&(e[t]=d.isPlainObject(s)?d.isPlainObject(e[t])?d.widget.extend({},e[t],s):d.widget.extend({},s):s);return e},d.widget.bridge=function(n,t){var a=t.prototype.widgetFullName||n;d.fn[n]=function(s){var e="string"==typeof s,i=r.call(arguments,1),o=this;return e?this.length||"instance"!==s?this.each(function(){var e,t=d.data(this,a);return"instance"===s?(o=t,!1):t?d.isFunction(t[s])&&"_"!==s.charAt(0)?(e=t[s].apply(t,i))!==t&&void 0!==e?(o=e&&e.jquery?o.pushStack(e.get()):e,!1):void 0:d.error("no such method '"+s+"' for "+n+" widget instance"):d.error("cannot call methods on "+n+" prior to initialization; attempted to call method '"+s+"'")}):o=void 0:(i.length&&(s=d.widget.extend.apply(null,[s].concat(i))),this.each(function(){var e=d.data(this,a);e?(e.option(s||{}),e._init&&e._init()):d.data(this,a,new t(s,this))})),o}},d.Widget=function(){},d.Widget._childConstructors=[],d.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,t){t=d(t||this.defaultElement||this)[0],this.element=d(t),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=d(),this.hoverable=d(),this.focusable=d(),this.classesElementLookup={},t!==this&&(d.data(t,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===t&&this.destroy()}}),this.document=d(t.style?t.ownerDocument:t.document||t),this.window=d(this.document[0].defaultView||this.document[0].parentWindow)),this.options=d.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:d.noop,_create:d.noop,_init:d.noop,destroy:function(){var s=this;this._destroy(),d.each(this.classesElementLookup,function(e,t){s._removeClass(t,e)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:d.noop,widget:function(){return this.element},option:function(e,t){var s,i,o,n=e;if(0===arguments.length)return d.widget.extend({},this.options);if("string"==typeof e)if(n={},e=(s=e.split(".")).shift(),s.length){for(i=n[e]=d.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)i[s[o]]=i[s[o]]||{},i=i[s[o]];if(e=s.pop(),1===arguments.length)return void 0===i[e]?null:i[e];i[e]=t}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];n[e]=t}return this._setOptions(n),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return"classes"===e&&this._setOptionClasses(t),this.options[e]=t,"disabled"===e&&this._setOptionDisabled(t),this},_setOptionClasses:function(e){var t,s,i;for(t in e)i=this.classesElementLookup[t],e[t]!==this.options.classes[t]&&i&&i.length&&(s=d(i.get()),this._removeClass(i,t),s.addClass(this._classes({element:s,keys:t,classes:e,add:!0})))},_setOptionDisabled:function(e){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!e),e&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(o){function e(e,t){var s,i;for(i=0;e.length>i;i++)s=a.classesElementLookup[e[i]]||d(),s=o.add?d(d.unique(s.get().concat(o.element.get()))):d(s.not(o.element).get()),a.classesElementLookup[e[i]]=s,n.push(e[i]),t&&o.classes[e[i]]&&n.push(o.classes[e[i]])}var n=[],a=this;return o=d.extend({element:this.element,classes:this.options.classes||{}},o),this._on(o.element,{remove:"_untrackClassesElement"}),o.keys&&e(o.keys.match(/\S+/g)||[],!0),o.extra&&e(o.extra.match(/\S+/g)||[]),n.join(" ")},_untrackClassesElement:function(s){var i=this;d.each(i.classesElementLookup,function(e,t){-1!==d.inArray(s.target,t)&&(i.classesElementLookup[e]=d(t.not(s.target).get()))})},_removeClass:function(e,t,s){return this._toggleClass(e,t,s,!1)},_addClass:function(e,t,s){return this._toggleClass(e,t,s,!0)},_toggleClass:function(e,t,s,i){i="boolean"==typeof i?i:s;var o="string"==typeof e||null===e,n={extra:o?t:s,keys:o?e:t,element:o?this.element:e,add:i};return n.element.toggleClass(this._classes(n),i),this},_on:function(a,r,e){var l,h=this;"boolean"!=typeof a&&(e=r,r=a,a=!1),e?(r=l=d(r),this.bindings=this.bindings.add(r)):(e=r,r=this.element,l=this.widget()),d.each(e,function(e,t){function s(){return a||!0!==h.options.disabled&&!d(this).hasClass("ui-state-disabled")?("string"==typeof t?h[t]:t).apply(h,arguments):void 0}"string"!=typeof t&&(s.guid=t.guid=t.guid||s.guid||d.guid++);var i=e.match(/^([\w:-]*)\s*(.*)$/),o=i[1]+h.eventNamespace,n=i[2];n?l.on(o,n,s):r.on(o,s)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(t).off(t),this.bindings=d(this.bindings.not(e).get()),this.focusable=d(this.focusable.not(e).get()),this.hoverable=d(this.hoverable.not(e).get())},_delay:function(e,t){var s=this;return setTimeout(function(){return("string"==typeof e?s[e]:e).apply(s,arguments)},t||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(d(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(d(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(d(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(d(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,t,s){var i,o,n=this.options[e];if(s=s||{},(t=d.Event(t)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),t.target=this.element[0],o=t.originalEvent)for(i in o)i in t||(t[i]=o[i]);return this.element.trigger(t,s),!(d.isFunction(n)&&!1===n.apply(this.element[0],[t].concat(s))||t.isDefaultPrevented())}},d.each({show:"fadeIn",hide:"fadeOut"},function(n,a){d.Widget.prototype["_"+n]=function(t,e,s){"string"==typeof e&&(e={effect:e});var i,o=e?!0!==e&&"number"!=typeof e&&e.effect||a:n;"number"==typeof(e=e||{})&&(e={duration:e}),i=!d.isEmptyObject(e),e.complete=s,e.delay&&t.delay(e.delay),i&&d.effects&&d.effects.effect[o]?t[n](e):o!==n&&t[o]?t[o](e.duration,e.easing,s):t.queue(function(e){d(this)[n](),s&&s.call(t[0]),e()})}}),d.widget,d.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},d.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var n=!1;d(document).on("mouseup",function(){n=!1}),d.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.on("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).on("click."+this.widgetName,function(e){return!0===d.data(e.target,t.widgetName+".preventClickEvent")?(d.removeData(e.target,t.widgetName+".preventClickEvent"),e.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!n){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var t=this,s=1===e.which,i=!("string"!=typeof this.options.cancel||!e.target.nodeName)&&d(e.target).closest(this.options.cancel).length;return s&&!i&&this._mouseCapture(e)&&(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){t.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(e),!this._mouseStarted)?e.preventDefault():(!0===d.data(e.target,this.widgetName+".preventClickEvent")&&d.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return t._mouseMove(e)},this._mouseUpDelegate=function(e){return t._mouseUp(e)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),n=!0)),!0}},_mouseMove:function(e){if(this._mouseMoved){if(d.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,e),this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&d.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,n=!1,e.preventDefault()},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),d.widget("ui.slider",d.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,t,s=this.options,i=this.element.find(".ui-slider-handle"),o=[];for(t=s.values&&s.values.length||1,i.length>t&&(i.slice(t).remove(),i=i.slice(0,t)),e=i.length;e<t;e++)o.push("<span tabindex='0'></span>");this.handles=i.add(d(o.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){d(this).data("ui-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var e=this.options;e.range?(!0===e.range&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:d.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=d("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),"min"!==e.range&&"max"!==e.range||this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var t,s,i,o,n,a,r,l=this,h=this.options;return!h.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),t={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(t),i=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var t=Math.abs(s-l.values(e));(t<i||i===t&&(e===l._lastChangedValue||l.values(e)===h.min))&&(i=t,o=d(this),n=e)}),!1!==this._start(e,n)&&(this._mouseSliding=!0,this._handleIndex=n,this._addClass(o,null,"ui-state-active"),o.trigger("focus"),a=o.offset(),r=!d(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=r?{left:0,top:0}:{left:e.pageX-a.left-o.width()/2,top:e.pageY-a.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,n,s),this._animateOff=!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,s),!1},_mouseStop:function(e){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,s,i,o;return 1<(s=("horizontal"===this.orientation?(t=this.elementSize.width,e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)))/t)&&(s=1),s<0&&(s=0),"vertical"===this.orientation&&(s=1-s),i=this._valueMax()-this._valueMin(),o=this._valueMin()+s*i,this._trimAlignValue(o)},_uiHash:function(e,t,s){var i={handle:this.handles[e],handleIndex:e,value:void 0!==t?t:this.value()};return this._hasMultipleValues()&&(i.value=void 0!==t?t:this.values(e),i.values=s||this.values()),i},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(e,t){return this._trigger("start",e,this._uiHash(t))},_slide:function(e,t,s){var i,o=this.value(),n=this.values();this._hasMultipleValues()&&(i=this.values(t?0:1),o=this.values(t),2===this.options.values.length&&!0===this.options.range&&(s=0===t?Math.min(i,s):Math.max(i,s)),n[t]=s),s===o||!1!==this._trigger("slide",e,this._uiHash(t,s,n))&&(this._hasMultipleValues()?this.values(t,s):this.value(s))},_stop:function(e,t){this._trigger("stop",e,this._uiHash(t))},_change:function(e,t){this._keySliding||this._mouseSliding||(this._lastChangedValue=t,this._trigger("change",e,this._uiHash(t)))},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),void this._change(null,0)):this._value()},values:function(e,t){var s,i,o;if(1<arguments.length)return this.options.values[e]=this._trimAlignValue(t),this._refreshValue(),void this._change(null,e);if(!arguments.length)return this._values();if(!d.isArray(e))return this._hasMultipleValues()?this._values(e):this.value();for(s=this.options.values,i=e,o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(i[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,t){var s,i=0;switch("range"===e&&!0===this.options.range&&("min"===t?(this.options.value=this._values(0),this.options.values=null):"max"===t&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),d.isArray(this.options.values)&&(i=this.options.values.length),this._super(e,t),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(t),this.handles.css("horizontal"===t?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=i-1;0<=s;s--)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(e){this._super(e),this._toggleClass(null,"ui-state-disabled",!!e)},_value:function(){var e=this.options.value;return this._trimAlignValue(e)},_values:function(e){var t,s,i;if(arguments.length)return t=this.options.values[e],this._trimAlignValue(t);if(this._hasMultipleValues()){for(s=this.options.values.slice(),i=0;s.length>i;i+=1)s[i]=this._trimAlignValue(s[i]);return s}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=0<this.options.step?this.options.step:1,s=(e-this._valueMin())%t,i=e-s;return 2*Math.abs(s)>=t&&(i+=0<s?t:-t),parseFloat(i.toFixed(5))},_calculateNewMax:function(){var e=this.options.max,t=this._valueMin(),s=this.options.step;(e=Math.round((e-t)/s)*s+t)>this.options.max&&(e-=s),this.max=parseFloat(e.toFixed(this._precision()))},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,s=t.indexOf(".");return-1===s?0:t.length-s-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(e){"vertical"===e&&this.range.css({width:"",left:""}),"horizontal"===e&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var t,s,e,i,o,n=this.options.range,a=this.options,r=this,l=!this._animateOff&&a.animate,h={};this._hasMultipleValues()?this.handles.each(function(e){s=(r.values(e)-r._valueMin())/(r._valueMax()-r._valueMin())*100,h["horizontal"===r.orientation?"left":"bottom"]=s+"%",d(this).stop(1,1)[l?"animate":"css"](h,a.animate),!0===r.options.range&&("horizontal"===r.orientation?(0===e&&r.range.stop(1,1)[l?"animate":"css"]({left:s+"%"},a.animate),1===e&&r.range[l?"animate":"css"]({width:s-t+"%"},{queue:!1,duration:a.animate})):(0===e&&r.range.stop(1,1)[l?"animate":"css"]({bottom:s+"%"},a.animate),1===e&&r.range[l?"animate":"css"]({height:s-t+"%"},{queue:!1,duration:a.animate}))),t=s}):(e=this.value(),i=this._valueMin(),o=this._valueMax(),s=o!==i?(e-i)/(o-i)*100:0,h["horizontal"===this.orientation?"left":"bottom"]=s+"%",this.handle.stop(1,1)[l?"animate":"css"](h,a.animate),"min"===n&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:s+"%"},a.animate),"max"===n&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:100-s+"%"},a.animate),"min"===n&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:s+"%"},a.animate),"max"===n&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:100-s+"%"},a.animate))},_handleEvents:{keydown:function(e){var t,s,i,o=d(e.target).data("ui-slider-handle-index");switch(e.keyCode){case d.ui.keyCode.HOME:case d.ui.keyCode.END:case d.ui.keyCode.PAGE_UP:case d.ui.keyCode.PAGE_DOWN:case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(d(e.target),null,"ui-state-active"),!1===this._start(e,o)))return}switch(i=this.options.step,t=s=this._hasMultipleValues()?this.values(o):this.value(),e.keyCode){case d.ui.keyCode.HOME:s=this._valueMin();break;case d.ui.keyCode.END:s=this._valueMax();break;case d.ui.keyCode.PAGE_UP:s=this._trimAlignValue(t+(this._valueMax()-this._valueMin())/this.numPages);break;case d.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(t-(this._valueMax()-this._valueMin())/this.numPages);break;case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:if(t===this._valueMax())return;s=this._trimAlignValue(t+i);break;case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(t===this._valueMin())return;s=this._trimAlignValue(t-i)}this._slide(e,o,s)},keyup:function(e){var t=d(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,t),this._change(e,t),this._removeClass(d(e.target),null,"ui-state-active"))}}})}),function(m,f,i){"use strict";var s={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};function t(e,t){if(this.el=e,this.$el=m(e),this.s=m.extend({},s,t),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in i.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=m(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(m(this.s.selector)):this.$items=this.$el.children(),this.$slide="",this.$outer="",this.init(),this}t.prototype.init=function(){var e=this;e.s.preload>e.$items.length&&(e.s.preload=e.$items.length);var t=f.location.hash;0<t.indexOf("lg="+this.s.galleryId)&&(e.index=parseInt(t.split("&slide=")[1],10),m("body").addClass("lg-from-hash"),m("body").hasClass("lg-on")||setTimeout(function(){e.build(e.index),m("body").addClass("lg-on")})),e.s.dynamic?(e.$el.trigger("onBeforeOpen.lg"),e.index=e.s.index||0,m("body").hasClass("lg-on")||setTimeout(function(){e.build(e.index),m("body").addClass("lg-on")})):e.$items.on("click.lgcustom",function(t){try{t.preventDefault(),t.preventDefault()}catch(e){t.returnValue=!1}e.$el.trigger("onBeforeOpen.lg"),e.index=e.s.index||e.$items.index(this),m("body").hasClass("lg-on")||(e.build(e.index),m("body").addClass("lg-on"))})},t.prototype.build=function(e){var t=this;t.structure(),m.each(m.fn.lightGallery.modules,function(e){t.modules[e]=new m.fn.lightGallery.modules[e](t.el)}),t.slide(e,!1,!1),t.s.keyPress&&t.keyPress(),1<t.$items.length&&(t.arrow(),setTimeout(function(){t.enableDrag(),t.enableSwipe()},50),t.s.mousewheel&&t.mousewheel()),t.counter(),t.closeGallery(),t.$el.trigger("onAfterOpen.lg"),t.$outer.on("mousemove.lg click.lg touchstart.lg",function(){t.$outer.removeClass("lg-hide-items"),clearTimeout(t.hideBartimeout),t.hideBartimeout=setTimeout(function(){t.$outer.addClass("lg-hide-items")},t.s.hideBarsDelay)})},t.prototype.structure=function(){var e,t="",s="",i=0,o="",n=this;for(m("body").append('<div class="lg-backdrop"></div>'),m(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),i=0;i<this.$items.length;i++)t+='<div class="lg-item"></div>';if(this.s.controls&&1<this.$items.length&&(s='<div class="lg-actions"><div class="lg-prev lg-icon">'+this.s.prevHtml+'</div><div class="lg-next lg-icon">'+this.s.nextHtml+"</div></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(o='<div class="lg-sub-html"></div>'),e='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+t+'</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>'+s+o+"</div></div>",m("body").append(e),this.$outer=m(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?(this.$outer.addClass("lg-use-left"),this.s.mode="lg-slide"):this.$outer.addClass("lg-use-css3"),n.setTop(),m(f).on("resize.lg orientationchange.lg",function(){setTimeout(function(){n.setTop()},100)}),this.$slide.eq(this.index).addClass("lg-current"),this.doCss()?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),this.s.speed=0),this.$outer.addClass(this.s.mode),this.s.enableDrag&&1<this.$items.length&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var a=this.$outer.find(".lg-inner");a.css("transition-timing-function",this.s.cssEasing),a.css("transition-duration",this.s.speed+"ms")}m(".lg-backdrop").addClass("in"),setTimeout(function(){n.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=m(f).scrollTop()},t.prototype.setTop=function(){if("100%"!==this.s.height){var e=m(f).height(),t=(e-parseInt(this.s.height,10))/2,s=this.$outer.find(".lg");e>=parseInt(this.s.height,10)?s.css("top",t+"px"):s.css("top","0px")}},t.prototype.doCss=function(){return!!function(){var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],t=i.documentElement,s=0;for(s=0;s<e.length;s++)if(e[s]in t.style)return!0}()},t.prototype.isVideo=function(e,t){var s;if(s=this.s.dynamic?this.s.dynamicEl[t].html:this.$items.eq(t).attr("data-html"),!e&&s)return{html5:!0};var i=e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),o=e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),n=e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),a=e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return i?{youtube:i}:o?{vimeo:o}:n?{dailymotion:n}:a?{vk:a}:void 0},t.prototype.counter=function(){this.s.counter&&m(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},t.prototype.addHtml=function(e){var t,s=null;if(this.s.dynamic?this.s.dynamicEl[e].subHtmlUrl?t=this.s.dynamicEl[e].subHtmlUrl:s=this.s.dynamicEl[e].subHtml:this.$items.eq(e).attr("data-sub-html-url")?t=this.$items.eq(e).attr("data-sub-html-url"):(s=this.$items.eq(e).attr("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!s&&(s=this.$items.eq(e).attr("title")||this.$items.eq(e).find("img").first().attr("alt"))),!t)if(null!=s){var i=s.substring(0,1);"."!==i&&"#"!==i||(s=m(s).html())}else s="";".lg-sub-html"===this.s.appendSubHtmlTo?t?this.$outer.find(this.s.appendSubHtmlTo).load(t):this.$outer.find(this.s.appendSubHtmlTo).html(s):t?this.$slide.eq(e).load(t):this.$slide.eq(e).append(s),null!=s&&(""===s?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger("onAfterAppendSubHtml.lg",[e])},t.prototype.preload=function(e){var t=1,s=1;for(t=1;t<=this.s.preload&&!(t>=this.$items.length-e);t++)this.loadContent(e+t,!1,0);for(s=1;s<=this.s.preload&&!(e-s<0);s++)this.loadContent(e-s,!1,0)},t.prototype.loadContent=function(t,e,s){function i(e){for(var t=[],s=[],i=0;i<e.length;i++){var o=e[i].split(" ");""===o[0]&&o.splice(0,1),s.push(o[0]),t.push(o[1])}for(var n=m(f).width(),a=0;a<t.length;a++)if(parseInt(t[a],10)>n){r=s[a];break}}var o,r,n,a,l,h,d=this,c=!1;if(d.s.dynamic){if(d.s.dynamicEl[t].poster&&(c=!0,n=d.s.dynamicEl[t].poster),h=d.s.dynamicEl[t].html,r=d.s.dynamicEl[t].src,d.s.dynamicEl[t].responsive)i(d.s.dynamicEl[t].responsive.split(","));a=d.s.dynamicEl[t].srcset,l=d.s.dynamicEl[t].sizes}else{if(d.$items.eq(t).attr("data-poster")&&(c=!0,n=d.$items.eq(t).attr("data-poster")),h=d.$items.eq(t).attr("data-html"),r=d.$items.eq(t).attr("href")||d.$items.eq(t).attr("data-src"),d.$items.eq(t).attr("data-responsive"))i(d.$items.eq(t).attr("data-responsive").split(","));a=d.$items.eq(t).attr("data-srcset"),l=d.$items.eq(t).attr("data-sizes")}var u=!1;d.s.dynamic?d.s.dynamicEl[t].iframe&&(u=!0):"true"===d.$items.eq(t).attr("data-iframe")&&(u=!0);var p=d.isVideo(r,t);if(!d.$slide.eq(t).hasClass("lg-loaded")){if(u)d.$slide.eq(t).prepend('<div class="lg-video-cont" style="max-width:'+d.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+r+'"  allowfullscreen="true"></iframe></div></div>');else if(c){var g="";g=p&&p.youtube?"lg-has-youtube":p&&p.vimeo?"lg-has-vimeo":"lg-has-html5",d.$slide.eq(t).prepend('<div class="lg-video-cont '+g+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+n+'" /></div></div>')}else p?(d.$slide.eq(t).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),d.$el.trigger("hasVideo.lg",[t,r,h])):d.$slide.eq(t).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+r+'" /></div>');if(d.$el.trigger("onAferAppendSlide.lg",[t]),o=d.$slide.eq(t).find(".lg-object"),l&&o.attr("sizes",l),a){o.attr("srcset",a);try{picturefill({elements:[o[0]]})}catch(e){console.error("Make sure you have included Picturefill version 2")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&d.addHtml(t),d.$slide.eq(t).addClass("lg-loaded")}d.$slide.eq(t).find(".lg-object").on("load.lg error.lg",function(){var e=0;s&&!m("body").hasClass("lg-from-hash")&&(e=s),setTimeout(function(){d.$slide.eq(t).addClass("lg-complete"),d.$el.trigger("onSlideItemLoad.lg",[t,s||0])},e)}),p&&p.html5&&!c&&d.$slide.eq(t).addClass("lg-complete"),!0===e&&(d.$slide.eq(t).hasClass("lg-complete")?d.preload(t):d.$slide.eq(t).find(".lg-object").on("load.lg error.lg",function(){d.preload(t)}))},t.prototype.slide=function(e,t,s){var i=this.$outer.find(".lg-current").index(),o=this;if(!o.lGalleryOn||i!==e){var n=this.$slide.length,a=o.lGalleryOn?this.s.speed:0,r=!1,l=!1;if(!o.lgBusy){var h;if(this.s.download)(h=o.s.dynamic?!1!==o.s.dynamicEl[e].downloadUrl&&(o.s.dynamicEl[e].downloadUrl||o.s.dynamicEl[e].src):"false"!==o.$items.eq(e).attr("data-download-url")&&(o.$items.eq(e).attr("data-download-url")||o.$items.eq(e).attr("href")||o.$items.eq(e).attr("data-src")))?(m("#lg-download").attr("href",h),o.$outer.removeClass("lg-hide-download")):o.$outer.addClass("lg-hide-download");if(this.$el.trigger("onBeforeSlide.lg",[i,e,t,s]),o.lgBusy=!0,clearTimeout(o.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){o.addHtml(e)},a),this.arrowDisable(e),t){var d=e-1,c=e+1;(0===e&&i===n-1||e===n-1&&0===i)&&(c=0,d=n-1),this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"),o.$slide.eq(d).addClass("lg-prev-slide"),o.$slide.eq(c).addClass("lg-next-slide"),o.$slide.eq(e).addClass("lg-current")}else o.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),e<i?(l=!0,0!==e||i!==n-1||s||(r=!(l=!1))):i<e&&(r=!0,e!==n-1||0!==i||s||(r=!(l=!0))),l?(this.$slide.eq(e).addClass("lg-prev-slide"),this.$slide.eq(i).addClass("lg-next-slide")):r&&(this.$slide.eq(e).addClass("lg-next-slide"),this.$slide.eq(i).addClass("lg-prev-slide")),setTimeout(function(){o.$slide.removeClass("lg-current"),o.$slide.eq(e).addClass("lg-current"),o.$outer.removeClass("lg-no-trans")},50);o.lGalleryOn?(setTimeout(function(){o.loadContent(e,!0,0)},this.s.speed+50),setTimeout(function(){o.lgBusy=!1,o.$el.trigger("onAfterSlide.lg",[i,e,t,s])},this.s.speed)):(o.loadContent(e,!0,o.s.backdropDuration),o.lgBusy=!1,o.$el.trigger("onAfterSlide.lg",[i,e,t,s])),o.lGalleryOn=!0,this.s.counter&&m("#lg-counter-current").text(e+1)}}},t.prototype.goToNextSlide=function(e){var t=this;t.lgBusy||(t.index+1<t.$slide.length?(t.index++,t.$el.trigger("onBeforeNextSlide.lg",[t.index]),t.slide(t.index,e,!1)):t.s.loop?(t.index=0,t.$el.trigger("onBeforeNextSlide.lg",[t.index]),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(t.$outer.addClass("lg-right-end"),setTimeout(function(){t.$outer.removeClass("lg-right-end")},400)))},t.prototype.goToPrevSlide=function(e){var t=this;t.lgBusy||(0<t.index?(t.index--,t.$el.trigger("onBeforePrevSlide.lg",[t.index,e]),t.slide(t.index,e,!1)):t.s.loop?(t.index=t.$items.length-1,t.$el.trigger("onBeforePrevSlide.lg",[t.index,e]),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(t.$outer.addClass("lg-left-end"),setTimeout(function(){t.$outer.removeClass("lg-left-end")},400)))},t.prototype.keyPress=function(){var t=this;1<this.$items.length&&m(f).on("keyup.lg",function(e){1<t.$items.length&&(37===e.keyCode&&(e.preventDefault(),t.goToPrevSlide()),39===e.keyCode&&(e.preventDefault(),t.goToNextSlide()))}),m(f).on("keydown.lg",function(e){!0===t.s.escKey&&27===e.keyCode&&(e.preventDefault(),t.$outer.hasClass("lg-thumb-open")?t.$outer.removeClass("lg-thumb-open"):t.destroy())})},t.prototype.arrow=function(){var e=this;this.$outer.find(".lg-prev").on("click.lg",function(){e.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){e.goToNextSlide()})},t.prototype.arrowDisable=function(e){!this.s.loop&&this.s.hideControlOnEnd&&(e+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),0<e?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},t.prototype.setTranslate=function(e,t,s){this.s.useLeft?e.css("left",t):e.css({transform:"translate3d("+t+"px, "+s+"px, 0px)"})},t.prototype.touchMove=function(e,t){var s=t-e;15<Math.abs(s)&&(this.$outer.addClass("lg-dragging"),this.setTranslate(this.$slide.eq(this.index),s,0),this.setTranslate(m(".lg-prev-slide"),-this.$slide.eq(this.index).width()+s,0),this.setTranslate(m(".lg-next-slide"),this.$slide.eq(this.index).width()+s,0))},t.prototype.touchEnd=function(e){var t=this;"lg-slide"!==t.s.mode&&t.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),setTimeout(function(){t.$outer.removeClass("lg-dragging"),e<0&&Math.abs(e)>t.s.swipeThreshold?t.goToNextSlide(!0):0<e&&Math.abs(e)>t.s.swipeThreshold?t.goToPrevSlide(!0):Math.abs(e)<5&&t.$el.trigger("onSlideClick.lg"),t.$slide.removeAttr("style")}),setTimeout(function(){t.$outer.hasClass("lg-dragging")||"lg-slide"===t.s.mode||t.$outer.removeClass("lg-slide")},t.s.speed+100)},t.prototype.enableSwipe=function(){var t=this,s=0,i=0,o=!1;t.s.enableSwipe&&t.isTouch&&t.doCss()&&(t.$slide.on("touchstart.lg",function(e){t.$outer.hasClass("lg-zoomed")||t.lgBusy||(e.preventDefault(),t.manageSwipeClass(),s=e.originalEvent.targetTouches[0].pageX)}),t.$slide.on("touchmove.lg",function(e){t.$outer.hasClass("lg-zoomed")||(e.preventDefault(),i=e.originalEvent.targetTouches[0].pageX,t.touchMove(s,i),o=!0)}),t.$slide.on("touchend.lg",function(){t.$outer.hasClass("lg-zoomed")||(o?(o=!1,t.touchEnd(i-s)):t.$el.trigger("onSlideClick.lg"))}))},t.prototype.enableDrag=function(){var t=this,s=0,i=0,o=!1,n=!1;t.s.enableDrag&&!t.isTouch&&t.doCss()&&(t.$slide.on("mousedown.lg",function(e){t.$outer.hasClass("lg-zoomed")||(m(e.target).hasClass("lg-object")||m(e.target).hasClass("lg-video-play"))&&(e.preventDefault(),t.lgBusy||(t.manageSwipeClass(),s=e.pageX,o=!0,t.$outer.scrollLeft+=1,--t.$outer.scrollLeft,t.$outer.removeClass("lg-grab").addClass("lg-grabbing"),t.$el.trigger("onDragstart.lg")))}),m(f).on("mousemove.lg",function(e){o&&(n=!0,i=e.pageX,t.touchMove(s,i),t.$el.trigger("onDragmove.lg"))}),m(f).on("mouseup.lg",function(e){n?(n=!1,t.touchEnd(i-s),t.$el.trigger("onDragend.lg")):(m(e.target).hasClass("lg-object")||m(e.target).hasClass("lg-video-play"))&&t.$el.trigger("onSlideClick.lg"),o&&(o=!1,t.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},t.prototype.manageSwipeClass=function(){var e=this.index+1,t=this.index-1,s=this.$slide.length;this.s.loop&&(0===this.index?t=s-1:this.index===s-1&&(e=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),-1<t&&this.$slide.eq(t).addClass("lg-prev-slide"),this.$slide.eq(e).addClass("lg-next-slide")},t.prototype.mousewheel=function(){var t=this;t.$outer.on("mousewheel.lg",function(e){e.deltaY&&(0<e.deltaY?t.goToPrevSlide():t.goToNextSlide(),e.preventDefault())})},t.prototype.closeGallery=function(){var t=this,s=!1;this.$outer.find(".lg-close").on("click.lg",function(){t.destroy()}),t.s.closable&&(t.$outer.on("mousedown.lg",function(e){s=!!(m(e.target).is(".lg-outer")||m(e.target).is(".lg-item ")||m(e.target).is(".lg-img-wrap"))}),t.$outer.on("mouseup.lg",function(e){(m(e.target).is(".lg-outer")||m(e.target).is(".lg-item ")||m(e.target).is(".lg-img-wrap")&&s)&&(t.$outer.hasClass("lg-dragging")||t.destroy())}))},t.prototype.destroy=function(e){var t=this;e||t.$el.trigger("onBeforeClose.lg"),m(f).scrollTop(t.prevScrollTop),e&&(t.s.dynamic||this.$items.off("click.lg click.lgcustom"),m.removeData(t.el,"lightGallery")),this.$el.off(".lg.tm"),m.each(m.fn.lightGallery.modules,function(e){t.modules[e]&&t.modules[e].destroy()}),this.lGalleryOn=!1,clearTimeout(t.hideBartimeout),this.hideBartimeout=!1,m(f).off(".lg"),m("body").removeClass("lg-on lg-from-hash"),t.$outer&&t.$outer.removeClass("lg-visible"),m(".lg-backdrop").removeClass("in"),setTimeout(function(){t.$outer&&t.$outer.remove(),m(".lg-backdrop").remove(),e||t.$el.trigger("onCloseAfter.lg")},t.s.backdropDuration+50)},m.fn.lightGallery=function(e){return this.each(function(){if(m.data(this,"lightGallery"))try{m(this).data("lightGallery").init()}catch(e){console.error("lightGallery has not initiated properly")}else m.data(this,"lightGallery",new t(this,e))})},m.fn.lightGallery.modules={}}(jQuery,window,document),function(t){"use strict";function e(e){return this.core=t(e).data("lightGallery"),this.$el=t(e),!(this.core.$items.length<2)&&(this.core.s=t.extend({},s,this.core.s),this.interval=!1,this.fromAuto=!0,this.canceledOnTouch=!1,this.fourceAutoplayTemp=this.core.s.fourceAutoplay,this.core.doCss()||(this.core.s.progressBar=!1),this.init(),this)}var s={autoplay:!1,pause:5e3,progressBar:!0,fourceAutoplay:!1,autoplayControls:!0,appendAutoplayControlsTo:".lg-toolbar"};e.prototype.init=function(){var e=this;e.core.s.autoplayControls&&e.controls(),e.core.s.progressBar&&e.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'),e.progress(),e.core.s.autoplay&&e.startlAuto(),e.$el.on("onDragstart.lg.tm touchstart.lg.tm",function(){e.interval&&(e.cancelAuto(),e.canceledOnTouch=!0)}),e.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm",function(){!e.interval&&e.canceledOnTouch&&(e.startlAuto(),e.canceledOnTouch=!1)})},e.prototype.progress=function(){var e,t,s=this;s.$el.on("onBeforeSlide.lg.tm",function(){s.core.s.progressBar&&s.fromAuto&&(e=s.core.$outer.find(".lg-progress-bar"),t=s.core.$outer.find(".lg-progress"),s.interval&&(t.removeAttr("style"),e.removeClass("lg-start"),setTimeout(function(){t.css("transition","width "+(s.core.s.speed+s.core.s.pause)+"ms ease 0s"),e.addClass("lg-start")},20))),s.fromAuto||s.core.s.fourceAutoplay||s.cancelAuto(),s.fromAuto=!1})},e.prototype.controls=function(){var e=this;t(this.core.s.appendAutoplayControlsTo).append('<span class="lg-autoplay-button lg-icon"></span>'),e.core.$outer.find(".lg-autoplay-button").on("click.lg",function(){t(e.core.$outer).hasClass("lg-show-autoplay")?(e.cancelAuto(),e.core.s.fourceAutoplay=!1):e.interval||(e.startlAuto(),e.core.s.fourceAutoplay=e.fourceAutoplayTemp)})},e.prototype.startlAuto=function(){var e=this;e.core.$outer.find(".lg-progress").css("transition","width "+(e.core.s.speed+e.core.s.pause)+"ms ease 0s"),e.core.$outer.addClass("lg-show-autoplay"),e.core.$outer.find(".lg-progress-bar").addClass("lg-start"),e.interval=setInterval(function(){e.core.index+1<e.core.$items.length?e.core.index=e.core.index:e.core.index=-1,e.core.index++,e.fromAuto=!0,e.core.slide(e.core.index,!1,!1)},e.core.s.speed+e.core.s.pause)},e.prototype.cancelAuto=function(){clearInterval(this.interval),this.interval=!1,this.core.$outer.find(".lg-progress").removeAttr("style"),this.core.$outer.removeClass("lg-show-autoplay"),this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")},e.prototype.destroy=function(){this.cancelAuto(),this.core.$outer.find(".lg-progress-bar").remove()},t.fn.lightGallery.modules.autoplay=e}(jQuery,(window,document)),function(t,s){"use strict";function e(e){return this.core=t(e).data("lightGallery"),this.$el=t(e),this.core.s=t.extend({},i,this.core.s),this.init(),this}var i={fullScreen:!0};e.prototype.init=function(){var e="";if(this.core.s.fullScreen){if(!(s.fullscreenEnabled||s.webkitFullscreenEnabled||s.mozFullScreenEnabled||s.msFullscreenEnabled))return;e='<span class="lg-fullscreen lg-icon"></span>',this.core.$outer.find(".lg-toolbar").append(e),this.fullScreen()}},e.prototype.requestFullscreen=function(){var e=s.documentElement;e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()},e.prototype.exitFullscreen=function(){s.exitFullscreen?s.exitFullscreen():s.msExitFullscreen?s.msExitFullscreen():s.mozCancelFullScreen?s.mozCancelFullScreen():s.webkitExitFullscreen&&s.webkitExitFullscreen()},e.prototype.fullScreen=function(){var e=this;t(s).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg",function(){e.core.$outer.toggleClass("lg-fullscreen-on")}),this.core.$outer.find(".lg-fullscreen").on("click.lg",function(){s.fullscreenElement||s.mozFullScreenElement||s.webkitFullscreenElement||s.msFullscreenElement?e.exitFullscreen():e.requestFullscreen()})},e.prototype.destroy=function(){this.exitFullscreen(),t(s).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")},t.fn.lightGallery.modules.fullscreen=e}(jQuery,(window,document)),function(a){"use strict";function e(e){return this.core=a(e).data("lightGallery"),this.$el=a(e),this.core.s=a.extend({},t,this.core.s),this.core.s.pager&&1<this.core.$items.length&&this.init(),this}var t={pager:!1};e.prototype.init=function(){var i,e,t,s=this,o="";if(s.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'),s.core.s.dynamic)for(var n=0;n<s.core.s.dynamicEl.length;n++)o+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+s.core.s.dynamicEl[n].thumb+'" /></div></span>';else s.core.$items.each(function(){s.core.s.exThumbImage?o+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+a(this).attr(s.core.s.exThumbImage)+'" /></div></span>':o+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+a(this).find("img").attr("src")+'" /></div></span>'});(e=s.core.$outer.find(".lg-pager-outer")).html(o),(i=s.core.$outer.find(".lg-pager-cont")).on("click.lg touchend.lg",function(){var e=a(this);s.core.index=e.index(),s.core.slide(s.core.index,!1,!1)}),e.on("mouseover.lg",function(){clearTimeout(t),e.addClass("lg-pager-hover")}),e.on("mouseout.lg",function(){t=setTimeout(function(){e.removeClass("lg-pager-hover")})}),s.core.$el.on("onBeforeSlide.lg.tm",function(e,t,s){i.removeClass("lg-pager-active"),i.eq(s).addClass("lg-pager-active")})},e.prototype.destroy=function(){},a.fn.lightGallery.modules.pager=e}(jQuery,(window,document)),function(h,d){"use strict";function e(e){return this.core=h(e).data("lightGallery"),this.core.s=h.extend({},t,this.core.s),this.$el=h(e),this.$thumbOuter=null,this.thumbOuterWidth=0,this.thumbTotalWidth=this.core.$items.length*(this.core.s.thumbWidth+this.core.s.thumbMargin),this.thumbIndex=this.core.index,this.left=0,this.init(),this}var t={thumbnail:!0,animateThumb:!0,currentPagerPosition:"middle",thumbWidth:100,thumbContHeight:100,thumbMargin:5,exThumbImage:!1,showThumbByDefault:!0,toogleThumb:!0,pullCaptionUp:!0,enableThumbDrag:!0,enableThumbSwipe:!0,swipeThreshold:50,loadYoutubeThumbnail:!0,youtubeThumbSize:1,loadVimeoThumbnail:!0,vimeoThumbSize:"thumbnail_small",loadDailymotionThumbnail:!0};e.prototype.init=function(){var e=this;this.core.s.thumbnail&&1<this.core.$items.length&&(this.core.s.showThumbByDefault&&setTimeout(function(){e.core.$outer.addClass("lg-thumb-open")},700),this.core.s.pullCaptionUp&&this.core.$outer.addClass("lg-pull-caption-up"),this.build(),this.core.s.animateThumb?(this.core.s.enableThumbDrag&&!this.core.isTouch&&this.core.doCss()&&this.enableThumbDrag(),this.core.s.enableThumbSwipe&&this.core.isTouch&&this.core.doCss()&&this.enableThumbSwipe(),this.thumbClickable=!1):this.thumbClickable=!0,this.toogle(),this.thumbkeyPress())},e.prototype.build=function(){var e,a=this,r="",l="";switch(this.core.s.vimeoThumbSize){case"thumbnail_large":l="640";break;case"thumbnail_medium":l="200x150";break;case"thumbnail_small":l="100x75"}function t(e,t,s){var i,o=a.core.isVideo(e,s)||{},n="";o.youtube||o.vimeo||o.dailymotion?o.youtube?i=a.core.s.loadYoutubeThumbnail?"//img.youtube.com/vi/"+o.youtube[1]+"/"+a.core.s.youtubeThumbSize+".jpg":t:o.vimeo?a.core.s.loadVimeoThumbnail?(i="//i.vimeocdn.com/video/error_"+l+".jpg",n=o.vimeo[1]):i=t:o.dailymotion&&(i=a.core.s.loadDailymotionThumbnail?"//www.dailymotion.com/thumbnail/video/"+o.dailymotion[1]:t):i=t,r+='<div data-vimeo-id="'+n+'" class="lg-thumb-item" style="width:'+a.core.s.thumbWidth+"px; margin-right: "+a.core.s.thumbMargin+'px"><img src="'+i+'" /></div>',n=""}if(a.core.$outer.addClass("lg-has-thumb"),a.core.$outer.find(".lg").append('<div class="lg-thumb-outer"><div class="lg-thumb group"></div></div>'),a.$thumbOuter=a.core.$outer.find(".lg-thumb-outer"),a.thumbOuterWidth=a.$thumbOuter.width(),a.core.s.animateThumb&&a.core.$outer.find(".lg-thumb").css({width:a.thumbTotalWidth+"px",position:"relative"}),this.core.s.animateThumb&&a.$thumbOuter.css("height",a.core.s.thumbContHeight+"px"),a.core.s.dynamic)for(var s=0;s<a.core.s.dynamicEl.length;s++)t(a.core.s.dynamicEl[s].src,a.core.s.dynamicEl[s].thumb,s);else a.core.$items.each(function(e){a.core.s.exThumbImage?t(h(this).attr("href")||h(this).attr("data-src"),h(this).attr(a.core.s.exThumbImage),e):t(h(this).attr("href")||h(this).attr("data-src"),h(this).find("img").attr("src"),e)});a.core.$outer.find(".lg-thumb").html(r),(e=a.core.$outer.find(".lg-thumb-item")).each(function(){var t=h(this),e=t.attr("data-vimeo-id");e&&h.getJSON("//www.vimeo.com/api/v2/video/"+e+".json?callback=?",{format:"json"},function(e){t.find("img").attr("src",e[0][a.core.s.vimeoThumbSize])})}),e.eq(a.core.index).addClass("active"),a.core.$el.on("onBeforeSlide.lg.tm",function(){e.removeClass("active"),e.eq(a.core.index).addClass("active")}),e.on("click.lg touchend.lg",function(){var e=h(this);setTimeout(function(){(!a.thumbClickable||a.core.lgBusy)&&a.core.doCss()||(a.core.index=e.index(),a.core.slide(a.core.index,!1,!0))},50)}),a.core.$el.on("onBeforeSlide.lg.tm",function(){a.animateThumb(a.core.index)}),h(d).on("resize.lg.thumb orientationchange.lg.thumb",function(){setTimeout(function(){a.animateThumb(a.core.index),a.thumbOuterWidth=a.$thumbOuter.width()},200)})},e.prototype.setTranslate=function(e){this.core.$outer.find(".lg-thumb").css({transform:"translate3d(-"+e+"px, 0px, 0px)"})},e.prototype.animateThumb=function(e){var t=this.core.$outer.find(".lg-thumb");if(this.core.s.animateThumb){var s;switch(this.core.s.currentPagerPosition){case"left":s=0;break;case"middle":s=this.thumbOuterWidth/2-this.core.s.thumbWidth/2;break;case"right":s=this.thumbOuterWidth-this.core.s.thumbWidth}this.left=(this.core.s.thumbWidth+this.core.s.thumbMargin)*e-1-s,this.left>this.thumbTotalWidth-this.thumbOuterWidth&&(this.left=this.thumbTotalWidth-this.thumbOuterWidth),this.left<0&&(this.left=0),this.core.lGalleryOn?(t.hasClass("on")||this.core.$outer.find(".lg-thumb").css("transition-duration",this.core.s.speed+"ms"),this.core.doCss()||t.animate({left:-this.left+"px"},this.core.s.speed)):this.core.doCss()||t.css("left",-this.left+"px"),this.setTranslate(this.left)}},e.prototype.enableThumbDrag=function(){var t=this,s=0,i=0,o=!1,n=!1,a=0;t.$thumbOuter.addClass("lg-grab"),t.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb",function(e){t.thumbTotalWidth>t.thumbOuterWidth&&(e.preventDefault(),s=e.pageX,o=!0,t.core.$outer.scrollLeft+=1,--t.core.$outer.scrollLeft,t.thumbClickable=!1,t.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))}),h(d).on("mousemove.lg.thumb",function(e){o&&(a=t.left,n=!0,i=e.pageX,t.$thumbOuter.addClass("lg-dragging"),(a-=i-s)>t.thumbTotalWidth-t.thumbOuterWidth&&(a=t.thumbTotalWidth-t.thumbOuterWidth),a<0&&(a=0),t.setTranslate(a))}),h(d).on("mouseup.lg.thumb",function(){n?(n=!1,t.$thumbOuter.removeClass("lg-dragging"),t.left=a,Math.abs(i-s)<t.core.s.swipeThreshold&&(t.thumbClickable=!0)):t.thumbClickable=!0,o&&(o=!1,t.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))})},e.prototype.enableThumbSwipe=function(){var t=this,s=0,i=0,o=!1,n=0;t.core.$outer.find(".lg-thumb").on("touchstart.lg",function(e){t.thumbTotalWidth>t.thumbOuterWidth&&(e.preventDefault(),s=e.originalEvent.targetTouches[0].pageX,t.thumbClickable=!1)}),t.core.$outer.find(".lg-thumb").on("touchmove.lg",function(e){t.thumbTotalWidth>t.thumbOuterWidth&&(e.preventDefault(),i=e.originalEvent.targetTouches[0].pageX,o=!0,t.$thumbOuter.addClass("lg-dragging"),n=t.left,(n-=i-s)>t.thumbTotalWidth-t.thumbOuterWidth&&(n=t.thumbTotalWidth-t.thumbOuterWidth),n<0&&(n=0),t.setTranslate(n))}),t.core.$outer.find(".lg-thumb").on("touchend.lg",function(){t.thumbTotalWidth>t.thumbOuterWidth&&o?(o=!1,t.$thumbOuter.removeClass("lg-dragging"),Math.abs(i-s)<t.core.s.swipeThreshold&&(t.thumbClickable=!0),t.left=n):t.thumbClickable=!0})},e.prototype.toogle=function(){var e=this;e.core.s.toogleThumb&&(e.core.$outer.addClass("lg-can-toggle"),e.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'),e.core.$outer.find(".lg-toogle-thumb").on("click.lg",function(){e.core.$outer.toggleClass("lg-thumb-open")}))},e.prototype.thumbkeyPress=function(){var t=this;h(d).on("keydown.lg.thumb",function(e){38===e.keyCode?(e.preventDefault(),t.core.$outer.addClass("lg-thumb-open")):40===e.keyCode&&(e.preventDefault(),t.core.$outer.removeClass("lg-thumb-open"))})},e.prototype.destroy=function(){this.core.s.thumbnail&&1<this.core.$items.length&&(h(d).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"),this.$thumbOuter.remove(),this.core.$outer.removeClass("lg-has-thumb"))},h.fn.lightGallery.modules.Thumbnail=e}(jQuery,window,document),function(u){"use strict";function e(e){return this.core=u(e).data("lightGallery"),this.$el=u(e),this.core.s=u.extend({},t,this.core.s),this.videoLoaded=!1,this.init(),this}var t={videoMaxWidth:"855px",youtubePlayerParams:!1,vimeoPlayerParams:!1,dailymotionPlayerParams:!1,vkPlayerParams:!1,videojs:!1,videojsOptions:{}};e.prototype.init=function(){var c=this;c.core.$el.on("hasVideo.lg.tm",function(e,t,s,i){if(c.core.$slide.eq(t).find(".lg-video").append(c.loadVideo(s,"lg-object",!0,t,i)),i)if(c.core.s.videojs)try{videojs(c.core.$slide.eq(t).find(".lg-html5").get(0),c.core.s.videojsOptions,function(){c.videoLoaded||this.play()})}catch(e){console.error("Make sure you have included videojs")}else c.core.$slide.eq(t).find(".lg-html5").get(0).play()}),c.core.$el.on("onAferAppendSlide.lg.tm",function(e,t){c.core.$slide.eq(t).find(".lg-video-cont").css("max-width",c.core.s.videoMaxWidth),c.videoLoaded=!0});function t(s){if(s.find(".lg-object").hasClass("lg-has-poster")&&s.find(".lg-object").is(":visible"))if(s.hasClass("lg-has-video")){var e=s.find(".lg-youtube").get(0),t=s.find(".lg-vimeo").get(0),i=s.find(".lg-dailymotion").get(0),o=s.find(".lg-html5").get(0);if(e)e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");else if(t)try{$f(t).api("play")}catch(e){console.error("Make sure you have included froogaloop2 js")}else if(i)i.contentWindow.postMessage("play","*");else if(o)if(c.core.s.videojs)try{videojs(o).play()}catch(e){console.error("Make sure you have included videojs")}else o.play();s.addClass("lg-video-playing")}else{s.addClass("lg-video-playing lg-has-video");var n=function(e,t){if(s.find(".lg-video").append(c.loadVideo(e,"",!1,c.core.index,t)),t)if(c.core.s.videojs)try{videojs(c.core.$slide.eq(c.core.index).find(".lg-html5").get(0),c.core.s.videojsOptions,function(){this.play()})}catch(e){console.error("Make sure you have included videojs")}else c.core.$slide.eq(c.core.index).find(".lg-html5").get(0).play()};c.core.s.dynamic?n(c.core.s.dynamicEl[c.core.index].src,c.core.s.dynamicEl[c.core.index].html):n(c.core.$items.eq(c.core.index).attr("href")||c.core.$items.eq(c.core.index).attr("data-src"),c.core.$items.eq(c.core.index).attr("data-html"));var a=s.find(".lg-object");s.find(".lg-video").append(a),s.find(".lg-video-object").hasClass("lg-html5")||(s.removeClass("lg-complete"),s.find(".lg-video-object").on("load.lg error.lg",function(){s.addClass("lg-complete")}))}}c.core.doCss()&&1<c.core.$items.length&&(c.core.s.enableSwipe&&c.core.isTouch||c.core.s.enableDrag&&!c.core.isTouch)?c.core.$el.on("onSlideClick.lg.tm",function(){var e=c.core.$slide.eq(c.core.index);t(e)}):c.core.$slide.on("click.lg",function(){t(u(this))}),c.core.$el.on("onBeforeSlide.lg.tm",function(e,t,s){var i,o=c.core.$slide.eq(t),n=o.find(".lg-youtube").get(0),a=o.find(".lg-vimeo").get(0),r=o.find(".lg-dailymotion").get(0),l=o.find(".lg-vk").get(0),h=o.find(".lg-html5").get(0);if(n)n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");else if(a)try{$f(a).api("pause")}catch(e){console.error("Make sure you have included froogaloop2 js")}else if(r)r.contentWindow.postMessage("pause","*");else if(h)if(c.core.s.videojs)try{videojs(h).pause()}catch(e){console.error("Make sure you have included videojs")}else h.pause();l&&u(l).attr("src",u(l).attr("src").replace("&autoplay","&noplay")),i=c.core.s.dynamic?c.core.s.dynamicEl[s].src:c.core.$items.eq(s).attr("href")||c.core.$items.eq(s).attr("data-src");var d=c.core.isVideo(i,s)||{};(d.youtube||d.vimeo||d.dailymotion||d.vk)&&c.core.$outer.addClass("lg-hide-download")}),c.core.$el.on("onAfterSlide.lg.tm",function(e,t){c.core.$slide.eq(t).removeClass("lg-video-playing")})},e.prototype.loadVideo=function(e,t,s,i,o){var n="",a=1,r="",l=this.core.isVideo(e,i)||{};if(s&&(a=this.videoLoaded?0:1),l.youtube)r="?wmode=opaque&autoplay="+a+"&enablejsapi=1",this.core.s.youtubePlayerParams&&(r=r+"&"+u.param(this.core.s.youtubePlayerParams)),n='<iframe class="lg-video-object lg-youtube '+t+'" width="560" height="315" src="//www.youtube.com/embed/'+l.youtube[1]+r+'" frameborder="0" allowfullscreen></iframe>';else if(l.vimeo)r="?autoplay="+a+"&api=1",this.core.s.vimeoPlayerParams&&(r=r+"&"+u.param(this.core.s.vimeoPlayerParams)),n='<iframe class="lg-video-object lg-vimeo '+t+'" width="560" height="315"  src="//player.vimeo.com/video/'+l.vimeo[1]+r+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';else if(l.dailymotion)r="?wmode=opaque&autoplay="+a+"&api=postMessage",this.core.s.dailymotionPlayerParams&&(r=r+"&"+u.param(this.core.s.dailymotionPlayerParams)),n='<iframe class="lg-video-object lg-dailymotion '+t+'" width="560" height="315" src="//www.dailymotion.com/embed/video/'+l.dailymotion[1]+r+'" frameborder="0" allowfullscreen></iframe>';else if(l.html5){var h=o.substring(0,1);"."!==h&&"#"!==h||(o=u(o).html()),n=o}else l.vk&&(r="&autoplay="+a,this.core.s.vkPlayerParams&&(r=r+"&"+u.param(this.core.s.vkPlayerParams)),n='<iframe class="lg-video-object lg-vk '+t+'" width="560" height="315" src="http://vk.com/video_ext.php?'+l.vk[1]+r+'" frameborder="0" allowfullscreen></iframe>');return n},e.prototype.destroy=function(){this.videoLoaded=!1},u.fn.lightGallery.modules.video=e}(jQuery,(window,document)),function(c,u){"use strict";function e(e){return this.core=c(e).data("lightGallery"),this.core.s=c.extend({},t,this.core.s),this.core.s.zoom&&this.core.doCss()&&(this.init(),this.zoomabletimeout=!1,this.pageX=c(u).width()/2,this.pageY=c(u).height()/2+c(u).scrollTop()),this}var t={scale:1,zoom:!0,actualSize:!0,enableZoomAfter:300};e.prototype.init=function(){var a=this,e='<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';a.core.s.actualSize&&(e+='<span id="lg-actual-size" class="lg-icon"></span>'),this.core.$outer.find(".lg-toolbar").append(e),a.core.$el.on("onSlideItemLoad.lg.tm.zoom",function(e,t,s){var i=a.core.s.enableZoomAfter+s;c("body").hasClass("lg-from-hash")&&s?i=0:c("body").removeClass("lg-from-hash"),a.zoomabletimeout=setTimeout(function(){a.core.$slide.eq(t).addClass("lg-zoomable")},i+30)});function t(e){var t=a.core.$outer.find(".lg-current .lg-image"),s=(c(u).width()-t.width())/2,i=(c(u).height()-t.height())/2+c(u).scrollTop(),o=(e-1)*(a.pageX-s),n=(e-1)*(a.pageY-i);t.css("transform","scale3d("+e+", "+e+", 1)").attr("data-scale",e),t.parent().css("transform","translate3d(-"+o+"px, -"+n+"px, 0)").attr("data-x",o).attr("data-y",n)}function r(){1<l?a.core.$outer.addClass("lg-zoomed"):a.resetZoom(),l<1&&(l=1),t(l)}function i(e,t,s,i){var o,n=t.width();o=a.core.s.dynamic?a.core.s.dynamicEl[s].width||t[0].naturalWidth||n:a.core.$items.eq(s).attr("data-width")||t[0].naturalWidth||n,a.core.$outer.hasClass("lg-zoomed")?l=1:n<o&&(l=o/n||2),i?(a.pageX=c(u).width()/2,a.pageY=c(u).height()/2+c(u).scrollTop()):(a.pageX=e.pageX||e.originalEvent.targetTouches[0].pageX,a.pageY=e.pageY||e.originalEvent.targetTouches[0].pageY),r(),setTimeout(function(){a.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")},10)}var l=1,o=!1;a.core.$el.on("onAferAppendSlide.lg.tm.zoom",function(e,t){var s=a.core.$slide.eq(t).find(".lg-image");s.on("dblclick",function(e){i(e,s,t)}),s.on("touchstart",function(e){o?(clearTimeout(o),o=null,i(e,s,t)):o=setTimeout(function(){o=null},300),e.preventDefault()})}),c(u).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom",function(){a.pageX=c(u).width()/2,a.pageY=c(u).height()/2+c(u).scrollTop(),t(l)}),c("#lg-zoom-out").on("click.lg",function(){a.core.$outer.find(".lg-current .lg-image").length&&(l-=a.core.s.scale,r())}),c("#lg-zoom-in").on("click.lg",function(){a.core.$outer.find(".lg-current .lg-image").length&&(l+=a.core.s.scale,r())}),c("#lg-actual-size").on("click.lg",function(e){i(e,a.core.$slide.eq(a.core.index).find(".lg-image"),a.core.index,!0)}),a.core.$el.on("onBeforeSlide.lg.tm",function(){l=1,a.resetZoom()}),a.core.isTouch||a.zoomDrag(),a.core.isTouch&&a.zoomSwipe()},e.prototype.resetZoom=function(){this.core.$outer.removeClass("lg-zoomed"),this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"),this.core.$slide.find(".lg-image").removeAttr("style data-scale"),this.pageX=c(u).width()/2,this.pageY=c(u).height()/2+c(u).scrollTop()},e.prototype.zoomSwipe=function(){var o=this,n={},a={},r=!1,l=!1,h=!1;o.core.$slide.on("touchstart.lg",function(e){if(o.core.$outer.hasClass("lg-zoomed")){var t=o.core.$slide.eq(o.core.index).find(".lg-object");h=t.outerHeight()*t.attr("data-scale")>o.core.$outer.find(".lg").height(),((l=t.outerWidth()*t.attr("data-scale")>o.core.$outer.find(".lg").width())||h)&&(e.preventDefault(),n={x:e.originalEvent.targetTouches[0].pageX,y:e.originalEvent.targetTouches[0].pageY})}}),o.core.$slide.on("touchmove.lg",function(e){if(o.core.$outer.hasClass("lg-zoomed")){var t,s,i=o.core.$slide.eq(o.core.index).find(".lg-img-wrap");e.preventDefault(),r=!0,a={x:e.originalEvent.targetTouches[0].pageX,y:e.originalEvent.targetTouches[0].pageY},o.core.$outer.addClass("lg-zoom-dragging"),s=h?-Math.abs(i.attr("data-y"))+(a.y-n.y):-Math.abs(i.attr("data-y")),t=l?-Math.abs(i.attr("data-x"))+(a.x-n.x):-Math.abs(i.attr("data-x")),(15<Math.abs(a.x-n.x)||15<Math.abs(a.y-n.y))&&i.css("transform","translate3d("+t+"px, "+s+"px, 0)")}}),o.core.$slide.on("touchend.lg",function(){o.core.$outer.hasClass("lg-zoomed")&&r&&(r=!1,o.core.$outer.removeClass("lg-zoom-dragging"),o.touchendZoom(n,a,l,h))})},e.prototype.zoomDrag=function(){var o=this,n={},a={},r=!1,l=!1,h=!1,d=!1;o.core.$slide.on("mousedown.lg.zoom",function(e){var t=o.core.$slide.eq(o.core.index).find(".lg-object");d=t.outerHeight()*t.attr("data-scale")>o.core.$outer.find(".lg").height(),h=t.outerWidth()*t.attr("data-scale")>o.core.$outer.find(".lg").width(),o.core.$outer.hasClass("lg-zoomed")&&c(e.target).hasClass("lg-object")&&(h||d)&&(e.preventDefault(),n={x:e.pageX,y:e.pageY},r=!0,o.core.$outer.scrollLeft+=1,--o.core.$outer.scrollLeft,o.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))}),c(u).on("mousemove.lg.zoom",function(e){if(r){var t,s,i=o.core.$slide.eq(o.core.index).find(".lg-img-wrap");l=!0,a={x:e.pageX,y:e.pageY},o.core.$outer.addClass("lg-zoom-dragging"),s=d?-Math.abs(i.attr("data-y"))+(a.y-n.y):-Math.abs(i.attr("data-y")),t=h?-Math.abs(i.attr("data-x"))+(a.x-n.x):-Math.abs(i.attr("data-x")),i.css("transform","translate3d("+t+"px, "+s+"px, 0)")}}),c(u).on("mouseup.lg.zoom",function(e){r&&(r=!1,o.core.$outer.removeClass("lg-zoom-dragging"),!l||n.x===a.x&&n.y===a.y||(a={x:e.pageX,y:e.pageY},o.touchendZoom(n,a,h,d)),l=!1),o.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")})},e.prototype.touchendZoom=function(e,t,s,i){var o=this,n=o.core.$slide.eq(o.core.index).find(".lg-img-wrap"),a=o.core.$slide.eq(o.core.index).find(".lg-object"),r=-Math.abs(n.attr("data-x"))+(t.x-e.x),l=-Math.abs(n.attr("data-y"))+(t.y-e.y),h=(o.core.$outer.find(".lg").height()-a.outerHeight())/2,d=Math.abs(a.outerHeight()*Math.abs(a.attr("data-scale"))-o.core.$outer.find(".lg").height()+h),c=(o.core.$outer.find(".lg").width()-a.outerWidth())/2,u=Math.abs(a.outerWidth()*Math.abs(a.attr("data-scale"))-o.core.$outer.find(".lg").width()+c);(15<Math.abs(t.x-e.x)||15<Math.abs(t.y-e.y))&&(i&&(l<=-d?l=-d:-h<=l&&(l=-h)),s&&(r<=-u?r=-u:-c<=r&&(r=-c)),i?n.attr("data-y",Math.abs(l)):l=-Math.abs(n.attr("data-y")),s?n.attr("data-x",Math.abs(r)):r=-Math.abs(n.attr("data-x")),n.css("transform","translate3d("+r+"px, "+l+"px, 0)"))},e.prototype.destroy=function(){var e=this;e.core.$el.off(".lg.zoom"),c(u).off(".lg.zoom"),e.core.$slide.off(".lg.zoom"),e.core.$el.off(".lg.tm.zoom"),e.resetZoom(),clearTimeout(e.zoomabletimeout),e.zoomabletimeout=!1},c.fn.lightGallery.modules.zoom=e}(jQuery,window,document),function(s,o,e){"use strict";function t(e){return this.core=s(e).data("lightGallery"),this.core.s=s.extend({},i,this.core.s),this.core.s.hash&&(this.oldHash=o.location.hash,this.init()),this}var i={hash:!0};t.prototype.init=function(){var t,i=this;i.core.$el.on("onAfterSlide.lg.tm",function(e,t,s){o.location.hash="lg="+i.core.s.galleryId+"&slide="+s}),s(o).on("hashchange.lg.hash",function(){t=o.location.hash;var e=parseInt(t.split("&slide=")[1],10);-1<t.indexOf("lg="+i.core.s.galleryId)?i.core.slide(e,!1,!1):i.core.lGalleryOn&&i.core.destroy()})},t.prototype.destroy=function(){this.core.s.hash&&(this.oldHash&&this.oldHash.indexOf("lg="+this.core.s.galleryId)<0?o.location.hash=this.oldHash:history.pushState?history.pushState("",e.title,o.location.pathname+o.location.search):o.location.hash="",this.core.$el.off(".lg.hash"))},s.fn.lightGallery.modules.hash=t}(jQuery,window,document),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(A){"use strict";function o(e,t){this.element=e,this.options=A.extend({},s,t),this.init()}function P(e){if(!A(e.target).parents().hasClass("jq-selectbox")&&"OPTION"!=e.target.nodeName&&A("div.jq-selectbox.opened").length){var t=A("div.jq-selectbox.opened"),s=A("div.jq-selectbox__search input",t),i=A("div.jq-selectbox__dropdown",t);t.find("select").data("_"+n).options.onSelectClosed.call(t),s.length&&s.val("").keyup(),i.hide().find("li.sel").addClass("selected"),t.removeClass("focused opened dropup dropdown")}}var n="styler",s={idSuffix:"-styler",filePlaceholder:"ЗАГРУЗКА ФОТО",fileBrowse:"Обзор...",fileNumber:"Выбрано файлов: %s",selectPlaceholder:"Выберите из списка",selectSearch:!1,selectSearchLimit:10,selectSearchNotFound:"Совпадений не найдено",selectSearchPlaceholder:"Поиск...",selectVisibleOptions:0,singleSelectzIndex:"100",selectSmartPositioning:!0,onSelectOpened:function(){},onSelectClosed:function(){},onFormStyled:function(){}};o.prototype={init:function(){function D(){void 0!==q.attr("id")&&""!==q.attr("id")&&(this.id=q.attr("id")+j.idSuffix),this.title=q.attr("title"),this.classes=q.attr("class"),this.data=q.data()}var q=A(this.element),j=this.options,O=!(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)||navigator.userAgent.match(/(Windows\sPhone)/i)),e=!(!navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/(Windows\sPhone)/i));if(q.is(":checkbox")){var t=function(){var e=new D,t=A('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);q.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(t).prependTo(t),t.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative",overflow:"hidden"}),q.is(":checked")&&t.addClass("checked"),q.is(":disabled")&&t.addClass("disabled"),t.click(function(e){e.preventDefault(),t.is(".disabled")||(q.is(":checked")?(q.prop("checked",!1),t.removeClass("checked")):(q.prop("checked",!0),t.addClass("checked")),q.focus().change())}),q.closest("label").add('label[for="'+q.attr("id")+'"]').on("click.styler",function(e){A(e.target).is("a")||A(e.target).closest(t).length||(t.triggerHandler("click"),e.preventDefault())}),q.on("change.styler",function(){q.is(":checked")?t.addClass("checked"):t.removeClass("checked")}).on("keydown.styler",function(e){32==e.which&&t.click()}).on("focus.styler",function(){t.is(".disabled")||t.addClass("focused")}).on("blur.styler",function(){t.removeClass("focused")})};t(),q.on("refresh",function(){q.closest("label").add('label[for="'+q.attr("id")+'"]').off(".styler"),q.off(".styler").parent().before(q).remove(),t()})}else if(q.is(":radio")){var s=function(){var e=new D,s=A('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);q.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(s).prependTo(s),s.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative"}),q.is(":checked")&&s.addClass("checked"),q.is(":disabled")&&s.addClass("disabled"),A.fn.commonParents=function(){var e=this;return e.first().parents().filter(function(){return A(this).find(e).length===e.length})},A.fn.commonParent=function(){return A(this).commonParents().first()},s.click(function(e){if(e.preventDefault(),!s.is(".disabled")){var t=A('input[name="'+q.attr("name")+'"]');t.commonParent().find(t).prop("checked",!1).parent().removeClass("checked"),q.prop("checked",!0).parent().addClass("checked"),q.focus().change()}}),q.closest("label").add('label[for="'+q.attr("id")+'"]').on("click.styler",function(e){A(e.target).is("a")||A(e.target).closest(s).length||(s.triggerHandler("click"),e.preventDefault())}),q.on("change.styler",function(){q.parent().addClass("checked")}).on("focus.styler",function(){s.is(".disabled")||s.addClass("focused")}).on("blur.styler",function(){s.removeClass("focused")})};s(),q.on("refresh",function(){q.closest("label").add('label[for="'+q.attr("id")+'"]').off(".styler"),q.off(".styler").parent().before(q).remove(),s()})}else if(q.is(":file")){q.css({position:"absolute",top:0,right:0,margin:0,padding:0,opacity:0,fontSize:"100px"});var i=function(){var e=new D,o=q.data("placeholder");void 0===o&&(o=j.filePlaceholder);var t=q.data("browse");void 0!==t&&""!==t||(t=j.fileBrowse);var n=A('<div class="jq-file"><div class="jq-file__name">'+o+'</div><div class="jq-file__browse">'+t+"</div></div>").css({display:"inline-block",position:"relative",overflow:"hidden"}).attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);q.after(n).appendTo(n),q.is(":disabled")&&n.addClass("disabled"),q.on("change.styler",function(){var e=q.val(),t=A("div.jq-file__name",n);if(q.is("[multiple]")){e="";var s=q[0].files.length;if(0<s){var i=q.data("number");void 0===i&&(i=j.fileNumber),e=i=i.replace("%s",s)}}t.text(e.replace(/.+[\\\/]/,"")),""===e?(t.text(o),n.removeClass("changed")):n.addClass("changed")}).on("focus.styler",function(){n.addClass("focused")}).on("blur.styler",function(){n.removeClass("focused")}).on("click.styler",function(){n.removeClass("focused")})};i(),q.on("refresh",function(){q.off(".styler").parent().before(q).remove(),i()})}else if(q.is('input[type="number"]')){var o=function(){var e=new D,t=A('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);q.after(t).prependTo(t).wrap('<div class="jq-number__field"></div>'),q.is(":disabled")&&t.addClass("disabled");var n,a,r,s=null,i=null;void 0!==q.attr("min")&&(n=q.attr("min")),void 0!==q.attr("max")&&(a=q.attr("max")),r=void 0!==q.attr("step")&&A.isNumeric(q.attr("step"))?Number(q.attr("step")):Number(1);function o(e){var t,s=q.val();A.isNumeric(s)||(s=0,q.val("0")),e.is(".minus")?t=Number(s)-r:e.is(".plus")&&(t=Number(s)+r);var i=(r.toString().split(".")[1]||[]).length;if(0<i){for(var o="1";o.length<=i;)o+="0";t=Math.round(t*o)/o}A.isNumeric(n)&&A.isNumeric(a)?n<=t&&t<=a&&q.val(t):A.isNumeric(n)&&!A.isNumeric(a)?n<=t&&q.val(t):(A.isNumeric(n)||!A.isNumeric(a)||t<=a)&&q.val(t)}t.is(".disabled")||(t.on("mousedown","div.jq-number__spin",function(){var e=A(this);o(e),s=setTimeout(function(){i=setInterval(function(){o(e)},40)},350)}).on("mouseup mouseout","div.jq-number__spin",function(){clearTimeout(s),clearInterval(i)}).on("mouseup","div.jq-number__spin",function(){q.change()}),q.on("focus.styler",function(){t.addClass("focused")}).on("blur.styler",function(){t.removeClass("focused")}))};o(),q.on("refresh",function(){q.off(".styler").closest(".jq-number").before(q).remove(),o()})}else if(q.is("select")){var n=function(){function E(e){e.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll",function(e){var t=null;"mousewheel"==e.type?t=-1*e.originalEvent.wheelDelta:"DOMMouseScroll"==e.type&&(t=40*e.originalEvent.detail),t&&(e.stopPropagation(),e.preventDefault(),A(this).scrollTop(t+A(this).scrollTop()))})}function z(){for(var e=0;e<S.length;e++){var t=S.eq(e),s="",i="",o="",n="",a="",r="",l="",h="",d="";t.prop("selected")&&(i="selected sel"),t.is(":disabled")&&(i="disabled"),t.is(":selected:disabled")&&(i="selected sel disabled"),void 0!==t.attr("id")&&""!==t.attr("id")&&(n=' id="'+t.attr("id")+j.idSuffix+'"'),void 0!==t.attr("title")&&""!==S.attr("title")&&(a=' title="'+t.attr("title")+'"'),void 0!==t.attr("class")&&(l=" "+t.attr("class"),d=' data-jqfs-class="'+t.attr("class")+'"');var c=t.data();for(var u in c)""!==c[u]&&(r+=" data-"+u+'="'+c[u]+'"');i+l!==""&&(o=' class="'+i+l+'"'),s="<li"+d+r+o+a+n+">"+t.html()+"</li>",t.parent().is("optgroup")&&(void 0!==t.parent().attr("class")&&(h=" "+t.parent().attr("class")),s="<li"+d+r+' class="'+i+l+" option"+h+'"'+a+n+">"+t.html()+"</li>",t.is(":first-child")&&(s='<li class="optgroup'+h+'">'+t.parent().attr("label")+"</li>"+s)),M+=s}}var S=A("option",q),M="";if(q.is("[multiple]")){if(e||O)return;!function(){var e=new D,t=A('<div class="jq-select-multiple jqselect"></div>').css({display:"inline-block",position:"relative"}).attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);q.css({margin:0,padding:0}).after(t),z(),t.append("<ul>"+M+"</ul>");var s=A("ul",t).css({position:"relative","overflow-x":"hidden","-webkit-overflow-scrolling":"touch"}),o=A("li",t).attr("unselectable","on"),i=q.attr("size"),n=s.outerHeight(),a=o.outerHeight();void 0!==i&&0<i?s.css({height:a*i}):s.css({height:4*a}),n>t.height()&&(s.css("overflowY","scroll"),E(s),o.filter(".selected").length&&s.scrollTop(s.scrollTop()+o.filter(".selected").position().top)),q.prependTo(t).css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0}),q.is(":disabled")?(t.addClass("disabled"),S.each(function(){A(this).is(":selected")&&o.eq(A(this).index()).addClass("selected")})):(o.filter(":not(.disabled):not(.optgroup)").click(function(e){q.focus();var t=A(this);if(e.ctrlKey||e.metaKey||t.addClass("selected"),e.shiftKey||t.addClass("first"),e.ctrlKey||e.metaKey||e.shiftKey||t.siblings().removeClass("selected first"),(e.ctrlKey||e.metaKey)&&(t.is(".selected")?t.removeClass("selected first"):t.addClass("selected first"),t.siblings().removeClass("first")),e.shiftKey){var s=!1,i=!1;t.siblings().removeClass("selected").siblings(".first").addClass("selected"),t.prevAll().each(function(){A(this).is(".first")&&(s=!0)}),t.nextAll().each(function(){A(this).is(".first")&&(i=!0)}),s&&t.prevAll().each(function(){return!A(this).is(".selected")&&void A(this).not(".disabled, .optgroup").addClass("selected")}),i&&t.nextAll().each(function(){return!A(this).is(".selected")&&void A(this).not(".disabled, .optgroup").addClass("selected")}),1==o.filter(".selected").length&&t.addClass("first")}S.prop("selected",!1),o.filter(".selected").each(function(){var e=A(this),t=e.index();e.is(".option")&&(t-=e.prevAll(".optgroup").length),S.eq(t).prop("selected",!0)}),q.change()}),S.each(function(e){A(this).data("optionIndex",e)}),q.on("change.styler",function(){o.removeClass("selected");var t=[];S.filter(":selected").each(function(){t.push(A(this).data("optionIndex"))}),o.not(".optgroup").filter(function(e){return-1<A.inArray(e,t)}).addClass("selected")}).on("focus.styler",function(){t.addClass("focused")}).on("blur.styler",function(){t.removeClass("focused")}),n>t.height()&&q.on("keydown.styler",function(e){38!=e.which&&37!=e.which&&33!=e.which||s.scrollTop(s.scrollTop()+o.filter(".selected").position().top-a),40!=e.which&&39!=e.which&&34!=e.which||s.scrollTop(s.scrollTop()+o.filter(".selected:last").position().top-s.innerHeight()+2*a)}))}()}else!function(){var e=new D,t="",s=q.data("placeholder"),i=q.data("search"),o=q.data("search-limit"),n=q.data("search-not-found"),a=q.data("search-placeholder"),l=q.data("z-index"),h=q.data("smart-positioning");void 0===s&&(s=j.selectPlaceholder),void 0!==i&&""!==i||(i=j.selectSearch),void 0!==o&&""!==o||(o=j.selectSearchLimit),void 0!==n&&""!==n||(n=j.selectSearchNotFound),void 0===a&&(a=j.selectSearchPlaceholder),void 0!==l&&""!==l||(l=j.singleSelectzIndex),void 0!==h&&""!==h||(h=j.selectSmartPositioning);var d=A('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select" style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').css({display:"inline-block",position:"relative",zIndex:l}).attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);q.css({margin:0,padding:0}).after(d).prependTo(d);var r=A("div.jq-selectbox__select",d),c=A("div.jq-selectbox__select-text",d),u=S.filter(":selected");z(),i&&(t='<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="'+a+'"></div><div class="jq-selectbox__not-found">'+n+"</div>");var p=A('<div class="jq-selectbox__dropdown" style="position: absolute">'+t+'<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">'+M+"</ul></div>");d.append(p);var g=A("ul",p),m=A("li",p),f=A("input",p),v=A("div.jq-selectbox__not-found",p).hide();m.length<o&&f.parent().hide(),""===S.first().text()&&S.first().is(":selected")?c.text(s).addClass("placeholder"):c.text(u.text());var y=0,_=0;if(m.css({display:"inline-block"}),m.each(function(){var e=A(this);e.innerWidth()>y&&(y=e.innerWidth(),_=e.width())}),m.css({display:""}),c.is(".placeholder")&&c.width()>y)c.width(c.width());else{var b=d.clone().appendTo("body").width("auto"),w=b.outerWidth();b.remove(),w==d.outerWidth()&&c.width(_)}y>d.width()&&p.width(y),""===S.first().text()&&""!==q.data("placeholder")&&m.first().hide(),q.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0});var x=d.outerHeight(!0),C=f.parent().outerHeight(!0),$=g.css("max-height"),T=m.filter(".selected");T.length<1&&m.first().addClass("selected sel"),void 0===m.data("li-height")&&m.data("li-height",m.outerHeight());var k=p.css("top");if("auto"==p.css("left")&&p.css({left:0}),"auto"==p.css("top")&&(p.css({top:x}),k=x),p.hide(),T.length&&(S.first().text()!=u.text()&&d.addClass("changed"),d.data("jqfs-class",T.data("jqfs-class")),d.addClass(T.data("jqfs-class"))),q.is(":disabled"))return d.addClass("disabled");r.click(function(){if(A("div.jq-selectbox").filter(".opened").length&&j.onSelectClosed.call(A("div.jq-selectbox").filter(".opened")),q.focus(),!O){var t=A(window),s=m.data("li-height"),i=d.offset().top,o=t.height()-x-(i-t.scrollTop()),e=q.data("visible-options");void 0!==e&&""!==e||(e=j.selectVisibleOptions);var n=5*s,a=s*e;0<e&&e<6&&(n=a),0===e&&(a="auto");var r=function(){p.height("auto").css({bottom:"auto",top:k});function e(){g.css("max-height",Math.floor((o-20-C)/s)*s)}e(),g.css("max-height",a),"none"!=$&&g.css("max-height",$),o<p.outerHeight()+20&&e()};!0===h||1===h?n+C+20<o?(r(),d.removeClass("dropup").addClass("dropdown")):(function(){p.height("auto").css({top:"auto",bottom:k});function e(){g.css("max-height",Math.floor((i-t.scrollTop()-20-C)/s)*s)}e(),g.css("max-height",a),"none"!=$&&g.css("max-height",$),i-t.scrollTop()-20<p.outerHeight()+20&&e()}(),d.removeClass("dropdown").addClass("dropup")):!1!==h&&0!==h||n+C+20<o&&(r(),d.removeClass("dropup").addClass("dropdown")),d.offset().left+p.outerWidth()>t.width()&&p.css({left:"auto",right:0}),A("div.jqselect").css({zIndex:l-1}).removeClass("opened"),d.css({zIndex:l}),p.is(":hidden")?(A("div.jq-selectbox__dropdown:visible").hide(),p.show(),d.addClass("opened focused"),j.onSelectOpened.call(d)):(p.hide(),d.removeClass("opened dropup dropdown"),A("div.jq-selectbox").filter(".opened").length&&j.onSelectClosed.call(d)),f.length&&(f.val("").keyup(),v.hide(),f.keyup(function(){var e=A(this).val();m.each(function(){A(this).html().match(new RegExp(".*?"+e+".*?","i"))?A(this).show():A(this).hide()}),""===S.first().text()&&""!==q.data("placeholder")&&m.first().hide(),m.filter(":visible").length<1?v.show():v.hide()})),m.filter(".selected").length&&(""===q.val()?g.scrollTop(0):(g.innerHeight()/s%2!=0&&(s/=2),g.scrollTop(g.scrollTop()+m.filter(".selected").position().top-g.innerHeight()/2+s))),E(g)}}),m.hover(function(){A(this).siblings().removeClass("selected")}),m.filter(".selected").text(),m.filter(":not(.disabled):not(.optgroup)").click(function(){q.focus();var e=A(this),t=e.text();if(!e.is(".selected")){var s=e.index();s-=e.prevAll(".optgroup").length,e.addClass("selected sel").siblings().removeClass("selected sel"),S.prop("selected",!1).eq(s).prop("selected",!0),c.text(t),d.data("jqfs-class")&&d.removeClass(d.data("jqfs-class")),d.data("jqfs-class",e.data("jqfs-class")),d.addClass(e.data("jqfs-class")),q.change()}p.hide(),d.removeClass("opened dropup dropdown"),j.onSelectClosed.call(d)}),p.mouseout(function(){A("li.sel",p).addClass("selected")}),q.on("change.styler",function(){c.text(S.filter(":selected").text()).removeClass("placeholder"),m.removeClass("selected sel").not(".optgroup").eq(q[0].selectedIndex).addClass("selected sel"),S.first().text()!=m.filter(".selected").text()?d.addClass("changed"):d.removeClass("changed")}).on("focus.styler",function(){d.addClass("focused"),A("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()}).on("blur.styler",function(){d.removeClass("focused")}).on("keydown.styler keyup.styler",function(e){var t=m.data("li-height");""===q.val()?c.text(s).addClass("placeholder"):c.text(S.filter(":selected").text()),m.removeClass("selected sel").not(".optgroup").eq(q[0].selectedIndex).addClass("selected sel"),38!=e.which&&37!=e.which&&33!=e.which&&36!=e.which||(""===q.val()?g.scrollTop(0):g.scrollTop(g.scrollTop()+m.filter(".selected").position().top)),40!=e.which&&39!=e.which&&34!=e.which&&35!=e.which||g.scrollTop(g.scrollTop()+m.filter(".selected").position().top-g.innerHeight()+t),13==e.which&&(e.preventDefault(),p.hide(),d.removeClass("opened dropup dropdown"),j.onSelectClosed.call(d))}).on("keydown.styler",function(e){32==e.which&&(e.preventDefault(),r.click())}),P.registered||(A(document).on("click",P),P.registered=!0)}()};n(),q.on("refresh",function(){q.off(".styler").parent().before(q).remove(),n()})}else q.is(":reset")&&q.on("click",function(){setTimeout(function(){q.closest("form").find("input, select").trigger("refresh")},1)})},destroy:function(){var e=A(this.element);e.is(":checkbox")||e.is(":radio")?(e.removeData("_"+n).off(".styler refresh").removeAttr("style").parent().before(e).remove(),e.closest("label").add('label[for="'+e.attr("id")+'"]').off(".styler")):e.is('input[type="number"]')?e.removeData("_"+n).off(".styler refresh").closest(".jq-number").before(e).remove():(e.is(":file")||e.is("select"))&&e.removeData("_"+n).off(".styler refresh").removeAttr("style").parent().before(e).remove()}},A.fn[n]=function(t){var s,i=arguments;return void 0===t||"object"==typeof t?(this.each(function(){A.data(this,"_"+n)||A.data(this,"_"+n,new o(this,t))}).promise().done(function(){var e=A(this[0]).data("_"+n);e&&e.options.onFormStyled.call()}),this):"string"==typeof t&&"_"!==t[0]&&"init"!==t?(this.each(function(){var e=A.data(this,"_"+n);e instanceof o&&"function"==typeof e[t]&&(s=e[t].apply(e,Array.prototype.slice.call(i,1)))}),void 0!==s?s:this):void 0},P.registered=!1}),function(l,s,o,n){function h(e,t){this.settings=null,this.options=l.extend({},h.Defaults,t),this.$element=l(e),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},l.each(["onResize","onThrottledResize"],l.proxy(function(e,t){this._handlers[t]=l.proxy(this[t],this)},this)),l.each(h.Plugins,l.proxy(function(e,t){this._plugins[e.charAt(0).toLowerCase()+e.slice(1)]=new t(this)},this)),l.each(h.Workers,l.proxy(function(e,t){this._pipe.push({filter:t.filter,run:l.proxy(t.run,this)})},this)),this.setup(),this.initialize()}h.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:s,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},h.Width={Default:"default",Inner:"inner",Outer:"outer"},h.Type={Event:"event",State:"state"},h.Plugins={},h.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(e){e.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(e){var t=this.settings.margin||"",s=!this.settings.autoWidth,i=this.settings.rtl,o={width:"auto","margin-left":i?t:"","margin-right":i?"":t};s||this.$stage.children().css(o),e.css=o}},{filter:["width","items","settings"],run:function(e){var t=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,s=null,i=this._items.length,o=!this.settings.autoWidth,n=[];for(e.items={merge:!1,width:t};i--;)s=this._mergers[i],s=this.settings.mergeFit&&Math.min(s,this.settings.items)||s,e.items.merge=1<s||e.items.merge,n[i]=o?t*s:this._items[i].width();this._widths=n}},{filter:["items","settings"],run:function(){var e=[],t=this._items,s=this.settings,i=Math.max(2*s.items,4),o=2*Math.ceil(t.length/2),n=s.loop&&t.length?s.rewind?i:Math.max(i,o):0,a="",r="";for(n/=2;n--;)e.push(this.normalize(e.length/2,!0)),a+=t[e[e.length-1]][0].outerHTML,e.push(this.normalize(t.length-1-(e.length-1)/2,!0)),r=t[e[e.length-1]][0].outerHTML+r;this._clones=e,l(a).addClass("cloned").appendTo(this.$stage),l(r).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var e=this.settings.rtl?1:-1,t=this._clones.length+this._items.length,s=-1,i=0,o=0,n=[];++s<t;)i=n[s-1]||0,o=this._widths[this.relative(s)]+this.settings.margin,n.push(i+o*e);this._coordinates=n}},{filter:["width","items","settings"],run:function(){var e=this.settings.stagePadding,t=this._coordinates,s={width:Math.ceil(Math.abs(t[t.length-1]))+2*e,"padding-left":e||"","padding-right":e||""};this.$stage.css(s)}},{filter:["width","items","settings"],run:function(e){var t=this._coordinates.length,s=!this.settings.autoWidth,i=this.$stage.children();if(s&&e.items.merge)for(;t--;)e.css.width=this._widths[this.relative(t)],i.eq(t).css(e.css);else s&&(e.css.width=e.items.width,i.css(e.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(e){e.current=e.current?this.$stage.children().index(e.current):0,e.current=Math.max(this.minimum(),Math.min(this.maximum(),e.current)),this.reset(e.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var e,t,s,i,o=this.settings.rtl?1:-1,n=2*this.settings.stagePadding,a=this.coordinates(this.current())+n,r=a+this.width()*o,l=[];for(s=0,i=this._coordinates.length;s<i;s++)e=this._coordinates[s-1]||0,t=Math.abs(this._coordinates[s])+n*o,(this.op(e,"<=",a)&&this.op(e,">",r)||this.op(t,"<",a)&&this.op(t,">",r))&&l.push(s);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+l.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],h.prototype.initialize=function(){var e,t,s;this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")&&(e=this.$element.find("img"),t=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:n,s=this.$element.children(t).width(),e.length&&s<=0&&this.preloadAutoWidthImages(e));this.$element.addClass(this.options.loadingClass),this.$stage=l("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},h.prototype.setup=function(){var t=this.viewport(),e=this.options.responsive,s=-1,i=null;e?(l.each(e,function(e){e<=t&&s<e&&(s=Number(e))}),"function"==typeof(i=l.extend({},this.options,e[s])).stagePadding&&(i.stagePadding=i.stagePadding()),delete i.responsive,i.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+s))):i=l.extend({},this.options),this.trigger("change",{property:{name:"settings",value:i}}),this._breakpoint=s,this.settings=i,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},h.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},h.prototype.prepare=function(e){var t=this.trigger("prepare",{content:e});return t.data||(t.data=l("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(e)),this.trigger("prepared",{content:t.data}),t.data},h.prototype.update=function(){for(var e=0,t=this._pipe.length,s=l.proxy(function(e){return this[e]},this._invalidated),i={};e<t;)(this._invalidated.all||0<l.grep(this._pipe[e].filter,s).length)&&this._pipe[e].run(i),e++;this._invalidated={},this.is("valid")||this.enter("valid")},h.prototype.width=function(e){switch(e=e||h.Width.Default){case h.Width.Inner:case h.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},h.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},h.prototype.onThrottledResize=function(){s.clearTimeout(this.resizeTimer),this.resizeTimer=s.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},h.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},h.prototype.registerEventHandlers=function(){l.support.transition&&this.$stage.on(l.support.transition.end+".owl.core",l.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(s,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",l.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",l.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",l.proxy(this.onDragEnd,this)))},h.prototype.onDragStart=function(e){var t=null;3!==e.which&&(t=l.support.transform?{x:(t=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","))[16===t.length?12:4],y:t[16===t.length?13:5]}:(t=this.$stage.position(),{x:this.settings.rtl?t.left+this.$stage.width()-this.width()+this.settings.margin:t.left,y:t.top}),this.is("animating")&&(l.support.transform?this.animate(t.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===e.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=l(e.target),this._drag.stage.start=t,this._drag.stage.current=t,this._drag.pointer=this.pointer(e),l(o).on("mouseup.owl.core touchend.owl.core",l.proxy(this.onDragEnd,this)),l(o).one("mousemove.owl.core touchmove.owl.core",l.proxy(function(e){var t=this.difference(this._drag.pointer,this.pointer(e));l(o).on("mousemove.owl.core touchmove.owl.core",l.proxy(this.onDragMove,this)),Math.abs(t.x)<Math.abs(t.y)&&this.is("valid")||(e.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},h.prototype.onDragMove=function(e){var t=null,s=null,i=null,o=this.difference(this._drag.pointer,this.pointer(e)),n=this.difference(this._drag.stage.start,o);this.is("dragging")&&(e.preventDefault(),this.settings.loop?(t=this.coordinates(this.minimum()),s=this.coordinates(this.maximum()+1)-t,n.x=((n.x-t)%s+s)%s+t):(t=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),s=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),i=this.settings.pullDrag?-1*o.x/5:0,n.x=Math.max(Math.min(n.x,t+i),s+i)),this._drag.stage.current=n,this.animate(n.x))},h.prototype.onDragEnd=function(e){var t=this.difference(this._drag.pointer,this.pointer(e)),s=this._drag.stage.current,i=0<t.x^this.settings.rtl?"left":"right";l(o).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==t.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(s.x,0!==t.x?i:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=i,(3<Math.abs(t.x)||300<(new Date).getTime()-this._drag.time)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},h.prototype.closest=function(s,i){var o=-1,n=this.width(),a=this.coordinates();return this.settings.freeDrag||l.each(a,l.proxy(function(e,t){return"left"===i&&t-30<s&&s<t+30?o=e:"right"===i&&t-n-30<s&&s<t-n+30?o=e+1:this.op(s,"<",t)&&this.op(s,">",a[e+1]||t-n)&&(o="left"===i?e+1:e),-1===o},this)),this.settings.loop||(this.op(s,">",a[this.minimum()])?o=s=this.minimum():this.op(s,"<",a[this.maximum()])&&(o=s=this.maximum())),o},h.prototype.animate=function(e){var t=0<this.speed();this.is("animating")&&this.onTransitionEnd(),t&&(this.enter("animating"),this.trigger("translate")),l.support.transform3d&&l.support.transition?this.$stage.css({transform:"translate3d("+e+"px,0px,0px)",transition:this.speed()/1e3+"s"}):t?this.$stage.animate({left:e+"px"},this.speed(),this.settings.fallbackEasing,l.proxy(this.onTransitionEnd,this)):this.$stage.css({left:e+"px"})},h.prototype.is=function(e){return this._states.current[e]&&0<this._states.current[e]},h.prototype.current=function(e){if(e===n)return this._current;if(0===this._items.length)return n;if(e=this.normalize(e),this._current!==e){var t=this.trigger("change",{property:{name:"position",value:e}});t.data!==n&&(e=this.normalize(t.data)),this._current=e,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},h.prototype.invalidate=function(e){return"string"===l.type(e)&&(this._invalidated[e]=!0,this.is("valid")&&this.leave("valid")),l.map(this._invalidated,function(e,t){return t})},h.prototype.reset=function(e){(e=this.normalize(e))!==n&&(this._speed=0,this._current=e,this.suppress(["translate","translated"]),this.animate(this.coordinates(e)),this.release(["translate","translated"]))},h.prototype.normalize=function(e,t){var s=this._items.length,i=t?0:this._clones.length;return!this.isNumeric(e)||s<1?e=n:(e<0||s+i<=e)&&(e=((e-i/2)%s+s)%s+i/2),e},h.prototype.relative=function(e){return e-=this._clones.length/2,this.normalize(e,!0)},h.prototype.maximum=function(e){var t,s,i,o=this.settings,n=this._coordinates.length;if(o.loop)n=this._clones.length/2+this._items.length-1;else if(o.autoWidth||o.merge){for(t=this._items.length,s=this._items[--t].width(),i=this.$element.width();t--&&!(i<(s+=this._items[t].width()+this.settings.margin)););n=t+1}else n=o.center?this._items.length-1:this._items.length-o.items;return e&&(n-=this._clones.length/2),Math.max(n,0)},h.prototype.minimum=function(e){return e?0:this._clones.length/2},h.prototype.items=function(e){return e===n?this._items.slice():(e=this.normalize(e,!0),this._items[e])},h.prototype.mergers=function(e){return e===n?this._mergers.slice():(e=this.normalize(e,!0),this._mergers[e])},h.prototype.clones=function(s){function i(e){return e%2==0?o+e/2:t-(e+1)/2}var t=this._clones.length/2,o=t+this._items.length;return s===n?l.map(this._clones,function(e,t){return i(t)}):l.map(this._clones,function(e,t){return e===s?i(t):null})},h.prototype.speed=function(e){return e!==n&&(this._speed=e),this._speed},h.prototype.coordinates=function(e){var t,s=1,i=e-1;return e===n?l.map(this._coordinates,l.proxy(function(e,t){return this.coordinates(t)},this)):(this.settings.center?(this.settings.rtl&&(s=-1,i=e+1),t=this._coordinates[e],t+=(this.width()-t+(this._coordinates[i]||0))/2*s):t=this._coordinates[i]||0,t=Math.ceil(t))},h.prototype.duration=function(e,t,s){return 0===s?0:Math.min(Math.max(Math.abs(t-e),1),6)*Math.abs(s||this.settings.smartSpeed)},h.prototype.to=function(e,t){var s=this.current(),i=null,o=e-this.relative(s),n=(0<o)-(o<0),a=this._items.length,r=this.minimum(),l=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(o)>a/2&&(o+=-1*n*a),(i=(((e=s+o)-r)%a+a)%a+r)!==e&&i-o<=l&&0<i-o&&(s=i-o,e=i,this.reset(s))):e=this.settings.rewind?(e%(l+=1)+l)%l:Math.max(r,Math.min(l,e)),this.speed(this.duration(s,e,t)),this.current(e),this.$element.is(":visible")&&this.update()},h.prototype.next=function(e){e=e||!1,this.to(this.relative(this.current())+1,e)},h.prototype.prev=function(e){e=e||!1,this.to(this.relative(this.current())-1,e)},h.prototype.onTransitionEnd=function(e){if(e!==n&&(e.stopPropagation(),(e.target||e.srcElement||e.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},h.prototype.viewport=function(){var e;if(this.options.responsiveBaseElement!==s)e=l(this.options.responsiveBaseElement).width();else if(s.innerWidth)e=s.innerWidth;else{if(!o.documentElement||!o.documentElement.clientWidth)throw"Can not detect viewport width.";e=o.documentElement.clientWidth}return e},h.prototype.replace=function(e){this.$stage.empty(),this._items=[],e=e&&(e instanceof jQuery?e:l(e)),this.settings.nestedItemSelector&&(e=e.find("."+this.settings.nestedItemSelector)),e.filter(function(){return 1===this.nodeType}).each(l.proxy(function(e,t){t=this.prepare(t),this.$stage.append(t),this._items.push(t),this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},h.prototype.add=function(e,t){var s=this.relative(this._current);t=t===n?this._items.length:this.normalize(t,!0),e=e instanceof jQuery?e:l(e),this.trigger("add",{content:e,position:t}),e=this.prepare(e),0===this._items.length||t===this._items.length?(0===this._items.length&&this.$stage.append(e),0!==this._items.length&&this._items[t-1].after(e),this._items.push(e),this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[t].before(e),this._items.splice(t,0,e),this._mergers.splice(t,0,+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[s]&&this.reset(this._items[s].index()),this.invalidate("items"),this.trigger("added",{content:e,position:t})},h.prototype.remove=function(e){(e=this.normalize(e,!0))!==n&&(this.trigger("remove",{content:this._items[e],position:e}),this._items[e].remove(),this._items.splice(e,1),this._mergers.splice(e,1),this.invalidate("items"),this.trigger("removed",{content:null,position:e}))},h.prototype.preloadAutoWidthImages=function(e){e.each(l.proxy(function(e,t){this.enter("pre-loading"),t=l(t),l(new Image).one("load",l.proxy(function(e){t.attr("src",e.target.src),t.css("opacity",1),this.leave("pre-loading"),this.is("pre-loading")||this.is("initializing")||this.refresh()},this)).attr("src",t.attr("src")||t.attr("data-src")||t.attr("data-src-retina"))},this))},h.prototype.destroy=function(){for(var e in this.$element.off(".owl.core"),this.$stage.off(".owl.core"),l(o).off(".owl.core"),!1!==this.settings.responsive&&(s.clearTimeout(this.resizeTimer),this.off(s,"resize",this._handlers.onThrottledResize)),this._plugins)this._plugins[e].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},h.prototype.op=function(e,t,s){var i=this.settings.rtl;switch(t){case"<":return i?s<e:e<s;case">":return i?e<s:s<e;case">=":return i?e<=s:s<=e;case"<=":return i?s<=e:e<=s}},h.prototype.on=function(e,t,s,i){e.addEventListener?e.addEventListener(t,s,i):e.attachEvent&&e.attachEvent("on"+t,s)},h.prototype.off=function(e,t,s,i){e.removeEventListener?e.removeEventListener(t,s,i):e.detachEvent&&e.detachEvent("on"+t,s)},h.prototype.trigger=function(e,t,s,i,o){var n={item:{count:this._items.length,index:this.current()}},a=l.camelCase(l.grep(["on",e,s],function(e){return e}).join("-").toLowerCase()),r=l.Event([e,"owl",s||"carousel"].join(".").toLowerCase(),l.extend({relatedTarget:this},n,t));return this._supress[e]||(l.each(this._plugins,function(e,t){t.onTrigger&&t.onTrigger(r)}),this.register({type:h.Type.Event,name:e}),this.$element.trigger(r),this.settings&&"function"==typeof this.settings[a]&&this.settings[a].call(this,r)),r},h.prototype.enter=function(e){l.each([e].concat(this._states.tags[e]||[]),l.proxy(function(e,t){this._states.current[t]===n&&(this._states.current[t]=0),this._states.current[t]++},this))},h.prototype.leave=function(e){l.each([e].concat(this._states.tags[e]||[]),l.proxy(function(e,t){this._states.current[t]--},this))},h.prototype.register=function(s){if(s.type===h.Type.Event){if(l.event.special[s.name]||(l.event.special[s.name]={}),!l.event.special[s.name].owl){var t=l.event.special[s.name]._default;l.event.special[s.name]._default=function(e){return!t||!t.apply||e.namespace&&-1!==e.namespace.indexOf("owl")?e.namespace&&-1<e.namespace.indexOf("owl"):t.apply(this,arguments)},l.event.special[s.name].owl=!0}}else s.type===h.Type.State&&(this._states.tags[s.name]?this._states.tags[s.name]=this._states.tags[s.name].concat(s.tags):this._states.tags[s.name]=s.tags,this._states.tags[s.name]=l.grep(this._states.tags[s.name],l.proxy(function(e,t){return l.inArray(e,this._states.tags[s.name])===t},this)))},h.prototype.suppress=function(e){l.each(e,l.proxy(function(e,t){this._supress[t]=!0},this))},h.prototype.release=function(e){l.each(e,l.proxy(function(e,t){delete this._supress[t]},this))},h.prototype.pointer=function(e){var t={x:null,y:null};return(e=(e=e.originalEvent||e||s.event).touches&&e.touches.length?e.touches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e).pageX?(t.x=e.pageX,t.y=e.pageY):(t.x=e.clientX,t.y=e.clientY),t},h.prototype.isNumeric=function(e){return!isNaN(parseFloat(e))},h.prototype.difference=function(e,t){return{x:e.x-t.x,y:e.y-t.y}},l.fn.owlCarousel=function(t){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=l(this),s=e.data("owl.carousel");s||(s=new h(this,"object"==typeof t&&t),e.data("owl.carousel",s),l.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(e,t){s.register({type:h.Type.Event,name:t}),s.$element.on(t+".owl.carousel.core",l.proxy(function(e){e.namespace&&e.relatedTarget!==this&&(this.suppress([t]),s[t].apply(this,[].slice.call(arguments,1)),this.release([t]))},s))})),"string"==typeof t&&"_"!==t.charAt(0)&&s[t].apply(s,i)})},l.fn.owlCarousel.Constructor=h}(window.Zepto||window.jQuery,window,document),function(t,s){var i=function(e){this._core=e,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":t.proxy(function(e){e.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=t.extend({},i.Defaults,this._core.options),this._core.$element.on(this._handlers)};i.Defaults={autoRefresh:!0,autoRefreshInterval:500},i.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=s.setInterval(t.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},i.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},i.prototype.destroy=function(){var e,t;for(e in s.clearInterval(this._interval),this._handlers)this._core.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoRefresh=i}(window.Zepto||window.jQuery,window,document),function(r,n){var t=function(e){this._core=e,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":r.proxy(function(e){if(e.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(e.property&&"position"==e.property.name||"initialized"==e.type))for(var t=this._core.settings,s=t.center&&Math.ceil(t.items/2)||t.items,i=t.center&&-1*s||0,o=(e.property&&void 0!==e.property.value?e.property.value:this._core.current())+i,n=this._core.clones().length,a=r.proxy(function(e,t){this.load(t)},this);i++<s;)this.load(n/2+this._core.relative(o)),n&&r.each(this._core.clones(this._core.relative(o)),a),o++},this)},this._core.options=r.extend({},t.Defaults,this._core.options),this._core.$element.on(this._handlers)};t.Defaults={lazyLoad:!1},t.prototype.load=function(e){var t=this._core.$stage.children().eq(e),s=t&&t.find(".owl-lazy");!s||-1<r.inArray(t.get(0),this._loaded)||(s.each(r.proxy(function(e,t){var s,i=r(t),o=1<n.devicePixelRatio&&i.attr("data-src-retina")||i.attr("data-src");this._core.trigger("load",{element:i,url:o},"lazy"),i.is("img")?i.one("load.owl.lazy",r.proxy(function(){i.css("opacity",1),this._core.trigger("loaded",{element:i,url:o},"lazy")},this)).attr("src",o):((s=new Image).onload=r.proxy(function(){i.css({"background-image":"url("+o+")",opacity:"1"}),this._core.trigger("loaded",{element:i,url:o},"lazy")},this),s.src=o)},this)),this._loaded.push(t.get(0)))},t.prototype.destroy=function(){var e,t;for(e in this.handlers)this._core.$element.off(e,this.handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},r.fn.owlCarousel.Constructor.Plugins.Lazy=t}(window.Zepto||window.jQuery,window,document),function(n){var t=function(e){this._core=e,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":n.proxy(function(e){e.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":n.proxy(function(e){e.namespace&&this._core.settings.autoHeight&&"position"==e.property.name&&this.update()},this),"loaded.owl.lazy":n.proxy(function(e){e.namespace&&this._core.settings.autoHeight&&e.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=n.extend({},t.Defaults,this._core.options),this._core.$element.on(this._handlers)};t.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},t.prototype.update=function(){var e,t=this._core._current,s=t+this._core.settings.items,i=this._core.$stage.children().toArray().slice(t,s),o=[];n.each(i,function(e,t){o.push(n(t).height())}),e=Math.max.apply(null,o),this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)},t.prototype.destroy=function(){var e,t;for(e in this._handlers)this._core.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},n.fn.owlCarousel.Constructor.Plugins.AutoHeight=t}(window.Zepto||window.jQuery,(window,document)),function(d,t){var s=function(e){this._core=e,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":d.proxy(function(e){e.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":d.proxy(function(e){e.namespace&&this._core.settings.video&&this.isInFullScreen()&&e.preventDefault()},this),"refreshed.owl.carousel":d.proxy(function(e){e.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":d.proxy(function(e){e.namespace&&"position"===e.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":d.proxy(function(e){if(e.namespace){var t=d(e.content).find(".owl-video");t.length&&(t.css("display","none"),this.fetch(t,d(e.content)))}},this)},this._core.options=d.extend({},s.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",d.proxy(function(e){this.play(e)},this))};s.Defaults={video:!1,videoHeight:!1,videoWidth:!1},s.prototype.fetch=function(e,t){var s=e.attr("data-vimeo-id")?"vimeo":e.attr("data-vzaar-id")?"vzaar":"youtube",i=e.attr("data-vimeo-id")||e.attr("data-youtube-id")||e.attr("data-vzaar-id"),o=e.attr("data-width")||this._core.settings.videoWidth,n=e.attr("data-height")||this._core.settings.videoHeight,a=e.attr("href");if(!a)throw new Error("Missing video URL.");if(-1<(i=a.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu"))s="youtube";else if(-1<i[3].indexOf("vimeo"))s="vimeo";else{if(!(-1<i[3].indexOf("vzaar")))throw new Error("Video URL not supported.");s="vzaar"}i=i[6],this._videos[a]={type:s,id:i,width:o,height:n},t.attr("data-video",a),this.thumbnail(e,this._videos[a])},s.prototype.thumbnail=function(t,e){function s(e){i=h.lazyLoad?'<div class="owl-video-tn '+l+'" '+r+'="'+e+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+e+')"></div>',t.after(i),t.after('<div class="owl-video-play-icon"></div>')}var i,o,n=e.width&&e.height?'style="width:'+e.width+"px;height:"+e.height+'px;"':"",a=t.find("img"),r="src",l="",h=this._core.settings;if(t.wrap('<div class="owl-video-wrapper"'+n+"></div>"),this._core.settings.lazyLoad&&(r="data-src",l="owl-lazy"),a.length)return s(a.attr(r)),a.remove(),!1;"youtube"===e.type?(o="//img.youtube.com/vi/"+e.id+"/hqdefault.jpg",s(o)):"vimeo"===e.type?d.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+e.id+".json",jsonp:"callback",dataType:"jsonp",success:function(e){o=e[0].thumbnail_large,s(o)}}):"vzaar"===e.type&&d.ajax({type:"GET",url:"//vzaar.com/api/videos/"+e.id+".json",jsonp:"callback",dataType:"jsonp",success:function(e){o=e.framegrab_url,s(o)}})},s.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},s.prototype.play=function(e){var t,s=d(e.target).closest("."+this._core.settings.itemClass),i=this._videos[s.attr("data-video")],o=i.width||"100%",n=i.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),s=this._core.items(this._core.relative(s.index())),this._core.reset(s.index()),"youtube"===i.type?t='<iframe width="'+o+'" height="'+n+'" src="//www.youtube.com/embed/'+i.id+"?autoplay=1&v="+i.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===i.type?t='<iframe src="//player.vimeo.com/video/'+i.id+'?autoplay=1" width="'+o+'" height="'+n+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===i.type&&(t='<iframe frameborder="0"height="'+n+'"width="'+o+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+i.id+'/player?autoplay=true"></iframe>'),d('<div class="owl-video-frame">'+t+"</div>").insertAfter(s.find(".owl-video")),this._playing=s.addClass("owl-video-playing"))},s.prototype.isInFullScreen=function(){var e=t.fullscreenElement||t.mozFullScreenElement||t.webkitFullscreenElement;return e&&d(e).parent().hasClass("owl-video-frame")},s.prototype.destroy=function(){var e,t;for(e in this._core.$element.off("click.owl.video"),this._handlers)this._core.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},d.fn.owlCarousel.Constructor.Plugins.Video=s}(window.Zepto||window.jQuery,(window,document)),function(a){var t=function(e){this.core=e,this.core.options=a.extend({},t.Defaults,this.core.options),this.swapping=!0,this.previous=void 0,this.next=void 0,this.handlers={"change.owl.carousel":a.proxy(function(e){e.namespace&&"position"==e.property.name&&(this.previous=this.core.current(),this.next=e.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(e){e.namespace&&(this.swapping="translated"==e.type)},this),"translate.owl.carousel":a.proxy(function(e){e.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};t.Defaults={animateOut:!1,animateIn:!1},t.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var e,t=a.proxy(this.clear,this),s=this.core.$stage.children().eq(this.previous),i=this.core.$stage.children().eq(this.next),o=this.core.settings.animateIn,n=this.core.settings.animateOut;this.core.current()!==this.previous&&(n&&(e=this.core.coordinates(this.previous)-this.core.coordinates(this.next),s.one(a.support.animation.end,t).css({left:e+"px"}).addClass("animated owl-animated-out").addClass(n)),o&&i.one(a.support.animation.end,t).addClass("animated owl-animated-in").addClass(o))}},t.prototype.clear=function(e){a(e.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},t.prototype.destroy=function(){var e,t;for(e in this.handlers)this.core.$element.off(e,this.handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=t}(window.Zepto||window.jQuery,(window,document)),function(s,i,o){var t=function(e){this._core=e,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":s.proxy(function(e){e.namespace&&"settings"===e.property.name?this._core.settings.autoplay?this.play():this.stop():e.namespace&&"position"===e.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":s.proxy(function(e){e.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":s.proxy(function(e,t,s){e.namespace&&this.play(t,s)},this),"stop.owl.autoplay":s.proxy(function(e){e.namespace&&this.stop()},this),"mouseover.owl.autoplay":s.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":s.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":s.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":s.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=s.extend({},t.Defaults,this._core.options)};t.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},t.prototype.play=function(e,t){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},t.prototype._getNextTimeout=function(e,t){return this._timeout&&i.clearTimeout(this._timeout),i.setTimeout(s.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||o.hidden||this._core.next(t||this._core.settings.autoplaySpeed)},this),e||this._core.settings.autoplayTimeout)},t.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},t.prototype.stop=function(){this._core.is("rotating")&&(i.clearTimeout(this._timeout),this._core.leave("rotating"))},t.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},t.prototype.destroy=function(){var e,t;for(e in this.stop(),this._handlers)this._core.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},s.fn.owlCarousel.Constructor.Plugins.autoplay=t}(window.Zepto||window.jQuery,window,document),function(n){"use strict";var t=function(e){this._core=e,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":n.proxy(function(e){e.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+n(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":n.proxy(function(e){e.namespace&&this._core.settings.dotsData&&this._templates.splice(e.position,0,this._templates.pop())},this),"remove.owl.carousel":n.proxy(function(e){e.namespace&&this._core.settings.dotsData&&this._templates.splice(e.position,1)},this),"changed.owl.carousel":n.proxy(function(e){e.namespace&&"position"==e.property.name&&this.draw()},this),"initialized.owl.carousel":n.proxy(function(e){e.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":n.proxy(function(e){e.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=n.extend({},t.Defaults,this._core.options),this.$element.on(this._handlers)};t.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},t.prototype.initialize=function(){var e,s=this._core.settings;for(e in this._controls.$relative=(s.navContainer?n(s.navContainer):n("<div>").addClass(s.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=n("<"+s.navElement+">").addClass(s.navClass[0]).html(s.navText[0]).prependTo(this._controls.$relative).on("click",n.proxy(function(e){this.prev(s.navSpeed)},this)),this._controls.$next=n("<"+s.navElement+">").addClass(s.navClass[1]).html(s.navText[1]).appendTo(this._controls.$relative).on("click",n.proxy(function(e){this.next(s.navSpeed)},this)),s.dotsData||(this._templates=[n("<div>").addClass(s.dotClass).append(n("<span>")).prop("outerHTML")]),this._controls.$absolute=(s.dotsContainer?n(s.dotsContainer):n("<div>").addClass(s.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",n.proxy(function(e){var t=n(e.target).parent().is(this._controls.$absolute)?n(e.target).index():n(e.target).parent().index();e.preventDefault(),this.to(t,s.dotsSpeed)},this)),this._overrides)this._core[e]=n.proxy(this[e],this)},t.prototype.destroy=function(){var e,t,s,i;for(e in this._handlers)this.$element.off(e,this._handlers[e]);for(t in this._controls)this._controls[t].remove();for(i in this.overides)this._core[i]=this._overrides[i];for(s in Object.getOwnPropertyNames(this))"function"!=typeof this[s]&&(this[s]=null)},t.prototype.update=function(){var e,t,s=this._core.clones().length/2,i=s+this._core.items().length,o=this._core.maximum(!0),n=this._core.settings,a=n.center||n.autoWidth||n.dotsData?1:n.dotsEach||n.items;if("page"!==n.slideBy&&(n.slideBy=Math.min(n.slideBy,n.items)),n.dots||"page"==n.slideBy)for(this._pages=[],e=s,t=0;e<i;e++){if(a<=t||0===t){if(this._pages.push({start:Math.min(o,e-s),end:e-s+a-1}),Math.min(o,e-s)===o)break;t=0,0}t+=this._core.mergers(this._core.relative(e))}},t.prototype.draw=function(){var e,t=this._core.settings,s=this._core.items().length<=t.items,i=this._core.relative(this._core.current()),o=t.loop||t.rewind;this._controls.$relative.toggleClass("disabled",!t.nav||s),t.nav&&(this._controls.$previous.toggleClass("disabled",!o&&i<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!o&&i>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!t.dots||s),t.dots&&(e=this._pages.length-this._controls.$absolute.children().length,t.dotsData&&0!=e?this._controls.$absolute.html(this._templates.join("")):0<e?this._controls.$absolute.append(new Array(1+e).join(this._templates[0])):e<0&&this._controls.$absolute.children().slice(e).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(n.inArray(this.current(),this._pages)).addClass("active"))},t.prototype.onTrigger=function(e){var t=this._core.settings;e.page={index:n.inArray(this.current(),this._pages),count:this._pages.length,size:t&&(t.center||t.autoWidth||t.dotsData?1:t.dotsEach||t.items)}},t.prototype.current=function(){var s=this._core.relative(this._core.current());return n.grep(this._pages,n.proxy(function(e,t){return e.start<=s&&e.end>=s},this)).pop()},t.prototype.getPosition=function(e){var t,s,i=this._core.settings;return"page"==i.slideBy?(t=n.inArray(this.current(),this._pages),s=this._pages.length,e?++t:--t,t=this._pages[(t%s+s)%s].start):(t=this._core.relative(this._core.current()),s=this._core.items().length,e?t+=i.slideBy:t-=i.slideBy),t},t.prototype.next=function(e){n.proxy(this._overrides.to,this._core)(this.getPosition(!0),e)},t.prototype.prev=function(e){n.proxy(this._overrides.to,this._core)(this.getPosition(!1),e)},t.prototype.to=function(e,t,s){var i;!s&&this._pages.length?(i=this._pages.length,n.proxy(this._overrides.to,this._core)(this._pages[(e%i+i)%i].start,t)):n.proxy(this._overrides.to,this._core)(e,t)},n.fn.owlCarousel.Constructor.Plugins.Navigation=t}(window.Zepto||window.jQuery,(window,document)),function(i,o){"use strict";var t=function(e){this._core=e,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":i.proxy(function(e){e.namespace&&"URLHash"===this._core.settings.startPosition&&i(o).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":i.proxy(function(e){if(e.namespace){var t=i(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!t)return;this._hashes[t]=e.content}},this),"changed.owl.carousel":i.proxy(function(e){if(e.namespace&&"position"===e.property.name){var s=this._core.items(this._core.relative(this._core.current())),t=i.map(this._hashes,function(e,t){return e===s?t:null}).join();if(!t||o.location.hash.slice(1)===t)return;o.location.hash=t}},this)},this._core.options=i.extend({},t.Defaults,this._core.options),this.$element.on(this._handlers),i(o).on("hashchange.owl.navigation",i.proxy(function(e){var t=o.location.hash.substring(1),s=this._core.$stage.children(),i=this._hashes[t]&&s.index(this._hashes[t]);void 0!==i&&i!==this._core.current()&&this._core.to(this._core.relative(i),!1,!0)},this))};t.Defaults={URLhashListener:!1},t.prototype.destroy=function(){var e,t;for(e in i(o).off("hashchange.owl.navigation"),this._handlers)this._core.$element.off(e,this._handlers[e]);for(t in Object.getOwnPropertyNames(this))"function"!=typeof this[t]&&(this[t]=null)},i.fn.owlCarousel.Constructor.Plugins.Hash=t}(window.Zepto||window.jQuery,window,document),function(o,n){var a=o("<support>").get(0).style,r="Webkit Moz O ms".split(" "),e={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},t=function(){return!!l("transform")},s=function(){return!!l("perspective")},i=function(){return!!l("animation")};function l(e,s){var i=!1,t=e.charAt(0).toUpperCase()+e.slice(1);return o.each((e+" "+r.join(t+" ")+t).split(" "),function(e,t){if(a[t]!==n)return i=!s||t,!1}),i}function h(e){return l(e,!0)}!function(){return!!l("transition")}()||(o.support.transition=new String(h("transition")),o.support.transition.end=e.transition.end[o.support.transition]),i()&&(o.support.animation=new String(h("animation")),o.support.animation.end=e.animation.end[o.support.animation]),t()&&(o.support.transform=new String(h("transform")),o.support.transform3d=s())}(window.Zepto||window.jQuery,(window,void document)),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(l){function h(e){return parseFloat(e)||0}function d(e){var t=l(e),i=null,o=[];return t.each(function(){var e=l(this),t=e.offset().top-h(e.css("margin-top")),s=0<o.length?o[o.length-1]:null;null!==s&&Math.floor(Math.abs(i-t))<=1?o[o.length-1]=s.add(e):o.push(e),i=t}),o}function c(e){var t={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?l.extend(t,e):("boolean"==typeof e?t.byRow=e:"remove"===e&&(t.remove=!0),t)}var i=-1,o=-1,u=l.fn.matchHeight=function(e){var t=c(e);if(t.remove){var s=this;return this.css(t.property,""),l.each(u._groups,function(e,t){t.elements=t.elements.not(s)}),this}return this.length<=1&&!t.target||(u._groups.push({elements:this,options:t}),u._apply(this,t)),this};u.version="0.7.0",u._groups=[],u._throttle=80,u._maintainScroll=!1,u._beforeUpdate=null,u._afterUpdate=null,u._rows=d,u._parse=h,u._parseOptions=c,u._apply=function(e,t){var n=c(t),s=l(e),i=[s],o=l(window).scrollTop(),a=l("html").outerHeight(!0),r=s.parents().filter(":hidden");return r.each(function(){var e=l(this);e.data("style-cache",e.attr("style"))}),r.css("display","block"),n.byRow&&!n.target&&(s.each(function(){var e=l(this),t=e.css("display");"inline-block"!==t&&"flex"!==t&&"inline-flex"!==t&&(t="block"),e.data("style-cache",e.attr("style")),e.css({display:t,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),i=d(s),s.each(function(){var e=l(this);e.attr("style",e.data("style-cache")||"")})),l.each(i,function(e,t){var s=l(t),o=0;if(n.target)o=n.target.outerHeight(!1);else{if(n.byRow&&s.length<=1)return void s.css(n.property,"");s.each(function(){var e=l(this),t=e.attr("style"),s=e.css("display");"inline-block"!==s&&"flex"!==s&&"inline-flex"!==s&&(s="block");var i={display:s};i[n.property]="",e.css(i),e.outerHeight(!1)>o&&(o=e.outerHeight(!1)),t?e.attr("style",t):e.css("display","")})}s.each(function(){var e=l(this),t=0;n.target&&e.is(n.target)||("border-box"!==e.css("box-sizing")&&(t+=h(e.css("border-top-width"))+h(e.css("border-bottom-width")),t+=h(e.css("padding-top"))+h(e.css("padding-bottom"))),e.css(n.property,o-t+"px"))})}),r.each(function(){var e=l(this);e.attr("style",e.data("style-cache")||null)}),u._maintainScroll&&l(window).scrollTop(o/a*l("html").outerHeight(!0)),this},u._applyDataApi=function(){var s={};l("[data-match-height], [data-mh]").each(function(){var e=l(this),t=e.attr("data-mh")||e.attr("data-match-height");s[t]=t in s?s[t].add(e):e}),l.each(s,function(){this.matchHeight(!0)})};function n(e){u._beforeUpdate&&u._beforeUpdate(e,u._groups),l.each(u._groups,function(){u._apply(this.elements,this.options)}),u._afterUpdate&&u._afterUpdate(e,u._groups)}u._update=function(e,t){if(t&&"resize"===t.type){var s=l(window).width();if(s===i)return;i=s}e?-1===o&&(o=setTimeout(function(){n(t),o=-1},u._throttle)):n(t)},l(u._applyDataApi),l(window).bind("load",function(e){u._update(!1,e)}),l(window).bind("resize orientationchange",function(e){u._update(!0,e)})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:80:"/local/templates/redisign/js/vendors/jquery.ui.touch-punch.min.js?17328112231301";s:6:"source";s:65:"/local/templates/redisign/js/vendors/jquery.ui.touch-punch.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:51:"/local/templates/redisign/js/app.js?173281122321576";s:6:"source";s:35:"/local/templates/redisign/js/app.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* ^^^
 * Глобальные-вспомогательные функции
 * ========================================================================== */

/**
  * Возвращает HTML-код иконки из SVG-спрайта
  *
  * @param {String} name Название иконки из спрайта
  * @param {Object} opts Объект настроек для SVG-иконки
  *
  * @example SVG-иконка
  * getSVGSpriteIcon('some-icon', {
  *   tag: 'div',
  *   type: 'icons', // colored для подключения иконки из цветного спрайта
  *   class: '', // дополнительные классы для иконки
  *   mode: 'inline', // external для подключаемых спрайтов
  *   url: '', // путь до файла спрайта, необходим только для подключаемых спрайтов
  * });
  */
function getSVGSpriteIcon(name, opts) {
  opts = _extends({
    tag: 'div',
    type: 'icons',
    "class": '',
    mode: 'inline',
    url: ''
  }, opts);
  var external = '';
  var typeClass = '';

  if (opts.mode === 'external') {
    external = "".concat(opts.url, "/sprite.").concat(opts.type, ".svg");
  }

  if (opts.type !== 'icons') {
    typeClass = " svg-icon--".concat(opts.type);
  }

  opts["class"] = opts["class"] ? " ".concat(opts["class"]) : '';
  return "\n    <".concat(opts.tag, " class=\"svg-icon svg-icon--").concat(name).concat(typeClass).concat(opts["class"], "\" aria-hidden=\"true\" focusable=\"false\">\n      <svg class=\"svg-icon__link\">\n        <use xlink:href=\"").concat(external, "#").concat(name, "\"></use>\n      </svg>\n    </").concat(opts.tag, ">\n  ");
}
/* ^^^
 * JQUERY Actions
 * ========================================================================== */


$(function () {
  'use strict';
  /**
   * определение существования элемента на странице
   */

  var _responsive;

  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  function documentAddClassOverflowHidden() {
    if (/iPod|iPad|iPhone/i.test(navigator.userAgent)) {
      $('body').addClass('overflow-hidden');
    } else {
      $('body').removeClass('overflow-hidden');
      $(document.documentElement).addClass('overflow-hidden');
    }
  }

  function documentRemoveClassOverflowHidden() {
    $('body').removeClass('overflow-hidden');
    $(document.documentElement).removeClass('overflow-hidden');
  }

  var headerResizeFlag = 1,
      tabletWidth = parseFloat(getComputedStyle(document.body).getPropertyValue('--display-tablet'));

  function headerResize() {
    if (window.matchMedia('(max-width:' + tabletWidth + 'px)').matches && headerResizeFlag == 1) {
      $('.app-header__login').appendTo('.mobile-panel__content');
      $('.app-header__phones-and-feedback').appendTo('.mobile-panel__content');
      $('.app-header__cart').appendTo('.mobile-panel__content');
      $('.app-header__menu').appendTo('.mobile-panel__content');
      headerResizeFlag = 2;
    } else if (window.matchMedia('(min-width:' + (tabletWidth + 1) + 'px)').matches && headerResizeFlag == 2) {
      $('.app-header__email').appendTo('.app-header__info');
      $('.app-header__phones-and-feedback').appendTo('.app-header__info');
      $('.app-header__cart').appendTo('.app-header__info');
      $('.app-header__login').appendTo('.app-header__info');
      $('.app-header__menu').prependTo('.app-header__menu-and-search-container');
      headerResizeFlag = 1;
    }
  }

  $('.app-header__burger').on('click tap', function () {
    $('.mobile-panel').addClass('opened');
    $('.app__overlay').addClass('opened');
    documentAddClassOverflowHidden();
  });
  $('.has-sublevel').each(function () {
    if ($(this).children('ul').length) {
      $(this).find('>a').append('<span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.2 9.2"><path d="M17.42,6.11a.7.7,0,0,1,1,0,.68.68,0,0,1,0,1l-7.91,7.83a.7.7,0,0,1-1,0L1.6,7.08a.68.68,0,0,1,0-1,.7.7,0,0,1,1,0L10,13.25Z" transform="translate(-1.4 -5.91)"/></svg></span>');
    }
  });
  $('.has-sublevel > a > .arrow').on('click', function (event) {
    event.preventDefault();
    $(this).closest('li').toggleClass('opened');
  });
  $('.svg-icon--phones-arrow').on('click', function (event) {
    $(this).closest('.app-header__phones').toggleClass('opened');
  });
  $(document).on('click tap', function (event) {
    if ($(event.target).closest('.app-header__burger, .mobile-panel__content, .svg-icon--phones-arrow').length) return;
    $('.app-header__phones').removeClass('opened');
    $('.mobile-panel').removeClass('opened');
    $('.app__overlay').removeClass('opened');
    documentRemoveClassOverflowHidden();
  });
  var docScrollFlag = 1;
  var menuOffsetTop = $('.app-header__menu-and-search').offset().top;
  $(document).on('scroll', function () {
    if (window.matchMedia('(min-width:' + (tabletWidth + 1) + 'px)').matches) {
      if ($(document).scrollTop() > menuOffsetTop && docScrollFlag == 1) {
        $('.app-header__menu-and-search').addClass('fixed');
        $('.app-header').css({
          'padding-bottom': $('.app-header__menu-and-search').innerHeight() + 21
        });
        docScrollFlag = 2;
      } else if ($(document).scrollTop() < menuOffsetTop && docScrollFlag == 2) {
        $('.app-header__menu-and-search').removeClass('fixed');
        $('.app-header').removeAttr('style');
        docScrollFlag = 1;
      }
    }
  });
  $('.js-banner').owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    margin: 100,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    navText: ['', '']
  });
  $('.js-sertificates').owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    margin: 47,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['', ''],
    responsive: {
      320: {
        margin: 20,
        items: 1
      },
      441: {
        margin: 20,
        items: 2
      },
      1021: {
        items: 4
      }
    }
  });
  $('.owl-prev').append('<svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.814 22.814L0.500028 11.5L11.814 0.186035L13.228 1.60004L3.32803 11.5L13.228 21.4L11.814 22.814Z" fill="#0078AD"/></svg>');
  $('.owl-next').append('<svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.18597 22.814L13.5 11.5L2.18597 0.186035L0.771973 1.60004L10.672 11.5L0.771973 21.4L2.18597 22.814Z" fill="#0078AD"/></svg>');
  var galleryArrow = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path id="rght_copy" data-name="rght copy" class="cls-1" d="M680,2474a20,20,0,1,1,20-20A20.021,20.021,0,0,1,680,2474Zm0-38a18,18,0,1,0,18,18A18.018,18.018,0,0,0,680,2436Zm3.777,24.33a1.014,1.014,0,0,1-1.42,0,0.994,0.994,0,0,1,0-1.41l3.915-3.92H671.313a0.994,0.994,0,0,1-1-.99,1,1,0,0,1,1-1.01h14.968l-3.916-3.91a1,1,0,0,1,1.412-1.41l5.619,5.62a0.992,0.992,0,0,1,0,1.41Z"transform="translate(-660 -2434)"/></svg>';
  $('.js-sertificates').lightGallery({
    thumbnail: false,
    autoplayControls: false,
    fullScreen: false,
    download: false,
    counter: false,
    toogleThumb: false,
    thumbMargin: 20,
    thumbWidth: 150,
    thumbContHeight: 115,
    loop: false,
    hash: false,
    zoom: 1,
    actualSize: false,
    selector: '.lightGallery-item',
    prevHtml: galleryArrow,
    nextHtml: galleryArrow
  });

  (function () {
    var $titles = $('.contacts__title a');
    var $bodys = $('.contacts__container');

    if (!$titles.length) {
      return;
    }

    $($titles).on('click', function (event) {
      event.preventDefault();

      if ($(this).hasClass('is-active')) {
        return;
      }

      var indx = $(this).data('tab-index');
      $titles.removeClass('is-active');
      $(this).addClass('is-active');
      $bodys.removeClass('is-active').hide().filter('[data-tab-index="' + indx + '"]').fadeIn();
    });
  })();

  var contactsFlag = 1;

  function contactsImagesResize() {
    if ($(window).width() <= 575 && contactsFlag == 1) {
      $('.js-contacts-images-slider').each(function () {
        var slider = $(this);
        slider.addClass('owl-carousel').owlCarousel({
          items: 1,
          loop: true,
          autoplay: false,
          margin: 20,
          autoplayTimeout: 5000,
          smartSpeed: 800,
          autoplayHoverPause: true,
          nav: true,
          dots: false,
          navText: ['', '']
        });
      });
      contactsFlag = 2;
      $('.js-contacts-images-slider .owl-prev').append('<svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646445 4.85355C0.451183 4.65829 0.451183 4.34171 0.646445 4.14645L3.82843 0.964466C4.02369 0.769204 4.34027 0.769204 4.53553 0.964466C4.73079 1.15973 4.73079 1.47631 4.53553 1.67157L1.70711 4.5L4.53553 7.32843C4.73079 7.52369 4.73079 7.84027 4.53553 8.03553C4.34027 8.2308 4.02369 8.2308 3.82843 8.03553L0.646445 4.85355ZM16 5H0.999999V4H16V5Z" fill="white"/></svg>');
      $('.js-contacts-images-slider .owl-next').append('<svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3536 4.85355C15.5488 4.65829 15.5488 4.34171 15.3536 4.14645L12.1716 0.964466C11.9763 0.769204 11.6597 0.769204 11.4645 0.964466C11.2692 1.15973 11.2692 1.47631 11.4645 1.67157L14.2929 4.5L11.4645 7.32843C11.2692 7.52369 11.2692 7.84027 11.4645 8.03553C11.6597 8.2308 11.9763 8.2308 12.1716 8.03553L15.3536 4.85355ZM0 5H15V4H0V5Z" fill="white"/></svg>');
    } else if ($(window).width() > 575 && contactsFlag == 2) {
      $('.js-contacts-images-slider').removeClass('owl-carousel').trigger('destroy.owl.carousel');
      contactsFlag = 1;
    }
  }

  var galleryArrow = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path id="rght_copy" data-name="rght copy" class="cls-1" d="M680,2474a20,20,0,1,1,20-20A20.021,20.021,0,0,1,680,2474Zm0-38a18,18,0,1,0,18,18A18.018,18.018,0,0,0,680,2436Zm3.777,24.33a1.014,1.014,0,0,1-1.42,0,0.994,0.994,0,0,1,0-1.41l3.915-3.92H671.313a0.994,0.994,0,0,1-1-.99,1,1,0,0,1,1-1.01h14.968l-3.916-3.91a1,1,0,0,1,1.412-1.41l5.619,5.62a0.992,0.992,0,0,1,0,1.41Z"transform="translate(-660 -2434)"/></svg>';
  $('.contacts__images-list').lightGallery({
    thumbnail: false,
    autoplayControls: false,
    fullScreen: false,
    download: false,
    counter: false,
    toogleThumb: false,
    thumbMargin: 20,
    thumbWidth: 150,
    thumbContHeight: 115,
    loop: false,
    hash: false,
    zoom: 1,
    actualSize: false,
    selector: '.contacts__images-list-item-in a',
    prevHtml: galleryArrow,
    nextHtml: galleryArrow
  });

  $('.thank-letter').lightGallery({
    thumbnail: false,
    autoplayControls: false,
    fullScreen: false,
    download: false,
    counter: false,
    toogleThumb: false,
    thumbMargin: 20,
    thumbWidth: 150,
    thumbContHeight: 115,
    loop: false,
    hash: false,
    zoom: 1,
    actualSize: false,
    selector: '.thank-letter a',
    prevHtml: galleryArrow,
    nextHtml: galleryArrow
  });
  $('.js-range-slider').each(function (index, el) {
    var itemRange = $(this).find('.filter__item-range');
    var itemMin = $(this).find('.filter__item-range').data('min');
    var itemMax = $(this).find('.filter__item-range').data('max');
    itemRange.slider({
      range: true,
      min: itemMin,
      max: itemMax,
      values: [itemMin, itemMax],
      slide: function slide(event, ui) {
        if (ui.handleIndex == 0) {
          itemRange.find('.ui-slider-handle.from span').text(ui.value);
        } else {
          itemRange.find('.ui-slider-handle.up-to span').text(ui.value);
        }
      }
    });
    itemRange.find('.ui-slider-handle').eq(0).addClass('from').append('<span>' + itemMin + '</span>');
    itemRange.find('.ui-slider-handle').eq(1).addClass('up-to').append('<span>' + itemMax + '</span>');
  });
  $('input[type="radio"], input[type="checkbox"]').styler();
  $('.filter__item-title').on('click', function () {
    $(this).closest('.filter__item').toggleClass('closed').find('.filter__item-content').slideToggle(200);
  });
  $('.filter__item').each(function (i) {
    if ($(window).width() <= tabletWidth) {
      if (i > 1) {
        $(this).addClass('closed').find('.filter__item-content').css({
          'display': 'none'
        });
      }
    }
  });
  $('.toggle-filter').on('click', function (event) {
    event.preventDefault();
    var $this = $(this);
    $this.closest('.filter').toggleClass('hide').find('.filter__items-wrapper').stop().slideToggle(300);
  });
  var manufacturingFlag = 1;

  function manufacturingResize() {
    if ($(window).width() <= 575 && manufacturingFlag == 1) {
      $('.js-mn-slider').addClass('owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        margin: 20,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['', '']
      });
      manufacturingFlag = 2;
      $('.js-mn-slider .owl-prev').append('<svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.814 22.814L0.500028 11.5L11.814 0.186035L13.228 1.60004L3.32803 11.5L13.228 21.4L11.814 22.814Z" fill="#0078AD"/></svg>');
      $('.js-mn-slider .owl-next').append('<svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.18597 22.814L13.5 11.5L2.18597 0.186035L0.771973 1.60004L10.672 11.5L0.771973 21.4L2.18597 22.814Z" fill="#0078AD"/></svg>');
    } else if ($(window).width() > 575 && manufacturingFlag == 2) {
      $('.js-mn-slider').removeClass('owl-carousel').trigger('destroy.owl.carousel');
      manufacturingFlag = 1;
    }
  }

  var PAGE = $('html, body');
  var pageScroller = $('.page-scroller');
  var inMemoryClass = 'page-scroller--memorized';
  var isVisibleClass = 'page-scroller--visible';
  var enabledOffset = 60;
  var pageYOffset = 0;
  var inMemory = false;

  function resetPageScroller() {
    setTimeout(function () {
      if (window.pageYOffset > enabledOffset) {
        pageScroller.addClass(isVisibleClass);
      } else if (!pageScroller.hasClass(inMemoryClass)) {
        pageScroller.removeClass(isVisibleClass);
      }
    }, 150);

    if (!inMemory) {
      pageYOffset = 0;
      pageScroller.removeClass(inMemoryClass);
    }

    inMemory = false;
  }

  if (pageScroller.length > 0) {
    window.addEventListener('scroll', resetPageScroller, window.supportsPassive ? {
      passive: true
    } : false);
    pageScroller.on('click', function (event) {
      event.preventDefault();
      window.removeEventListener('scroll', resetPageScroller);

      if (window.pageYOffset > 0 && pageYOffset === 0) {
        inMemory = true;
        pageYOffset = window.pageYOffset;
        pageScroller.addClass(inMemoryClass);
        PAGE.stop().animate({
          scrollTop: 0
        }, 500, 'swing', function () {
          window.addEventListener('scroll', resetPageScroller, window.supportsPassive ? {
            passive: true
          } : false);
        });
      } else {
        pageScroller.removeClass(inMemoryClass);
        PAGE.stop().animate({
          scrollTop: pageYOffset
        }, 500, 'swing', function () {
          pageYOffset = 0;
          window.addEventListener('scroll', resetPageScroller, window.supportsPassive ? {
            passive: true
          } : false);
        });
      }
    });
  }

  var galleryArrow = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path id="rght_copy" data-name="rght copy" class="cls-1" d="M680,2474a20,20,0,1,1,20-20A20.021,20.021,0,0,1,680,2474Zm0-38a18,18,0,1,0,18,18A18.018,18.018,0,0,0,680,2436Zm3.777,24.33a1.014,1.014,0,0,1-1.42,0,0.994,0.994,0,0,1,0-1.41l3.915-3.92H671.313a0.994,0.994,0,0,1-1-.99,1,1,0,0,1,1-1.01h14.968l-3.916-3.91a1,1,0,0,1,1.412-1.41l5.619,5.62a0.992,0.992,0,0,1,0,1.41Z"transform="translate(-660 -2434)"/></svg>';
  $('.product-card__image').lightGallery({
    thumbnail: false,
    autoplayControls: false,
    fullScreen: false,
    download: false,
    counter: false,
    toogleThumb: false,
    thumbMargin: 20,
    thumbWidth: 150,
    thumbContHeight: 115,
    loop: false,
    hash: false,
    zoom: 1,
    actualSize: false,
    selector: '.product-card__image a',
    prevHtml: galleryArrow,
    nextHtml: galleryArrow
  });
  $('.product__image').matchHeight();
  $('.product__name').matchHeight();
  $('.product__middle').matchHeight();
  $('.js-sertificates').owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    margin: 100,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    navText: ['', ''],
    responsive: (_responsive = {
      320: {
        items: 1
      }
    }, _defineProperty(_responsive, "320", {
      items: 1
    }), _defineProperty(_responsive, 1400, {
      items: 4
    }), _responsive)
  });
  $('.tabs__title').each(function () {
    var clone = $(this).clone().addClass('mobile').removeClass('is-active');
    var index = $(this).data('tab-index');
    var arrow = '<span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.2 9.2"><path d="M17.42,6.11a.7.7,0,0,1,1,0,.68.68,0,0,1,0,1l-7.91,7.83a.7.7,0,0,1-1,0L1.6,7.08a.68.68,0,0,1,0-1,.7.7,0,0,1,1,0L10,13.25Z" transform="translate(-1.4 -5.91)"/></svg></span>';
    $('.tabs__container[data-tab-index="' + index + '"]').before(clone.append(arrow));
  });

  (function () {
    var $titles = $('.tabs__title');
    var $bodys = $('.tabs__container');

    if (!$titles.length) {
      return;
    }

    $(document).on('click', '.tabs__title', function (event) {
      event.preventDefault();
      var indx = $(this).data('tab-index');
      var offsetTop = $(this).offset().top;

      if ($(window).width() <= tabletWidth) {
        var mobileTilte = $(this);
        $(this).toggleClass('is-active');
        $bodys.stop().filter('[data-tab-index="' + indx + '"]').slideToggle(250, function () {
          if (mobileTilte.hasClass('is-active')) {
            $('html,body').animate({
              scrollTop: offsetTop - 88
            }, 300);
          }
        });
      } else {
        if ($(this).hasClass('is-active')) {
          return;
        }

        $titles.removeClass('is-active');
        $(this).addClass('is-active');
        $bodys.removeClass('is-active').hide().filter('[data-tab-index="' + indx + '"]').fadeIn();
      }
    });
  })();

  var customersFlag = 1;

  function customersResize() {
    if ($(window).width() <= 700 && customersFlag == 1) {
      $('.js-customers-slider').addClass('owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        autoplay: false,
        margin: 20,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['', ''],
        responsive: {
          320: {
            margin: 20,
            items: 1
          },
          481: {
            margin: 20,
            items: 2
          },
          575: {
            items: 3
          }
        }
      });
      customersFlag = 2;
      $('.js-customers-slider .owl-prev').append('<svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.814 22.814L0.500028 11.5L11.814 0.186035L13.228 1.60004L3.32803 11.5L13.228 21.4L11.814 22.814Z" fill="#0078AD"/></svg>');
      $('.js-customers-slider .owl-next').append('<svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.18597 22.814L13.5 11.5L2.18597 0.186035L0.771973 1.60004L10.672 11.5L0.771973 21.4L2.18597 22.814Z" fill="#0078AD"/></svg>');
    } else if ($(window).width() > 700 && customersFlag == 2) {
      $('.js-customers-slider').removeClass('owl-carousel').trigger('destroy.owl.carousel');
      customersFlag = 1;
    }
  }

  $(window).on('resize load', function () {
    headerResize();
    manufacturingResize();
    customersResize();
    contactsImagesResize();
  });
});

jQuery(document).ready(function() {

jQuery(".arrow-wrapper").click(function (e) {
  if (e.target.tagName.toLowerCase() === 'li') {
    jQuery(this).toggleClass("up");
    jQuery(this).toggleClass("down");
  }
});


var cureint = jQuery('.arrow-wrapper ul .active');

if (cureint.length > 0) {
  cureint.parent().parent().parent().parent().removeClass('down');
  cureint.parent().parent().parent().parent().addClass('up');
  cureint.parent().parent().parent().show();

}

$('.arrow-wrapper ul li .active').parent().parent().parent().siblings().children('span').removeClass('active');

}); 
/* End */
;
; /* Start:"a:4:{s:4:"full";s:65:"/local/templates/redisign/js/jquery.maskedinput.js?17328112237207";s:6:"source";s:50:"/local/templates/redisign/js/jquery.maskedinput.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function getPasteEvent() {
    var el = document.createElement('input'),
        name = 'onpaste';
    el.setAttribute(name, '');
    return (typeof el[name] === 'function')?'paste':'input';             
}

var pasteEventName = getPasteEvent() + ".mask",
	ua = navigator.userAgent,
	iPhone = /iphone/i.test(ua),
	android=/android/i.test(ua),
	caretTimeoutId;

$.mask = {
	//Predefined character definitions
	definitions: {
		'9': "[0-9]",
		'a': "[A-Za-z]",
		'*': "[A-Za-z0-9]"
	},
	dataName: "rawMaskFn",
	placeholder: '_',
};

$.fn.extend({
	//Helper Function for Caret positioning
	caret: function(begin, end) {
		var range;

		if (this.length === 0 || this.is(":hidden")) {
			return;
		}

		if (typeof begin == 'number') {
			end = (typeof end === 'number') ? end : begin;
			return this.each(function() {
				if (this.setSelectionRange) {
					this.setSelectionRange(begin, end);
				} else if (this.createTextRange) {
					range = this.createTextRange();
					range.collapse(true);
					range.moveEnd('character', end);
					range.moveStart('character', begin);
					range.select();
				}
			});
		} else {
			if (this[0].setSelectionRange) {
				begin = this[0].selectionStart;
				end = this[0].selectionEnd;
			} else if (document.selection && document.selection.createRange) {
				range = document.selection.createRange();
				begin = 0 - range.duplicate().moveStart('character', -100000);
				end = begin + range.text.length;
			}
			return { begin: begin, end: end };
		}
	},
	unmask: function() {
		return this.trigger("unmask");
	},
	mask: function(mask, settings) {
		var input,
			defs,
			tests,
			partialPosition,
			firstNonMaskPos,
			len;

		if (!mask && this.length > 0) {
			input = $(this[0]);
			return input.data($.mask.dataName)();
		}
		settings = $.extend({
			placeholder: $.mask.placeholder, // Load default placeholder
			completed: null
		}, settings);


		defs = $.mask.definitions;
		tests = [];
		partialPosition = len = mask.length;
		firstNonMaskPos = null;

		$.each(mask.split(""), function(i, c) {
			if (c == '?') {
				len--;
				partialPosition = i;
			} else if (defs[c]) {
				tests.push(new RegExp(defs[c]));
				if (firstNonMaskPos === null) {
					firstNonMaskPos = tests.length - 1;
				}
			} else {
				tests.push(null);
			}
		});

		return this.trigger("unmask").each(function() {
			var input = $(this),
				buffer = $.map(
				mask.split(""),
				function(c, i) {
					if (c != '?') {
						return defs[c] ? settings.placeholder : c;
					}
				}),
				focusText = input.val();

			function seekNext(pos) {
				while (++pos < len && !tests[pos]);
				return pos;
			}

			function seekPrev(pos) {
				while (--pos >= 0 && !tests[pos]);
				return pos;
			}

			function shiftL(begin,end) {
				var i,
					j;

				if (begin<0) {
					return;
				}

				for (i = begin, j = seekNext(end); i < len; i++) {
					if (tests[i]) {
						if (j < len && tests[i].test(buffer[j])) {
							buffer[i] = buffer[j];
							buffer[j] = settings.placeholder;
						} else {
							break;
						}

						j = seekNext(j);
					}
				}
				writeBuffer();
				input.caret(Math.max(firstNonMaskPos, begin));
			}

			function shiftR(pos) {
				var i,
					c,
					j,
					t;

				for (i = pos, c = settings.placeholder; i < len; i++) {
					if (tests[i]) {
						j = seekNext(i);
						t = buffer[i];
						buffer[i] = c;
						if (j < len && tests[j].test(t)) {
							c = t;
						} else {
							break;
						}
					}
				}
			}

			function keydownEvent(e) {
				var k = e.which,
					pos,
					begin,
					end;

				//backspace, delete, and escape get special treatment
				if (k === 8 || k === 46 || (iPhone && k === 127)) {
					pos = input.caret();
					begin = pos.begin;
					end = pos.end;

					if (end - begin === 0) {
						begin=k!==46?seekPrev(begin):(end=seekNext(begin-1));
						end=k===46?seekNext(end):end;
					}
					clearBuffer(begin, end);
					shiftL(begin, end - 1);

					e.preventDefault();
				} else if (k == 27) {//escape
					input.val(focusText);
					input.caret(0, checkVal());
					e.preventDefault();
				}
			}

			function keypressEvent(e) {
				var k = e.which,
					pos = input.caret(),
					p,
					c,
					next;

				if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore
					return;
				} else if (k) {
					if (pos.end - pos.begin !== 0){
						clearBuffer(pos.begin, pos.end);
						shiftL(pos.begin, pos.end-1);
					}

					p = seekNext(pos.begin - 1);
					if (p < len) {
						c = String.fromCharCode(k);
						if (tests[p].test(c)) {
							shiftR(p);

							buffer[p] = c;
							writeBuffer();
							next = seekNext(p);

							if(android){
								setTimeout($.proxy($.fn.caret,input,next),0);
							}else{
								input.caret(next);
							}

							if (settings.completed && next >= len) {
								settings.completed.call(input);
							}
						}
					}
					e.preventDefault();
				}
			}

			function clearBuffer(start, end) {
				var i;
				for (i = start; i < end && i < len; i++) {
					if (tests[i]) {
						buffer[i] = settings.placeholder;
					}
				}
			}

			function writeBuffer() { input.val(buffer.join('')); }

			function checkVal(allow) {
				//try to place characters where they belong
				var test = input.val(),
					lastMatch = -1,
					i,
					c;

				for (i = 0, pos = 0; i < len; i++) {
					if (tests[i]) {
						buffer[i] = settings.placeholder;
						while (pos++ < test.length) {
							c = test.charAt(pos - 1);
							if (tests[i].test(c)) {
								buffer[i] = c;
								lastMatch = i;
								break;
							}
						}
						if (pos > test.length) {
							break;
						}
					} else if (buffer[i] === test.charAt(pos) && i !== partialPosition) {
						pos++;
						lastMatch = i;
					}
				}
				if (allow) {
					writeBuffer();
				} else if (lastMatch + 1 < partialPosition) {
					input.val("");
					clearBuffer(0, len);
				} else {
					writeBuffer();
					input.val(input.val().substring(0, lastMatch + 1));
				}
				return (partialPosition ? i : firstNonMaskPos);
			}

			input.data($.mask.dataName,function(){
				return $.map(buffer, function(c, i) {
					return tests[i]&&c!=settings.placeholder ? c : null;
				}).join('');
			});

			if (!input.attr("readonly"))
				input
				.one("unmask", function() {
					input
						.unbind(".mask")
						.removeData($.mask.dataName);
				})
				.bind("focus.mask", function() {
					clearTimeout(caretTimeoutId);
					var pos,
						moveCaret;

					focusText = input.val();
					pos = checkVal();
					
					caretTimeoutId = setTimeout(function(){
						writeBuffer();
						if (pos == mask.length) {
							input.caret(0, pos);
						} else {
							input.caret(pos);
						}
					}, 10);
				})
				.bind("blur.mask", function() {
					checkVal();
					if (input.val() != focusText)
						input.change();
				})
				.bind("keydown.mask", keydownEvent)
				.bind("keypress.mask", keypressEvent)
				.bind(pasteEventName, function() {
					setTimeout(function() { 
						var pos=checkVal(true);
						input.caret(pos); 
						if (settings.completed && pos == input.val().length)
							settings.completed.call(input);
					}, 0);
				});
			checkVal(); //Perform initial check for existing values
		});
	}
});


/* End */
;
; /* Start:"a:4:{s:4:"full";s:80:"/local/templates/redisign/lib/fancybox/source/jquery.fancybox.js?173281122348741";s:6:"source";s:64:"/local/templates/redisign/lib/fancybox/source/jquery.fancybox.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function (window, document, $, undefined) {
	"use strict";

	var H = $("html"),
		W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply( this, arguments );
		},
		IE =  navigator.userAgent.match(/msie/i),
		didUpdate	= null,
		isTouch		= document.createTouch !== undefined,

		isQuery	= function(obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function(str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function(str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function(el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function(orig, dim) {
			var value = parseInt(orig, 10) || 0;

			if (dim && isPercentage(orig)) {
				value = F.getViewport()[ dim ] / 100 * value;
			}

			return Math.ceil(value);
		},
		getValue = function(value, dim) {
			return getScalar(value, dim) + 'px';
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.5',

		defaults: {
			padding : 15,
			margin  : 20,

			width     : 800,
			height    : 600,
			minWidth  : 100,
			minHeight : 100,
			maxWidth  : 9999,
			maxHeight : 9999,
			pixelRatio: 1, // Set to 2 for retina display support

			autoSize   : true,
			autoHeight : false,
			autoWidth  : false,

			autoResize  : true,
			autoCenter  : !isTouch,
			fitToView   : true,
			aspectRatio : false,
			topRatio    : 0.5,
			leftRatio   : 0.5,

			scrolling : 'auto', // 'auto', 'yes' or 'no'
			wrapCSS   : '',

			arrows     : true,
			closeBtn   : true,
			closeClick : false,
			nextClick  : false,
			mouseWheel : true,
			autoPlay   : false,
			playSpeed  : 3000,
			preload    : 3,
			modal      : false,
			loop       : true,

			ajax  : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			},
			iframe : {
				scrolling : 'auto',
				preload   : true
			},
			swf : {
				wmode: 'transparent',
				allowfullscreen   : 'true',
				allowscriptaccess : 'always'
			},

			keys  : {
				next : {
					13 : 'left', // enter
					34 : 'up',   // page down
					39 : 'left', // right arrow
					40 : 'up'    // down arrow
				},
				prev : {
					8  : 'right',  // backspace
					33 : 'down',   // page up
					37 : 'right',  // left arrow
					38 : 'down'    // up arrow
				},
				close  : [27], // escape key
				play   : [32], // space - start/stop slideshow
				toggle : [70]  // letter "f" - toggle fullscreen
			},

			direction : {
				next : 'left',
				prev : 'right'
			},

			scrollOutside  : true,

			// Override some properties
			index   : 0,
			type    : null,
			href    : null,
			content : null,
			title   : null,

			// HTML templates
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image    : '<img class="fancybox-image" src="{href}" alt="" />',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
				error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn : '<a title="Закрыть" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="Следующее" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="Предыдущее" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect  : 'fade', // 'elastic', 'fade' or 'none'
			openSpeed   : 250,
			openEasing  : 'swing',
			openOpacity : true,
			openMethod  : 'zoomIn',

			// Closing fancyBox
			closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed   : 250,
			closeEasing  : 'swing',
			closeOpacity : true,
			closeMethod  : 'zoomOut',

			// Changing next gallery item
			nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed  : 250,
			nextEasing : 'swing',
			nextMethod : 'changeIn',

			// Changing previous gallery item
			prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed  : 250,
			prevEasing : 'swing',
			prevMethod : 'changeOut',

			// Enable default helpers
			helpers : {
				overlay : true,
				title   : true
			},

			// Callbacks
			onCancel     : $.noop, // If canceling
			beforeLoad   : $.noop, // Before loading
			afterLoad    : $.noop, // After loading
			beforeShow   : $.noop, // Before changing in current item
			afterShow    : $.noop, // After opening
			beforeChange : $.noop, // Before changing gallery item
			beforeClose  : $.noop, // Before closing
			afterClose   : $.noop  // After closing
		},

		//Current state
		group    : {}, // Selected group
		opts     : {}, // Group options
		previous : null,  // Previous element
		coming   : null,  // Element being loaded
		current  : null,  // Currently loaded element
		isActive : false, // Is activated
		isOpen   : false, // Is currently open
		isOpened : false, // Have been fully opened at least once

		wrap  : null,
		skin  : null,
		outer : null,
		inner : null,

		player : {
			timer    : null,
			isActive : false
		},

		// Loaders
		ajaxLoad   : null,
		imgPreload : null,

		// Some collections
		transitions : {},
		helpers     : {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function(i, element) {
				var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href    : element.data('fancybox-href') || element.attr('href'),
							title   : element.data('fancybox-title') || element.attr('title'),
							isDom   : true,
							element : element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}

					} else {
						obj = element;
					}
				}

				href  = opts.href  || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type    = content ? 'html' : (opts.type  || obj.type);

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez  = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';

						} else if (F.isSWF(href)) {
							type = 'swf';

						} else if (href.charAt(0) === '#') {
							type = 'inline';

						} else if (isString(element)) {
							type    = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href      = hrefParts.shift();
						selector  = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

						} else if (obj.isDom) {
							content = element;
						}

					} else if (type === 'html') {
						content = href;

					} else if (!type && !href && obj.isDom) {
						type    = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href     : href,
					type     : type,
					content  : content,
					title    : title,
					selector : selector
				});

				group[ i ] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (!coming || false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				coming.wrap.stop(true, true).trigger('onReset').remove();
			}

			F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut( coming );
			}
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (event) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isActive) {
				return;
			}

			if (!F.isOpen || event === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				F.transitions[ F.current.closeMethod ]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function ( action ) {
			var clear = function () {
					clearTimeout(F.player.timer);
				},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					D.unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						D.bind({
							'onCancel.player beforeClose.player' : stop,
							'onUpdate.player'   : set,
							'beforeLoad.player' : clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (action === true || (!F.player.isActive && action !== false)) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function ( index, direction, router ) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
			F.router    = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + (index % current.group.length);
				}

				index = index % current.group.length;
			}

			if (current.group[ index ] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var current = F.current,
				wrap    = current ? current.wrap : null,
				pos;

			if (wrap) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					wrap.stop(true, true).animate(pos, 200);

				} else {
					wrap.css(pos);

					current.pos = $.extend({}, current.dim, pos);
				}
			}
		},

		update: function (e) {
			var type = (e && e.type),
				anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			didUpdate = setTimeout(function() {
				var current = F.current;

				if (!current || F.isClosing) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;

			}, (anyway && !isTouch ? 0 : 300));
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function ( action ) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				// Help browser to restore document dimensions
				if (isTouch) {
					F.wrap.removeAttr('style').addClass('fancybox-tmp');

					F.trigger('onUpdate');
				}

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('.loading');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function(e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();

					F.cancel();
				}
			});

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position : 'absolute',
					top  : (viewport.h * 0.5) + viewport.y,
					left : (viewport.w * 0.5) + viewport.x
				});
			}
		},

		getViewport: function () {
			var locked = (F.current && F.current.locked) || false,
				rez    = {
					x: W.scrollLeft(),
					y: W.scrollTop()
				};

			if (locked) {
				rez.w = locked[0].clientWidth;
				rez.h = locked[0].clientHeight;

			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code   = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function(i, val) {
							if (current.group.length > 1 && val[ code ] !== undefined) {
								F[ i ]( val[ code ] );

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[ i ] ();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
						parent = $(target),
						canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable( parent[0] );
						parent    = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev( deltaY > 0 ? 'down' : 'left' );

							} else if (deltaY < 0 || deltaX < 0) {
								F.next( deltaY < 0 ? 'up' : 'right' );
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (!obj) {
				return;
			}

			if ($.isFunction( obj[event] )) {
				ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
			}

			if (ret === false) {
				return false;
			}

			if (obj.helpers) {
				$.each(obj.helpers, function (helper, opts) {
					if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
						F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
					}
				});
			}

			D.trigger(event);
		},

		isImage: function (str) {
			return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				obj,
				href,
				type,
				margin,
				padding;

			index = getScalar( index );
			obj   = F.group[ index ] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin  = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn   : false,
					closeClick : false,
					nextClick  : false,
					arrows     : false,
					mouseWheel : false,
					keys       : null,
					helpers: {
						overlay : {
							closeClick : false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group  = F.group;
			coming.index  = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[ F.router ]( F.direction );
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling  = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

			$.extend(coming, {
				skin  : $('.fancybox-skin',  coming.wrap),
				outer : $('.fancybox-outer', coming.wrap),
				inner : $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error( 'content' );
				}

			} else if (!href) {
				return F._error( 'href' );
			}

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else {
				F._afterLoad();
			}
		},

		_error: function ( type ) {
			$.extend(F.coming, {
				type       : 'html',
				autoWidth  : true,
				autoHeight : true,
				minWidth   : 0,
				minHeight  : 0,
				scrolling  : 'no',
				hasError   : type,
				content    : F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width  = this.width / F.opts.pixelRatio;
				F.coming.height = this.height / F.opts.pixelRatio;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			img.src = F.coming.href;

			if (img.complete !== true) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function() {
			var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function() {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo( coming.inner );

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function() {
			var group   = F.group,
				current = F.current,
				len     = group.length,
				cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming   = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();
			}

			F.unbindEvents();

			current   = coming;
			content   = coming.content;
			type      = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap  : current.wrap,
				skin  : current.skin,
				outer : current.outer,
				inner : current.inner,
				current  : current,
				previous : previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
							}
						});
					}
				break;

				case 'image':
					content = current.tpl.image.replace('{href}', href);
				break;

				case 'swf':
					content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed   = '';

					$.each(current.swf, function(name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed   += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
				break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append( content );
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			// Set initial dimensions and start position
			F._setDimension();

			F.reposition();

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

			} else if (previous.prevMethod) {
				F.transitions[ previous.prevMethod ]();
			}

			F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport   = F.getViewport(),
				steps      = 0,
				canShrink  = false,
				canExpand  = false,
				wrap       = F.wrap,
				skin       = F.skin,
				inner      = F.inner,
				current    = F.current,
				width      = current.width,
				height     = current.height,
				minWidth   = current.minWidth,
				minHeight  = current.minHeight,
				maxWidth   = current.maxWidth,
				maxHeight  = current.maxHeight,
				scrolling  = current.scrolling,
				scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
				margin     = current.margin,
				wMargin    = getScalar(margin[1] + margin[3]),
				hMargin    = getScalar(margin[0] + margin[2]),
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

			wPadding = getScalar(skin.outerWidth(true)  - skin.width());
			hPadding = getScalar(skin.outerHeight(true) - skin.height());

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width( origWidth ).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.outerHeight(true);
						}

					} catch (e) {}
				}

			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass( 'fancybox-tmp' );

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width( origWidth );
				}

				if (!current.autoHeight) {
					inner.height( origHeight );
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass( 'fancybox-tmp' );
			}

			width  = getScalar( origWidth );
			height = getScalar( origHeight );

			ratio  = origWidth / origHeight;

			// Calculations for the content
			minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth  = maxWidth;
			origMaxHeight = maxHeight;

			if (current.fitToView) {
				maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);
			}

			maxWidth_  = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width  = maxWidth;
					height = getScalar(width / ratio);
				}

				if (height > maxHeight) {
					height = maxHeight;
					width  = getScalar(height * ratio);
				}

				if (width < minWidth) {
					width  = minWidth;
					height = getScalar(width / ratio);
				}

				if (height < minHeight) {
					height = minHeight;
					width  = getScalar(height * ratio);
				}

			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width( width );

					height = inner.height();
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				inner.width( width ).height( height );

				wrap.width( width + wPadding );

				// Real wrap dimensions
				width_  = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width  = getScalar(height * ratio);

						if (width < minWidth) {
							width  = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width  = maxWidth;
							height = getScalar(width / ratio);
						}

						inner.width( width ).height( height );

						wrap.width( width + wPadding );

						width_  = wrap.width();
						height_ = wrap.height();
					}

				} else {
					width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
				width += scrollOut;
			}

			inner.width( width ).height( height );

			wrap.width( width + wPadding );

			width_  = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

			$.extend(current, {
				dim : {
					width	: getValue( width_ ),
					height	: getValue( height_ )
				},
				origWidth  : origWidth,
				origHeight : origHeight,
				canShrink  : canShrink,
				canExpand  : canExpand,
				wPadding   : wPadding,
				hPadding   : hPadding,
				wrapSpace  : height_ - skin.outerHeight(true),
				skinSpace  : skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current  = F.current,
				viewport = F.getViewport(),
				margin   = current.margin,
				width    = F.wrap.width()  + margin[1] + margin[3],
				height   = F.wrap.height() + margin[0] + margin[2],
				rez      = {
					position: 'absolute',
					top  : margin[0],
					left : margin[3]
				};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';

			} else if (!current.locked) {
				rez.top  += viewport.y;
				rez.left += viewport.x;
			}

			rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
			rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

			F.update();

			// Assign a click event
			if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						e.preventDefault();

						F[ current.closeClick ? 'close' : 'next' ]();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
					e.preventDefault();

					F.close();
				});
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {
				F.play( false );

			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play();
			}
		},

		_afterZoomOut: function ( obj ) {
			obj = obj || F.current;

			$('.fancybox-wrap').trigger('onReset').remove();

			$.extend(F, {
				group  : {},
				opts   : {},
				router : false,
				current   : null,
				isActive  : false,
				isOpened  : false,
				isOpen    : false,
				isClosing : false,
				wrap   : null,
				skin   : null,
				outer  : null,
				inner  : null
			});

			F.trigger('afterClose', obj);
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current  = F.current,
				element  = current.element,
				orig     = current.orig,
				pos      = {},
				width    = 50,
				height   = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width  = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
			}

			if (F.wrap.css('position') === 'fixed' || current.locked) {
				pos.top  -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top     : getValue(pos.top  - hPadding * current.topRatio),
				left    : getValue(pos.left - wPadding * current.leftRatio),
				width   : getValue(width  + wPadding),
				height  : getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
				padding,
				value,
				prop       = fx.prop,
				current    = F.current,
				wrapSpace  = current.wrapSpace,
				skinSpace  = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value   = now - padding;

				F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
				F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
			}
		},

		zoomIn: function () {
			var current  = F.current,
				startPos = current.pos,
				effect   = current.openEffect,
				elastic  = effect === 'elastic',
				endPos   = $.extend({opacity : 1}, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}

			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration : effect === 'none' ? 0 : current.openSpeed,
				easing   : current.openEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current  = F.current,
				effect   = current.closeEffect,
				elastic  = effect === 'elastic',
				endPos   = {opacity : 0.1};

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : current.closeSpeed,
				easing   : current.closeEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomOut
			});
		},

		changeIn: function () {
			var current   = F.current,
				effect    = current.nextEffect,
				startPos  = current.pos,
				endPos    = { opacity : 1 },
				direction = F.direction,
				distance  = 200,
				field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
					endPos[ field ]   = '+=' + distance + 'px';

				} else {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
					endPos[ field ]   = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();

			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration : current.nextSpeed,
					easing   : current.nextEasing,
					complete : F._afterZoomIn
				});
			}
		},

		changeOut: function () {
			var previous  = F.previous,
				effect    = previous.prevEffect,
				endPos    = { opacity : 0.1 },
				direction = F.direction,
				distance  = 200;

			if (effect === 'elastic') {
				endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : previous.prevSpeed,
				easing   : previous.prevEasing,
				complete : function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		defaults : {
			closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
			speedOut   : 200,       // duration of fadeOut animation
			showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
			css        : {},        // custom CSS properties
			locked     : !isTouch,  // if true, the content will be locked into overlay
			fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
		},

		overlay : null,      // current handle
		fixed   : false,     // indicates if the overlay has position "fixed"
		el      : $('html'), // element that contains "the lock"

		// Public methods
		create : function(opts) {
			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.close();
			}

			this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( F.coming ? F.coming.parent : opts.parent );
			this.fixed   = false;

			if (opts.fixed && F.defaults.fixed) {
				this.overlay.addClass('fancybox-overlay-fixed');

				this.fixed = true;
			}
		},

		open : function(opts) {
			var that = this;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.overlay.unbind('.overlay').width('auto').height('auto');

			} else {
				this.create(opts);
			}

			if (!this.fixed) {
				W.bind('resize.overlay', $.proxy( this.update, this) );

				this.update();
			}

			if (opts.closeClick) {
				this.overlay.bind('click.overlay', function(e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						if (F.isActive) {
							F.close();
						} else {
							that.close();
						}

						return false;
					}
				});
			}

			this.overlay.css( opts.css ).show();
		},

		close : function() {
			var scrollV, scrollH;

			W.unbind('resize.overlay');

			if (this.el.hasClass('fancybox-lock')) {
				$('.fancybox-margin').removeClass('fancybox-margin');

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.removeClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			$('.fancybox-overlay').remove().hide();

			$.extend(this, {
				overlay : null,
				fixed   : false
			});
		},

		// Private, callbacks

		update : function () {
			var width = '100%', offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if (IE) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}

			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady : function (opts, obj) {
			var overlay = this.overlay;

			$('.fancybox-overlay').stop(true, true);

			if (!overlay) {
				this.create(opts);
			}

			if (opts.locked && this.fixed && obj.fixed) {
				if (!overlay) {
					this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
				}

				obj.locked = this.overlay.append( obj.wrap );
				obj.fixed  = false;
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow : function(opts, obj) {
			var scrollV, scrollH;

			if (obj.locked) {
				if (this.margin !== false) {
					$('*').filter(function(){
						return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
					}).addClass('fancybox-margin');

					this.el.addClass('fancybox-margin');
				}

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.addClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			this.open(opts);
		},

		onUpdate : function() {
			if (!this.fixed) {
				this.update();
			}
		},

		afterClose: function (opts) {
			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			//if (this.overlay && !F.isActive) {
			if (this.overlay && !F.coming) {
				this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
			}
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		defaults : {
			type     : 'float', // 'float', 'inside', 'outside' or 'over',
			position : 'bottom' // 'top' or 'bottom'
		},

		beforeShow: function (opts) {
			var current = F.current,
				text    = current.title,
				type    = opts.type,
				title,
				target;

			if ($.isFunction(text)) {
				text = text.call(current.element, current);
			}

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
				break;

				case 'outside':
					target = F.wrap;
				break;

				case 'over':
					target = F.inner;
				break;

				default: // 'float'
					target = F.skin;

					title.appendTo('body');

					if (IE) {
						title.width( title.width() );
					}

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
				break;
			}

			title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
			that     = $(this),
			selector = this.selector || '',
			run      = function(e) {
				var what = $(this).blur(), idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal  = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal  = what.get(0)[ relType ];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx  = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

		options = options || {};
		index   = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);

		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		this.filter('[data-fancybox-start=1]').trigger('click');

		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function() {
		var w1, w2;

		if ( $.scrollbarWidth === undefined ) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function() {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child  = parent.children(),
					width  = child.innerWidth() - child.height( 99 ).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ( $.support.fixedPosition === undefined ) {
			$.support.fixedPosition = (function() {
				var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

				elem.remove();

				return fixed;
			}());
		}

		$.extend(F.defaults, {
			scrollbarWidth : $.scrollbarWidth(),
			fixed  : $.support.fixedPosition,
			parent : $('body')
		});

		//Get real width of page scroll-bar
		w1 = $(window).width();

		H.addClass('fancybox-lock-test');

		w2 = $(window).width();

		H.removeClass('fancybox-lock-test');

		$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
	});

}(window, document, jQuery));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:59:"/local/templates/redisign/lib/fancybox/my.js?17328112231294";s:6:"source";s:44:"/local/templates/redisign/lib/fancybox/my.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {
	$(".fancybox").fancybox({
		maxWidth	: 940,
		maxHeight	: '100%',
		fitToView	: false,
		width		: '100%',
		height		: '100%',
		autoSize	: false,
        helpers: {
            overlay: {
              locked: false
            }
          }
	});
});

$(document).ready(function() {
	$(".optima").fancybox({
		maxWidth	: 940,
		maxHeight	: '100%',
		fitToView	: false,
		width		: '100%',
		height		: '100%',
		autoSize	: false
	});
});

$(document).ready(function() {
	$(".fwin").fancybox({
		maxWidth	: 940,
		maxHeight	: '100%',
		fitToView	: false,
		width		: '100%',
		height		: '100%',
		autoSize	: false
	});
});


$(document).ready(function() {
	$(".yafancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

/*
$(document).ready(function() {
	$(".fwin_ns").fancybox({
		maxWidth	: 500,
		maxHeight	: 300,
		fitToView	: false,
		width		: '100%',
		height		: '100%',
		autoSize	: false
	});
});
*/

$(document).ready(function() {
	$(".fwin_ns").fancybox({
		fitToView	: false,
		autoSize	: false,
        afterLoad: function(){
		if(window.screen.width > 600)
	            this.width = $(this.element).data("width");
		else
	            this.width = '80%';

            this.height = $(this.element).data("height");
        }
	});
});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:101:"/local/templates/redisign/components/bitrix/sale.basket.basket.line/.default/script.js?17328112235335";s:6:"source";s:86:"/local/templates/redisign/components/bitrix/sale.basket.basket.line/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
'use strict';

function BitrixSmallCart(){}

BitrixSmallCart.prototype = {

	activate: function ()
	{
		this.cartElement = BX(this.cartId);
		this.fixedPosition = this.arParams.POSITION_FIXED == 'Y';
		if (this.fixedPosition)
		{
			this.cartClosed = true;
			this.maxHeight = false;
			this.itemRemoved = false;
			this.verticalPosition = this.arParams.POSITION_VERTICAL;
			this.horizontalPosition = this.arParams.POSITION_HORIZONTAL;
			this.topPanelElement = BX("bx-panel");

			this.fixAfterRender(); // TODO onready
			this.fixAfterRenderClosure = this.closure('fixAfterRender');

			var fixCartClosure = this.closure('fixCart');
			this.fixCartClosure = fixCartClosure;

			if (this.topPanelElement && this.verticalPosition == 'top')
				BX.addCustomEvent(window, 'onTopPanelCollapse', fixCartClosure);

			var resizeTimer = null;
			BX.bind(window, 'resize', function() {
				clearTimeout(resizeTimer);
				resizeTimer = setTimeout(fixCartClosure, 200);
			});
		}
		this.setCartBodyClosure = this.closure('setCartBody');
		BX.addCustomEvent(window, 'OnBasketChange', this.closure('refreshCart', {}));
	},

	fixAfterRender: function ()
	{
		this.statusElement = BX(this.cartId + 'status');
		if (this.statusElement)
		{
			if (this.cartClosed)
				this.statusElement.innerHTML = this.openMessage;
			else
				this.statusElement.innerHTML = this.closeMessage;
		}
		this.productsElement = BX(this.cartId + 'products');
		this.fixCart();
	},

	closure: function (fname, data)
	{
		var obj = this;
		return data
			? function(){obj[fname](data)}
			: function(arg1){obj[fname](arg1)};
	},

	toggleOpenCloseCart: function ()
	{
		if (this.cartClosed)
		{
			BX.removeClass(this.cartElement, 'bx-closed');
			BX.addClass(this.cartElement, 'bx-opener');
			this.statusElement.innerHTML = this.closeMessage;
			this.cartClosed = false;
			this.fixCart();
		}
		else // Opened
		{
			BX.addClass(this.cartElement, 'bx-closed');
			BX.removeClass(this.cartElement, 'bx-opener');
			BX.removeClass(this.cartElement, 'bx-max-height');
			this.statusElement.innerHTML = this.openMessage;
			this.cartClosed = true;
			var itemList = this.cartElement.querySelector("[data-role='basket-item-list']");
			if (itemList)
				itemList.style.top = "auto";
		}
		setTimeout(this.fixCartClosure, 100);
	},

	setVerticalCenter: function(windowHeight)
	{
		var top = windowHeight/2 - (this.cartElement.offsetHeight/2);
		if (top < 5)
			top = 5;
		this.cartElement.style.top = top + 'px';
	},

	fixCart: function()
	{
		// set horizontal center
		if (this.horizontalPosition == 'hcenter')
		{
			var windowWidth = 'innerWidth' in window
				? window.innerWidth
				: document.documentElement.offsetWidth;
			var left = windowWidth/2 - (this.cartElement.offsetWidth/2);
			if (left < 5)
				left = 5;
			this.cartElement.style.left = left + 'px';
		}

		var windowHeight = 'innerHeight' in window
			? window.innerHeight
			: document.documentElement.offsetHeight;

		// set vertical position
		switch (this.verticalPosition) {
			case 'top':
				if (this.topPanelElement)
					this.cartElement.style.top = this.topPanelElement.offsetHeight + 5 + 'px';
				break;
			case 'vcenter':
				this.setVerticalCenter(windowHeight);
				break;
		}

		// toggle max height
		if (this.productsElement)
		{
			var itemList = this.cartElement.querySelector("[data-role='basket-item-list']");
			if (this.cartClosed)
			{
				if (this.maxHeight)
				{
					BX.removeClass(this.cartElement, 'bx-max-height');
					if (itemList)
						itemList.style.top = "auto";
					this.maxHeight = false;
				}
			}
			else // Opened
			{
				if (this.maxHeight)
				{
					if (this.productsElement.scrollHeight == this.productsElement.clientHeight)
					{
						BX.removeClass(this.cartElement, 'bx-max-height');
						if (itemList)
							itemList.style.top = "auto";
						this.maxHeight = false;
					}
				}
				else
				{
					if (this.verticalPosition == 'top' || this.verticalPosition == 'vcenter')
					{
						if (this.cartElement.offsetTop + this.cartElement.offsetHeight >= windowHeight)
						{
							BX.addClass(this.cartElement, 'bx-max-height');
							if (itemList)
								itemList.style.top = 82+"px";
							this.maxHeight = true;
						}
					}
					else
					{
						if (this.cartElement.offsetHeight >= windowHeight)
						{
							BX.addClass(this.cartElement, 'bx-max-height');
							if (itemList)
								itemList.style.top = 82+"px";
							this.maxHeight = true;
						}
					}
				}
			}

			if (this.verticalPosition == 'vcenter')
				this.setVerticalCenter(windowHeight);
		}
	},

	refreshCart: function (data)
	{
		if (this.itemRemoved)
		{
			this.itemRemoved = false;
			return;
		}
		data.sessid = BX.bitrix_sessid();
		data.siteId = this.siteId;
		data.templateName = this.templateName;
		data.arParams = this.arParams;
		BX.ajax({
			url: this.ajaxPath,
			method: 'POST',
			dataType: 'html',
			data: data,
			onsuccess: this.setCartBodyClosure
		});
	},

	setCartBody: function (result)
	{
		if (this.cartElement)
			this.cartElement.innerHTML = result.replace(/#CURRENT_URL#/g, this.currentUrl);
		if (this.fixedPosition)
			setTimeout(this.fixAfterRenderClosure, 100);
	},

	removeItemFromCart: function (id)
	{
		this.refreshCart ({sbblRemoveItemFromCart: id});
		this.itemRemoved = true;
		BX.onCustomEvent('OnBasketChange');
	}
};

/* End */
;; /* /local/templates/redisign/js/vendors/jquery-3.4.1.min.js?173281122388147*/
; /* /local/templates/redisign/js/plugins.min.js?1732811223129174*/
; /* /local/templates/redisign/js/vendors/jquery.ui.touch-punch.min.js?17328112231301*/
; /* /local/templates/redisign/js/app.js?173281122321576*/
; /* /local/templates/redisign/js/jquery.maskedinput.js?17328112237207*/
; /* /local/templates/redisign/lib/fancybox/source/jquery.fancybox.js?173281122348741*/
; /* /local/templates/redisign/lib/fancybox/my.js?17328112231294*/
; /* /local/templates/redisign/components/bitrix/sale.basket.basket.line/.default/script.js?17328112235335*/
