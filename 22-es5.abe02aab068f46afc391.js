!function(){function e(e,n){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){i&&(e=i);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==i.return||i.return()}finally{if(s)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"C9V+":function(t,i,r){"use strict";r.r(i),r.d(i,"CoworkingPageModule",function(){return q});var a,c=r("ofXK"),s=r("3Pt+"),l=r("TEn/"),u=r("tyNb"),b=r("mrSG"),d=r("fXoL"),m=r("AytR"),f=r("tk/3"),p=((a=function(){function e(t){n(this,e),this.http=t,this.COWORKING_URL=m.a.apiUrl+"/coworking"}return o(e,[{key:"postCoworking",value:function(e){return console.log("coworking service:",e),this.http.post(""+this.COWORKING_URL,e)}},{key:"stripe",value:function(e){return console.log("coworking service:",e),this.http.post(this.COWORKING_URL+"/stripe",e)}}]),e}()).\u0275fac=function(e){return new(e||a)(d.Vb(f.b))},a.\u0275prov=d.Ib({token:a,factory:a.\u0275fac,providedIn:"root"}),a),h=r("TTZi"),g=r("o7am"),v=r("kmnG"),k=r("A5z7"),w=r("qFsG"),y=r("iadO"),R=r("NFeN"),C=["picker"],F=["creditCardElement"];function _(e,t){1&e&&d.Nb(0,"loader")}function A(e,t){if(1&e){var n=d.Sb();d.Rb(0,"div",8),d.Rb(1,"p"),d.Ac(2," Votre r\xe9servation n'a pas pu \xeatre effectu\xe9e. Veuillez r\xe9essayer. "),d.Qb(),d.Rb(3,"div",9),d.Rb(4,"ion-button",10),d.Zb("click",function(){return d.qc(n),d.dc().onReload()}),d.Ac(5),d.Qb(),d.Qb(),d.Qb()}if(2&e){var i=d.dc();d.Bb(5),d.Bc(i.RELOAD)}}function Q(e,t){if(1&e){var n=d.Sb();d.Rb(0,"div",11),d.Rb(1,"p"),d.Ac(2,"Merci, votre r\xe9servation a bien \xe9t\xe9 effectu\xe9e."),d.Qb(),d.Rb(3,"div",9),d.Rb(4,"ion-button",10),d.Zb("click",function(){return d.qc(n),d.dc().onNavigateHome()}),d.Ac(5),d.Qb(),d.Qb(),d.Qb()}if(2&e){var i=d.dc();d.Bb(5),d.Bc(i.HOME_BTN_TEXT)}}function D(e,t){if(1&e&&(d.Rb(0,"ion-select-option",35),d.Ac(1),d.Qb()),2&e){var n=t.index;d.jc("value",n+1),d.Bb(1),d.Bc(n+1)}}function P(e,t){1&e&&(d.Rb(0,"mat-icon",38),d.Ac(1,"cancel"),d.Qb())}function N(e,t){if(1&e){var n=d.Sb();d.Rb(0,"mat-chip",36),d.Zb("removed",function(){d.qc(n);var e=t.$implicit;return d.dc(2).remove(e)}),d.Ac(1),d.ec(2,"date"),d.yc(3,P,2,0,"mat-icon",37),d.Qb()}if(2&e){var i=t.$implicit;d.jc("selectable",!1)("removable",!0),d.Bb(1),d.Cc(" ",d.fc(2,4,i)," "),d.Bb(2),d.jc("ngIf",!0)}}function T(e,t){1&e&&(d.Rb(0,"ion-button",39),d.Nb(1,"loader"),d.Qb())}function j(e,t){if(1&e){var n=d.Sb();d.Rb(0,"form",12),d.Zb("ngSubmit",function(){return d.qc(n),d.dc().onSubmit()}),d.Rb(1,"ion-list"),d.Rb(2,"div",13),d.Rb(3,"ion-item"),d.Rb(4,"ion-label"),d.Ac(5,"Personne(s)"),d.Qb(),d.Rb(6,"ion-select",14),d.Zb("ionChange",function(e){return d.qc(n),d.dc().onSelectChange(e)}),d.yc(7,D,2,2,"ion-select-option",15),d.Qb(),d.Qb(),d.Qb(),d.Rb(8,"div"),d.Rb(9,"mat-form-field",16),d.Rb(10,"mat-label"),d.Ac(11,"S\xe9lectionnez une/des date(s) :"),d.Qb(),d.Rb(12,"mat-chip-list",17,18),d.Zb("click",function(){return d.qc(n),d.pc(18).open()}),d.yc(14,N,4,6,"mat-chip",19),d.Rb(15,"input",20),d.Zb("dateChange",function(e){return d.qc(n),d.dc().dateChanged(e)}),d.Qb(),d.Qb(),d.Nb(16,"mat-datepicker-toggle",21),d.Nb(17,"mat-datepicker",22,23),d.Qb(),d.Qb(),d.Rb(19,"ion-item"),d.Rb(20,"ion-label",24),d.Ac(21,"Nom"),d.Qb(),d.Nb(22,"ion-input",25),d.Qb(),d.Rb(23,"p",26),d.Ac(24," Veuillez renseigner votre nom "),d.Qb(),d.Rb(25,"ion-item"),d.Rb(26,"ion-label",24),d.Ac(27,"T\xe9l\xe9phone"),d.Qb(),d.Nb(28,"ion-input",27),d.Qb(),d.Rb(29,"p",26),d.Ac(30," Veuillez renseigner un num\xe9ro de t\xe9l\xe9phone "),d.Qb(),d.Rb(31,"ion-item"),d.Rb(32,"ion-label",24),d.Ac(33,"E-mail"),d.Qb(),d.Nb(34,"ion-input",28),d.Qb(),d.Rb(35,"p",26),d.Ac(36," Veuillez renseigner votre email "),d.Qb(),d.Rb(37,"ion-item",29),d.Rb(38,"ion-label"),d.Ac(39,"Informations de carte "),d.Qb(),d.Qb(),d.Nb(40,"div",null,30),d.Rb(42,"p",31),d.Ac(43),d.Qb(),d.Rb(44,"div",32),d.Rb(45,"ion-button",33),d.Ac(46),d.Qb(),d.yc(47,T,2,0,"ion-button",34),d.Qb(),d.Qb(),d.Qb()}if(2&e){var i=d.pc(13),o=d.pc(18),r=d.dc();d.jc("formGroup",r.coworkingForm),d.Bb(7),d.jc("ngForOf",r.getCount(r.maxPersonsAllowed)),d.Bb(7),d.jc("ngForOf",r.model),d.Bb(1),d.jc("value",r.resetModel)("matDatepicker",o)("min",r.minDateFilter)("matDatepickerFilter",r.dateFilter)("matChipInputFor",i),d.Bb(1),d.jc("for",o),d.Bb(1),d.jc("disabled",r.coworkingForm.get("personsNumber").invalid)("startAt",r.init)("dateClass",r.dateClass),d.Bb(6),d.jc("ngClass",r.coworkingForm.get("name").invalid&&r.coworkingForm.get("name").touched?"show-error":""),d.Bb(6),d.jc("ngClass",r.coworkingForm.get("phone").invalid&&r.coworkingForm.get("phone").touched?"show-error":""),d.Bb(6),d.jc("ngClass",r.coworkingForm.get("email").invalid&&r.coworkingForm.get("email").touched?"show-error":""),d.Bb(8),d.Cc("Total: ",r.totalPrice,"\u20ac"),d.Bb(2),d.jc("disabled",r.coworkingForm.invalid||0===r.totalPrice||0===r.coworkingForm.get("bookingDateList").value.length||!r.isCardValid),d.Bb(1),d.Dc(" ",r.PAY_BUTTON_TEXT," ",r.totalPrice,"\u20ac "),d.Bb(1),d.jc("ngIf",r.isLoading)}}var S,B,E,I=[{path:"",component:(S=function(){function t(i,o){var r=this;n(this,t),this.router=i,this.coworkingService=o,this.init=new Date,this.resetModel=new Date(0),this.model=[],this.isLoading=!1,this.hideForm=!1,this.isFormSent=!1,this.isFormFailed=!1,this.maxPersonsAllowed=10,this.totalPrice=0,this.isCardValid=!1,this.pricePerHour=6.5,this.bookedDays=[{date:new Date("12/15/2020"),bookedPeople:5},{date:new Date("12/17/2020"),bookedPeople:4},{date:new Date("12/7/2020"),bookedPeople:10},{date:new Date("12/25/2020"),bookedPeople:5},{date:new Date("12/29/2020"),bookedPeople:8},{date:new Date("12/9/2020"),bookedPeople:7}],this.HEADER_TITLE="Coworking",this.HOME_BTN_TEXT="Accueil",this.VALIDATE_BUTTON_TEXT="Valider",this.PAY_BUTTON_TEXT="R\xe9gler",this.RELOAD="R\xe9essayer",this._close_on_selected=!1,this.dateClass=function(e){return-1!==r._findDate(e)?["selected"]:[]},this.dateFilter=function(t){var n,i=r._getUnAvailableDays(r.coworkingForm.get("personsNumber").value,r.bookedDays),o=(t||new Date).getDay(),a=e(i);try{for(a.s();!(n=a.n()).done;){var c=n.value;if(t.toLocaleDateString()===c)return!1}}catch(s){a.e(s)}finally{a.f()}return 0!==o&&6!==o}}return o(t,[{key:"ngOnInit",value:function(){this._initCoworkingForm(),this._setMinMaxDates()}},{key:"ionViewDidEnter",value:function(){this._initStripe()}},{key:"ionViewDidLeave",value:function(){this.coworkingForm.reset(),this.model=[],this.isLoading=!1,this.hideForm=!1,this.isFormSent=!1,this.isFormFailed=!1}},{key:"dateChanged",value:function(e){var t=this;if(e.value){var n=e.value,i=this._findDate(n),o=this.coworkingForm.get("bookingDateList");if(-1===i?(this.model.push(n),o.push(new s.g(n))):(this.model.splice(i,1),o.removeAt(i)),this.resetModel=new Date(0),!this._close_on_selected){var r=this._picker.close;this._picker.close=function(){},this._picker._popupComponentRef.instance._calendar.monthView._createWeekCells(),setTimeout(function(){t._picker.close=r})}this.totalPrice=this.coworkingForm.get("personsNumber").value*this.model.length*this.pricePerHour}}},{key:"remove",value:function(e){var t=this._findDate(e);this.model.splice(t,1),this.coworkingForm.get("bookingDateList").removeAt(t),this.totalPrice=this.coworkingForm.get("personsNumber").value*this.model.length*this.pricePerHour}},{key:"onSubmit",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,n,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.coworkingForm.invalid){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.stripe.createToken(this.creditCardContainer);case 4:t=e.sent,(n=this.coworkingForm.value).token=t.token,t.error||(this.isLoading=!0,this.coworkingService.postCoworking(n).subscribe(function(e){i.isLoading=!1,i.isFormSent=!0,i.hideForm=!0,i.coworkingForm.reset()},function(e){console.log(e),i.isLoading=!1,i.isFormFailed=!0}));case 7:case"end":return e.stop()}},e,this)}))}},{key:"onSelectChange",value:function(e){0!==this.totalPrice&&(this.totalPrice=e.detail.value*this.model.length*this.pricePerHour)}},{key:"getCount",value:function(e){return new Array(e)}},{key:"onNavigateHome",value:function(){this.isLoading=!1,this.isFormSent=!1,this.isFormFailed=!1,this.coworkingForm.reset(),this.router.navigateByUrl("/lcdq/accueil")}},{key:"onReload",value:function(){location.reload()}},{key:"_initStripe",value:function(){var e=this;this.stripe=Stripe("pk_test_51HuFU7H5cEg8n0QAB1Y3OMIH5H6T3o4rs7q8pBLsLzQ3w01hNGmPjuipe4R8G1zn9AAp4IHCzMm0K1erufpLAcjU00ISs2mBZX");var t=this.stripe.elements({locale:"fr"});this.creditCardContainer=t.create("card"),this.creditCardContainer.mount(this.creditCardElement.nativeElement),this.creditCardContainer.addEventListener("change",function(t){console.log(t),e.cardErrors=t.error&&t.error.message,e.isCardValid=t.complete})}},{key:"_initCoworkingForm",value:function(){this.coworkingForm=new s.j({name:new s.g(null,s.w.required),phone:new s.g(null,s.w.required),email:new s.g(null,[s.w.required,s.w.email]),personsNumber:new s.g(null,s.w.required),bookingDateList:new s.e([],s.w.required)})}},{key:"_setMinMaxDates",value:function(){this.minDateFilter=new Date}},{key:"_findDate",value:function(e){return this.model.map(function(e){return+e}).indexOf(+e)}},{key:"_getUnAvailableDays",value:function(e,t){var n=this;return t.filter(function(t){return t.bookedPeople+e>n.maxPersonsAllowed}).map(function(e){return e.date.toLocaleDateString()})}}]),t}(),S.\u0275fac=function(e){return new(e||S)(d.Mb(u.g),d.Mb(p))},S.\u0275cmp=d.Gb({type:S,selectors:[["app-coworking"]],viewQuery:function(e,t){var n;1&e&&(d.Ec(C,!0),d.Ec(F,!0)),2&e&&(d.oc(n=d.ac())&&(t._picker=n.first),d.oc(n=d.ac())&&(t.creditCardElement=n.first))},decls:22,vars:5,consts:[[3,"headerTitle"],["color","primary"],[1,"title-xl"],["size","12","size-md","6","offset-md","3"],[4,"ngIf"],["class","message-sent--fail",4,"ngIf"],["class","message-sent--success",4,"ngIf"],["class","form",3,"formGroup","ngSubmit",4,"ngIf"],[1,"message-sent--fail"],[1,"btn__container--flex"],[3,"click"],[1,"message-sent--success"],[1,"form",3,"formGroup","ngSubmit"],[1,"form-control","radio-container"],["formControlName","personsNumber","interface","popover",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],["appearance","fill"],["aria-label","Choisir une date",3,"click"],["chipList",""],[3,"selectable","removable","removed",4,"ngFor","ngForOf"],["matInput","","placeholder","Choisir une date","required","","hidden","",3,"value","matDatepicker","min","matDatepickerFilter","matChipInputFor","dateChange"],["matSuffix","",3,"for"],[3,"disabled","startAt","dateClass"],["picker",""],["position","floating"],["type","text","name","name","formControlName","name","required",""],[1,"error-message",3,"ngClass"],["type","text","name","phone","formControlName","phone","required",""],["type","email","name","email","formControlName","email","required",""],["lines","none"],["creditCardElement",""],[1,"text-center","price"],[1,"btn__container","btn__container--block"],["type","submit","color","secondary","expand","block",1,"ion-margin-vertical",3,"disabled"],["type","button","color","secondary","expand","block",4,"ngIf"],[3,"value"],[3,"selectable","removable","removed"],["matChipRemove","",4,"ngIf"],["matChipRemove",""],["type","button","color","secondary","expand","block"]],template:function(e,t){1&e&&(d.Nb(0,"ion-header-component",0),d.Rb(1,"ion-content"),d.Rb(2,"ion-grid"),d.Rb(3,"ion-row"),d.Rb(4,"ion-col"),d.Rb(5,"ion-text",1),d.Rb(6,"h1",2),d.Ac(7,"Coworking artistique et culturel"),d.Qb(),d.Qb(),d.Rb(8,"p"),d.Ac(9," Du lundi au vendredi de 10h a\u0300 13h. Espace de travail a\u0300 destination d'artistes, freelances, associations ou compagnies pour leurs projets artistiques, re\u0301unions, de\u0301marches administratives et de\u0301veloppement culturel. Forfait unique a\u0300 6.50\u20ac par personne pour la matine\u0301e."),d.Nb(10,"br"),d.Ac(11," Places limit\xe9es."),d.Nb(12,"br"),d.Ac(13," The\u0301 et cafe\u0301 en libre service. "),d.Qb(),d.Qb(),d.Qb(),d.Rb(14,"ion-row"),d.Rb(15,"ion-col",3),d.Rb(16,"ion-card"),d.Rb(17,"ion-card-content"),d.yc(18,_,1,0,"loader",4),d.yc(19,A,6,1,"div",5),d.yc(20,Q,6,1,"div",6),d.yc(21,j,48,20,"form",7),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb()),2&e&&(d.jc("headerTitle",t.HEADER_TITLE),d.Bb(18),d.jc("ngIf",t.isLoading),d.Bb(1),d.jc("ngIf",!t.isLoading&&t.isFormFailed),d.Bb(1),d.jc("ngIf",!t.isLoading&&t.isFormSent),d.Bb(1),d.jc("ngIf",!t.isLoading&&!t.isFormSent&&!t.isFormFailed))},directives:[h.a,l.n,l.o,l.D,l.m,l.M,l.h,l.i,c.l,g.a,l.f,s.x,s.r,s.k,l.u,l.s,l.t,l.E,l.X,s.q,s.i,c.k,v.c,v.f,k.c,w.b,y.b,k.b,y.d,v.g,y.a,l.r,l.Y,s.v,c.j,l.F,k.a,R.a,k.d],pipes:[c.d],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");.mat-input-element[_ngcontent-%COMP%], mat-datepicker-toggle[_ngcontent-%COMP%]{color:#5dbeba}  mat-form-field{width:100%}  .mat-calendar-body-cell.selected:hover>.mat-calendar-body-cell-content,   .mat-calendar-body-cell.selected>.mat-calendar-body-cell-content,   .mat-calendar-body-cell.selected>.mat-calendar-body-cell-content:hover{background-color:#5dbeba!important;color:#fff!important}.price[_ngcontent-%COMP%]{display:block;font-weight:700;font-size:1.1rem;border-bottom:2px solid #5dbeba;border-top:2px solid #5dbeba;padding:.5rem;margin:1rem 0 0;color:#5dbeba}.btn__container--flex[_ngcontent-%COMP%]{display:flex;justify-content:center}.btn__container--block[_ngcontent-%COMP%]{display:block}']}),S)},{path:"coworking",redirectTo:"",pathMatch:"full"}],L=((B=function e(){n(this,e)}).\u0275mod=d.Kb({type:B}),B.\u0275inj=d.Jb({factory:function(e){return new(e||B)},imports:[[u.j.forChild(I)],u.j]}),B),O=r("PI13"),x=r("PCNd"),q=((E=function e(){n(this,e)}).\u0275mod=d.Kb({type:E}),E.\u0275inj=d.Jb({factory:function(e){return new(e||E)},imports:[[c.b,s.u,l.R,L,x.a,O.a]]}),E)}}])}();