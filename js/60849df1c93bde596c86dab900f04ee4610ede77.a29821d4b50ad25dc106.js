(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Edme:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Y}));var o=n("Fcif"),r=n("mK0O"),c=n("dV/x"),a=n("YIwv"),i=n.n(a),l=n("mXGw"),s=n.n(l),u=n("8Jek"),d=n.n(u),f=n("edw/"),p=n("T5cu"),b=n.n(p),g=n("fCho"),h=n("aNYv"),w=n("/gfI"),m=n.n(w),v=n("4xtk"),O=function(){var e=Object(l.useRef)(),t=Object(l.useState)(!1),n=t[0],o=t[1];return Object(l.useEffect)((function(){return e.current=!0,function(){e.current=!1}})),Object(l.useEffect)((function(){var t=function(){e.current&&o(!0)};v.a.ready(t),setTimeout(t,1500)}),[]),n},j=n("pVN6"),E=n("SUdF"),S={SLOT_LOADED:"slotOnload",SLOT_RENDER_ENDED:"slotRenderEnded"},x=n("hisu"),z=n("0942"),R=n("CHlC"),y=n("kMo5"),_=n("P+uj"),k=n("/ieh");function L(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var N=function(e){Object(R.a)(o,e);var t,n=(t=o,function(){var e,n=Object(_.a)(t);if(L()){var o=Object(_.a)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return Object(y.a)(this,e)});function o(){var e;Object(x.a)(this,o);for(var t=arguments.length,c=new Array(t),a=0;a<t;a++)c[a]=arguments[a];return e=n.call.apply(n,[this].concat(c)),Object(r.a)(Object(z.a)(e),"setupGlobalListeners",(function(){o.listening||(o.listening=!0,window.googletag.cmd.push((function(){Object.values(S).forEach((function(t){window.googletag.pubads().addEventListener(t,(function(n){return e.emit(t,n)}))}))})))})),e}return o}(n.n(k).a);Object(r.a)(N,"listening",!1);var A=new N,D=[".min-h-1.jsx-105240909{min-height:1px;}"];D.__hash="105240909";var T=D,C=s.a.createElement,M=0,I=Object(l.memo)(Object(l.forwardRef)((function(e,t){var n=e.adUnitPath,o=e.slotSize,r=e.sizeMapping,c=e.targeting,a=e.onSlotRenderEnded,s=e.onSlotOnload,u=e.id,d=e.renderWhenViewable,f=Object(l.useRef)(null),p=Object(l.useRef)(null),b=Object(l.useState)(!d),g=b[0],w=b[1],m=Object(E.b)(),x=Object(h.a)(m,2),z=x[0],R=x[1],y=O(),_=Object(l.useMemo)((function(){var e="GPT-".concat(M);return M+=1,e}),[]),k=u||_,L=function(){window.googletag.cmd.push((function(){p.current&&window.googletag.pubads().refresh([p.current])}))};Object(l.useImperativeHandle)(t,(function(){return{refresh:L}}));var N=Object(l.useCallback)((function(){f.current&&n&&o&&(f.current.id=k,window.googletag.cmd.push((function(){if(p.current=window.googletag.defineSlot(n,o,k),p.current){if(r){var e=window.googletag.sizeMapping();r.forEach((function(t){e=e.addSize(t.viewport,t.slot)})),e=e.build(),p.current.defineSizeMapping(e)}p.current.setCollapseEmptyDiv(!0),Object.keys(c).forEach((function(e){p.current.setTargeting(e,c[e])})),v.a.hasConsent()&&v.a.setGPTTargeting(p.current),p.current.addService(window.googletag.pubads()),window.googletag.enableServices(),window.googletag.display(p.current)}else console.warn("GPT: Unable to build ad slot for element with id '".concat(k,"'.  Verify the element exists and doesn't appear on the page more than once."))})))}),[k,n,o,r,c]),D=function(){window.googletag.cmd.push((function(){p.current&&window.googletag.destroySlots([p.current])&&(p.current=null)}))};return Object(l.useEffect)((function(){window.googletag=window.googletag||{cmd:[]},window.googletag.cmd.push((function(){window.googletag.pubads().disableInitialLoad()})),A.setupGlobalListeners();var e=function(e){a&&p.current===e.slot&&a(e)},t=function(e){s&&p.current===e.slot&&s(e)};return A.on(S.SLOT_LOADED,t),A.on(S.SLOT_RENDER_ENDED,e),function(){A.off(S.SLOT_LOADED,t),A.off(S.SLOT_RENDER_ENDED,e)}}),[a,s]),Object(l.useEffect)((function(){return g&&y&&(N(),L()),D}),[g,y,N]),Object(l.useEffect)((function(){R&&w(!0)}),[R]),C("div",{ref:z,className:"jsx-".concat(T.__hash)},C(j.a,{src:"https://securepubads.g.doubleclick.net/tag/js/gpt.js",async:!0}),C("div",{ref:f,className:"jsx-".concat(T.__hash)+" min-h-1"}),C(i.a,{id:T.__hash},T))})),m.a);I.defaultProps={adUnitPath:null,slotSize:null,sizeMapping:null,targeting:{},onSlotRenderEnded:null,onSlotOnload:null,id:null,renderWhenViewable:!1},I.displayName="GPT";var P=I,G=n("yIzp"),V=[".Ad.jsx-3147607619 iframe{display:inline;}",".Ad.jsx-3147607619 > div{max-width:100%;}",".framed.jsx-3147607619{background-color:#fbfbfb;padding-bottom:3rem;text-align:center;}",".label.jsx-3147607619{color:#8f959e;font-size:1rem;-webkit-letter-spacing:0.0625rem;-moz-letter-spacing:0.0625rem;-ms-letter-spacing:0.0625rem;letter-spacing:0.0625rem;line-height:1;padding:1rem;text-transform:uppercase;}",".dark.jsx-3147607619{background-color:#1f1f1f;}",".dark.jsx-3147607619 .label.jsx-3147607619{color:#ffffff;}","@media (min-width:960px){.label.jsx-3147607619{padding:1.5rem;}}"];V.__hash="3147607619";var W=V,H=s.a.createElement,U=function(e){var t,n=e.className,a=e.preset,u=e.framed,p=e.aspectRatio,h=e.theme,w=e.before,m=e.children,v=e.refreshOnScrollAmount,O=e.refreshOnInterval,j=e.onSlotRenderEnded,E=e.onSlotOnload,S=Object(c.a)(e,["className","preset","framed","aspectRatio","theme","before","children","refreshOnScrollAmount","refreshOnInterval","onSlotRenderEnded","onSlotOnload"]),x=Object(l.useRef)(null),z=Object(l.useRef)(window.scrollY),R=Object(l.useRef)(0),y=Object(l.useRef)(Object(f.detected)()),_=Object(l.useState)(!1),k=_[0],L=_[1],N=Object(l.useState)(!1),A=N[0],D=N[1],T=Object(l.useState)(!0),C=T[0],M=T[1];Object(l.useEffect)((function(){var e;return v&&(e=b()((function(){var e=Math.abs(z.current-window.scrollY);R.current+=e,z.current=window.scrollY,R.current>=v&&(R.current=0,x.current&&x.current.refresh())}),500),window.addEventListener("scroll",e)),function(){e&&window.removeEventListener("scroll",e)}}),[v]),Object(l.useEffect)((function(){var e=null;return O&&(e=setInterval((function(){var e;return null===(e=x.current)||void 0===e?void 0:e.refresh()}),O)),function(){return clearInterval(e)}}),[O]);var I=Object(l.useCallback)((function(e){j&&j(e),e.isEmpty||M(!1),L(!0)}),[j]),V=Object(l.useCallback)((function(){E&&E(),D(!0)}),[E]),U=!C&&k,Y=Boolean(m&&(y.current||C&&k));return H(s.a.Fragment,null,(U||Y)&&w,Y&&m,!Y&&H("div",{style:A&&p&&{paddingBottom:"".concat(1/p*100,"%")}||null,"data-testid":Object(g.a)("ad-".concat(a),"ad","div"),className:"jsx-".concat(W.__hash)+" "+(d()("Ad",(t={framed:U&&u,respectAspectRatio:A&&p},Object(r.a)(t,n,U),Object(r.a)(t,h,U),t))||"")},U&&u&&H("div",{"data-testid":Object(g.a)("ad-".concat(a,"-label"),"ad-label","txt"),className:"jsx-".concat(W.__hash)+" label"},"Advertisement"),H(P,Object(o.a)({ref:x},a?G.a[a]:{},S,{onSlotRenderEnded:I,onSlotOnload:V}))),H(i.a,{id:W.__hash},W))};U.defaultProps={before:null,preset:null,aspectRatio:null,children:null,framed:!1,refreshOnScrollAmount:null,refreshOnInterval:null,className:null,onSlotRenderEnded:null,onSlotOnload:null,theme:"light"},U.displayName="Ad";var Y=U},T5cu:function(e,t,n){var o=n("5Zwl"),r=n("9aUh"),c="Expected a function";e.exports=function(e,t,n){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError(c);return r(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),o(e,t,{leading:a,maxWait:t,trailing:i})}},"edw/":function(e,t){e.exports={detected:function(){return blockedElement=document.createElement("div"),blockedElement.className="pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads",blockedElement.setAttribute("style","position: absolute; top: -10px; left: -10px; width: 1px; height: 1px;"),document.body.appendChild(blockedElement),null!=window.document.body.getAttribute("abp")||null==blockedElement.offsetParent||0==blockedElement.offsetHeight||0==blockedElement.offsetLeft||0==blockedElement.offsetTop||0==blockedElement.offsetWidth||0==blockedElement.clientHeight||0==blockedElement.clientWidth}}},pVN6:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n("dV/x"),r=n("mXGw"),c=n("W0B4"),a=n.n(c),i={},l=[],s=function(e){var t=e.ignoreCache,n=void 0!==t&&t,c=e.src,a=Object(o.a)(e,["ignoreCache","src"]),s=Object(r.useRef)(),u=Object(r.useState)(l.includes(c)),d=u[0],f=u[1],p=Object(r.useCallback)((function(){n||l.includes(c)||l.push(c),f(!0)}),[c,n]);return Object(r.useEffect)((function(){return c&&(n||(s.current=i[c]),s.current||(s.current=document.createElement("script"),n||(i[c]=s.current),s.current.src=c,Object.keys(a).forEach((function(e){s.current.setAttribute(e,a[e])})),document.head.appendChild(s.current)),s.current.addEventListener("load",p)),function(){n&&s.current&&(s.current.remove(),s.current=null)}}),[c,n,a,p]),d},u=function(e){var t=e.onLoad,n=Object(o.a)(e,["onLoad"]),c=s(n);return Object(r.useEffect)((function(){t&&c&&t()}),[t,c]),null};u.propTypes={onLoad:a.a.func,ignoreCache:a.a.bool};var d=u},yIzp:function(e,t,n){"use strict";t.a={inContent:{slotSize:[[300,250],[1,1]],sizeMapping:[{viewport:[0,0],slot:[]},{viewport:[320,0],slot:[[300,250],[1,1]]}]},hero:{slotSize:[[970,250],[970,90],[728,90],[1,1]],sizeMapping:[{viewport:[0,0],slot:[]},{viewport:[300,0],slot:[[320,50],[1,1]]},{viewport:[768,0],slot:[[728,90],[1,1]]},{viewport:[960,0],slot:[[970,250],[970,90],[728,90],[1,1]]}]},logoHeader:{slotSize:[[320,60]]},logoAttribution:{slotSize:[[300,500],[600,300]]},list:{slotSize:[[320,50],[300,250],[1,1]],sizeMapping:[{viewport:[768,0],slot:[[1,1],[300,250],[320,50]]},{viewport:[1024,0],slot:[[1,1],[728,90]]}]},minSlotSize:{slotSize:[[1,1]]},native:{slotSize:["fluid"]},rail:{slotSize:[[300,600],[300,250],[160,600]],sizeMapping:[{viewport:[0,0],slot:[]},{viewport:[320,0],slot:[[300,250]]},{viewport:[768,0],slot:[[300,600],[300,250],[160,600]]}]},railShort:{slotSize:[[300,250]],sizeMapping:[{viewport:[0,0],slot:[]},{viewport:[320,0],slot:[[300,250]]}]},superzone:{slotSize:[[970,250],[970,90],[728,90],[1,1]],sizeMapping:[{viewport:[0,0],slot:[]},{viewport:[300,0],slot:[[320,50],[1,1]]},{viewport:[768,0],slot:[[728,90],[1,1]]},{viewport:[960,0],slot:[[970,250],[970,90],[728,90],[1,1]]}]},superzoneSticky:{slotSize:[[970,90],[728,90],[320,50],[1,1]],sizeMapping:[{viewport:[0,0],slot:[]},{viewport:[320,0],slot:[[320,50],[1,1]]},{viewport:[768,0],slot:[[728,90],[1,1]]},{viewport:[960,0],slot:[[970,90],[728,90],[1,1]]}]}}}}]);