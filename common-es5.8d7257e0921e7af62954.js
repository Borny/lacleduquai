!function(){function t(t,n,e,i,r,o,s){try{var a=t[o](s),c=a.value}catch(u){return void e(u)}a.done?n(c):Promise.resolve(c).then(i,r)}function n(n){return function(){var e=this,i=arguments;return new Promise(function(r,o){var s=n.apply(e,i);function a(n){t(s,r,o,a,c,"next",n)}function c(n){t(s,r,o,a,c,"throw",n)}a(void 0)})}}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,n,e){"use strict";e.d(n,"a",function(){return s});var i=e("A36C"),r=e("iWo5"),o=e("qULd"),s=function(t,n){var e,s,a=function(t,i,r){if("undefined"!=typeof document){var o=document.elementFromPoint(t,i);o&&n(o)?o!==e&&(u(),c(o,r)):u()}},c=function(t,n){e=t,s||(s=e);var r=e;Object(i.f)(function(){return r.classList.add("ion-activated")}),n()},u=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var n=e;Object(i.f)(function(){return n.classList.remove("ion-activated")}),t&&s!==e&&e.click(),e=void 0}};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return a(t.currentX,t.currentY,o.a)},onMove:function(t){return a(t.currentX,t.currentY,o.b)},onEnd:function(){u(!0),Object(o.e)(),s=void 0}})}},"14su":function(t,n,i){"use strict";i.d(n,"a",function(){return a});var o=i("fXoL"),s=i("ofXK"),a=function(){var t=function(){function t(){e(this,t),this.fill="secondary"}return r(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Gb({type:t,selectors:[["triangle-yellow-svg"]],inputs:{fill:"fill"},decls:2,vars:1,consts:[["xmlns","http://www.w3.org/2000/svg","width","129.659","height","102.404","viewBox","0 0 129.659 102.404",3,"ngClass"],["d","M175.683,196.719l11.545-72.506L57.569,94.315Z","transform","translate(-57.569 -94.315)"]],template:function(t,n){1&t&&(o.cc(),o.Rb(0,"svg",0),o.Nb(1,"path",1),o.Qb()),2&t&&o.kc("ngClass",n.fill)},directives:[s.k],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");svg[_ngcontent-%COMP%]{width:100%;height:100%}svg.secondary[_ngcontent-%COMP%]{fill:#ffde00}svg.secondary-light[_ngcontent-%COMP%]{fill:#fff4b0}svg.secondary-dark[_ngcontent-%COMP%]{fill:#eacd00}']}),t}()},"74mu":function(t,e,i){"use strict";i.d(e,"a",function(){return o}),i.d(e,"b",function(){return s}),i.d(e,"c",function(){return r}),i.d(e,"d",function(){return c});var r=function(t,n){return null!==n.closest(t)},o=function(t,n){return"string"==typeof t&&t.length>0?Object.assign((r=!0,(i="ion-color-"+t)in(e={"ion-color":!0})?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e),n):n;var e,i,r},s=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return n[t]=!0}),n},a=/^[a-z][a-z0-9+\-.]*:/,c=function(){var t=n(regeneratorRuntime.mark(function t(n,e,i,r){var o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null==n||"#"===n[0]||a.test(n)){t.next=4;break}if(!(o=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=e&&e.preventDefault(),o.push(n,i,r)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}},t)}));return function(n,e,i,r){return t.apply(this,arguments)}}()},C6Oh:function(t,n,i){"use strict";i.d(n,"a",function(){return c});var o=i("AytR"),s=i("fXoL"),a=i("tk/3"),c=function(){var t=function(){function t(n){e(this,t),this.http=n,this.API_URL=""+o.a.apiUrl,this.CAFE_URL="/subscription/cafe"}return r(t,[{key:"postCafeSubscriptionForm",value:function(t){return this.http.post("".concat(this.API_URL).concat(this.CAFE_URL),t)}},{key:"getCafeSubscriptionMembersData",value:function(){return this.http.get("".concat(this.API_URL).concat(this.CAFE_URL))}},{key:"getCafeSubscriptionMemberData",value:function(t){return this.http.get("".concat(this.API_URL).concat(this.CAFE_URL,"/").concat(t))}},{key:"updateCafeMember",value:function(t){return this.http.put("".concat(this.API_URL).concat(this.CAFE_URL,"/").concat(t._id),t)}},{key:"deleteCafeMember",value:function(t){return this.http.delete("".concat(this.API_URL).concat(this.CAFE_URL,"/").concat(t._id))}}]),t}();return t.\u0275fac=function(n){return new(n||t)(s.Vb(a.b))},t.\u0275prov=s.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},JXrQ:function(t,n,i){"use strict";i.d(n,"a",function(){return s});var o=i("fXoL"),s=function(){var t=function(){function t(){e(this,t)}return r(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Gb({type:t,selectors:[["two-triangle-svg"]],decls:4,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","width","129.659","height","140.935","viewBox","0 0 129.659 140.935"],["transform","translate(-57.569 -55.784)"],["d","M175.683,196.719l11.545-72.506L57.569,94.315Z","fill","#ffde00"],["d","M152.359,55.784,116.471,86.9,163.7,144.931Z","fill","#5dbeba"]],template:function(t,n){1&t&&(o.cc(),o.Rb(0,"svg",0),o.Rb(1,"g",1),o.Nb(2,"path",2),o.Nb(3,"path",3),o.Qb(),o.Qb())},styles:["svg[_ngcontent-%COMP%]{width:100%;height:100%}"]}),t}()},JgnI:function(t,n,i){"use strict";i.d(n,"a",function(){return s});var o=i("fXoL"),s=function(){var t=function(){function t(){e(this,t)}return r(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Gb({type:t,selectors:[["squared-shapes-svg"]],inputs:{title:"title"},decls:7,vars:1,consts:[[1,"title"],["xmlns","http://www.w3.org/2000/svg","width","1920.001","height","257.984","viewBox","0 0 1920.001 257.984","preserveAspectRatio","none"],["transform","translate(0 -55.999)"],["d","M-11406.3-5482.544l-442.425,39.392-415.665-79.6v-138.918h1920v149.682l-443.729,108.228Z","transform","translate(12264.395 5717.666)","fill","#5dbeba"],["d","M-11828.5-5405.362l-395.041,118.514v-252.189h1920V-5285.3l-530.514-45.473-464.077,49.722Z","transform","translate(12223.539 5595.037)","fill","rgba(206,236,234,0.3)"],["d","M-10874.907-5453.408l-164.484,17.625-366.91-46.765-195.056,17.37-268-62.812-164.577,49.374-230.464-44.133v-138.92h1920v149.685l-315.669,76.994Z","transform","translate(12264.395 5717.667)","fill","#ceecea"]],template:function(t,n){1&t&&(o.Rb(0,"h1",0),o.Bc(1),o.Qb(),o.cc(),o.Rb(2,"svg",1),o.Rb(3,"g",2),o.Nb(4,"path",3),o.Nb(5,"path",4),o.Nb(6,"path",5),o.Qb(),o.Qb()),2&t&&(o.Bb(1),o.Cc(n.title))},styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");[_nghost-%COMP%]{position:relative;display:block;height:80px}@media (min-width:768px){[_nghost-%COMP%]{height:auto}}.title[_ngcontent-%COMP%]{position:absolute;top:10px;left:50%;width:100%;transform:translateX(-50%);text-align:center;font-family:Oswald,Roboto,sans-serif;font-size:1.5rem;color:#3d827f}@media (min-width:768px){.title[_ngcontent-%COMP%]{top:20px;font-size:3rem}}svg[_ngcontent-%COMP%]{width:100%;height:100%}']}),t}()},TTZi:function(t,n,i){"use strict";i.d(n,"a",function(){return u});var o=i("fXoL"),s=i("TEn/"),a=i("ofXK");function c(t,n){if(1&t&&(o.Rb(0,"ion-buttons",4),o.Nb(1,"ion-back-button",5),o.Qb()),2&t){var e=o.dc();o.Bb(1),o.kc("defaultHref",e.defaultTarget)}}var u=function(){var t=function(){function t(){e(this,t)}return r(t,[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Gb({type:t,selectors:[["ion-header-component"]],inputs:{headerTitle:"headerTitle",showBackButton:"showBackButton",defaultTarget:"defaultTarget"},decls:7,vars:2,consts:[["color","primary"],["slot","start",4,"ngIf"],["slot","end"],["menu","main"],["slot","start"],["text","",3,"defaultHref"]],template:function(t,n){1&t&&(o.Rb(0,"ion-header"),o.Rb(1,"ion-toolbar",0),o.zc(2,c,2,1,"ion-buttons",1),o.Rb(3,"ion-buttons",2),o.Nb(4,"ion-menu-button",3),o.Qb(),o.Rb(5,"ion-title"),o.Bc(6),o.Qb(),o.Qb(),o.Qb()),2&t&&(o.Bb(2),o.kc("ngIf",n.showBackButton),o.Bb(4),o.Cc(n.headerTitle))},directives:[s.q,s.P,a.m,s.g,s.y,s.N,s.d,s.e],styles:[""]}),t}()},ZaV5:function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return o});var r=function(){var t=n(regeneratorRuntime.mark(function t(n,e,i,r,o){var s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",n.attachViewToDom(e,i,o,r));case 2:if("string"==typeof i||i instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(s="string"==typeof i?e.ownerDocument&&e.ownerDocument.createElement(i):i,r&&r.forEach(function(t){return s.classList.add(t)}),o&&Object.assign(s,o),e.appendChild(s),t.t0=s.componentOnReady,!t.t0){t.next=12;break}return t.next=12,s.componentOnReady();case 12:return t.abrupt("return",s);case 13:case"end":return t.stop()}},t)}));return function(n,e,i,r,o){return t.apply(this,arguments)}}(),o=function(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},Zbey:function(t,n,i){"use strict";i.d(n,"a",function(){return c});var o=i("AytR"),s=i("fXoL"),a=i("tk/3"),c=function(){var t=function(){function t(n){e(this,t),this.http=n,this.API_URL=""+o.a.apiUrl,this.CHALKBOARD_URL="/cafe/chalkboard"}return r(t,[{key:"postChalkboardForm",value:function(t){return this.http.post("".concat(this.API_URL).concat(this.CHALKBOARD_URL),t)}},{key:"getChalkboardData",value:function(){return this.http.get("".concat(this.API_URL).concat(this.CHALKBOARD_URL))}},{key:"updateChalkboard",value:function(t){return this.http.put("".concat(this.API_URL).concat(this.CHALKBOARD_URL,"/").concat(t._id),t)}}]),t}();return t.\u0275fac=function(n){return new(n||t)(s.Vb(a.b))},t.\u0275prov=s.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},fw7z:function(t,n,i){"use strict";i.d(n,"a",function(){return a});var o=i("fXoL"),s=i("ofXK"),a=function(){var t=function(){function t(){e(this,t),this.fill="secondary"}return r(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Gb({type:t,selectors:[["triangle-blue-svg"]],inputs:{fill:"fill"},decls:2,vars:1,consts:[["xmlns","http://www.w3.org/2000/svg","width","47.229","height","89.147","viewBox","0 0 47.229 89.147",3,"ngClass"],["d","M152.359,55.784,116.471,86.9,163.7,144.931Z","transform","translate(-116.471 -55.784)"]],template:function(t,n){1&t&&(o.cc(),o.Rb(0,"svg",0),o.Nb(1,"path",1),o.Qb()),2&t&&o.kc("ngClass",n.fill)},directives:[s.k],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");svg[_ngcontent-%COMP%]{width:100%;height:100%}svg.primary[_ngcontent-%COMP%]{fill:#5dbeba}svg.primary-light[_ngcontent-%COMP%]{fill:#ceecea}svg.primary-dark[_ngcontent-%COMP%]{fill:#3d827f}']}),t}()},h3R7:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var i={bubbles:{dur:1e3,circles:9,fn:function(t,n,e){var i=t*n/e-t+"ms",r=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:function(t,n,e){var i=n/e,r=t*i-t+"ms",o=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,n){return{r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,n,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,n,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}}}},nr5L:function(t,n,i){"use strict";i.d(n,"a",function(){return c});var o=i("AytR"),s=i("fXoL"),a=i("tk/3"),c=function(){var t=function(){function t(n){e(this,t),this.http=n,this.HOME_URL=o.a.apiUrl+"/home",this.HOME_NEWS_URL=this.HOME_URL+"/news",this.SINGLE_NEWS_URL=this.HOME_URL+"/single-news",this.DELETE_NEWS_URL=this.HOME_URL+"/delete-news",this.UPDATE_NEWS_URL=this.HOME_URL+"/update-news",this.HOME_DAYS_EVENTS_URL=this.HOME_URL+"/days-events",this.SINGLE_EVENT_URL=this.HOME_URL+"/single-event",this.HOME_EVENTS_URL=this.HOME_URL+"/events",this.HOME_EVENT_URL=this.HOME_URL+"/event",this.DELETE_EVENT_URL=this.HOME_URL+"/delete-event",this.UPDATE_EVENT_URL=this.HOME_URL+"/update-event"}return r(t,[{key:"getNews",value:function(){return this.http.get(this.HOME_NEWS_URL)}},{key:"getSingleNews",value:function(t){return this.http.get("".concat(this.SINGLE_NEWS_URL,"/").concat(t))}},{key:"postNews",value:function(t){return this.http.post(this.HOME_NEWS_URL,t)}},{key:"updateNews",value:function(t){return console.log(t),this.http.put("".concat(this.UPDATE_NEWS_URL,"/").concat(t._id),t)}},{key:"deleteNews",value:function(t){return this.http.delete("".concat(this.DELETE_NEWS_URL,"/").concat(t._id))}},{key:"postEvent",value:function(t){return this.http.post(this.HOME_EVENT_URL,t)}},{key:"getDaysDayEvents",value:function(){return this.http.get(this.HOME_DAYS_EVENTS_URL)}},{key:"getEvents",value:function(){return this.http.get(this.HOME_EVENTS_URL)}},{key:"getSingleEvent",value:function(t){return this.http.get("".concat(this.SINGLE_EVENT_URL,"/").concat(t))}},{key:"updateEvent",value:function(t){return this.http.put("".concat(this.UPDATE_EVENT_URL,"/").concat(t._id),t)}},{key:"deleteEvent",value:function(t){return this.http.delete("".concat(this.DELETE_EVENT_URL,"/").concat(t._id))}}]),t}();return t.\u0275fac=function(n){return new(n||t)(s.Vb(a.b))},t.\u0275prov=s.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},o7am:function(t,n,i){"use strict";i.d(n,"a",function(){return a});var o=i("fXoL"),s=i("TEn/"),a=function(){var t=function(){function t(){e(this,t)}return r(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Gb({type:t,selectors:[["loader"]],decls:1,vars:0,consts:[["name","crescent","color","primary"]],template:function(t,n){1&t&&o.Nb(0,"ion-spinner",0)},directives:[s.H],styles:["[_nghost-%COMP%]{width:100%;display:flex;justify-content:center}"]}),t}()},ox1a:function(t,n,i){"use strict";i.d(n,"a",function(){return s});var r=i("ofXK"),o=i("fXoL"),s=function(){var t=function t(){e(this,t)};return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(n){return new(n||t)},imports:[[r.b]]}),t}()},qULd:function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return s}),e.d(n,"c",function(){return r}),e.d(n,"d",function(){return c}),e.d(n,"e",function(){return a});var i={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})}},notification:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=function(){i.selection()},o=function(){i.selectionStart()},s=function(){i.selectionChanged()},a=function(){i.selectionEnd()},c=function(t){i.impact(t)}},wzJV:function(t,n,i){"use strict";i.d(n,"a",function(){return o});var r=i("fXoL"),o=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["atom-asterisk"]],decls:2,vars:0,consts:[[1,"asterisk"]],template:function(t,n){1&t&&(r.Rb(0,"span",0),r.Bc(1,"*"),r.Qb())},styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");.asterisk[_ngcontent-%COMP%]{padding:0 .3rem;color:#5dbeba}']}),t}()},xsb0:function(t,n,i){"use strict";i.d(n,"a",function(){return c});var o=i("AytR"),s=i("fXoL"),a=i("tk/3"),c=function(){var t=function(){function t(n){e(this,t),this.http=n,this.API_URL=""+o.a.apiUrl,this.TAKE_AWAY_URL=this.API_URL+"/take-away",this.CHAI_TAKE_AWAY_URL=this.TAKE_AWAY_URL+"/chai",this.SINGLE_CHAI_TAKE_AWAY_URL=this.TAKE_AWAY_URL+"/single-chai",this.UPDATE_CHAI_TAKE_AWAY_URL=this.TAKE_AWAY_URL+"/update-chai",this.DELETE_CHAI_TAKE_AWAY_URL=this.TAKE_AWAY_URL+"/delete-chai"}return r(t,[{key:"createChaiTakeAwayOrder",value:function(t){return this.http.post(""+this.CHAI_TAKE_AWAY_URL,t)}},{key:"getChaiTakeAwayOrders",value:function(){return this.http.get(""+this.CHAI_TAKE_AWAY_URL)}},{key:"getChaiTakeAwayOrder",value:function(t){return this.http.get("".concat(this.SINGLE_CHAI_TAKE_AWAY_URL,"/").concat(t))}},{key:"updateOrder",value:function(t){return this.http.put("".concat(this.UPDATE_CHAI_TAKE_AWAY_URL,"/").concat(t._id),t)}},{key:"deleteOrder",value:function(t){return this.http.delete("".concat(this.DELETE_CHAI_TAKE_AWAY_URL,"/").concat(t._id))}}]),t}();return t.\u0275fac=function(n){return new(n||t)(s.Vb(a.b))},t.\u0275prov=s.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();