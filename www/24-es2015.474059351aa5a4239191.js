(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"C9V+":function(e,t,i){"use strict";i.r(t),i.d(t,"CoworkingPageModule",function(){return R});var o=i("ofXK"),n=i("3Pt+"),r=i("TEn/"),s=i("tyNb"),a=i("mrSG"),c=i("fXoL"),l=i("AytR"),b=i("tk/3");let d=(()=>{class e{constructor(e){this.http=e,this.COWORKING_URL=l.a.apiUrl+"/coworking"}postCoworking(e){return console.log("coworking service:",e),this.http.post(`${this.COWORKING_URL}`,e)}stripe(e){return console.log("coworking service:",e),this.http.post(`${this.COWORKING_URL}/stripe`,e)}}return e.\u0275fac=function(t){return new(t||e)(c.Xb(b.b))},e.\u0275prov=c.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var m=i("TTZi"),g=i("JgnI"),p=i("JXrQ"),u=i("o7am"),h=i("wzJV"),f=i("kmnG"),k=i("A5z7"),T=i("qFsG"),w=i("iadO"),v=i("NFeN");const S=["picker"],_=["creditCardElement"];function C(e,t){1&e&&c.Pb(0,"loader")}function D(e,t){if(1&e){const e=c.Ub();c.Tb(0,"div",15),c.Tb(1,"p"),c.Ac(2," Votre r\xe9servation n'a pas pu \xeatre effectu\xe9e. Veuillez r\xe9essayer. "),c.Sb(),c.Tb(3,"div",16),c.Tb(4,"ion-button",17),c.bc("click",function(){return c.sc(e),c.fc().onReload()}),c.Ac(5),c.Sb(),c.Sb(),c.Sb()}if(2&e){const e=c.fc();c.Db(5),c.Bc(e.RELOAD)}}function P(e,t){if(1&e){const e=c.Ub();c.Tb(0,"div",18),c.Tb(1,"p"),c.Ac(2,"Merci, votre r\xe9servation a bien \xe9t\xe9 effectu\xe9e."),c.Sb(),c.Tb(3,"div",16),c.Tb(4,"ion-button",17),c.bc("click",function(){return c.sc(e),c.fc().onNavigateHome()}),c.Ac(5),c.Sb(),c.Sb(),c.Sb()}if(2&e){const e=c.fc();c.Db(5),c.Bc(e.HOME_BTN_TEXT)}}function F(e,t){if(1&e&&(c.Tb(0,"ion-select-option",42),c.Ac(1),c.Sb()),2&e){const e=t.index;c.mc("value",e+1),c.Db(1),c.Bc(e+1)}}function y(e,t){1&e&&(c.Tb(0,"mat-icon",45),c.Ac(1,"cancel"),c.Sb())}function A(e,t){if(1&e){const e=c.Ub();c.Tb(0,"mat-chip",43),c.bc("removed",function(){c.sc(e);const i=t.$implicit;return c.fc(2).remove(i)}),c.Ac(1),c.gc(2,"date"),c.yc(3,y,2,0,"mat-icon",44),c.Sb()}if(2&e){const e=t.$implicit;c.mc("selectable",!1)("removable",!0),c.Db(1),c.Cc(" ",c.hc(2,4,e)," "),c.Db(2),c.mc("ngIf",!0)}}function O(e,t){1&e&&(c.Tb(0,"ion-button",46),c.Pb(1,"loader"),c.Sb())}function x(e,t){if(1&e){const e=c.Ub();c.Tb(0,"form",19),c.bc("ngSubmit",function(){return c.sc(e),c.fc().onSubmit()}),c.Tb(1,"ion-list"),c.Tb(2,"ion-item"),c.Tb(3,"ion-label"),c.Ac(4,"Personne(s)"),c.Pb(5,"atom-asterisk"),c.Sb(),c.Tb(6,"ion-select",20),c.bc("ionChange",function(t){return c.sc(e),c.fc().onSelectChange(t)}),c.yc(7,F,2,2,"ion-select-option",21),c.Sb(),c.Sb(),c.Tb(8,"div",22),c.Tb(9,"mat-form-field",23),c.Tb(10,"mat-label"),c.Ac(11,"S\xe9lectionnez une/des date(s)"),c.Pb(12,"atom-asterisk"),c.Sb(),c.Tb(13,"mat-chip-list",24,25),c.bc("click",function(){return c.sc(e),c.rc(19).open()}),c.yc(15,A,4,6,"mat-chip",26),c.Tb(16,"input",27),c.bc("dateChange",function(t){return c.sc(e),c.fc().dateChanged(t)}),c.Sb(),c.Sb(),c.Pb(17,"mat-datepicker-toggle",28),c.Pb(18,"mat-datepicker",29,30),c.Sb(),c.Sb(),c.Tb(20,"ion-item"),c.Tb(21,"ion-label",31),c.Ac(22,"Nom"),c.Pb(23,"atom-asterisk"),c.Sb(),c.Pb(24,"ion-input",32),c.Sb(),c.Tb(25,"p",33),c.Ac(26," Veuillez renseigner votre nom "),c.Sb(),c.Tb(27,"ion-item"),c.Tb(28,"ion-label",31),c.Ac(29,"T\xe9l\xe9phone"),c.Pb(30,"atom-asterisk"),c.Sb(),c.Pb(31,"ion-input",34),c.Sb(),c.Tb(32,"p",33),c.Ac(33," Veuillez renseigner un num\xe9ro de t\xe9l\xe9phone "),c.Sb(),c.Tb(34,"ion-item"),c.Tb(35,"ion-label",31),c.Ac(36,"E-mail"),c.Pb(37,"atom-asterisk"),c.Sb(),c.Pb(38,"ion-input",35),c.Sb(),c.Tb(39,"p",33),c.Ac(40," Veuillez renseigner votre email "),c.Sb(),c.Tb(41,"ion-item",36),c.Tb(42,"ion-label"),c.Ac(43,"Informations de carte"),c.Pb(44,"atom-asterisk"),c.Sb(),c.Sb(),c.Pb(45,"div",37,38),c.Tb(47,"div",39),c.Tb(48,"ion-button",40),c.Ac(49),c.gc(50,"currency"),c.Sb(),c.yc(51,O,2,0,"ion-button",41),c.Sb(),c.Sb(),c.Sb()}if(2&e){const e=c.rc(14),t=c.rc(19),i=c.fc();c.mc("formGroup",i.coworkingForm),c.Db(7),c.mc("ngForOf",i.getCount(i.maxPersonsAllowed)),c.Db(8),c.mc("ngForOf",i.model),c.Db(1),c.mc("value",i.resetModel)("matDatepicker",t)("min",i.minDateFilter)("max",i.maxDateFilter)("matDatepickerFilter",i.dateFilter)("matChipInputFor",e),c.Db(1),c.mc("for",t),c.Db(1),c.mc("disabled",i.coworkingForm.get("personsNumber").invalid)("startAt",i.init)("dateClass",i.dateClass),c.Db(7),c.mc("ngClass",i.coworkingForm.get("name").invalid&&i.coworkingForm.get("name").touched?"show-error":""),c.Db(7),c.mc("ngClass",i.coworkingForm.get("phone").invalid&&i.coworkingForm.get("phone").touched?"show-error":""),c.Db(7),c.mc("ngClass",i.coworkingForm.get("email").invalid&&i.coworkingForm.get("email").touched?"show-error":""),c.Db(9),c.mc("disabled",i.coworkingForm.invalid||0===i.totalPrice||0===i.coworkingForm.get("bookingDateList").value.length||!i.isCardValid),c.Db(1),c.Dc(" ",i.PAY_BUTTON_TEXT," ",c.hc(50,20,i.totalPrice)," "),c.Db(2),c.mc("ngIf",i.isLoading)}}const L=[{path:"",component:(()=>{class e{constructor(e,t){this.router=e,this.coworkingService=t,this.init=new Date,this.resetModel=new Date(0),this.model=[],this.isLoading=!1,this.hideForm=!1,this.isFormSent=!1,this.isFormFailed=!1,this.maxPersonsAllowed=10,this.totalPrice=0,this.isCardValid=!1,this.pricePerHour=6.5,this.bookedDays=[{date:new Date("12/15/2020"),bookedPeople:5},{date:new Date("12/17/2020"),bookedPeople:4},{date:new Date("12/7/2020"),bookedPeople:10},{date:new Date("12/25/2020"),bookedPeople:5},{date:new Date("12/29/2020"),bookedPeople:8},{date:new Date("12/9/2020"),bookedPeople:7},{date:new Date("1/20/2021"),bookedPeople:7},{date:new Date("1/25/2021"),bookedPeople:7}],this.HEADER_TITLE="Coworking",this.TITLE="Coworking Artistique et Culturel",this.HOME_BTN_TEXT="Accueil",this.VALIDATE_BUTTON_TEXT="Valider",this.PAY_BUTTON_TEXT="R\xe9gler",this.RELOAD="R\xe9essayer",this.FRENCH_CARD_NUMBER=0xe35fb281cf903,this._close_on_selected=!1,this.dateClass=e=>-1!==this._findDate(e)?["selected"]:[],this.dateFilter=e=>{const t=this._getUnAvailableDays(this.coworkingForm.get("personsNumber").value,this.bookedDays),i=(e||new Date).getDay();for(const o of t)if(e.toLocaleDateString()===o)return!1;return 0!==i&&6!==i}}ngOnInit(){this._initCoworkingForm(),this._setMinMaxDates()}ionViewDidEnter(){this._initStripe()}ionViewDidLeave(){this.coworkingForm.reset(),this.model=[],this.isLoading=!1,this.hideForm=!1,this.isFormSent=!1,this.isFormFailed=!1}dateChanged(e){if(e.value){const t=e.value,i=this._findDate(t),o=this.coworkingForm.get("bookingDateList");if(-1===i?(this.model.push(t),o.push(new n.g(t))):(this.model.splice(i,1),o.removeAt(i)),this.resetModel=new Date(0),!this._close_on_selected){const e=this._picker.close;this._picker.close=()=>{},this._picker._popupComponentRef.instance._calendar.monthView._createWeekCells(),setTimeout(()=>{this._picker.close=e})}this.totalPrice=this.coworkingForm.get("personsNumber").value*this.model.length*this.pricePerHour}}remove(e){const t=this._findDate(e);this.model.splice(t,1),this.coworkingForm.get("bookingDateList").removeAt(t),this.totalPrice=this.coworkingForm.get("personsNumber").value*this.model.length*this.pricePerHour}onSubmit(){return Object(a.a)(this,void 0,void 0,function*(){if(this.coworkingForm.invalid)return;const e=yield this.stripe.createToken(this.creditCardContainer),t=this.coworkingForm.value;t.token=e.token,e.error||(this.isLoading=!0,this.coworkingService.postCoworking(t).subscribe(e=>{this.isLoading=!1,this.isFormSent=!0,this.hideForm=!0,this.coworkingForm.reset()},e=>{console.log(e),this.isLoading=!1,this.isFormFailed=!0}))})}onSelectChange(e){0!==this.totalPrice&&(this.totalPrice=e.detail.value*this.model.length*this.pricePerHour)}getCount(e){return new Array(e)}onNavigateHome(){this.isLoading=!1,this.isFormSent=!1,this.isFormFailed=!1,this.coworkingForm.reset(),this.router.navigateByUrl("/lcdq/accueil")}onReload(){location.reload()}_initStripe(){this.stripe=Stripe("pk_test_51HuFU7H5cEg8n0QAB1Y3OMIH5H6T3o4rs7q8pBLsLzQ3w01hNGmPjuipe4R8G1zn9AAp4IHCzMm0K1erufpLAcjU00ISs2mBZX");const e=this.stripe.elements({locale:"fr"});this.creditCardContainer=e.create("card"),this.creditCardContainer.mount(this.creditCardElement.nativeElement),this.creditCardContainer.addEventListener("change",e=>{console.log(e),this.cardErrors=e.error&&e.error.message,this.isCardValid=e.complete})}_initCoworkingForm(){this.coworkingForm=new n.j({name:new n.g(null,n.x.required),phone:new n.g(null,n.x.required),email:new n.g(null,[n.x.required,n.x.email]),personsNumber:new n.g(null,n.x.required),bookingDateList:new n.e([],n.x.required)})}_setMinMaxDates(){this.minDateFilter=new Date;const e=(new Date).getFullYear()+1;this.maxDateFilter=new Date(e+0,11,31)}_findDate(e){return this.model.map(e=>+e).indexOf(+e)}_getUnAvailableDays(e,t){const i=t.filter(t=>t.bookedPeople+e>this.maxPersonsAllowed).map(e=>e.date.toLocaleDateString());return console.log(i),i}}return e.\u0275fac=function(t){return new(t||e)(c.Ob(s.g),c.Ob(d))},e.\u0275cmp=c.Ib({type:e,selectors:[["app-coworking"]],viewQuery:function(e,t){if(1&e&&(c.Gc(S,1),c.Gc(_,1)),2&e){let e;c.qc(e=c.cc())&&(t._picker=e.first),c.qc(e=c.cc())&&(t.creditCardElement=e.first)}},decls:41,vars:6,consts:[[3,"headerTitle"],[1,"ion-no-padding"],[1,"squared-shapes",3,"title"],[1,"ion-padding"],["size","12","size-md","6","offset-md","3"],[1,"description"],[1,"description-item"],[1,"description-item--icon"],[1,"description-item--content"],["size","12","size-md","4","offset-md","4"],[1,"ion-no-margin","ion-margin-vertical"],[4,"ngIf"],["class","message-sent--fail",4,"ngIf"],["class","message-sent--success",4,"ngIf"],["class","form",3,"formGroup","ngSubmit",4,"ngIf"],[1,"message-sent--fail"],[1,"btn__container--flex"],[3,"click"],[1,"message-sent--success"],[1,"form",3,"formGroup","ngSubmit"],["formControlName","personsNumber","interface","popover",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"calendar"],["appearance","fill"],["aria-label","Choisir une date",3,"click"],["chipList",""],[3,"selectable","removable","removed",4,"ngFor","ngForOf"],["matInput","","placeholder","Choisir une date","required","","hidden","",3,"value","matDatepicker","min","max","matDatepickerFilter","matChipInputFor","dateChange"],["matSuffix","",3,"for"],[3,"disabled","startAt","dateClass"],["picker",""],["position","floating"],["type","text","name","name","formControlName","name","required",""],[1,"error-message",3,"ngClass"],["type","text","name","phone","formControlName","phone","required",""],["type","email","name","email","formControlName","email","required",""],["lines","none",1,"credit-card__label"],[1,"credit-card__input"],["creditCardElement",""],[1,"btn__container","btn__container--block","btn__container--submit"],["type","submit","color","secondary","expand","block",1,"ion-margin-vertical",3,"disabled"],["type","button","color","secondary","expand","block",4,"ngIf"],[3,"value"],[3,"selectable","removable","removed"],["matChipRemove","",4,"ngIf"],["matChipRemove",""],["type","button","color","secondary","expand","block"]],template:function(e,t){1&e&&(c.Pb(0,"ion-header-component",0),c.Tb(1,"ion-content"),c.Tb(2,"ion-grid",1),c.Tb(3,"ion-row"),c.Tb(4,"ion-col"),c.Pb(5,"squared-shapes-svg",2),c.Sb(),c.Sb(),c.Tb(6,"ion-row",3),c.Tb(7,"ion-col",4),c.Tb(8,"ul",5),c.Tb(9,"li",6),c.Pb(10,"two-triangle-svg",7),c.Tb(11,"p",8),c.Ac(12," Du lundi au vendredi de 10h a\u0300 13h. "),c.Sb(),c.Sb(),c.Tb(13,"li",6),c.Pb(14,"two-triangle-svg",7),c.Tb(15,"p",8),c.Ac(16," Espace de travail a\u0300 destination d'artistes, freelances, associations ou compagnies pour leurs projets artistiques, re\u0301unions, de\u0301marches administratives et de\u0301veloppement culturel "),c.Sb(),c.Sb(),c.Tb(17,"li",6),c.Pb(18,"two-triangle-svg",7),c.Tb(19,"p",8),c.Ac(20," Forfait unique a\u0300 6.50\u20ac par personne pour la matine\u0301e "),c.Sb(),c.Sb(),c.Tb(21,"li",6),c.Pb(22,"two-triangle-svg",7),c.Tb(23,"p",8),c.Ac(24,"Places limit\xe9es"),c.Sb(),c.Sb(),c.Tb(25,"li",6),c.Pb(26,"two-triangle-svg",7),c.Tb(27,"p",8),c.Ac(28," The\u0301 et cafe\u0301 en libre service "),c.Sb(),c.Sb(),c.Tb(29,"li",6),c.Pb(30,"two-triangle-svg",7),c.Tb(31,"p",8),c.Ac(32," Possibilit\xe9 d'utiliser l'imprimante de l'association "),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(33,"ion-row"),c.Tb(34,"ion-col",9),c.Tb(35,"ion-card",10),c.Tb(36,"ion-card-content"),c.yc(37,C,1,0,"loader",11),c.yc(38,D,6,1,"div",12),c.yc(39,P,6,1,"div",13),c.yc(40,x,52,22,"form",14),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&e&&(c.mc("headerTitle",t.HEADER_TITLE),c.Db(5),c.mc("title",t.TITLE),c.Db(32),c.mc("ngIf",t.isLoading),c.Db(1),c.mc("ngIf",!t.isLoading&&t.isFormFailed),c.Db(1),c.mc("ngIf",!t.isLoading&&t.isFormSent),c.Db(1),c.mc("ngIf",!t.isLoading&&!t.isFormSent&&!t.isFormFailed))},directives:[m.a,r.n,r.p,r.F,r.m,g.a,p.a,r.h,r.i,o.m,u.a,r.f,n.y,n.s,n.k,r.v,r.t,r.u,h.a,r.G,r.Y,n.r,n.i,o.l,f.b,f.e,k.c,T.b,w.b,k.b,w.d,f.f,w.a,r.s,r.Z,n.w,o.k,r.H,k.a,v.a,k.d],pipes:[o.c,o.e],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");.overlay[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;background:rgba(0,0,0,.4);display:flex;justify-content:center;align-items:center}.overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:2rem;background:#5dbeba;color:#fff;border-radius:8px;transform:rotate(-15deg)}.description-item[_ngcontent-%COMP%]{margin:1rem auto 0}.description-item[_ngcontent-%COMP%], .description-item--icon[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:flex-start}.description-item--icon[_ngcontent-%COMP%]{width:20px;height:20px;margin:0 1rem 0 0}.description-item--content[_ngcontent-%COMP%]{flex:1}.calendar[_ngcontent-%COMP%]{margin:1rem 0 0}.credit-card__label[_ngcontent-%COMP%]{margin:2rem 0 0}.credit-card__input[_ngcontent-%COMP%]{padding:0 0 0 1rem}.btn__container--flex[_ngcontent-%COMP%]{display:flex;justify-content:center}.btn__container--block[_ngcontent-%COMP%]{display:block}.btn__container--submit[_ngcontent-%COMP%]{margin:3rem 0 1rem}']}),e})()},{path:"coworking",redirectTo:"",pathMatch:"full"}];let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({imports:[[s.k.forChild(L)],s.k]}),e})();var I=i("PI13"),M=i("PCNd"),N=i("ox1a");let R=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({imports:[[o.b,n.v,r.R,E,M.a,I.a,N.a]]}),e})()}}]);