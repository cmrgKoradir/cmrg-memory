if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,r,i)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const a={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return c;case"module":return a;default:return e(s)}})).then(e=>{const s=i(...e);return c.default||(c.default=s),c})}))}}define("./sw.js",["./workbox-dde0c945"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"asset-manifest.json",revision:"37b1a21b982948a6e488b5cb6aedf694"},{url:"favicon.ico",revision:"6e1267d9d946b0236cdf6ffd02890894"},{url:"index.html",revision:"75b5c7bbdb26d5041f3408d7864884ae"},{url:"logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"manifest.json",revision:"5a61e10633f41782d1d64d65e1dc6f53"},{url:"precache-manifest.3dc40efbe4fbdeb11a9cc535e85176af.js",revision:"3dc40efbe4fbdeb11a9cc535e85176af"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"service-worker.js",revision:"d8f7604a2c829317993aac11a6cc7f38"},{url:"static/css/main.c868c7e9.chunk.css",revision:"9295ccdaace535606ebddcbc32507eef"},{url:"static/js/2.9aae4d60.chunk.js",revision:"de5130b2a5bb87f431c6c9077ee8c197"},{url:"static/js/2.9aae4d60.chunk.js.LICENSE.txt",revision:"c64c486544348f10a6d6c716950bc223"},{url:"static/js/main.b22a83ad.chunk.js",revision:"f3272aa9e416ea6070c3e5cec312927b"},{url:"static/js/runtime-main.6d75802c.js",revision:"9014fb0d0950a1988352e4046459ab2d"}],{}),e.registerRoute(/.*comerge\.net\/.*/,new e.StaleWhileRevalidate({cacheName:"cmrg-assets",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
