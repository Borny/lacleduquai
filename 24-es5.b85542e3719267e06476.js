!function(){function e(e,n){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){i&&(e=i);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==i.return||i.return()}finally{if(s)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"C9V+":function(t,i,r){"use strict";r.r(i),r.d(i,"CoworkingPageModule",function(){return B});var a,c=r("ofXK"),s=r("3Pt+"),l=r("TEn/"),b=r("tyNb"),u=r("mrSG"),m=r("fXoL"),d=r("AytR"),f=r("tk/3"),p=((a=function(){function e(t){n(this,e),this.http=t,this.COWORKING_URL=d.a.apiUrl+"/coworking"}return o(e,[{key:"postCoworking",value:function(e){return console.log("coworking service:",e),this.http.post("".concat(this.COWORKING_URL),e)}},{key:"stripe",value:function(e){return console.log("coworking service:",e),this.http.post("".concat(this.COWORKING_URL,"/stripe"),e)}}]),e}()).\u0275fac=function(e){return new(e||a)(m.Xb(f.b))},a.\u0275prov=m.Kb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),g=r("TTZi"),h=r("JgnI"),v=r("JXrQ"),k=r("o7am"),w=r("wzJV"),T=r("kmnG"),y=r("A5z7"),S=r("qFsG"),_=r("iadO"),C=r("NFeN"),D=["picker"],P=["creditCardElement"];function F(e,t){1&e&&m.Pb(0,"loader")}function A(e,t){if(1&e){var n=m.Ub();m.Tb(0,"div",15),m.Tb(1,"p"),m.Ac(2," Votre r\xe9servation n'a pas pu \xeatre effectu\xe9e. Veuillez r\xe9essayer. "),m.Sb(),m.Tb(3,"div",16),m.Tb(4,"ion-button",17),m.bc("click",function(){return m.sc(n),m.fc().onReload()}),m.Ac(5),m.Sb(),m.Sb(),m.Sb()}if(2&e){var i=m.fc();m.Db(5),m.Bc(i.RELOAD)}}function O(e,t){if(1&e){var n=m.Ub();m.Tb(0,"div",18),m.Tb(1,"p"),m.Ac(2,"Merci, votre r\xe9servation a bien \xe9t\xe9 effectu\xe9e."),m.Sb(),m.Tb(3,"div",16),m.Tb(4,"ion-button",17),m.bc("click",function(){return m.sc(n),m.fc().onNavigateHome()}),m.Ac(5),m.Sb(),m.Sb(),m.Sb()}if(2&e){var i=m.fc();m.Db(5),m.Bc(i.HOME_BTN_TEXT)}}function x(e,t){if(1&e&&(m.Tb(0,"ion-select-option",42),m.Ac(1),m.Sb()),2&e){var n=t.index;m.mc("value",n+1),m.Db(1),m.Bc(n+1)}}function I(e,t){1&e&&(m.Tb(0,"mat-icon",45),m.Ac(1,"cancel"),m.Sb())}function L(e,t){if(1&e){var n=m.Ub();m.Tb(0,"mat-chip",43),m.bc("removed",function(){m.sc(n);var e=t.$implicit;return m.fc(2).remove(e)}),m.Ac(1),m.gc(2,"date"),m.yc(3,I,2,0,"mat-icon",44),m.Sb()}if(2&e){var i=t.$implicit;m.mc("selectable",!1)("removable",!0),m.Db(1),m.Cc(" ",m.hc(2,4,i)," "),m.Db(2),m.mc("ngIf",!0)}}function E(e,t){1&e&&(m.Tb(0,"ion-button",46),m.Pb(1,"loader"),m.Sb())}function M(e,t){if(1&e){var n=m.Ub();m.Tb(0,"form",19),m.bc("ngSubmit",function(){return m.sc(n),m.fc().onSubmit()}),m.Tb(1,"ion-list"),m.Tb(2,"ion-item"),m.Tb(3,"ion-label"),m.Ac(4,"Personne(s)"),m.Pb(5,"atom-asterisk"),m.Sb(),m.Tb(6,"ion-select",20),m.bc("ionChange",function(e){return m.sc(n),m.fc().onSelectChange(e)}),m.yc(7,x,2,2,"ion-select-option",21),m.Sb(),m.Sb(),m.Tb(8,"div",22),m.Tb(9,"mat-form-field",23),m.Tb(10,"mat-label"),m.Ac(11,"S\xe9lectionnez une/des date(s)"),m.Pb(12,"atom-asterisk"),m.Sb(),m.Tb(13,"mat-chip-list",24,25),m.bc("click",function(){return m.sc(n),m.rc(19).open()}),m.yc(15,L,4,6,"mat-chip",26),m.Tb(16,"input",27),m.bc("dateChange",function(e){return m.sc(n),m.fc().dateChanged(e)}),m.Sb(),m.Sb(),m.Pb(17,"mat-datepicker-toggle",28),m.Pb(18,"mat-datepicker",29,30),m.Sb(),m.Sb(),m.Tb(20,"ion-item"),m.Tb(21,"ion-label",31),m.Ac(22,"Nom"),m.Pb(23,"atom-asterisk"),m.Sb(),m.Pb(24,"ion-input",32),m.Sb(),m.Tb(25,"p",33),m.Ac(26," Veuillez renseigner votre nom "),m.Sb(),m.Tb(27,"ion-item"),m.Tb(28,"ion-label",31),m.Ac(29,"T\xe9l\xe9phone"),m.Pb(30,"atom-asterisk"),m.Sb(),m.Pb(31,"ion-input",34),m.Sb(),m.Tb(32,"p",33),m.Ac(33," Veuillez renseigner un num\xe9ro de t\xe9l\xe9phone "),m.Sb(),m.Tb(34,"ion-item"),m.Tb(35,"ion-label",31),m.Ac(36,"E-mail"),m.Pb(37,"atom-asterisk"),m.Sb(),m.Pb(38,"ion-input",35),m.Sb(),m.Tb(39,"p",33),m.Ac(40," Veuillez renseigner votre email "),m.Sb(),m.Tb(41,"ion-item",36),m.Tb(42,"ion-label"),m.Ac(43,"Informations de carte"),m.Pb(44,"atom-asterisk"),m.Sb(),m.Sb(),m.Pb(45,"div",37,38),m.Tb(47,"div",39),m.Tb(48,"ion-button",40),m.Ac(49),m.gc(50,"currency"),m.Sb(),m.yc(51,E,2,0,"ion-button",41),m.Sb(),m.Sb(),m.Sb()}if(2&e){var i=m.rc(14),o=m.rc(19),r=m.fc();m.mc("formGroup",r.coworkingForm),m.Db(7),m.mc("ngForOf",r.getCount(r.maxPersonsAllowed)),m.Db(8),m.mc("ngForOf",r.model),m.Db(1),m.mc("value",r.resetModel)("matDatepicker",o)("min",r.minDateFilter)("max",r.maxDateFilter)("matDatepickerFilter",r.dateFilter)("matChipInputFor",i),m.Db(1),m.mc("for",o),m.Db(1),m.mc("disabled",r.coworkingForm.get("personsNumber").invalid)("startAt",r.init)("dateClass",r.dateClass),m.Db(7),m.mc("ngClass",r.coworkingForm.get("name").invalid&&r.coworkingForm.get("name").touched?"show-error":""),m.Db(7),m.mc("ngClass",r.coworkingForm.get("phone").invalid&&r.coworkingForm.get("phone").touched?"show-error":""),m.Db(7),m.mc("ngClass",r.coworkingForm.get("email").invalid&&r.coworkingForm.get("email").touched?"show-error":""),m.Db(9),m.mc("disabled",r.coworkingForm.invalid||0===r.totalPrice||0===r.coworkingForm.get("bookingDateList").value.length||!r.isCardValid),m.Db(1),m.Dc(" ",r.PAY_BUTTON_TEXT," ",m.hc(50,20,r.totalPrice)," "),m.Db(2),m.mc("ngIf",r.isLoading)}}var N,R,q,U=[{path:"",component:(N=function(){function t(i,o){var r=this;n(this,t),this.router=i,this.coworkingService=o,this.init=new Date,this.resetModel=new Date(0),this.model=[],this.isLoading=!1,this.hideForm=!1,this.isFormSent=!1,this.isFormFailed=!1,this.maxPersonsAllowed=10,this.totalPrice=0,this.isCardValid=!1,this.pricePerHour=6.5,this.bookedDays=[{date:new Date("12/15/2020"),bookedPeople:5},{date:new Date("12/17/2020"),bookedPeople:4},{date:new Date("12/7/2020"),bookedPeople:10},{date:new Date("12/25/2020"),bookedPeople:5},{date:new Date("12/29/2020"),bookedPeople:8},{date:new Date("12/9/2020"),bookedPeople:7},{date:new Date("1/20/2021"),bookedPeople:7},{date:new Date("1/25/2021"),bookedPeople:7}],this.HEADER_TITLE="Coworking",this.TITLE="Coworking Artistique et Culturel",this.HOME_BTN_TEXT="Accueil",this.VALIDATE_BUTTON_TEXT="Valider",this.PAY_BUTTON_TEXT="R\xe9gler",this.RELOAD="R\xe9essayer",this.FRENCH_CARD_NUMBER=0xe35fb281cf903,this._close_on_selected=!1,this.dateClass=function(e){return-1!==r._findDate(e)?["selected"]:[]},this.dateFilter=function(t){var n,i=r._getUnAvailableDays(r.coworkingForm.get("personsNumber").value,r.bookedDays),o=(t||new Date).getDay(),a=e(i);try{for(a.s();!(n=a.n()).done;){var c=n.value;if(t.toLocaleDateString()===c)return!1}}catch(s){a.e(s)}finally{a.f()}return 0!==o&&6!==o}}return o(t,[{key:"ngOnInit",value:function(){this._initCoworkingForm(),this._setMinMaxDates()}},{key:"ionViewDidEnter",value:function(){this._initStripe()}},{key:"ionViewDidLeave",value:function(){this.coworkingForm.reset(),this.model=[],this.isLoading=!1,this.hideForm=!1,this.isFormSent=!1,this.isFormFailed=!1}},{key:"dateChanged",value:function(e){var t=this;if(e.value){var n=e.value,i=this._findDate(n),o=this.coworkingForm.get("bookingDateList");if(-1===i?(this.model.push(n),o.push(new s.g(n))):(this.model.splice(i,1),o.removeAt(i)),this.resetModel=new Date(0),!this._close_on_selected){var r=this._picker.close;this._picker.close=function(){},this._picker._popupComponentRef.instance._calendar.monthView._createWeekCells(),setTimeout(function(){t._picker.close=r})}this.totalPrice=this.coworkingForm.get("personsNumber").value*this.model.length*this.pricePerHour}}},{key:"remove",value:function(e){var t=this._findDate(e);this.model.splice(t,1),this.coworkingForm.get("bookingDateList").removeAt(t),this.totalPrice=this.coworkingForm.get("personsNumber").value*this.model.length*this.pricePerHour}},{key:"onSubmit",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,n,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.coworkingForm.invalid){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.stripe.createToken(this.creditCardContainer);case 4:t=e.sent,(n=this.coworkingForm.value).token=t.token,t.error||(this.isLoading=!0,this.coworkingService.postCoworking(n).subscribe(function(e){i.isLoading=!1,i.isFormSent=!0,i.hideForm=!0,i.coworkingForm.reset()},function(e){console.log(e),i.isLoading=!1,i.isFormFailed=!0}));case 7:case"end":return e.stop()}},e,this)}))}},{key:"onSelectChange",value:function(e){0!==this.totalPrice&&(this.totalPrice=e.detail.value*this.model.length*this.pricePerHour)}},{key:"getCount",value:function(e){return new Array(e)}},{key:"onNavigateHome",value:function(){this.isLoading=!1,this.isFormSent=!1,this.isFormFailed=!1,this.coworkingForm.reset(),this.router.navigateByUrl("/lcdq/accueil")}},{key:"onReload",value:function(){location.reload()}},{key:"_initStripe",value:function(){var e=this;this.stripe=Stripe("pk_test_51HuFU7H5cEg8n0QAB1Y3OMIH5H6T3o4rs7q8pBLsLzQ3w01hNGmPjuipe4R8G1zn9AAp4IHCzMm0K1erufpLAcjU00ISs2mBZX");var t=this.stripe.elements({locale:"fr"});this.creditCardContainer=t.create("card"),this.creditCardContainer.mount(this.creditCardElement.nativeElement),this.creditCardContainer.addEventListener("change",function(t){console.log(t),e.cardErrors=t.error&&t.error.message,e.isCardValid=t.complete})}},{key:"_initCoworkingForm",value:function(){this.coworkingForm=new s.j({name:new s.g(null,s.x.required),phone:new s.g(null,s.x.required),email:new s.g(null,[s.x.required,s.x.email]),personsNumber:new s.g(null,s.x.required),bookingDateList:new s.e([],s.x.required)})}},{key:"_setMinMaxDates",value:function(){this.minDateFilter=new Date;var e=(new Date).getFullYear();this.maxDateFilter=new Date(e+0,11,30)}},{key:"_findDate",value:function(e){return this.model.map(function(e){return+e}).indexOf(+e)}},{key:"_getUnAvailableDays",value:function(e,t){var n=this,i=t.filter(function(t){return t.bookedPeople+e>n.maxPersonsAllowed}).map(function(e){return e.date.toLocaleDateString()});return console.log(i),i}}]),t}(),N.\u0275fac=function(e){return new(e||N)(m.Ob(b.g),m.Ob(p))},N.\u0275cmp=m.Ib({type:N,selectors:[["app-coworking"]],viewQuery:function(e,t){var n;1&e&&(m.Fc(D,1),m.Fc(P,1)),2&e&&(m.qc(n=m.cc())&&(t._picker=n.first),m.qc(n=m.cc())&&(t.creditCardElement=n.first))},decls:41,vars:6,consts:[[3,"headerTitle"],[1,"ion-no-padding"],[1,"squared-shapes",3,"title"],[1,"ion-padding"],["size","12","size-md","6","offset-md","3"],[1,"description"],[1,"description-item"],[1,"description-item--icon"],[1,"description-item--content"],["size","12","size-md","4","offset-md","4"],[1,"ion-no-margin","ion-margin-vertical"],[4,"ngIf"],["class","message-sent--fail",4,"ngIf"],["class","message-sent--success",4,"ngIf"],["class","form",3,"formGroup","ngSubmit",4,"ngIf"],[1,"message-sent--fail"],[1,"btn__container--flex"],[3,"click"],[1,"message-sent--success"],[1,"form",3,"formGroup","ngSubmit"],["formControlName","personsNumber","interface","popover",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"calendar"],["appearance","fill"],["aria-label","Choisir une date",3,"click"],["chipList",""],[3,"selectable","removable","removed",4,"ngFor","ngForOf"],["matInput","","placeholder","Choisir une date","required","","hidden","",3,"value","matDatepicker","min","max","matDatepickerFilter","matChipInputFor","dateChange"],["matSuffix","",3,"for"],[3,"disabled","startAt","dateClass"],["picker",""],["position","floating"],["type","text","name","name","formControlName","name","required",""],[1,"error-message",3,"ngClass"],["type","text","name","phone","formControlName","phone","required",""],["type","email","name","email","formControlName","email","required",""],["lines","none",1,"credit-card__label"],[1,"credit-card__input"],["creditCardElement",""],[1,"btn__container","btn__container--block","btn__container--submit"],["type","submit","color","secondary","expand","block",1,"ion-margin-vertical",3,"disabled"],["type","button","color","secondary","expand","block",4,"ngIf"],[3,"value"],[3,"selectable","removable","removed"],["matChipRemove","",4,"ngIf"],["matChipRemove",""],["type","button","color","secondary","expand","block"]],template:function(e,t){1&e&&(m.Pb(0,"ion-header-component",0),m.Tb(1,"ion-content"),m.Tb(2,"ion-grid",1),m.Tb(3,"ion-row"),m.Tb(4,"ion-col"),m.Pb(5,"squared-shapes-svg",2),m.Sb(),m.Sb(),m.Tb(6,"ion-row",3),m.Tb(7,"ion-col",4),m.Tb(8,"ul",5),m.Tb(9,"li",6),m.Pb(10,"two-triangle-svg",7),m.Tb(11,"p",8),m.Ac(12," Du lundi au vendredi de 10h a\u0300 13h. "),m.Sb(),m.Sb(),m.Tb(13,"li",6),m.Pb(14,"two-triangle-svg",7),m.Tb(15,"p",8),m.Ac(16," Espace de travail a\u0300 destination d'artistes, freelances, associations ou compagnies pour leurs projets artistiques, re\u0301unions, de\u0301marches administratives et de\u0301veloppement culturel "),m.Sb(),m.Sb(),m.Tb(17,"li",6),m.Pb(18,"two-triangle-svg",7),m.Tb(19,"p",8),m.Ac(20," Forfait unique a\u0300 6.50\u20ac par personne pour la matine\u0301e "),m.Sb(),m.Sb(),m.Tb(21,"li",6),m.Pb(22,"two-triangle-svg",7),m.Tb(23,"p",8),m.Ac(24,"Places limit\xe9es"),m.Sb(),m.Sb(),m.Tb(25,"li",6),m.Pb(26,"two-triangle-svg",7),m.Tb(27,"p",8),m.Ac(28," The\u0301 et cafe\u0301 en libre service "),m.Sb(),m.Sb(),m.Tb(29,"li",6),m.Pb(30,"two-triangle-svg",7),m.Tb(31,"p",8),m.Ac(32," Possibilit\xe9 d'utiliser l'imprimante de l'association "),m.Sb(),m.Sb(),m.Sb(),m.Sb(),m.Sb(),m.Tb(33,"ion-row"),m.Tb(34,"ion-col",9),m.Tb(35,"ion-card",10),m.Tb(36,"ion-card-content"),m.yc(37,F,1,0,"loader",11),m.yc(38,A,6,1,"div",12),m.yc(39,O,6,1,"div",13),m.yc(40,M,52,22,"form",14),m.Sb(),m.Sb(),m.Sb(),m.Sb(),m.Sb(),m.Sb()),2&e&&(m.mc("headerTitle",t.HEADER_TITLE),m.Db(5),m.mc("title",t.TITLE),m.Db(32),m.mc("ngIf",t.isLoading),m.Db(1),m.mc("ngIf",!t.isLoading&&t.isFormFailed),m.Db(1),m.mc("ngIf",!t.isLoading&&t.isFormSent),m.Db(1),m.mc("ngIf",!t.isLoading&&!t.isFormSent&&!t.isFormFailed))},directives:[g.a,l.o,l.q,l.G,l.n,h.a,v.a,l.h,l.i,c.m,k.a,l.f,s.y,s.s,s.k,l.w,l.u,l.v,w.a,l.H,l.Z,s.r,s.i,c.l,T.b,T.e,y.c,S.b,_.b,y.b,_.d,T.f,_.a,l.t,l.ab,s.w,c.k,l.I,y.a,C.a,y.d],pipes:[c.c,c.e],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");.overlay[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;background:rgba(0,0,0,.4);display:flex;justify-content:center;align-items:center}.overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:2rem;background:#5dbeba;color:#fff;border-radius:8px;transform:rotate(-15deg)}.description-item[_ngcontent-%COMP%]{margin:1rem auto 0}.description-item[_ngcontent-%COMP%], .description-item--icon[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:flex-start}.description-item--icon[_ngcontent-%COMP%]{width:20px;height:20px;margin:0 1rem 0 0}.description-item--content[_ngcontent-%COMP%]{flex:1}.calendar[_ngcontent-%COMP%]{margin:1rem 0 0}.credit-card__label[_ngcontent-%COMP%]{margin:2rem 0 0}.credit-card__input[_ngcontent-%COMP%]{padding:0 0 0 1rem}.btn__container--flex[_ngcontent-%COMP%]{display:flex;justify-content:center}.btn__container--block[_ngcontent-%COMP%]{display:block}.btn__container--submit[_ngcontent-%COMP%]{margin:3rem 0 1rem}']}),N)},{path:"coworking",redirectTo:"",pathMatch:"full"}],H=((R=function e(){n(this,e)}).\u0275fac=function(e){return new(e||R)},R.\u0275mod=m.Mb({type:R}),R.\u0275inj=m.Lb({imports:[[b.k.forChild(U)],b.k]}),R),z=r("PI13"),V=r("PCNd"),j=r("ox1a"),B=((q=function e(){n(this,e)}).\u0275fac=function(e){return new(e||q)},q.\u0275mod=m.Mb({type:q}),q.\u0275inj=m.Lb({imports:[[c.b,s.v,l.S,H,V.a,z.a,j.a]]}),q)}}])}();