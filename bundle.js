!function(e){function t(t){for(var n,o,i=t[0],a=t[1],s=0,u=[];s<i.length;s++)o=i[s],r[o]&&u.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);u.length;)u.shift()()}var n={},r={4:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=i);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(e){return o.p+""+e+".bundle.js"}(e);var l=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}r[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=a;o(o.s=4)}([function(e,t,n){var r={"./activity-diagram.mjs":[10,0,8],"./class-diagram.mjs":[11,0,9],"./deployment-diagram.mjs":[12,0,10],"./dot2svg.mjs":[13,6],"./get-dom-window.mjs":[7,1],"./handle-stream.mjs":[14,16],"./package-diagram.mjs":[15,0,11],"./sequence-diagram.mjs":[16,0,12],"./sequence-renderer.mjs":[8,2],"./state-diagram.mjs":[17,0,13],"./svg-builder.mjs":[9,3],"./svg-utils.mjs":[18,17],"./uidHandler.mjs":[6,0,18],"./usecase-diagram.mjs":[19,0,14],"./wrapDotDocument.mjs":[20,19],"./yuml2dot-utils.mjs":[5,0],"./yumldoc-utils.mjs":[21,7]};function o(e){if(!n.o(r,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then(function(){return n(o)})}o.keys=function(){return Object.keys(r)},o.id=0,e.exports=o},function(e){e.exports=JSON.parse('{"Activity":["// {type:activity}","(start)-><a>[kettle empty]->(Fill Kettle)->|b|","<a>[kettle full]->|b|->(Boil Kettle)->|c|","|b|->(Add Tea Bag)->(Add Milk)->|c|->(Pour Water)","(Pour Water)->(end)"],"Class":["// {type:class}","// {direction:topDown}","[note: You can stick notes on diagrams too!{bg:cornsilk}]","[Customer]<>1-orders 0..*>[Order]","[Order]++*-*>[LineItem]","[Order]-1>[DeliveryMethod]","[Order]*-*>[Product|EAN_Code|promo_price()]","[Category]<->[Product]","[DeliveryMethod]^[National]","[DeliveryMethod]^[International]"],"State":["// {type:state}","(start)[Start]->(Simulator running)","(Simulator running)[Pause]->(Simulator paused|do / wait)","(Simulator running)[Stop]->(end)","(Log retrieval)[Continue]->(Simulator running)","(Simulator paused)[Unpause]->(Simulator running)","(Simulator paused)[Data requested]->(Log retrieval|do / output log)","(Log retrieval)->(end)"],"Deployment":["// {type:deployment}","[Presentation Server]-[Policy Server]","[Policy Server]-[Document Server]","[Product Server]-[Document Server]","[Document Server]ASP.Net-[Workstation]","[Policy Server]-[Database Server]","[Product Server]-[Database Server]","[Policy Server]-[note: To be clustered to meet throughput needs{bg:cornsilk}]","[Policy Server]-[Directory Server]","[Policy Server]-[Underwriting & Rating Server]"],"Package":["// {type:package}","[Elegibility & Benefits]->[Elegibility Search]","[Remittances]->[Remittance Search]","[Notifications]->[Notification Search]","[Check Claim Status]->[Claim Search]","[Submit a Claim Online]->[Patient Search]","[Physician/Provider Directory]","[Eligibility Search]->[Search]","[Remittance Search]->[Search]","[Notification Search]->[Search]","[Claim Search]->[Search]","[Patient Search]->[Search]"],"Use-Case":["// {type:usecase}","// {direction:leftToRight}","(note: figure 1.2{bg:beige})","[User]-(Login)","[Site Maintainer]-(Add User)","(Add User)<(Add Company)","[Site Maintainer]-(Upload Docs)","(Upload Docs)<(Manage Folders)","[User]-(Upload Docs)","[User]-(Full Text Search Docs)","(Full Text Search Docs)>(Preview Doc)","(Full Text Search Docs)>(Download Docs)","[User]-(Browse Docs)","(Browse Docs)>(Preview Doc)","(Download Docs)","[Site Maintainer]-(Post New Event to the Web Site)","[User]-(View Events)"],"Sequence":["// {type:sequence}","[:Computer]sendUnsentEmal>[:Server]","[:Computer]newEmail>[:Server]","[:Server]reponse.>[:Computer]","[:Computer]downloadEmail>[:Server]","[:Computer]deleteOldEmail>[:Server]"]}')},function(e,t,n){e.exports=n.p+"8f1068bacff9731fe54c62ea63dbf625.js"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=function(){},o={},i=[],a=[];function s(e,t){var n,s,l,u,c=a;for(u=arguments.length;u-- >2;)i.push(arguments[u]);for(t&&null!=t.children&&(i.length||i.push(t.children),delete t.children);i.length;)if((s=i.pop())&&void 0!==s.pop)for(u=s.length;u--;)i.push(s[u]);else"boolean"==typeof s&&(s=null),(l="function"!=typeof e)&&(null==s?s="":"number"==typeof s?s=String(s):"string"!=typeof s&&(l=!1)),l&&n?c[c.length-1]+=s:c===a?c=[s]:c.push(s),n=l;var p=new r;return p.nodeName=e,p.children=c,p.attributes=null==t?void 0:t,p.key=null==t?void 0:t.key,void 0!==o.vnode&&o.vnode(p),p}function l(e,t){for(var n in t)e[n]=t[n];return e}function u(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}var c="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var p=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,f=[];function d(e){!e._dirty&&(e._dirty=!0)&&1==f.push(e)&&(o.debounceRendering||c)(m)}function m(){for(var e;e=f.pop();)e._dirty&&R(e)}function h(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&v(e,t.nodeName):n||e._componentConstructor===t.nodeName}function v(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function y(e){var t=l({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function g(e){var t=e.parentNode;t&&t.removeChild(e)}function b(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)u(n,null),u(r,e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===p.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,S,a):e.removeEventListener(t,S,a),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e){try{e[t]=null==r?"":r}catch(e){}null!=r&&!1!==r||"spellcheck"==t||e.removeAttribute(t)}else{var s=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function S(e){return this._listeners[e.type](o.event&&o.event(e)||e)}var _=[],w=0,k=!1,C=!1;function P(){for(var e;e=_.shift();)o.afterMount&&o.afterMount(e),e.componentDidMount&&e.componentDidMount()}function O(e,t,n,r,o,i){w++||(k=null!=o&&void 0!==o.ownerSVGElement,C=null!=e&&!("__preactattr_"in e));var a=j(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--w||(C=!1,i||P()),a}function j(e,t,n,r,o){var i=e,a=k;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),D(e,!0))),i.__preactattr_=!0,i;var s,l,u=t.nodeName;if("function"==typeof u)return function(e,t,n,r){var o=e&&e._component,i=o,a=e,s=o&&e._componentConstructor===t.nodeName,l=s,u=y(t);for(;o&&!l&&(o=o._parentComponent);)l=o.constructor===t.nodeName;o&&l&&(!r||o._component)?(U(o,u,3,n,r),e=o.base):(i&&!s&&(M(i),e=a=null),o=N(t.nodeName,u,n),e&&!o.nextBase&&(o.nextBase=e,a=null),U(o,u,1,n,r),e=o.base,a&&e!==a&&(a._component=null,D(a,!1)));return e}(e,t,n,r);if(k="svg"===u||"foreignObject"!==u&&k,u=String(u),(!e||!v(e,u))&&(s=u,(l=k?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,i=l,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),D(e,!0)}var c=i.firstChild,p=i.__preactattr_,f=t.children;if(null==p){p=i.__preactattr_={};for(var d=i.attributes,m=d.length;m--;)p[d[m].name]=d[m].value}return!C&&f&&1===f.length&&"string"==typeof f[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=f[0]&&(c.nodeValue=f[0]):(f&&f.length||null!=c)&&function(e,t,n,r,o){var i,a,s,l,u,c=e.childNodes,p=[],f={},d=0,m=0,v=c.length,y=0,b=t?t.length:0;if(0!==v)for(var S=0;S<v;S++){var _=c[S],w=_.__preactattr_,k=b&&w?_._component?_._component.__key:w.key:null;null!=k?(d++,f[k]=_):(w||(void 0!==_.splitText?!o||_.nodeValue.trim():o))&&(p[y++]=_)}if(0!==b)for(var S=0;S<b;S++){l=t[S],u=null;var k=l.key;if(null!=k)d&&void 0!==f[k]&&(u=f[k],f[k]=void 0,d--);else if(m<y)for(i=m;i<y;i++)if(void 0!==p[i]&&h(a=p[i],l,o)){u=a,p[i]=void 0,i===y-1&&y--,i===m&&m++;break}u=j(u,l,n,r),s=c[S],u&&u!==e&&u!==s&&(null==s?e.appendChild(u):u===s.nextSibling?g(s):e.insertBefore(u,s))}if(d)for(var S in f)void 0!==f[S]&&D(f[S],!1);for(;m<=y;)void 0!==(u=p[y--])&&D(u,!1)}(i,f,n,r,C||null!=p.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||b(e,r,n[r],n[r]=void 0,k);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||b(e,r,n[r],n[r]=t[r],k)}(i,t.attributes,p),k=a,i}function D(e,t){var n=e._component;n?M(n):(null!=e.__preactattr_&&u(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||g(e),x(e))}function x(e){for(e=e.lastChild;e;){var t=e.previousSibling;D(e,!0),e=t}}var E=[];function N(e,t,n){var r,o=E.length;for(e.prototype&&e.prototype.render?(r=new e(t,n),L.call(r,t,n)):((r=new L(t,n)).constructor=e,r.render=T);o--;)if(E[o].constructor===e)return r.nextBase=E[o].nextBase,E.splice(o,1),r;return r}function T(e,t,n){return this.constructor(e,n)}function U(e,t,n,r,i){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===o.syncComponentUpdates&&e.base?d(e):R(e,1,i)),u(e.__ref,e))}function R(e,t,n,r){if(!e._disable){var i,a,s,u=e.props,c=e.state,p=e.context,f=e.prevProps||u,d=e.prevState||c,m=e.prevContext||p,h=e.base,v=e.nextBase,g=h||v,b=e._component,S=!1,k=m;if(e.constructor.getDerivedStateFromProps&&(c=l(l({},c),e.constructor.getDerivedStateFromProps(u,c)),e.state=c),h&&(e.props=f,e.state=d,e.context=m,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,c,p)?S=!0:e.componentWillUpdate&&e.componentWillUpdate(u,c,p),e.props=u,e.state=c,e.context=p),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!S){i=e.render(u,c,p),e.getChildContext&&(p=l(l({},p),e.getChildContext())),h&&e.getSnapshotBeforeUpdate&&(k=e.getSnapshotBeforeUpdate(f,d));var C,j,x=i&&i.nodeName;if("function"==typeof x){var E=y(i);(a=b)&&a.constructor===x&&E.key==a.__key?U(a,E,1,p,!1):(C=a,e._component=a=N(x,E,p),a.nextBase=a.nextBase||v,a._parentComponent=e,U(a,E,0,p,!1),R(a,1,n,!0)),j=a.base}else s=g,(C=b)&&(s=e._component=null),(g||1===t)&&(s&&(s._component=null),j=O(s,i,p,n||!h,g&&g.parentNode,!0));if(g&&j!==g&&a!==b){var T=g.parentNode;T&&j!==T&&(T.replaceChild(j,g),C||(g._component=null,D(g,!1)))}if(C&&M(C),e.base=j,j&&!r){for(var L=e,A=e;A=A._parentComponent;)(L=A).base=j;j._component=L,j._componentConstructor=L.constructor}}for(!h||n?_.push(e):S||(e.componentDidUpdate&&e.componentDidUpdate(f,d,k),o.afterUpdate&&o.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);w||r||P()}}function M(e){o.beforeUnmount&&o.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?M(n):t&&(null!=t.__preactattr_&&u(t.__preactattr_.ref,null),e.nextBase=t,g(t),E.push(e),x(t)),u(e.__ref,null)}function L(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function A(e,t,n){return O(n,e,{},!1,t,!1)}l(L.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=l(l({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),d(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),R(this,2)},render:function(){}});n(3);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var q=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=F(this,I(t).call(this,e))).elementRef={},n}var r,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,L),r=t,(o=[{key:"componentDidMount",value:function(){var e=this,t=document.createElement("span");t.textContent="Loading…",this.elementRef.current.append(t),"undefined"==typeof PRERENDER&&Promise.all([n.e(5),n.e(15)]).then(n.bind(null,40)).then(function(e){return e.default}).then(function(n){t.remove(),e.editor=n.edit(e.elementRef.current),e.editor.on("change",e.aceChanged.bind(e)),e.editor.getSession().setMode("ace/mode/dot"),e.editor.getSession().getDocument().setValue(e.props.value||"")}).catch(console.error)}},{key:"componentDidUpdate",value:function(){if(this.editor){var e=this.editor.getSession().getDocument();this.props.value!==e.getValue()&&e.setValue(this.props.value)}}},{key:"aceChanged",value:function(e){var t=this.editor.getSession().getDocument();this.props.onChange&&this.props.onChange(t.getValue(),e)}},{key:"render",value:function(){return this.editor&&this.editor.setTheme("ace/theme/".concat(this.props.isDark?"dracula":"github")),s("main",{className:"editor",ref:this.elementRef})}}])&&W(r.prototype,o),i&&W(r,i),t}(),H=n(1);function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Y=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=z(t).call(this,e))||"object"!==$(o)&&"function"!=typeof o?J(r):o).handleChange=n.handleChange.bind(J(n)),n.loadSample=n.loadSample.bind(J(n)),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,L),n=t,(r=[{key:"handleChange",value:function(e){var t=e.target,n=t.name,r="checkbox"===t.type?t.checked:t.value;this.props.onOptionChange(n,r)}},{key:"loadSample",value:function(e){var t=e.target,n=t.value,r=t.options;this.props.onOptionChange("sample",n),r[0].selected=!0}},{key:"render",value:function(){return s("div",{className:"options"},s("select",{onChange:this.loadSample},s("option",{checked:!0,value:"0"},"Load Sample"),Object.keys(H).map(function(e){return s("option",{key:e},e)})),s("label",null,s("input",{name:"isDark",type:"checkbox",value:this.props.isDark,onChange:this.handleChange})," ","Dark mode"),s("label",{className:"mobile-only"},s("input",{name:"isPreview",type:"checkbox",value:this.props.isPreview,onChange:function(e){document.documentElement.style.setProperty("--preview",e.target.checked?'"graph"':"")}})," ","Preview"))}}])&&K(n.prototype,r),o&&K(n,o),t}();const Q={class:"class-diagram",usecase:"usecase-diagram",activity:"activity-diagram",state:"state-diagram",deployment:"deployment-diagram",package:"package-diagram",sequence:"sequence-diagram"},X={topDown:"TB",leftToRight:"LR",rightToLeft:"RL"};const Z=(e,t,r,o)=>{if(0===e.length)return Promise.resolve("");if(!t.hasOwnProperty("type"))return Promise.reject(new Error("Error: Missing mandatory 'type' directive"));if(!(t.type in Q))return Promise.reject(new Error("Invalid diagram type"));{const{isDark:i,dotHeaderOverrides:a}=t;try{const s=Q[t.type],l=n(0)(`./${s}.mjs`).then(n=>n.default(e,t));return"sequence"===t.type?l:Promise.all([Promise.all([n(0)("./dot2svg.mjs").then(e=>e.default),n(0)("./wrapDotDocument.mjs").then(e=>e.default),l]).then(([e,t,n])=>e(t(n,i,a),r,o)),n(0)("./svg-utils.mjs").then(e=>e.default)]).then(([e,t])=>t(e,i))}catch(e){return Promise.reject(e)}}},ee=(e,t)=>n=>{(n=n.trim()).startsWith("//")?te(n,e):n.length&&t.push(n)},te=function(e,t){const n=/^\/\/\s+\{\s*([\w]+)\s*:\s*([\w]+)\s*\}$/.exec(e);if(null!==n&&3===n.length){const[e,r,o]=n;switch(r){case"type":o in Q?t.type=o:console.warn(new Error("Invalid value for 'type'. Allowed values are: "+Object.keys(Q).join(", ")));break;case"direction":o in X?t.dir=X[o]:console.warn(new Error("Invalid value for 'direction'. Allowed values are: "+Object.keys(X).join(", ")));break;case"generate":/^(true|false)$/.test(o)?(t.generate="true"===o,console.warn("Generate option is not supported")):console.warn(new Error("Error: invalid value for 'generate'. Allowed values are: true, false <i>(default)</i>."))}}};var ne=n(2);function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ie(e,t){return!t||"object"!==re(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ae(e){return(ae=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function se(e,t){return(se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var le={workerURL:n.n(ne).a},ue=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=ie(this,ae(t).call(this,e))).state={},n.containerRef={},n}var r,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&se(e,t)}(t,L),r=t,(o=[{key:"updateOutput",value:function(){var e=this,t=this.props,r=t.src,o=t.isDark;r.match(/\S+/)&&"undefined"==typeof PRERENDER?((e,t,r,o)=>{t||(t={}),t.dir||(t.dir="TB"),t.type||(t.type="class"),t.isDark||(t.isDark=!1);const i=[];return e.read&&"function"==typeof e.read?n(0)("./handle-stream.mjs").then(e=>e.default).then(n=>n(e,ee(t,i))).then(()=>Z(i,t,r,o)):(e.toString().split(/\r|\n/).forEach(ee(t,i)),Z(i,t,r,o))})(r,{isDark:o},le).then(function(t){var n=(new DOMParser).parseFromString(t,"text/xml").documentElement;e.setState({text:null,element:n,error:null})}).catch(function(t){console.error(t),e.setState({error:t})}):this.setState({text:null,element:null,error:null})}},{key:"componentDidMount",value:function(){this.updateOutput()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,r=n.src,o=n.isDark;if(r===e.src&&o===e.isDark||this.updateOutput(),this.state.element!==t.element&&this.containerRef.current){for(var i=this.containerRef.current;i.firstChild;)i.removeChild(i.firstChild);this.state.element&&this.containerRef.current.appendChild(this.state.element)}}},{key:"render",value:function(){return s("div",{className:"graph "+(this.props.isDark?"graph-dark":"graph-light")},s("div",{className:"error"},this.state.error?this.state.error.message:[]),s("div",{className:"text"},s("textarea",{value:this.state.text?this.state.text:""})),s("div",{className:"element",ref:this.containerRef}))}}])&&oe(r.prototype,o),i&&oe(r,i),t}();function ce(e){return(ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fe(e){return(fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function de(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var he="graph",ve="// https://github.com/jaime-olivares/yuml-diagram/wiki\n\n// {type:activity}\n(start)-><a>[kettle empty]->(Fill Kettle)->|b|\n<a>[kettle full]->|b|->(Boil Kettle)->|c|\n|b|->(Add Tea Bag)->(Add Milk)->|c|->(Pour Water)\n(Pour Water)->(end)\n",ye=null;window.addEventListener("beforeunload",function(e){return ye});var ge=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=fe(t).call(this,e))||"object"!==ce(o)&&"function"!=typeof o?de(r):o).state={src:localStorage.getItem(he)||ve,isDark:matchMedia("(prefers-color-scheme: dark)").matches},n.handleOptionChange=n.handleOptionChange.bind(de(n)),n.handleAceEditorChange=n.handleAceEditorChange.bind(de(n)),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(t,L),n=t,(r=[{key:"handleOptionChange",value:function(e,t){"sample"===e&&(e="src",t=H[t].join("\n")),this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,t))}},{key:"handleAceEditorChange",value:function(e){this.setState({src:e}),localStorage.setItem(he,e)}},{key:"componentDidUpdate",value:function(e,t){this.state.src!==t.src&&(ye="Your changes will not be saved.")}},{key:"render",value:function(){return s("div",{id:this.props.id},s("header",null,s("b",null,"yuml2svg")," —",s("a",{href:"https://www.npmjs.com/package/yuml2svg"},s("img",{alt:"npm package",src:"https://img.shields.io/npm/v/yuml2svg/beta.svg"})),s("a",{href:"https://www.yarnpkg.com/package/yuml2svg"},s("img",{alt:"node version",src:"https://img.shields.io/node/v/yuml2svg.svg"})),s("a",{href:"https://github.com/aduh95/yuml2svg/blob/master/LICENSE.md"},s("img",{alt:"license",src:"https://img.shields.io/github/license/aduh95/yuml2svg.svg"})),s("a",{href:"https://github.com/aduh95/yuml2svg"},s("img",{alt:"github package",src:"https://img.shields.io/github/stars/aduh95/yuml2svg.svg?style=social"}))),s(q,{value:this.state.src,onChange:this.handleAceEditorChange,isDark:this.state.isDark}),s(Y,{isDark:this.state.isDark,onOptionChange:this.handleOptionChange}),s(ue,{src:this.state.src,isDark:this.state.isDark}))}}])&&pe(n.prototype,r),o&&pe(n,o),t}();A(s(ge,{id:"app_root"}),document.body,document.getElementById("app_root"))}]);