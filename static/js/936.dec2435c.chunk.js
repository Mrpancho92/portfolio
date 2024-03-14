/*! For license information please see 936.dec2435c.chunk.js.LICENSE.txt */
(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[936],{1976:(e,t,n)=>{"use strict";n.d(t,{c:()=>o});var r=n(3868);const o=()=>{if((0,r.useMediaQuery)({query:"(max-width: 575px)"})){const e=document.getElementById("burger-checkbox"),t=document.querySelector(".menu-list"),n=document.querySelector(".menu"),r=document.querySelectorAll(".menu-item"),o=document.querySelector(".burger");e.addEventListener("click",(()=>{e.checked?(document.body.style.overflow="hidden",n.style="\n                 position: fixed;\n                 top: 0;\n                 left: 0;\n                 width: 100%;\n                 height: 100%;\n                 z-index: 1;\n                 background-color: rgba(0, 0, 0, 0.5);\n                   ",t.style="\n                display: grid;\n                ",o.style="\n                left: 85%;\n                z-index: 5;\n                "):(document.body.style.overflow="",n.style="",t.style="",o.style="")})),window.addEventListener("click",(r=>{r.target===n&&!0===e.checked&&(e.checked=!1,document.body.style.overflow="",n.style="",t.style="",o.style="")})),Array.from(r).forEach((r=>{r.addEventListener("click",(()=>{e.checked=!1,document.body.style.overflow="",n.style="",t.style="",o.style=""}))}))}}},7776:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ye});const r=n.p+"static/media/error.42292aa12b6bc303ce99.gif";var o=n(2496);const i=()=>(0,o.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error"});var a=n(12),c=n(9840),u=n.n(c),s=n(613),f=n.n(s),l=n(3464),p=n.n(l),d=n(9060),y=n(2528),h=n.n(y),b="bodyAttributes",m="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(T).map((function(e){return T[e]})),"charset"),w="cssText",O="href",A="http-equiv",S="innerHTML",C="itemprop",E="name",j="property",k="rel",x="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",M="defer",_="encodeSpecialCharacters",N="onChangeClientState",R="titleTemplate",q=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),B=[T.NOSCRIPT,T.SCRIPT,T.STYLE],D="data-react-helmet",H="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=G(e,T.TITLE),n=G(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=G(e,I);return t||r||void 0},K=function(e){return G(e,N)||function(){}},V=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===k&&"canonical"===e[n].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==S&&c!==w&&c!==C||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=h()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},G=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},J=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout((function(){J(t)}),0)}}(),X=function(e){return clearTimeout(e)},Z="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:n.g.requestAnimationFrame||J,ee="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||X:n.g.cancelAnimationFrame||X,te=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},ne=null,re=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,l=e.title,p=e.titleAttributes;ae(T.BODY,r),ae(T.HTML,o),ie(l,p);var d={baseTag:ce(T.BASE,n),linkTags:ce(T.LINK,i),metaTags:ce(T.META,a),noscriptTags:ce(T.NOSCRIPT,c),scriptTags:ce(T.SCRIPT,s),styleTags:ce(T.STYLE,f)},y={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,y,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ie=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=oe(e)),ae(T.TITLE,t)},ae=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(D),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute(D):n.getAttribute(D)!==a.join(",")&&n.setAttribute(D,a.join(","))}},ce=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"["+D+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c="undefined"===typeof t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(D,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r="undefined"!==typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return function(e,t,n){var r,o=((r={key:t})[D]=!0,r),i=se(n,o);return[d.createElement(T.TITLE,i,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,n,r){var o=ue(n),i=oe(t);return o?"<"+e+" "+D+'="true" '+o+">"+z(i,r)+"</"+e+">":"<"+e+" "+D+'="true">'+z(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case m:return{toComponent:function(){return se(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[D]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===S||n===w){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),d.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===S||e===w)})).reduce((function(e,t){var o="undefined"===typeof r[t]?t:t+'="'+z(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===B.indexOf(e);return t+"<"+e+" "+D+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},le=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,l=void 0===f?"":f,p=e.titleAttributes;return{base:fe(T.BASE,t,r),bodyAttributes:fe(b,n,r),htmlAttributes:fe(m,o,r),link:fe(T.LINK,i,r),meta:fe(T.META,a,r),noscript:fe(T.NOSCRIPT,c,r),script:fe(T.SCRIPT,u,r),style:fe(T.STYLE,s,r),title:fe(T.TITLE,{title:l,titleAttributes:p},r)}},pe=function(e){var t,n;return n=t=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),n.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case T.TITLE:return Y({},o,((t={})[r.type]=a,t.titleAttributes=Y({},i),t));case T.BODY:return Y({},o,{bodyAttributes:Y({},i)});case T.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((n={})[r.type]=Y({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=U(t,["children"]),o=Y({},r);return n&&(o=this.mapChildrenToProps(n,o)),d.createElement(e,o)},F(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(d.Component),t.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=le({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n}(f()((function(e){return{baseTag:$([O,P],e),bodyAttributes:V(b,e),defer:G(e,M),encode:G(e,_),htmlAttributes:V(m,e),linkTags:Q(T.LINK,[k,O],e),metaTags:Q(T.META,[E,v,A,j,C],e),noscriptTags:Q(T.NOSCRIPT,[S],e),onChangeClientState:K(e),scriptTags:Q(T.SCRIPT,[x,S],e),styleTags:Q(T.STYLE,[w],e),title:W(e),titleAttributes:V(g,e)}}),(function(e){ne&&ee(ne),e.defer?ne=Z((function(){re(e,(function(){ne=null}))})):(re(e),ne=null)}),le)((function(){return null})));pe.renderStatic=pe.rewind;var de=n(1976);const ye=()=>((0,de.c)(),(0,o.jsxs)("div",{children:[(0,o.jsxs)(pe,{children:[(0,o.jsx)("meta",{name:"description",content:"This page is not found"}),(0,o.jsx)("title",{children:"This page is not found"})]}),(0,o.jsx)(i,{}),(0,o.jsx)("p",{style:{textAlign:"center",fontWeight:"bold",fontSize:"24px"},children:"Page doesn't exist"}),(0,o.jsx)(a.cH,{style:{display:"block",textAlign:"center",fontWeight:"bold",fontSize:"24px",marginTop:"30px"},to:"/",children:"Back to main page"})]}))},2528:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,c=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in i=Object(arguments[u]))n.call(i,s)&&(c[s]=i[s]);if(t){a=t(i);for(var f=0;f<a.length;f++)r.call(i,a[f])&&(c[a[f]]=i[a[f]])}}return c}},1532:(e,t,n)=>{"use strict";var r=n(2552);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},9840:(e,t,n)=>{e.exports=n(1532)()},2552:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3464:e=>{var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,f;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!==u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(f=e.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;for(f=e.entries();!(u=f.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(f=e.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!==u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof a.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!==u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!==u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},613:(e,t,n)=>{"use strict";var r,o=n(9060),i=(r=o)&&"object"===typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=e(s.map((function(e){return e.props}))),l.canUseDOM?t(u):n&&(u=n(u))}var l=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(l,"canUseDOM",c),l}}}}]);
//# sourceMappingURL=936.dec2435c.chunk.js.map