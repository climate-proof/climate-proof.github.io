(function(){var un=document&&document.currentScript&&document.currentScript.src;(window.webpackJsonpruntime=window.webpackJsonpruntime||[]).push([[8],{ONNR:function(cn,s,l){"use strict";l.r(s),l.d(s,"getCLS",function(){return Q}),l.d(s,"getFCP",function(){return N}),l.d(s,"getFID",function(){return X}),l.d(s,"getINP",function(){return x}),l.d(s,"getLCP",function(){return k}),l.d(s,"getTTFB",function(){return _}),l.d(s,"onCLS",function(){return Q}),l.d(s,"onFCP",function(){return N}),l.d(s,"onFID",function(){return X}),l.d(s,"onINP",function(){return x}),l.d(s,"onLCP",function(){return k}),l.d(s,"onTTFB",function(){return _});var g,E,j,A,B,J=-1,y=function(t){addEventListener("pageshow",function(n){n.persisted&&(J=n.timeStamp,t(n))},!0)},D=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},F=function(){var t=D();return t&&t.activationStart||0},m=function(t,n){var i=D(),e="navigate";return J>=0?e="back-forward-cache":i&&(e=document.prerendering||F()>0?"prerender":i.type.replace(/_/g,"-")),{name:t,value:n===void 0?-1:n,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:e}},T=function(t,n,i){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var e=new PerformanceObserver(function(o){n(o.getEntries())});return e.observe(Object.assign({type:t,buffered:!0},i||{})),e}}catch(o){}},C=function(t,n){var i=function e(o){o.type!=="pagehide"&&document.visibilityState!=="hidden"||(t(o),n&&(removeEventListener("visibilitychange",e,!0),removeEventListener("pagehide",e,!0)))};addEventListener("visibilitychange",i,!0),addEventListener("pagehide",i,!0)},v=function(t,n,i,e){var o,r;return function(u){n.value>=0&&(u||e)&&((r=n.value-(o||0))||o===void 0)&&(o=n.value,n.delta=r,n.rating=function(c,d){return c>d[1]?"poor":c>d[0]?"needs-improvement":"good"}(n.value,i),t(n))}},L=-1,z=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},G=function(){C(function(t){var n=t.timeStamp;L=n},!0)},M=function(){return L<0&&(L=z(),G(),y(function(){setTimeout(function(){L=z(),G()},0)})),{get firstHiddenTime(){return L}}},N=function(t,n){n=n||{};var i,e=[1800,3e3],o=M(),r=m("FCP"),u=function(a){a.forEach(function(f){f.name==="first-contentful-paint"&&(d&&d.disconnect(),f.startTime<o.firstHiddenTime&&(r.value=f.startTime-F(),r.entries.push(f),i(!0)))})},c=window.performance&&window.performance.getEntriesByName&&window.performance.getEntriesByName("first-contentful-paint")[0],d=c?null:T("paint",u);(c||d)&&(i=v(t,r,e,n.reportAllChanges),c&&u([c]),y(function(a){r=m("FCP"),i=v(t,r,e,n.reportAllChanges),requestAnimationFrame(function(){requestAnimationFrame(function(){r.value=performance.now()-a.timeStamp,i(!0)})})}))},K=!1,w=-1,Q=function(t,n){n=n||{};var i=[.1,.25];K||(N(function(f){w=f.value}),K=!0);var e,o=function(f){w>-1&&t(f)},r=m("CLS",0),u=0,c=[],d=function(f){f.forEach(function(p){if(!p.hadRecentInput){var P=c[0],an=c[c.length-1];u&&p.startTime-an.startTime<1e3&&p.startTime-P.startTime<5e3?(u+=p.value,c.push(p)):(u=p.value,c=[p]),u>r.value&&(r.value=u,r.entries=c,e())}})},a=T("layout-shift",d);a&&(e=v(o,r,i,n.reportAllChanges),C(function(){d(a.takeRecords()),e(!0)}),y(function(){u=0,w=-1,r=m("CLS",0),e=v(o,r,i,n.reportAllChanges)}))},S={passive:!0,capture:!0},nn=new Date,U=function(t,n){g||(g=n,E=t,j=new Date,W(removeEventListener),V())},V=function(){if(E>=0&&E<j-nn){var t={entryType:"first-input",name:g.type,target:g.target,cancelable:g.cancelable,startTime:g.timeStamp,processingStart:g.timeStamp+E};A.forEach(function(n){n(t)}),A=[]}},tn=function(t){if(t.cancelable){var n=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;t.type=="pointerdown"?function(i,e){var o=function(){U(i,e),u()},r=function(){u()},u=function(){removeEventListener("pointerup",o,S),removeEventListener("pointercancel",r,S)};addEventListener("pointerup",o,S),addEventListener("pointercancel",r,S)}(n,t):U(n,t)}},W=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach(function(n){return t(n,tn,S)})},X=function(t,n){n=n||{};var i,e=[100,300],o=M(),r=m("FID"),u=function(a){a.startTime<o.firstHiddenTime&&(r.value=a.processingStart-a.startTime,r.entries.push(a),i(!0))},c=function(a){a.forEach(u)},d=T("first-input",c);i=v(t,r,e,n.reportAllChanges),d&&C(function(){c(d.takeRecords()),d.disconnect()},!0),d&&y(function(){var a;r=m("FID"),i=v(t,r,e,n.reportAllChanges),A=[],E=-1,g=null,W(addEventListener),a=u,A.push(a),V()})},Y=0,R=1/0,I=0,en=function(t){t.forEach(function(n){n.interactionId&&(R=Math.min(R,n.interactionId),I=Math.max(I,n.interactionId),Y=I?(I-R)/7+1:0)})},Z=function(){return B?Y:performance.interactionCount||0},rn=function(){"interactionCount"in performance||B||(B=T("event",en,{type:"event",buffered:!0,durationThreshold:0}))},$=0,b=function(){return Z()-$},h=[],H={},q=function(t){var n=h[h.length-1],i=H[t.interactionId];if(i||h.length<10||t.duration>n.latency){if(i)i.entries.push(t),i.latency=Math.max(i.latency,t.duration);else{var e={id:t.interactionId,latency:t.duration,entries:[t]};H[e.id]=e,h.push(e)}h.sort(function(o,r){return r.latency-o.latency}),h.splice(10).forEach(function(o){delete H[o.id]})}},x=function(t,n){n=n||{};var i=[200,500];rn();var e,o=m("INP"),r=function(c){c.forEach(function(f){f.interactionId&&q(f),f.entryType==="first-input"&&!h.some(function(p){return p.entries.some(function(P){return f.duration===P.duration&&f.startTime===P.startTime})})&&q(f)});var d,a=(d=Math.min(h.length-1,Math.floor(b()/50)),h[d]);a&&a.latency!==o.value&&(o.value=a.latency,o.entries=a.entries,e())},u=T("event",r,{durationThreshold:n.durationThreshold||40});e=v(t,o,i,n.reportAllChanges),u&&(u.observe({type:"first-input",buffered:!0}),C(function(){r(u.takeRecords()),o.value<0&&b()>0&&(o.value=0,o.entries=[]),e(!0)}),y(function(){h=[],$=Z(),o=m("INP"),e=v(t,o,i,n.reportAllChanges)}))},O={},k=function(t,n){n=n||{};var i,e=[2500,4e3],o=M(),r=m("LCP"),u=function(a){var f=a[a.length-1];if(f){var p=f.startTime-F();p<o.firstHiddenTime&&(r.value=p,r.entries=[f],i())}},c=T("largest-contentful-paint",u);if(c){i=v(t,r,e,n.reportAllChanges);var d=function(){O[r.id]||(u(c.takeRecords()),c.disconnect(),O[r.id]=!0,i(!0))};["keydown","click"].forEach(function(a){addEventListener(a,d,{once:!0,capture:!0})}),C(d,!0),y(function(a){r=m("LCP"),i=v(t,r,e,n.reportAllChanges),requestAnimationFrame(function(){requestAnimationFrame(function(){r.value=performance.now()-a.timeStamp,O[r.id]=!0,i(!0)})})})}},on=function t(n){document.prerendering?addEventListener("prerenderingchange",function(){return t(n)},!0):document.readyState!=="complete"?addEventListener("load",function(){return t(n)},!0):setTimeout(n,0)},_=function(t,n){n=n||{};var i=[800,1800],e=m("TTFB"),o=v(t,e,i,n.reportAllChanges);on(function(){var r=D();if(r){if(e.value=Math.max(r.responseStart-F(),0),e.value<0||e.value>performance.now())return;e.entries=[r],o(!0),y(function(){e=m("TTFB",0),(o=v(t,e,i,n.reportAllChanges))(!0)})}})}}}])})();
