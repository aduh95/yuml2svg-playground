!function(e){function t(t){for(var n,o,i=t[0],a=t[1],s=0,c=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&c.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);c.length;)c.shift()()}var n={},r={4:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=i);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(e){return o.p+""+e+".bundle.js"}(e);var l=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}r[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=a;o(o.s=5)}([function(e,t,n){!function(e){"use strict";var t=function(){},n={},r=[],o=[];function i(e,i){var a=o,s=void 0,l=void 0,c=void 0,u=void 0;for(u=arguments.length;u-- >2;)r.push(arguments[u]);for(i&&null!=i.children&&(r.length||r.push(i.children),delete i.children);r.length;)if((l=r.pop())&&void 0!==l.pop)for(u=l.length;u--;)r.push(l[u]);else"boolean"==typeof l&&(l=null),(c="function"!=typeof e)&&(null==l?l="":"number"==typeof l?l=String(l):"string"!=typeof l&&(c=!1)),c&&s?a[a.length-1]+=l:a===o?a=[l]:a.push(l),s=c;var p=new t;return p.nodeName=e,p.children=a,p.attributes=null==i?void 0:i,p.key=null==i?void 0:i.key,void 0!==n.vnode&&n.vnode(p),p}function a(e,t){for(var n in t)e[n]=t[n];return e}function s(e,t){e&&("function"==typeof e?e(t):e.current=t)}var l="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function c(e,t){return i(e.nodeName,a(a({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var u=0,p=1,d=2,f=3,h="__preactattr_",m=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,v=[];function y(e){!e._dirty&&(e._dirty=!0)&&1==v.push(e)&&(n.debounceRendering||l)(b)}function b(){for(var e=void 0;e=v.pop();)e._dirty&&B(e)}function g(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&S(e,t.nodeName):n||e._componentConstructor===t.nodeName}function S(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function w(e){var t=a({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function O(e){var t=e.parentNode;t&&t.removeChild(e)}function j(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)s(n,null),s(r,e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var a in r)e.style[a]="number"==typeof r[a]&&!1===m.test(a)?r[a]+"px":r[a]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,k,l):e.removeEventListener(t,k,l),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e){try{e[t]=null==r?"":r}catch(e){}null!=r&&!1!==r||"spellcheck"==t||e.removeAttribute(t)}else{var c=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?c?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(c?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function k(e){return this._listeners[e.type](n.event&&n.event(e)||e)}var _=[],C=0,P=!1,D=!1;function x(){for(var e=void 0;e=_.shift();)n.afterMount&&n.afterMount(e),e.componentDidMount&&e.componentDidMount()}function E(e,t,n,r,o,i){C++||(P=null!=o&&void 0!==o.ownerSVGElement,D=null!=e&&!(h in e));var a=N(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--C||(D=!1,i||x()),a}function N(e,t,n,r,o){var i=e,a=P;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),T(e,!0))),i[h]=!0,i;var s,l,c=t.nodeName;if("function"==typeof c)return function(e,t,n,r){for(var o=e&&e._component,i=o,a=e,s=o&&e._componentConstructor===t.nodeName,l=s,c=w(t);o&&!l&&(o=o._parentComponent);)l=o.constructor===t.nodeName;return o&&l&&(!r||o._component)?(A(o,c,f,n,r),e=o.base):(i&&!s&&(W(i),e=a=null),o=M(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e,a=null),A(o,c,p,n,r),e=o.base,a&&e!==a&&(a._component=null,T(a,!1))),e}(e,t,n,r);if(P="svg"===c||"foreignObject"!==c&&P,c=String(c),(!e||!S(e,c))&&(s=c,(l=P?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,i=l,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),T(e,!0)}var u=i.firstChild,d=i[h],m=t.children;if(null==d){d=i[h]={};for(var v=i.attributes,y=v.length;y--;)d[v[y].name]=v[y].value}return!D&&m&&1===m.length&&"string"==typeof m[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=m[0]&&(u.nodeValue=m[0]):(m&&m.length||null!=u)&&function(e,t,n,r,o){var i=e.childNodes,a=[],s={},l=0,c=0,u=i.length,p=0,d=t?t.length:0,f=void 0,m=void 0,v=void 0,y=void 0,b=void 0;if(0!==u)for(var S=0;S<u;S++){var w=i[S],j=w[h],k=d&&j?w._component?w._component.__key:j.key:null;null!=k?(l++,s[k]=w):(j||(void 0!==w.splitText?!o||w.nodeValue.trim():o))&&(a[p++]=w)}if(0!==d)for(var _=0;_<d;_++){y=t[_],b=null;var C=y.key;if(null!=C)l&&void 0!==s[C]&&(b=s[C],s[C]=void 0,l--);else if(c<p)for(f=c;f<p;f++)if(void 0!==a[f]&&g(m=a[f],y,o)){b=m,a[f]=void 0,f===p-1&&p--,f===c&&c++;break}b=N(b,y,n,r),v=i[_],b&&b!==e&&b!==v&&(null==v?e.appendChild(b):b===v.nextSibling?O(v):e.insertBefore(b,v))}if(l)for(var P in s)void 0!==s[P]&&T(s[P],!1);for(;c<=p;)void 0!==(b=a[p--])&&T(b,!1)}(i,m,n,r,D||null!=d.dangerouslySetInnerHTML),function(e,t,n){var r=void 0;for(r in n)t&&null!=t[r]||null==n[r]||j(e,r,n[r],n[r]=void 0,P);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||j(e,r,n[r],n[r]=t[r],P)}(i,t.attributes,d),P=a,i}function T(e,t){var n=e._component;n?W(n):(null!=e[h]&&s(e[h].ref,null),!1!==t&&null!=e[h]||O(e),U(e))}function U(e){for(e=e.lastChild;e;){var t=e.previousSibling;T(e,!0),e=t}}var R=[];function M(e,t,n){var r=void 0,o=R.length;for(e.prototype&&e.prototype.render?(r=new e(t,n),F.call(r,t,n)):((r=new F(t,n)).constructor=e,r.render=L);o--;)if(R[o].constructor===e)return r.nextBase=R[o].nextBase,R.splice(o,1),r;return r}function L(e,t,n){return this.constructor(e,n)}function A(e,t,r,o,i){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o)),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,r!==u&&(r!==p&&!1===n.syncComponentUpdates&&e.base?y(e):B(e,p,i)),s(e.__ref,e))}function B(e,t,r,o){if(!e._disable){var i=e.props,s=e.state,l=e.context,c=e.prevProps||i,f=e.prevState||s,h=e.prevContext||l,m=e.base,v=e.nextBase,y=m||v,b=e._component,g=!1,S=h,O=void 0,j=void 0,k=void 0;if(e.constructor.getDerivedStateFromProps&&(s=a(a({},s),e.constructor.getDerivedStateFromProps(i,s)),e.state=s),m&&(e.props=c,e.state=f,e.context=h,t!==d&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(i,s,l)?g=!0:e.componentWillUpdate&&e.componentWillUpdate(i,s,l),e.props=i,e.state=s,e.context=l),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!g){O=e.render(i,s,l),e.getChildContext&&(l=a(a({},l),e.getChildContext())),m&&e.getSnapshotBeforeUpdate&&(S=e.getSnapshotBeforeUpdate(c,f));var P=O&&O.nodeName,D=void 0,N=void 0;if("function"==typeof P){var U=w(O);(j=b)&&j.constructor===P&&U.key==j.__key?A(j,U,p,l,!1):(D=j,e._component=j=M(P,U,l),j.nextBase=j.nextBase||v,j._parentComponent=e,A(j,U,u,l,!1),B(j,p,r,!0)),N=j.base}else k=y,(D=b)&&(k=e._component=null),(y||t===p)&&(k&&(k._component=null),N=E(k,O,l,r||!m,y&&y.parentNode,!0));if(y&&N!==y&&j!==b){var R=y.parentNode;R&&N!==R&&(R.replaceChild(N,y),D||(y._component=null,T(y,!1)))}if(D&&W(D),e.base=N,N&&!o){for(var L=e,F=e;F=F._parentComponent;)(L=F).base=N;N._component=L,N._componentConstructor=L.constructor}}for(!m||r?_.push(e):g||(e.componentDidUpdate&&e.componentDidUpdate(c,f,S),n.afterUpdate&&n.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);C||o||x()}}function W(e){n.beforeUnmount&&n.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r=e._component;r?W(r):t&&(null!=t[h]&&s(t[h].ref,null),e.nextBase=t,O(t),R.push(e),U(t)),s(e.__ref,null)}function F(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function I(e,t,n){return E(n,e,{},!1,t,!1)}function V(){return{}}a(F.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=a(a({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),y(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),B(this,d)},render:function(){}});var q={h:i,createElement:i,cloneElement:c,createRef:V,Component:F,render:I,rerender:b,options:n};e.default=q,e.h=i,e.createElement=i,e.cloneElement=c,e.createRef=V,e.Component=F,e.render=I,e.rerender=b,e.options=n,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,n){var r={"./activity-diagram.mjs":[11,0,8],"./class-diagram.mjs":[12,0,9],"./deployment-diagram.mjs":[13,0,10],"./dot2svg.mjs":[14,6],"./get-dom-window.mjs":[8,1],"./handle-stream.mjs":[15,16],"./package-diagram.mjs":[16,0,11],"./sequence-diagram.mjs":[17,0,12],"./sequence-renderer.mjs":[9,2],"./state-diagram.mjs":[18,0,13],"./svg-builder.mjs":[10,3],"./svg-utils.mjs":[19,17],"./uidHandler.mjs":[7,0,18],"./usecase-diagram.mjs":[20,0,14],"./wrapDotDocument.mjs":[21,19],"./yuml2dot-utils.mjs":[6,0],"./yumldoc-utils.mjs":[22,7]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=1,e.exports=o},function(e){e.exports=JSON.parse('{"Activity":["// {type:activity}","(start)-><a>[kettle empty]->(Fill Kettle)->|b|","<a>[kettle full]->|b|->(Boil Kettle)->|c|","|b|->(Add Tea Bag)->(Add Milk)->|c|->(Pour Water)","(Pour Water)->(end)"],"Class":["// {type:class}","// {direction:topDown}","[note: You can stick notes on diagrams too!{bg:cornsilk}]","[Customer]<>1-orders 0..*>[Order]","[Order]++*-*>[LineItem]","[Order]-1>[DeliveryMethod]","[Order]*-*>[Product|EAN_Code|promo_price()]","[Category]<->[Product]","[DeliveryMethod]^[National]","[DeliveryMethod]^[International]"],"State":["// {type:state}","(start)[Start]->(Simulator running)","(Simulator running)[Pause]->(Simulator paused|do / wait)","(Simulator running)[Stop]->(end)","(Log retrieval)[Continue]->(Simulator running)","(Simulator paused)[Unpause]->(Simulator running)","(Simulator paused)[Data requested]->(Log retrieval|do / output log)","(Log retrieval)->(end)"],"Deployment":["// {type:deployment}","[Presentation Server]-[Policy Server]","[Policy Server]-[Document Server]","[Product Server]-[Document Server]","[Document Server]ASP.Net-[Workstation]","[Policy Server]-[Database Server]","[Product Server]-[Database Server]","[Policy Server]-[note: To be clustered to meet throughput needs{bg:cornsilk}]","[Policy Server]-[Directory Server]","[Policy Server]-[Underwriting & Rating Server]"],"Package":["// {type:package}","[Elegibility & Benefits]->[Elegibility Search]","[Remittances]->[Remittance Search]","[Notifications]->[Notification Search]","[Check Claim Status]->[Claim Search]","[Submit a Claim Online]->[Patient Search]","[Physician/Provider Directory]","[Eligibility Search]->[Search]","[Remittance Search]->[Search]","[Notification Search]->[Search]","[Claim Search]->[Search]","[Patient Search]->[Search]"],"Use-Case":["// {type:usecase}","// {direction:leftToRight}","(note: figure 1.2{bg:beige})","[User]-(Login)","[Site Maintainer]-(Add User)","(Add User)<(Add Company)","[Site Maintainer]-(Upload Docs)","(Upload Docs)<(Manage Folders)","[User]-(Upload Docs)","[User]-(Full Text Search Docs)","(Full Text Search Docs)>(Preview Doc)","(Full Text Search Docs)>(Download Docs)","[User]-(Browse Docs)","(Browse Docs)>(Preview Doc)","(Download Docs)","[Site Maintainer]-(Post New Event to the Web Site)","[User]-(View Events)"],"Sequence":["// {type:sequence}","[:Computer]sendUnsentEmal>[:Server]","[:Computer]newEmail>[:Server]","[:Server]reponse.>[:Computer]","[:Computer]downloadEmail>[:Server]","[:Computer]deleteOldEmail>[:Server]"]}')},function(e,t,n){e.exports=n.p+"8f1068bacff9731fe54c62ea63dbf625.js"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0);n(4);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=a(this,s(t).call(this,e))).elementRef=Object(r.createRef)(),n}var o,c,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),o=t,(c=[{key:"componentDidMount",value:function(){var e=this,t=document.createElement("span");t.textContent="Loading…",this.elementRef.current.append(t),"undefined"==typeof PRERENDER&&Promise.all([n.e(5),n.e(15)]).then(n.bind(null,41)).then((function(e){return e.default})).then((function(n){t.remove(),e.editor=n.edit(e.elementRef.current),e.editor.on("change",e.aceChanged.bind(e)),e.editor.getSession().setMode("ace/mode/dot"),e.editor.getSession().getDocument().setValue(e.props.value||"")})).catch(console.error)}},{key:"componentDidUpdate",value:function(){if(this.editor){var e=this.editor.getSession().getDocument();this.props.value!==e.getValue()&&e.setValue(this.props.value)}}},{key:"aceChanged",value:function(e){var t=this.editor.getSession().getDocument();this.props.onChange&&this.props.onChange(t.getValue(),e)}},{key:"render",value:function(){return this.editor&&this.editor.setTheme("ace/theme/".concat(this.props.isDark?"dracula":"github")),Object(r.h)("main",{className:"editor",ref:this.elementRef})}}])&&i(o.prototype,c),u&&i(o,u),t}(r.Component),u=n(2);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=f(t).call(this,e))||"object"!==p(o)&&"function"!=typeof o?h(r):o).handleChange=n.handleChange.bind(h(n)),n.loadSample=n.loadSample.bind(h(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(o=[{key:"handleChange",value:function(e){var t=e.target,n=t.name,r="checkbox"===t.type?t.checked:t.value;this.props.onOptionChange(n,r)}},{key:"loadSample",value:function(e){var t=e.target,n=t.value,r=t.options;this.props.onOptionChange("sample",n),r[0].selected=!0}},{key:"render",value:function(){return Object(r.h)("div",{className:"options"},Object(r.h)("select",{onChange:this.loadSample},Object(r.h)("option",{checked:!0,value:"0"},"Load Sample"),Object.keys(u).map((function(e){return Object(r.h)("option",{key:e},e)}))),Object(r.h)("label",null,Object(r.h)("input",{name:"isDark",type:"checkbox",checked:this.props.isDark,onChange:this.handleChange})," ","Dark mode"),Object(r.h)("label",{className:"mobile-only"},Object(r.h)("input",{name:"isPreview",type:"checkbox",value:this.props.isPreview,onChange:function(e){document.documentElement.style.setProperty("--preview",e.target.checked?'"graph"':"")}})," ","Preview"))}}])&&d(n.prototype,o),i&&d(n,i),t}(r.Component);const y={class:"class-diagram",usecase:"usecase-diagram",activity:"activity-diagram",state:"state-diagram",deployment:"deployment-diagram",package:"package-diagram",sequence:"sequence-diagram"},b={topDown:"TB",leftToRight:"LR",rightToLeft:"RL"};const g=(e,t,r,o)=>{if(0===e.length)return Promise.resolve("");if(!t.hasOwnProperty("type"))return Promise.reject(new Error("Error: Missing mandatory 'type' directive"));if(!(t.type in y))return Promise.reject(new Error("Invalid diagram type"));{const{isDark:i,dotHeaderOverrides:a}=t;try{const s=y[t.type],l=n(1)(`./${s}.mjs`).then(n=>n.default(e,t));return"sequence"===t.type?l:Promise.all([Promise.all([n(1)("./dot2svg.mjs").then(e=>e.default),n(1)("./wrapDotDocument.mjs").then(e=>e.default),l]).then(([e,t,n])=>e(t(n,i,a),r,o)),n(1)("./svg-utils.mjs").then(e=>e.default)]).then(([e,t])=>t(e,i))}catch(e){return Promise.reject(e)}}},S=(e,t)=>n=>{(n=n.trim()).startsWith("//")?w(n,e):n.length&&t.push(n)},w=function(e,t){const n=/^\/\/\s+\{\s*([\w]+)\s*:\s*([\w]+)\s*\}$/.exec(e);if(null!==n&&3===n.length){const[e,r,o]=n;switch(r){case"type":o in y?t.type=o:console.warn(new Error("Invalid value for 'type'. Allowed values are: "+Object.keys(y).join(", ")));break;case"direction":o in b?t.dir=b[o]:console.warn(new Error("Invalid value for 'direction'. Allowed values are: "+Object.keys(b).join(", ")));break;case"generate":/^(true|false)$/.test(o)?(t.generate="true"===o,console.warn("Generate option is not supported")):console.warn(new Error("Error: invalid value for 'generate'. Allowed values are: true, false <i>(default)</i>."))}}};var O=n(3);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D={workerURL:n.n(O).a},x=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=_(this,C(t).call(this,e))).state={},n.containerRef=Object(r.createRef)(),n}var o,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,e),o=t,(i=[{key:"updateOutput",value:function(){var e=this,t=this.props,r=t.src,o=t.isDark;r.match(/\S+/)&&"undefined"==typeof PRERENDER?((e,t,r,o)=>{t||(t={}),t.dir||(t.dir="TB"),t.type||(t.type="class"),t.isDark||(t.isDark=!1);const i=[];return e.read&&"function"==typeof e.read?n(1)("./handle-stream.mjs").then(e=>e.default).then(n=>n(e,S(t,i))).then(()=>g(i,t,r,o)):(e.toString().split(/\r|\n/).forEach(S(t,i)),g(i,t,r,o))})(r,{isDark:o},D).then((function(t){var n=(new DOMParser).parseFromString(t,"text/xml").documentElement;e.setState({text:null,element:n,error:null})})).catch((function(t){console.error(t),e.setState({error:t})})):this.setState({text:null,element:null,error:null})}},{key:"componentDidMount",value:function(){this.updateOutput()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,r=n.src,o=n.isDark;if(r===e.src&&o===e.isDark||this.updateOutput(),this.state.element!==t.element&&this.containerRef.current){for(var i=this.containerRef.current;i.firstChild;)i.removeChild(i.firstChild);this.state.element&&this.containerRef.current.appendChild(this.state.element)}}},{key:"render",value:function(){var e=this.props.isDark?"graph-dark":"graph-light";return Object(r.h)("div",{className:"graph "+e},Object(r.h)("div",{className:"error"},this.state.error?this.state.error.message:[]),Object(r.h)("div",{className:"text"},Object(r.h)("textarea",{value:this.state.text?this.state.text:""})),Object(r.h)("div",{className:"element",ref:this.containerRef}))}}])&&k(o.prototype,i),a&&k(o,a),t}(r.Component);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var M="graph",L="// https://github.com/jaime-olivares/yuml-diagram/wiki\n\n// {type:activity}\n(start)-><a>[kettle empty]->(Fill Kettle)->|b|\n<a>[kettle full]->|b|->(Boil Kettle)->|c|\n|b|->(Add Tea Bag)->(Add Milk)->|c|->(Pour Water)\n(Pour Water)->(end)\n",A=null;window.addEventListener("beforeunload",(function(e){return A}));var B=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=T(t).call(this,e))||"object"!==E(o)&&"function"!=typeof o?U(r):o).state={src:localStorage.getItem(M)||L,isDark:matchMedia("(prefers-color-scheme: dark)").matches},n.handleOptionChange=n.handleOptionChange.bind(U(n)),n.handleAceEditorChange=n.handleAceEditorChange.bind(U(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,e),n=t,(o=[{key:"handleOptionChange",value:function(e,t){"sample"===e&&(e="src",t=u[t].join("\n")),this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,t))}},{key:"handleAceEditorChange",value:function(e){this.setState({src:e}),localStorage.setItem(M,e)}},{key:"componentDidUpdate",value:function(e,t){this.state.src!==t.src&&(A="Your changes will not be saved.")}},{key:"render",value:function(){return Object(r.h)("div",{id:this.props.id},Object(r.h)("header",null,Object(r.h)("b",null,"yuml2svg")," —",Object(r.h)("a",{href:"https://www.npmjs.com/package/yuml2svg"},Object(r.h)("img",{alt:"npm package",src:"https://img.shields.io/npm/v/yuml2svg/beta.svg"})),Object(r.h)("a",{href:"https://www.yarnpkg.com/package/yuml2svg"},Object(r.h)("img",{alt:"node version",src:"https://img.shields.io/node/v/yuml2svg.svg"})),Object(r.h)("a",{href:"https://github.com/aduh95/yuml2svg/blob/master/LICENSE.md"},Object(r.h)("img",{alt:"license",src:"https://img.shields.io/github/license/aduh95/yuml2svg.svg"})),Object(r.h)("a",{href:"https://github.com/aduh95/yuml2svg"},Object(r.h)("img",{alt:"github package",src:"https://img.shields.io/github/stars/aduh95/yuml2svg.svg?style=social"}))),Object(r.h)(c,{value:this.state.src,onChange:this.handleAceEditorChange,isDark:this.state.isDark}),Object(r.h)(v,{isDark:this.state.isDark,onOptionChange:this.handleOptionChange}),Object(r.h)(x,{src:this.state.src,isDark:this.state.isDark}))}}])&&N(n.prototype,o),i&&N(n,i),t}(r.Component);Object(r.render)(Object(r.h)(B,{id:"app_root"}),document.body,document.getElementById("app_root"))}]);