(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{18:function(e,t,r){"use strict";r.r(t);const n={class:"./class-diagram.mjs",usecase:"./usecase-diagram.mjs",activity:"./activity-diagram.mjs",state:"./state-diagram.mjs",deployment:"./deployment-diagram.mjs",package:"./package-diagram.mjs",sequence:"./sequence-diagram.mjs"},s={topDown:"TB",leftToRight:"LR",rightToLeft:"RL"};t.default=(e,t,n,s)=>{t||(t={}),t.dir||(t.dir="TB.mjs"),t.type||(t.type="class"),t.isDark||(t.isDark=!1);const i=[];return e.read&&"function"==typeof e.read?r(20)("./handle-stream.mjs").then(e=>e.default).then(r=>r(e,o(t,i))).then(()=>a(i,t,n,s)):(e.toString().split(/\r|\n/).forEach(o(t,i)),a(i,t,n,s))};const a=(e,t,s,a)=>{if(0===e.length)return Promise.resolve('<svg xmlns="http://www.w3.org/2000/svg"/>');if(!t.hasOwnProperty("type"))return Promise.reject(new Error("Error: Missing mandatory 'type' directive"));if(!(t.type in n))return Promise.reject(new Error("Invalid diagram type"));{const{isDark:o,dotHeaderOverrides:i}=t;try{const i=n[t.type],l=r(20)(i).then(r=>r.default(e,t));return"sequence"===t.type?l:Promise.all([Promise.all([r(20)("./dot2svg.mjs").then(e=>e.default),r(20)("./wrapDotDocument.mjs").then(e=>e.default),l]).then(([e,t,r])=>e(t(r,o),s,a)),r(20)("./svg-utils.mjs").then(e=>e.default)]).then(([e,t])=>t(e,o))}catch(e){return Promise.reject(e)}}},o=(e,t)=>r=>{(r=r.trim()).startsWith("//")?i(r,e):r.length&&t.push(r)},i=function(e,t){const r=/^\/\/\s+\{\s*([\w]+)\s*:\s*([\w]+)\s*\}$/.exec(e);if(null!==r&&3===r.length){const[e,a,o]=r;switch(a){case"type":o in n?t.type=o:console.warn(new Error("Invalid value for 'type'. Allowed values are: "+Object.keys(n).join(", ")));break;case"direction":o in s?t.dir=s[o]:console.warn(new Error("Invalid value for 'direction'. Allowed values are: "+Object.keys(s).join(", ")));break;case"generate":/^(true|false)$/.test(o)?(t.generate="true"===o,console.warn("Generate option is not supported")):console.warn(new Error("Error: invalid value for 'generate'. Allowed values are: true, false <i>(default)</i>."))}}}},20:function(e,t){function r(e){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=20}}]);