(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{41:function(e,t,n){"use strict";let o;if(n.r(t),"object"==typeof globalThis&&globalThis.ReadableStream){o=async(e,t)=>{for await(const n of async function*(e){const t=Uint8Array.from([]),n=new TextDecoder;let o=t;for await(const r of e){let e,a=0;for(;;){if(e=r.indexOf(10,a),-1===e){o=r.slice(a);break}const c=new Uint8Array(o.length+e-a);c.set(o),c.set(r.slice(a,e),o.length),a=e+1,o=t,yield n.decode(c)}}o.length&&(yield n.decode(o))}(function(e){return"function"==typeof e[Symbol.asyncIterator]?e:{next:()=>e.read(),return:()=>e.releaseLock(),[Symbol.asyncIterator](){return this}}}(e)))t(n)}}else 0;t.default=o}}]);