(window.webpackJsonp=window.webpackJsonp||[]).push([[17,19],{19:function(e,t,o){"use strict";o.r(t);var s=o(4),n=o(5),r=o(21);function i(e){const t=[],o=Object(s.splitYumlExpr)(e,"[(");for(const e of o)if(/^\(.*\)$/.test(e)){const o=Object(s.extractBgAndNote)(e.substr(1,e.length-2),!0);t.push([o.isNote?"note":"record",o.part,o.bg,o.fontcolor])}else if(/^\[.*\]$/.test(e))t.push(["actor",e.substr(1,e.length-2)]);else switch(e){case"<":t.push(["edge","vee","<<extend>>","none","dashed"]);break;case">":t.push(["edge","none","<<include>>","vee","dashed"]);break;case"-":t.push(["edge","none","","none","solid"]);break;case"^":t.push(["edge","none","","empty","solid"]);break;default:throw new Error(`Invalid expression - ${e}.`)}return t}t.default=function(e,t){const o=new n.default;let c="";for(const t of e){const e=i(t);e.length;for(const t of e){const[e,n]=t;if("note"===e||"record"===e||"actor"===e){const i=o.createUid(n);if(!i)continue;const a={fontsize:10,label:Object(s.formatLabel)(n,20,!1)};if("actor"===e)a.margin="0.05,0.05",a.shape="none",a.label="{img:actor} "+a.label,a.height=1;else{if(a.margin="0.20,0.05",a.shape="record"===e?"ellipse":"note",a.height=.5,t[2]){const e=r(t[2]);a.style="filled",a.fillcolor=e.hex(),a.fontcolor=e.isDark()?"white":"black"}t[3]&&(a.fontcolor=t[3])}c+=`\t${i} ${Object(s.serializeDot)(a)}\n`}}if(3===e.length&&"edge"===e[1][0]){const t={shape:"edge",dir:"both",style:"note"===e[0][0]||"note"===e[2][0]?"dashed":e[1][4],arrowtail:e[1][1],arrowhead:e[1][3],labeldistance:2,fontsize:10};e[1][2].length>0&&(t.label=e[1][2]),c+=`\t${o.getUid(e[0][1])} -> ${o.getUid(e[2][1])} ${Object(s.serializeDot)(t)}\n`}}return`\tranksep=0.7\n\trankdir=${t.dir}\n${c}`}},5:function(e,t,o){"use strict";o.r(t);var s=o(4);t.default=class{constructor(){this._uidNb=0,this._uids={}}createUid(e,t){const o=Object(s.recordName)(e);return!this._uids.hasOwnProperty(o)&&(this._uids[o]=t?t("A"+this._uidNb++):"A"+this._uidNb++)}getUid(e){return this._uids[Object(s.recordName)(e)]}}}}]);