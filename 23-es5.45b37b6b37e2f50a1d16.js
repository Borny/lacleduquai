!function(){function e(e,i){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,i){if(!e)return;if("string"==typeof e)return t(e,i);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,i)}(e))||i&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"C9V+":function(t,n,r){"use strict";r.r(n),r.d(n,"CoworkingPageModule",function(){return U});var a,c=r("ofXK"),s=r("3Pt+"),l=r("TEn/"),b=r("tyNb"),u=r("mrSG"),d=r("fXoL"),m=r("AytR"),p=r("tk/3"),f=((a=function(){function e(t){i(this,e),this.http=t,this.COWORKING_URL=m.a.apiUrl+"/coworking"}return o(e,[{key:"postCoworking",value:function(e){return console.log("coworking service:",e),this.http.post(""+this.COWORKING_URL,e)}},{key:"stripe",value:function(e){return console.log("coworking service:",e),this.http.post(this.COWORKING_URL+"/stripe",e)}}]),e}()).\u0275fac=function(e){return new(e||a)(d.Vb(p.b))},a.\u0275prov=d.Ib({token:a,factory:a.\u0275fac,providedIn:"root"}),a),g=r("TTZi"),h=r("JgnI"),v=r("JXrQ"),k=r("o7am"),w=r("wzJV"),R=r("kmnG"),y=r("A5z7"),C=r("qFsG"),_=r("iadO"),F=r("NFeN"),Q=["picker"],B=["creditCardElement"];function D(e,t){1&e&&d.Nb(0,"loader")}function N(e,t){if(1&e){var i=d.Sb();d.Rb(0,"div",15),d.Rb(1,"p"),d.Bc(2," Votre r\xe9servation n'a pas pu \xeatre effectu\xe9e. Veuillez r\xe9essayer. "),d.Qb(),d.Rb(3,"div",16),d.Rb(4,"ion-button",17),d.Zb("click",function(){return d.rc(i),d.dc().onReload()}),d.Bc(5),d.Qb(),d.Qb(),d.Qb()}if(2&e){var n=d.dc();d.Bb(5),d.Cc(n.RELOAD)}}function P(e,t){if(1&e){var i=d.Sb();d.Rb(0,"div",18),d.Rb(1,"p"),d.Bc(2,"Merci, votre r\xe9servation a bien \xe9t\xe9 effectu\xe9e."),d.Qb(),d.Rb(3,"div",16),d.Rb(4,"ion-button",17),d.Zb("click",function(){return d.rc(i),d.dc().onNavigateHome()}),d.Bc(5),d.Qb(),d.Qb(),d.Qb()}if(2&e){var n=d.dc();d.Bb(5),d.Cc(n.HOME_BTN_TEXT)}}function T(e,t){if(1&e&&(d.Rb(0,"ion-select-option",42),d.Bc(1),d.Qb()),2&e){var i=t.index;d.kc("value",i+1),d.Bb(1),d.Cc(i+1)}}function x(e,t){1&e&&(d.Rb(0,"mat-icon",45),d.Bc(1,"cancel"),d.Qb())}function O(e,t){if(1&e){var i=d.Sb();d.Rb(0,"mat-chip",43),d.Zb("removed",function(){d.rc(i);var e=t.$implicit;return d.dc(2).remove(e)}),d.Bc(1),d.ec(2,"date"),d.zc(3,x,2,0,"mat-icon",44),d.Qb()}if(2&e){var n=t.$implicit;d.kc("selectable",!1)("removable",!0),d.Bb(1),d.Dc(" ",d.fc(2,4,n)," "),d.Bb(2),d.kc("ngIf",!0)}}function E(e,t){1&e&&(d.Rb(0,"ion-button",46),d.Nb(1,"loader"),d.Qb())}function I(e,t){if(1&e){var i=d.Sb();d.Rb(0,"form",19),d.Zb("ngSubmit",function(){return d.rc(i),d.dc().onSubmit()}),d.Rb(1,"ion-list"),d.Rb(2,"ion-item"),d.Rb(3,"ion-label"),d.Bc(4,"Personne(s)"),d.Nb(5,"atom-asterisk"),d.Qb(),d.Rb(6,"ion-select",20),d.Zb("ionChange",function(e){return d.rc(i),d.dc().onSelectChange(e)}),d.zc(7,T,2,2,"ion-select-option",21),d.Qb(),d.Qb(),d.Rb(8,"div",22),d.Rb(9,"mat-form-field",23),d.Rb(10,"mat-label"),d.Bc(11,"S\xe9lectionnez une/des date(s)"),d.Nb(12,"atom-asterisk"),d.Qb(),d.Rb(13,"mat-chip-list",24,25),d.Zb("click",function(){return d.rc(i),d.qc(19).open()}),d.zc(15,O,4,6,"mat-chip",26),d.Rb(16,"input",27),d.Zb("dateChange",function(e){return d.rc(i),d.dc().dateChanged(e)}),d.Qb(),d.Qb(),d.Nb(17,"mat-datepicker-toggle",28),d.Nb(18,"mat-datepicker",29,30),d.Qb(),d.Qb(),d.Rb(20,"ion-item"),d.Rb(21,"ion-label",31),d.Bc(22,"Nom"),d.Nb(23,"atom-asterisk"),d.Qb(),d.Nb(24,"ion-input",32),d.Qb(),d.Rb(25,"p",33),d.Bc(26," Veuillez renseigner votre nom "),d.Qb(),d.Rb(27,"ion-item"),d.Rb(28,"ion-label",31),d.Bc(29,"T\xe9l\xe9phone"),d.Nb(30,"atom-asterisk"),d.Qb(),d.Nb(31,"ion-input",34),d.Qb(),d.Rb(32,"p",33),d.Bc(33," Veuillez renseigner un num\xe9ro de t\xe9l\xe9phone "),d.Qb(),d.Rb(34,"ion-item"),d.Rb(35,"ion-label",31),d.Bc(36,"E-mail"),d.Nb(37,"atom-asterisk"),d.Qb(),d.Nb(38,"ion-input",35),d.Qb(),d.Rb(39,"p",33),d.Bc(40," Veuillez renseigner votre email "),d.Qb(),d.Rb(41,"ion-item",36),d.Rb(42,"ion-label"),d.Bc(43,"Informations de carte"),d.Nb(44,"atom-asterisk"),d.Qb(),d.Qb(),d.Nb(45,"div",37,38),d.Rb(47,"div",39),d.Rb(48,"ion-button",40),d.Bc(49),d.ec(50,"currency"),d.Qb(),d.zc(51,E,2,0,"ion-button",41),d.Qb(),d.Qb(),d.Qb()}if(2&e){var n=d.qc(14),o=d.qc(19),r=d.dc();d.kc("formGroup",r.coworkingForm),d.Bb(7),d.kc("ngForOf",r.getCount(r.maxPersonsAllowed)),d.Bb(8),d.kc("ngForOf",r.model),d.Bb(1),d.kc("value",r.resetModel)("matDatepicker",o)("min",r.minDateFilter)("max",r.maxDateFilter)("matDatepickerFilter",r.dateFilter)("matChipInputFor",n),d.Bb(1),d.kc("for",o),d.Bb(1),d.kc("disabled",r.coworkingForm.get("personsNumber").invalid)("startAt",r.init)("dateClass",r.dateClass),d.Bb(7),d.kc("ngClass",r.coworkingForm.get("name").invalid&&r.coworkingForm.get("name").touched?"show-error":""),d.Bb(7),d.kc("ngClass",r.coworkingForm.get("phone").invalid&&r.coworkingForm.get("phone").touched?"show-error":""),d.Bb(7),d.kc("ngClass",r.coworkingForm.get("email").invalid&&r.coworkingForm.get("email").touched?"show-error":""),d.Bb(9),d.kc("disabled",r.coworkingForm.invalid||0===r.totalPrice||0===r.coworkingForm.get("bookingDateList").value.length||!r.isCardValid),d.Bb(1),d.Ec(" ",r.PAY_BUTTON_TEXT," ",d.fc(50,20,r.totalPrice)," "),d.Bb(2),d.kc("ngIf",r.isLoading)}}var L,S,A,M=[{path:"",component:(L=function(){function t(n,o){var r=this;i(this,t),this.router=n,this.coworkingService=o,this.init=new Date,this.resetModel=new Date(0),this.model=[],this.isLoading=!1,this.hideForm=!1,this.isFormSent=!1,this.isFormFailed=!1,this.maxPersonsAllowed=10,this.totalPrice=0,this.isCardValid=!1,this.pricePerHour=6.5,this.bookedDays=[{date:new Date("12/15/2020"),bookedPeople:5},{date:new Date("12/17/2020"),bookedPeople:4},{date:new Date("12/7/2020"),bookedPeople:10},{date:new Date("12/25/2020"),bookedPeople:5},{date:new Date("12/29/2020"),bookedPeople:8},{date:new Date("12/9/2020"),bookedPeople:7},{date:new Date("1/20/2021"),bookedPeople:7},{date:new Date("1/25/2021"),bookedPeople:7}],this.HEADER_TITLE="Coworking",this.TITLE="Coworking Artistique et Culturel",this.HOME_BTN_TEXT="Accueil",this.VALIDATE_BUTTON_TEXT="Valider",this.PAY_BUTTON_TEXT="R\xe9gler",this.RELOAD="R\xe9essayer",this.FRENCH_CARD_NUMBER=0xe35fb281cf903,this._close_on_selected=!1,this.dateClass=function(e){return-1!==r._findDate(e)?["selected"]:[]},this.dateFilter=function(t){var i,n=r._getUnAvailableDays(r.coworkingForm.get("personsNumber").value,r.bookedDays),o=(t||new Date).getDay(),a=e(n);try{for(a.s();!(i=a.n()).done;){var c=i.value;if(t.toLocaleDateString()===c)return!1}}catch(s){a.e(s)}finally{a.f()}return 0!==o&&6!==o}}return o(t,[{key:"ngOnInit",value:function(){this._initCoworkingForm(),this._setMinMaxDates()}},{key:"ionViewDidEnter",value:function(){this._initStripe()}},{key:"ionViewDidLeave",value:function(){this.coworkingForm.reset(),this.model=[],this.isLoading=!1,this.hideForm=!1,this.isFormSent=!1,this.isFormFailed=!1}},{key:"dateChanged",value:function(e){var t=this;if(e.value){var i=e.value,n=this._findDate(i),o=this.coworkingForm.get("bookingDateList");if(-1===n?(this.model.push(i),o.push(new s.g(i))):(this.model.splice(n,1),o.removeAt(n)),this.resetModel=new Date(0),!this._close_on_selected){var r=this._picker.close;this._picker.close=function(){},this._picker._popupComponentRef.instance._calendar.monthView._createWeekCells(),setTimeout(function(){t._picker.close=r})}this.totalPrice=this.coworkingForm.get("personsNumber").value*this.model.length*this.pricePerHour}}},{key:"remove",value:function(e){var t=this._findDate(e);this.model.splice(t,1),this.coworkingForm.get("bookingDateList").removeAt(t),this.totalPrice=this.coworkingForm.get("personsNumber").value*this.model.length*this.pricePerHour}},{key:"onSubmit",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,i,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.coworkingForm.invalid){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.stripe.createToken(this.creditCardContainer);case 4:t=e.sent,(i=this.coworkingForm.value).token=t.token,t.error||(this.isLoading=!0,this.coworkingService.postCoworking(i).subscribe(function(e){n.isLoading=!1,n.isFormSent=!0,n.hideForm=!0,n.coworkingForm.reset()},function(e){console.log(e),n.isLoading=!1,n.isFormFailed=!0}));case 7:case"end":return e.stop()}},e,this)}))}},{key:"onSelectChange",value:function(e){0!==this.totalPrice&&(this.totalPrice=e.detail.value*this.model.length*this.pricePerHour)}},{key:"getCount",value:function(e){return new Array(e)}},{key:"onNavigateHome",value:function(){this.isLoading=!1,this.isFormSent=!1,this.isFormFailed=!1,this.coworkingForm.reset(),this.router.navigateByUrl("/lcdq/accueil")}},{key:"onReload",value:function(){location.reload()}},{key:"_initStripe",value:function(){var e=this;this.stripe=Stripe("pk_test_51HuFU7H5cEg8n0QAB1Y3OMIH5H6T3o4rs7q8pBLsLzQ3w01hNGmPjuipe4R8G1zn9AAp4IHCzMm0K1erufpLAcjU00ISs2mBZX");var t=this.stripe.elements({locale:"fr"});this.creditCardContainer=t.create("card"),this.creditCardContainer.mount(this.creditCardElement.nativeElement),this.creditCardContainer.addEventListener("change",function(t){console.log(t),e.cardErrors=t.error&&t.error.message,e.isCardValid=t.complete})}},{key:"_initCoworkingForm",value:function(){this.coworkingForm=new s.j({name:new s.g(null,s.x.required),phone:new s.g(null,s.x.required),email:new s.g(null,[s.x.required,s.x.email]),personsNumber:new s.g(null,s.x.required),bookingDateList:new s.e([],s.x.required)})}},{key:"_setMinMaxDates",value:function(){this.minDateFilter=new Date;var e=(new Date).getFullYear();this.maxDateFilter=new Date(e+0,5,30)}},{key:"_findDate",value:function(e){return this.model.map(function(e){return+e}).indexOf(+e)}},{key:"_getUnAvailableDays",value:function(e,t){var i=this,n=t.filter(function(t){return t.bookedPeople+e>i.maxPersonsAllowed}).map(function(e){return e.date.toLocaleDateString()});return console.log(n),n}}]),t}(),L.\u0275fac=function(e){return new(e||L)(d.Mb(b.g),d.Mb(f))},L.\u0275cmp=d.Gb({type:L,selectors:[["app-coworking"]],viewQuery:function(e,t){var i;1&e&&(d.Hc(Q,!0),d.Hc(B,!0)),2&e&&(d.pc(i=d.ac())&&(t._picker=i.first),d.pc(i=d.ac())&&(t.creditCardElement=i.first))},decls:41,vars:6,consts:[[3,"headerTitle"],[1,"ion-no-padding"],[1,"squared-shapes",3,"title"],[1,"ion-padding"],["size","12","size-md","6","offset-md","3"],[1,"description"],[1,"description-item"],[1,"description-item--icon"],[1,"description-item--content"],["size","12","size-md","4","offset-md","4"],[1,"ion-no-margin","ion-margin-vertical"],[4,"ngIf"],["class","message-sent--fail",4,"ngIf"],["class","message-sent--success",4,"ngIf"],["class","form",3,"formGroup","ngSubmit",4,"ngIf"],[1,"message-sent--fail"],[1,"btn__container--flex"],[3,"click"],[1,"message-sent--success"],[1,"form",3,"formGroup","ngSubmit"],["formControlName","personsNumber","interface","popover",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"calendar"],["appearance","fill"],["aria-label","Choisir une date",3,"click"],["chipList",""],[3,"selectable","removable","removed",4,"ngFor","ngForOf"],["matInput","","placeholder","Choisir une date","required","","hidden","",3,"value","matDatepicker","min","max","matDatepickerFilter","matChipInputFor","dateChange"],["matSuffix","",3,"for"],[3,"disabled","startAt","dateClass"],["picker",""],["position","floating"],["type","text","name","name","formControlName","name","required",""],[1,"error-message",3,"ngClass"],["type","text","name","phone","formControlName","phone","required",""],["type","email","name","email","formControlName","email","required",""],["lines","none",1,"credit-card__label"],[1,"credit-card__input"],["creditCardElement",""],[1,"btn__container","btn__container--block","btn__container--submit"],["type","submit","color","secondary","expand","block",1,"ion-margin-vertical",3,"disabled"],["type","button","color","secondary","expand","block",4,"ngIf"],[3,"value"],[3,"selectable","removable","removed"],["matChipRemove","",4,"ngIf"],["matChipRemove",""],["type","button","color","secondary","expand","block"]],template:function(e,t){1&e&&(d.Nb(0,"ion-header-component",0),d.Rb(1,"ion-content"),d.Rb(2,"ion-grid",1),d.Rb(3,"ion-row"),d.Rb(4,"ion-col"),d.Nb(5,"squared-shapes-svg",2),d.Qb(),d.Qb(),d.Rb(6,"ion-row",3),d.Rb(7,"ion-col",4),d.Rb(8,"ul",5),d.Rb(9,"li",6),d.Nb(10,"two-triangle-svg",7),d.Rb(11,"p",8),d.Bc(12," Du lundi au vendredi de 10h a\u0300 13h. "),d.Qb(),d.Qb(),d.Rb(13,"li",6),d.Nb(14,"two-triangle-svg",7),d.Rb(15,"p",8),d.Bc(16," Espace de travail a\u0300 destination d'artistes, freelances, associations ou compagnies pour leurs projets artistiques, re\u0301unions, de\u0301marches administratives et de\u0301veloppement culturel "),d.Qb(),d.Qb(),d.Rb(17,"li",6),d.Nb(18,"two-triangle-svg",7),d.Rb(19,"p",8),d.Bc(20," Forfait unique a\u0300 6.50\u20ac par personne pour la matine\u0301e "),d.Qb(),d.Qb(),d.Rb(21,"li",6),d.Nb(22,"two-triangle-svg",7),d.Rb(23,"p",8),d.Bc(24,"Places limit\xe9es"),d.Qb(),d.Qb(),d.Rb(25,"li",6),d.Nb(26,"two-triangle-svg",7),d.Rb(27,"p",8),d.Bc(28," The\u0301 et cafe\u0301 en libre service "),d.Qb(),d.Qb(),d.Rb(29,"li",6),d.Nb(30,"two-triangle-svg",7),d.Rb(31,"p",8),d.Bc(32," Possibilit\xe9 d'utiliser l'imprimante de l'association "),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Rb(33,"ion-row"),d.Rb(34,"ion-col",9),d.Rb(35,"ion-card",10),d.Rb(36,"ion-card-content"),d.zc(37,D,1,0,"loader",11),d.zc(38,N,6,1,"div",12),d.zc(39,P,6,1,"div",13),d.zc(40,I,52,22,"form",14),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb()),2&e&&(d.kc("headerTitle",t.HEADER_TITLE),d.Bb(5),d.kc("title",t.TITLE),d.Bb(32),d.kc("ngIf",t.isLoading),d.Bb(1),d.kc("ngIf",!t.isLoading&&t.isFormFailed),d.Bb(1),d.kc("ngIf",!t.isLoading&&t.isFormSent),d.Bb(1),d.kc("ngIf",!t.isLoading&&!t.isFormSent&&!t.isFormFailed))},directives:[g.a,l.n,l.p,l.E,l.m,h.a,v.a,l.h,l.i,c.m,k.a,l.f,s.y,s.r,s.k,l.v,l.t,l.u,w.a,l.F,l.X,s.q,s.i,c.l,R.c,R.f,y.c,C.b,_.b,y.b,_.d,R.g,_.a,l.s,l.Y,s.w,c.k,l.G,y.a,F.a,y.d],pipes:[c.c,c.e],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");.description-item[_ngcontent-%COMP%]{margin:1rem auto 0}.description-item[_ngcontent-%COMP%], .description-item--icon[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:flex-start}.description-item--icon[_ngcontent-%COMP%]{width:20px;height:20px;margin:0 1rem 0 0}.description-item--content[_ngcontent-%COMP%]{flex:1}.calendar[_ngcontent-%COMP%]{margin:1rem 0 0}.credit-card__label[_ngcontent-%COMP%]{margin:2rem 0 0}.credit-card__input[_ngcontent-%COMP%]{padding:0 0 0 1rem}.btn__container--flex[_ngcontent-%COMP%]{display:flex;justify-content:center}.btn__container--block[_ngcontent-%COMP%]{display:block}.btn__container--submit[_ngcontent-%COMP%]{margin:3rem 0 1rem}']}),L)},{path:"coworking",redirectTo:"",pathMatch:"full"}],z=((S=function e(){i(this,e)}).\u0275mod=d.Kb({type:S}),S.\u0275inj=d.Jb({factory:function(e){return new(e||S)},imports:[[b.k.forChild(M)],b.k]}),S),q=r("PI13"),H=r("PCNd"),V=r("ox1a"),U=((A=function e(){i(this,e)}).\u0275mod=d.Kb({type:A}),A.\u0275inj=d.Jb({factory:function(e){return new(e||A)},imports:[[c.b,s.v,l.Q,z,H.a,q.a,V.a]]}),A)}}])}();