(window.webpackJsonp=window.webpackJsonp||[]).push([[14,18],{20:function(e,t,o){"use strict";o.r(t);var s=o(6),n=o(7),r=o(23);const i=.7;function c(e){const t=[],o=Object(s.splitYumlExpr)(e,"[(");for(const e of o)if(/^\(.*\)$/.test(e)){const o=Object(s.extractBgAndNote)(e.substr(1,e.length-2),!0);t.push([o.isNote?"note":"record",o.part,o.bg,o.fontcolor])}else if(/^\[.*\]$/.test(e))t.push(["actor",e.substr(1,e.length-2)]);else switch(e){case"<":t.push(["edge","vee","<<extend>>","none","dashed"]);break;case">":t.push(["edge","none","<<include>>","vee","dashed"]);break;case"-":t.push(["edge","none","","none","solid"]);break;case"^":t.push(["edge","none","","empty","solid"]);break;default:throw new Error(`Invalid expression - ${e}.`)}return t}t.default=function(e,t){const o=new n.default;let a="";for(const t of e){const e=c(t);e.length;for(const t of e){const[e,n]=t;if("note"===e||"record"===e||"actor"===e){const i=o.createUid(n);if(!i)continue;const c={fontsize:10,label:Object(s.formatLabel)(n,20,!1)};if("actor"===e)c.margin="0.05,0.05",c.shape="none",c.label="{img:actor} "+c.label,c.height=1;else{if(c.margin="0.20,0.05",c.shape="record"===e?"ellipse":"note",c.height=.5,t[2]){const e=r(t[2]);c.style="filled",c.fillcolor=e.hex(),c.fontcolor=e.isDark()?"white":"black"}t[3]&&(c.fontcolor=t[3])}a+=`\t${i} ${Object(s.serializeDot)(c)}\n`}}if(3===e.length&&"edge"===e[1][0]){const t={shape:"edge",dir:"both",style:"note"===e[0][0]||"note"===e[2][0]?"dashed":e[1][4],arrowtail:e[1][1],arrowhead:e[1][3],labeldistance:2,fontsize:10};e[1][2].length>0&&(t.label=e[1][2]),a+=`\t${o.getUid(e[0][1])} -> ${o.getUid(e[2][1])} ${Object(s.serializeDot)(t)}\n`}}return`\tranksep=${i}\n\trankdir=${t.dir}\n${a}`}},7:function(e,t,o){"use strict";o.r(t);var s=o(6);t.default=class{constructor(){this._uidNb=0,this._uids={}}createUid(e,t){const o=Object(s.recordName)(e);return!this._uids.hasOwnProperty(o)&&(this._uids[o]=t?t("A"+this._uidNb++):"A"+this._uidNb++)}getUid(e){return this._uids[Object(s.recordName)(e)]}}}}]);