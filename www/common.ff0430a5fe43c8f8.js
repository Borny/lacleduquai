"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1015:(E,l,s)=>{s.d(l,{c:()=>i});var e=s(5221),r=s(8936),_=s(4743);const i=(n,a)=>{let t,o;const c=(h,p,m)=>{if("undefined"==typeof document)return;const g=document.elementFromPoint(h,p);g&&a(g)?g!==t&&(d(),u(g,m)):d()},u=(h,p)=>{t=h,o||(o=t);const m=t;(0,e.c)(()=>m.classList.add("ion-activated")),p()},d=(h=!1)=>{if(!t)return;const p=t;(0,e.c)(()=>p.classList.remove("ion-activated")),h&&o!==t&&t.click(),t=void 0};return(0,_.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:h=>c(h.currentX,h.currentY,r.a),onMove:h=>c(h.currentX,h.currentY,r.b),onEnd:()=>{d(!0),(0,r.h)(),o=void 0}})}},2345:(E,l,s)=>{s.d(l,{a:()=>_,d:()=>i});var e=s(8239),r=s(697);const _=function(){var n=(0,e.Z)(function*(a,t,o,c,u){if(a)return a.attachViewToDom(t,o,u,c);if("string"!=typeof o&&!(o instanceof HTMLElement))throw new Error("framework delegate is missing");const d="string"==typeof o?t.ownerDocument&&t.ownerDocument.createElement(o):o;return c&&c.forEach(h=>d.classList.add(h)),u&&Object.assign(d,u),t.appendChild(d),yield new Promise(h=>(0,r.c)(d,h)),d});return function(t,o,c,u,d){return n.apply(this,arguments)}}(),i=(n,a)=>{if(a){if(n)return n.removeViewFromDom(a.parentElement,a);a.remove()}return Promise.resolve()}},8936:(E,l,s)=>{s.d(l,{a:()=>_,b:()=>i,c:()=>r,d:()=>a,h:()=>n});const e={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const o=this.getEngine();if(!o)return;const c=this.isCapacitor()?t.style.toUpperCase():t.style;o.impact({style:c})},notification(t){const o=this.getEngine();if(!o)return;const c=this.isCapacitor()?t.style.toUpperCase():t.style;o.notification({style:c})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{e.selection()},_=()=>{e.selectionStart()},i=()=>{e.selectionChanged()},n=()=>{e.selectionEnd()},a=t=>{e.impact(t)}},4159:(E,l,s)=>{s.d(l,{s:()=>e});const e=o=>{try{if(o instanceof class{constructor(c){this.value=c}})return o.value;if(!i()||"string"!=typeof o||""===o)return o;const c=document.createDocumentFragment(),u=document.createElement("div");c.appendChild(u),u.innerHTML=o,a.forEach(m=>{const g=c.querySelectorAll(m);for(let L=g.length-1;L>=0;L--){const f=g[L];f.parentNode?f.parentNode.removeChild(f):c.removeChild(f);const A=_(f);for(let R=0;R<A.length;R++)r(A[R])}});const d=_(c);for(let m=0;m<d.length;m++)r(d[m]);const h=document.createElement("div");h.appendChild(c);const p=h.querySelector("div");return null!==p?p.innerHTML:h.innerHTML}catch(c){return console.error(c),""}},r=o=>{if(o.nodeType&&1!==o.nodeType)return;for(let u=o.attributes.length-1;u>=0;u--){const d=o.attributes.item(u),h=d.name;if(!n.includes(h.toLowerCase())){o.removeAttribute(h);continue}const p=d.value;null!=p&&p.toLowerCase().includes("javascript:")&&o.removeAttribute(h)}const c=_(o);for(let u=0;u<c.length;u++)r(c[u])},_=o=>null!=o.children?o.children:o.childNodes,i=()=>{const o=window,c=o&&o.Ionic&&o.Ionic.config;return!c||(c.get?c.get("sanitizerEnabled",!0):!0===c.sanitizerEnabled||void 0===c.sanitizerEnabled)},n=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},2879:(E,l,s)=>{s.d(l,{S:()=>r});const r={bubbles:{dur:1e3,circles:9,fn:(_,i,n)=>{const a=_*i/n-_+"ms",t=2*Math.PI*i/n;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":a}}}},circles:{dur:1e3,circles:8,fn:(_,i,n)=>{const a=i/n,t=_*a-_+"ms",o=2*Math.PI*a;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(_,i)=>({r:6,style:{left:9-9*i+"px","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:12,fn:(_,i,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":_*i/n-_+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(_,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":_*i/n-_+"ms"}})}}},4832:(E,l,s)=>{s.d(l,{c:()=>_,g:()=>n,h:()=>r,o:()=>t});var e=s(8239);const r=(o,c)=>null!==c.closest(o),_=(o,c)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,[`ion-color-${o}`]:!0},c):c,n=o=>{const c={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(u=>null!=u).map(u=>u.trim()).filter(u=>""!==u):[])(o).forEach(u=>c[u]=!0),c},a=/^[a-z][a-z0-9+\-.]*:/,t=function(){var o=(0,e.Z)(function*(c,u,d,h){if(null!=c&&"#"!==c[0]&&!a.test(c)){const p=document.querySelector("ion-router");if(p)return null!=u&&u.preventDefault(),p.push(c,d,h)}return!1});return function(u,d,h,p){return o.apply(this,arguments)}}()},9947:(E,l,s)=>{s.d(l,{y:()=>r});var e=s(3668);let r=(()=>{class _{constructor(){}}return _.\u0275fac=function(n){return new(n||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["atom-asterisk"]],decls:2,vars:0,consts:[[1,"asterisk"]],template:function(n,a){1&n&&(e.TgZ(0,"span",0),e._uU(1,"*"),e.qZA())},styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap";@import"https://fonts.googleapis.com/css2?family=Oswald&display=swap";.asterisk[_ngcontent-%COMP%]{padding:0 .3rem;color:#5dbeba}']}),_})()},6828:(E,l,s)=>{s.d(l,{p:()=>_});var e=s(6019),r=s(3668);let _=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({imports:[[e.ez]]}),i})()},3425:(E,l,s)=>{s.d(l,{A:()=>e});var e=(()=>{return(r=e||(e={})).FIRST="CB",r.SECOND="Par ch\xe8que",r.THIRD="En esp\xe8ce",e;var r})()},3735:(E,l,s)=>{s.d(l,{n:()=>e});var e=(()=>{return(r=e||(e={})).FREE="Gratuit",r.OPEN_PRICE="Prix libre",r.PAYING="Payant",e;var r})()},2480:(E,l,s)=>{s.d(l,{G:()=>e});var e=(()=>{return(r=e||(e={})).TWENTY="2020",r.TWENTY_ONE="2021",e;var r})()},9790:(E,l,s)=>{s.d(l,{H:()=>i});var e=s(8260),r=s(3668),_=s(4522);let i=(()=>{class n{constructor(t){this.http=t,this.API_URL=`${e.N.apiUrl}`,this.CAFE_URL="/subscription/cafe",this.CAFE_URL_ALL="/subscription/cafe-all"}postCafeSubscriptionForm(t){return this.http.post(`${this.API_URL}${this.CAFE_URL}`,t)}getCafeSubscriptionMembersData(t){return this.http.get(`${this.API_URL}${this.CAFE_URL_ALL}/${t}`)}getCafeSubscriptionMemberData(t){return this.http.get(`${this.API_URL}${this.CAFE_URL}/${t}`)}updateCafeMember(t){return this.http.put(`${this.API_URL}${this.CAFE_URL}/${t._id}`,t)}deleteCafeMember(t){return this.http.delete(`${this.API_URL}${this.CAFE_URL}/${t._id}`)}}return n.\u0275fac=function(t){return new(t||n)(r.LFG(_.eN))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},7234:(E,l,s)=>{s.d(l,{a:()=>i});var e=s(8260),r=s(3668),_=s(4522);let i=(()=>{class n{constructor(t){this.http=t,this.API_URL=`${e.N.apiUrl}`,this.CHALKBOARD_URL=`${this.API_URL}/cafe/chalkboard`}postChalkboardForm(t){return this.http.post(`${this.CHALKBOARD_URL}`,t)}getChalkboardData(){return this.http.get(`${this.CHALKBOARD_URL}`)}updateChalkboard(t){return this.http.put(`${this.CHALKBOARD_URL}/${t._id}`,t)}}return n.\u0275fac=function(t){return new(t||n)(r.LFG(_.eN))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},2626:(E,l,s)=>{s.d(l,{Y:()=>i});var e=s(8260),r=s(3668),_=s(4522);let i=(()=>{class n{constructor(t){this.http=t,this.HOME_URL=e.N.apiUrl+"/home",this.HOME_NEWS_URL=this.HOME_URL+"/news",this.SINGLE_NEWS_URL=this.HOME_URL+"/single-news",this.DELETE_NEWS_URL=this.HOME_URL+"/delete-news",this.UPDATE_NEWS_URL=this.HOME_URL+"/update-news",this.HOME_DAYS_EVENTS_URL=`${this.HOME_URL}/days-events`,this.SINGLE_EVENT_URL=`${this.HOME_URL}/single-event`,this.HOME_EVENTS_URL=`${this.HOME_URL}/events`,this.HOME_EVENT_URL=`${this.HOME_URL}/event`,this.DELETE_EVENT_URL=`${this.HOME_URL}/delete-event`,this.UPDATE_EVENT_URL=`${this.HOME_URL}/update-event`}getNews(){return this.http.get(this.HOME_NEWS_URL)}getSingleNews(t){return this.http.get(`${this.SINGLE_NEWS_URL}/${t}`)}postNews(t){return this.http.post(this.HOME_NEWS_URL,t)}updateNews(t){return console.log(t),this.http.put(`${this.UPDATE_NEWS_URL}/${t._id}`,t)}deleteNews(t){return this.http.delete(`${this.DELETE_NEWS_URL}/${t._id}`)}postEvent(t){return this.http.post(this.HOME_EVENT_URL,t)}getDaysDayEvents(){return this.http.get(this.HOME_DAYS_EVENTS_URL)}getEvents(){return this.http.get(this.HOME_EVENTS_URL)}getSingleEvent(t){return this.http.get(`${this.SINGLE_EVENT_URL}/${t}`)}updateEvent(t){return this.http.put(`${this.UPDATE_EVENT_URL}/${t._id}`,t)}deleteEvent(t){return this.http.delete(`${this.DELETE_EVENT_URL}/${t._id}`)}}return n.\u0275fac=function(t){return new(t||n)(r.LFG(_.eN))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},4597:(E,l,s)=>{s.d(l,{e:()=>i});var e=s(8260),r=s(3668),_=s(4522);let i=(()=>{class n{constructor(t){this.http=t,this.RESIDENCE_URL=e.N.apiUrl+"/residence",this.UPDATE_RESIDENCE_URL=this.RESIDENCE_URL+"/update-residence",this.DELETE_RESIDENCE_URL=this.RESIDENCE_URL+"/delete-residence"}postResidenceForm(t){return console.log("residence service:",t),this.http.post(this.RESIDENCE_URL,t)}getResidences(){return this.http.get(this.RESIDENCE_URL)}updateResidence(t){return console.log("update",t),this.http.put(`${this.UPDATE_RESIDENCE_URL}/${t._id}`,t)}deleteResidence(t){return this.http.delete(`${this.DELETE_RESIDENCE_URL}/${t._id}`)}}return n.\u0275fac=function(t){return new(t||n)(r.LFG(_.eN))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},4189:(E,l,s)=>{s.d(l,{F:()=>i});var e=s(8260),r=s(3668),_=s(4522);let i=(()=>{class n{constructor(t){this.http=t,this.API_URL=`${e.N.apiUrl}`,this.PRE_SUBSCRIPTION_URL="/subscription/pre-subscription",this.GET_MEMBERS_URL_ALL="/subscription/members_all",this.GET_FILTERED_MEMBERS_URL="/subscription/filtered-members",this.GET_MEMBERS_URL="/subscription/members",this.GET_MEMBERS_2020="/subscription/season-2020",this.GET_COURSES_URL_ALL="/course/course",this.COURSE_URL="/course"}getCourseList(){return this.http.get(`${this.API_URL}${this.GET_COURSES_URL_ALL}`)}updateCourse(t){return this.http.put(`${this.API_URL}${this.COURSE_URL}/${t._id}`,{course:t})}deleteCourse(t){return this.http.delete(`${this.API_URL}${this.COURSE_URL}/${t._id}`)}createMember(t){return this.http.post(`${this.API_URL}${this.PRE_SUBSCRIPTION_URL}`,t)}getMembersData(t){return this.http.get(`${this.API_URL}${this.GET_MEMBERS_URL_ALL}/${t}`)}getFilteredMembers(t,o){return this.http.get(`${this.API_URL}${this.GET_FILTERED_MEMBERS_URL}/${o}/${t}`)}get2020Season(){return this.http.get(`${this.API_URL}${this.GET_MEMBERS_2020}`)}getMemberData(t){return this.http.get(`${this.API_URL}${this.GET_MEMBERS_URL}/${t}`)}updateMember(t){return this.http.put(`${this.API_URL}${this.PRE_SUBSCRIPTION_URL}/${t._id}`,t)}deleteMember(t){return this.http.delete(`${this.API_URL}${this.GET_MEMBERS_URL}/${t._id}`)}}return n.\u0275fac=function(t){return new(t||n)(r.LFG(_.eN))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},5147:(E,l,s)=>{s.d(l,{f:()=>i});var e=s(8260),r=s(3668),_=s(4522);let i=(()=>{class n{constructor(t){this.http=t,this.API_URL=`${e.N.apiUrl}`,this.TAKE_AWAY_URL=`${this.API_URL}/take-away`,this.CHAI_TAKE_AWAY_URL=`${this.TAKE_AWAY_URL}/chai`,this.SINGLE_CHAI_TAKE_AWAY_URL=`${this.TAKE_AWAY_URL}/single-chai`,this.UPDATE_CHAI_TAKE_AWAY_URL=`${this.TAKE_AWAY_URL}/update-chai`,this.DELETE_CHAI_TAKE_AWAY_URL=`${this.TAKE_AWAY_URL}/delete-chai`}createChaiTakeAwayOrder(t){return this.http.post(`${this.CHAI_TAKE_AWAY_URL}`,t)}getChaiTakeAwayOrders(){return this.http.get(`${this.CHAI_TAKE_AWAY_URL}`)}getChaiTakeAwayOrder(t){return this.http.get(`${this.SINGLE_CHAI_TAKE_AWAY_URL}/${t}`)}updateOrder(t){return this.http.put(`${this.UPDATE_CHAI_TAKE_AWAY_URL}/${t._id}`,t)}deleteOrder(t){return this.http.delete(`${this.DELETE_CHAI_TAKE_AWAY_URL}/${t._id}`)}}return n.\u0275fac=function(t){return new(t||n)(r.LFG(_.eN))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},6022:(E,l,s)=>{s.d(l,{e:()=>n});var e=s(3668),r=s(87),_=s(6019);function i(a,t){if(1&a&&(e.TgZ(0,"ion-buttons",4),e._UZ(1,"ion-back-button",5),e.qZA()),2&a){const o=e.oxw();e.xp6(1),e.Q6J("defaultHref",o.defaultTarget)}}let n=(()=>{class a{constructor(){}ngOnInit(){}ngOnDestroy(){}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["ion-header-component"]],inputs:{headerTitle:"headerTitle",showBackButton:"showBackButton",defaultTarget:"defaultTarget"},decls:7,vars:2,consts:[["color","primary"],["slot","start",4,"ngIf"],["slot","end"],["menu","main"],["slot","start"],["text","",3,"defaultHref"]],template:function(o,c){1&o&&(e.TgZ(0,"ion-header"),e.TgZ(1,"ion-toolbar",0),e.YNc(2,i,2,1,"ion-buttons",1),e.TgZ(3,"ion-buttons",2),e._UZ(4,"ion-menu-button",3),e.qZA(),e.TgZ(5,"ion-title"),e._uU(6),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(2),e.Q6J("ngIf",c.showBackButton),e.xp6(4),e.Oqu(c.headerTitle))},directives:[r.Gu,r.sr,_.O5,r.Sm,r.fG,r.wd,r.oU,r.cs],styles:[""]}),a})()},5788:(E,l,s)=>{s.d(l,{R:()=>_});var e=s(3668),r=s(87);let _=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["loader"]],decls:1,vars:0,consts:[["name","crescent","color","primary"]],template:function(a,t){1&a&&e._UZ(0,"ion-spinner",0)},directives:[r.PQ],styles:["[_nghost-%COMP%]{width:100%;display:flex;justify-content:center}"]}),i})()},8028:(E,l,s)=>{s.d(l,{k:()=>r});var e=s(3668);let r=(()=>{class _{constructor(){}ngOnInit(){}}return _.\u0275fac=function(n){return new(n||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["squared-shapes-svg"]],inputs:{title:"title"},decls:7,vars:1,consts:[[1,"title"],["xmlns","http://www.w3.org/2000/svg","width","1920.001","height","257.984","viewBox","0 0 1920.001 257.984","preserveAspectRatio","none"],["transform","translate(0 -55.999)"],["d","M-11406.3-5482.544l-442.425,39.392-415.665-79.6v-138.918h1920v149.682l-443.729,108.228Z","transform","translate(12264.395 5717.666)","fill","#5dbeba"],["d","M-11828.5-5405.362l-395.041,118.514v-252.189h1920V-5285.3l-530.514-45.473-464.077,49.722Z","transform","translate(12223.539 5595.037)","fill","rgba(206,236,234,0.3)"],["d","M-10874.907-5453.408l-164.484,17.625-366.91-46.765-195.056,17.37-268-62.812-164.577,49.374-230.464-44.133v-138.92h1920v149.685l-315.669,76.994Z","transform","translate(12264.395 5717.667)","fill","#ceecea"]],template:function(n,a){1&n&&(e.TgZ(0,"h1",0),e._uU(1),e.qZA(),e.O4$(),e.TgZ(2,"svg",1),e.TgZ(3,"g",2),e._UZ(4,"path",3),e._UZ(5,"path",4),e._UZ(6,"path",5),e.qZA(),e.qZA()),2&n&&(e.xp6(1),e.Oqu(a.title))},styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap";@import"https://fonts.googleapis.com/css2?family=Oswald&display=swap";[_nghost-%COMP%]{position:relative;display:block;height:80px}@media (min-width: 768px){[_nghost-%COMP%]{height:auto}}.title[_ngcontent-%COMP%]{position:absolute;top:10px;left:50%;width:100%;transform:translate(-50%);text-align:center;font-family:"Oswald","Roboto",sans-serif;font-size:1.5rem;color:#3d827f}@media (min-width: 768px){.title[_ngcontent-%COMP%]{top:20px;font-size:3rem}}svg[_ngcontent-%COMP%]{width:100%;height:100%}']}),_})()},4133:(E,l,s)=>{s.d(l,{W:()=>_});var e=s(3668),r=s(6019);let _=(()=>{class i{constructor(){this.fill="secondary"}ngOnInit(){}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["triangle-blue-svg"]],inputs:{fill:"fill"},decls:2,vars:1,consts:[["xmlns","http://www.w3.org/2000/svg","width","47.229","height","89.147","viewBox","0 0 47.229 89.147",3,"ngClass"],["d","M152.359,55.784,116.471,86.9,163.7,144.931Z","transform","translate(-116.471 -55.784)"]],template:function(a,t){1&a&&(e.O4$(),e.TgZ(0,"svg",0),e._UZ(1,"path",1),e.qZA()),2&a&&e.Q6J("ngClass",t.fill)},directives:[r.mk],styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap";@import"https://fonts.googleapis.com/css2?family=Oswald&display=swap";svg[_ngcontent-%COMP%]{width:100%;height:100%}svg.primary[_ngcontent-%COMP%]{fill:#5dbeba}svg.primary-light[_ngcontent-%COMP%]{fill:#ceecea}svg.primary-dark[_ngcontent-%COMP%]{fill:#3d827f}']}),i})()},7753:(E,l,s)=>{s.d(l,{D:()=>_});var e=s(3668),r=s(6019);let _=(()=>{class i{constructor(){this.fill="secondary"}ngOnInit(){}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["triangle-yellow-svg"]],inputs:{fill:"fill"},decls:2,vars:1,consts:[["xmlns","http://www.w3.org/2000/svg","width","129.659","height","102.404","viewBox","0 0 129.659 102.404",3,"ngClass"],["d","M175.683,196.719l11.545-72.506L57.569,94.315Z","transform","translate(-57.569 -94.315)"]],template:function(a,t){1&a&&(e.O4$(),e.TgZ(0,"svg",0),e._UZ(1,"path",1),e.qZA()),2&a&&e.Q6J("ngClass",t.fill)},directives:[r.mk],styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap";@import"https://fonts.googleapis.com/css2?family=Oswald&display=swap";svg[_ngcontent-%COMP%]{width:100%;height:100%}svg.secondary[_ngcontent-%COMP%]{fill:#ffde00}svg.secondary-light[_ngcontent-%COMP%]{fill:#fff4b0}svg.secondary-dark[_ngcontent-%COMP%]{fill:#eacd00}']}),i})()},4670:(E,l,s)=>{s.d(l,{Z:()=>r});var e=s(3668);let r=(()=>{class _{constructor(){}ngOnInit(){}}return _.\u0275fac=function(n){return new(n||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["two-triangle-svg"]],decls:4,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","width","129.659","height","140.935","viewBox","0 0 129.659 140.935"],["transform","translate(-57.569 -55.784)"],["d","M175.683,196.719l11.545-72.506L57.569,94.315Z","fill","#ffde00"],["d","M152.359,55.784,116.471,86.9,163.7,144.931Z","fill","#5dbeba"]],template:function(n,a){1&n&&(e.O4$(),e.TgZ(0,"svg",0),e.TgZ(1,"g",1),e._UZ(2,"path",2),e._UZ(3,"path",3),e.qZA(),e.qZA())},styles:["svg[_ngcontent-%COMP%]{width:100%;height:100%}"]}),_})()},3094:(E,l,s)=>{function e(r=1){return function(i){let n=0;return Object.keys(i.controls).forEach(a=>{!0===i.controls[a].value&&n++}),n<r?{requireOneCheckboxToBeChecked:!0}:null}}s.d(l,{a:()=>e})}}]);