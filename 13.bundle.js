(window.webpackJsonp=window.webpackJsonp||[]).push([[13,18],{18:function(e,t,o){"use strict";o.r(t);var r=o(6),s=o(7),n=o(23);function i(e){const t=[],o=Object(r.splitYumlExpr)(e,"(");for(const e of o)if(/^\(.*\)$/.test(e)){const o=Object(r.extractBgAndNote)(e.substr(1,e.length-2),!0);t.push([o.isNote?"note":"record",o.part,o.bg,o.fontcolor])}else if(e.endsWith("->"))t.push(["edge","none","vee",e.substr(0,e.length-2).trim(),"solid"]);else{if("-"!==e)throw new Error(`Invalid expression - ${e}.`);t.push(["edge","none","none","","solid"])}return t}t.default=(e,t)=>{let o;const c=new s.default;let d="";for(const t of e){const e=i(t),s=e.length-1;for(const t of e){const[e,s]=t;if("note"===e||"record"===e){const i=c.createUid(s);if(!i)continue;if("record"!==e||"start"!==s&&"end"!==s){if(o={shape:e,height:.5,fontsize:10,margin:"0.20,0.05",label:Object(r.formatLabel)(s,20,!0),style:"rounded"},t[2]){const e=n(t[2]);o.style="filled",o.fillcolor=e.hex(),o.fontcolor=e.isDark()?"white":"black"}t[3]&&(o.fontcolor=t[3])}else o={shape:"start"===s?"circle":"doublecircle",height:.3,width:.3,margin:"0,0",label:""};d+=`\t${i} ${Object(r.serializeDot)(o)}\n`}}for(let t=1;t<s;t++)if("edge"===e[t][0]&&"edge"!==e[t-1][0]&&"edge"!==e[t+1][0]){const o={shape:"edge",dir:"both",style:"note"===e[t-1][0]||"note"===e[t+1][0]?"dashed":e[t][4],arrowtail:e[t][1],arrowhead:e[t][2],labeldistance:2,fontsize:10};e[t][3].length>0&&(o.label=e[t][3]),d+=`\t${c.getUid(e[t-1][1])} -> ${c.getUid(e[t+1][1])} ${Object(r.serializeDot)(o)}\n`}}return`\tranksep=0.5\n\trankdir=${t.dir}\n${d}`}},7:function(e,t,o){"use strict";o.r(t);var r=o(6);t.default=class{constructor(){this._uidNb=0,this._uids={}}createUid(e,t){const o=Object(r.recordName)(e);return!this._uids.hasOwnProperty(o)&&(this._uids[o]=t?t("A"+this._uidNb++):"A"+this._uidNb++)}getUid(e){return this._uids[Object(r.recordName)(e)]}}}}]);