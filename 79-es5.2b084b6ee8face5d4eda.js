(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{cg4z:function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",function(){return i});var o=n("1vRN"),i=function(t){var e,n,i,f,l=10*-v,p=0,L=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),m=new WeakMap,w=function(t){l=Object(o.o)(t),b(t)},h=function(){clearTimeout(f),f=void 0,n&&(O(!1),n=void 0)},E=function(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,g(a(t),t))},b=function(t){g(void 0,t)},g=function(t,e){if(!t||t!==n){clearTimeout(f),f=void 0;var i=Object(o.p)(e),a=i.x,c=i.y;if(n){if(m.has(n))throw new Error("internal error");n.classList.contains(s)||T(n,a,c),O(!0)}if(t){var u=m.get(t);u&&(clearTimeout(u),m.delete(t));var v=r(t)?0:d;t.classList.remove(s),f=setTimeout(function(){T(t,a,c),f=void 0},v)}n=t}},T=function(t,e,n){p=Date.now(),t.classList.add(s);var o=L&&c(t);o&&o.addRipple&&(j(),i=o.addRipple(e,n))},j=function(){void 0!==i&&(i.then(function(t){return t()}),i=void 0)},O=function(t){j();var e=n;if(e){var o=u-Date.now()+p;if(t&&o>0&&!r(e)){var i=setTimeout(function(){e.classList.remove(s),m.delete(e)},u);m.set(e,i)}else e.classList.remove(s)}},R=document;R.addEventListener("ionScrollStart",function(t){e=t.target,h()}),R.addEventListener("ionScrollEnd",function(){e=void 0}),R.addEventListener("ionGestureCaptured",h),R.addEventListener("touchstart",function(t){l=Object(o.o)(t),E(t)},!0),R.addEventListener("touchcancel",w,!0),R.addEventListener("touchend",w,!0),R.addEventListener("mousedown",function(t){var e=Object(o.o)(t)-v;l<e&&E(t)},!0),R.addEventListener("mouseup",function(t){var e=Object(o.o)(t)-v;l<e&&b(t)},!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var o=e[n];if(o.classList&&o.classList.contains("ion-activatable"))return o}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",d=200,u=200,v=2500}}]);