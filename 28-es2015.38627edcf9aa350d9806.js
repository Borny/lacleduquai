(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{YSFO:function(t,e,n){"use strict";n.r(e),n.d(e,"TakeAwayPageModule",function(){return v});var i=n("ofXK"),o=n("TEn/"),a=n("tyNb"),r=n("fXoL"),c=n("TTZi"),s=n("3Pt+"),b=n("xsb0"),l=n("o7am"),m=n("wzJV"),d=n("kmnG"),p=n("qFsG"),u=n("iadO");function g(t,e){1&t&&r.Pb(0,"loader")}function h(t,e){if(1&t&&(r.Tb(0,"div",5),r.Tb(1,"ion-text",6),r.Tb(2,"p"),r.Ac(3,"Merci beaucoup !"),r.Sb(),r.Tb(4,"p"),r.Ac(5),r.Tb(6,"strong"),r.Ac(7),r.Sb(),r.Ac(8,", entre "),r.Tb(9,"strong"),r.Ac(10,"16h30 et 18h30"),r.Sb(),r.Ac(11,", au 49 rue du Mirail. "),r.Sb(),r.Tb(12,"p"),r.Ac(13," D\u2019ici l\xe0, portez-vous bien !"),r.Pb(14,"br"),r.Ac(15," A tr\xe8s vite,"),r.Pb(16,"br"),r.Ac(17," La Cl\xe9 du Quai. "),r.Sb(),r.Sb(),r.Sb()),2&t){const t=r.fc();r.Db(5),r.Cc(" Vous pourrez venir r\xe9cup\xe9rer votre commande le ",t.pickUpDay," "),r.Db(2),r.Bc(t.pickUpMonth)}}function f(t,e){if(1&t){const t=r.Ub();r.Tb(0,"div",5),r.Tb(1,"ion-text",7),r.Tb(2,"p"),r.Ac(3,"D\xe9sol\xe9, une erreur s'est produite. Veuillez r\xe9essayer."),r.Sb(),r.Sb(),r.Tb(4,"div",8),r.Tb(5,"ion-button",9),r.bc("click",function(){return r.sc(t),r.fc().onReload()}),r.Ac(6," Passer commande "),r.Sb(),r.Sb(),r.Sb()}}function _(t,e){if(1&t&&(r.Tb(0,"p",39),r.Ac(1),r.Sb()),2&t){const t=r.fc(2);r.Db(1),r.Cc(" (dont ",t.totalDeposit,"\u20ac de consigne) ")}}function T(t,e){1&t&&(r.Tb(0,"ion-button",40),r.Pb(1,"loader"),r.Sb())}function y(t,e){if(1&t){const t=r.Ub();r.Tb(0,"form",10),r.bc("ngSubmit",function(){return r.sc(t),r.fc().onSubmit()}),r.Tb(1,"ion-list"),r.Tb(2,"ion-item"),r.Tb(3,"ion-label",11),r.Ac(4,"Nom"),r.Pb(5,"atom-asterisk"),r.Sb(),r.Pb(6,"ion-input",12),r.Sb(),r.Tb(7,"p",13),r.Ac(8," Veuillez renseigner votre nom "),r.Sb(),r.Tb(9,"ion-item"),r.Tb(10,"ion-label",11),r.Ac(11,"Pr\xe9nom"),r.Pb(12,"atom-asterisk"),r.Sb(),r.Pb(13,"ion-input",14),r.Sb(),r.Tb(14,"p",13),r.Ac(15," Veuillez renseigner votre pr\xe9nom "),r.Sb(),r.Tb(16,"ion-item"),r.Tb(17,"ion-label",11),r.Ac(18,"T\xe9l\xe9phone"),r.Pb(19,"atom-asterisk"),r.Sb(),r.Pb(20,"ion-input",15),r.Sb(),r.Tb(21,"p",13),r.Ac(22," Veuillez renseigner votre num\xe9ro de t\xe9l\xe9phone "),r.Sb(),r.Tb(23,"div",16),r.Tb(24,"ion-list-header"),r.Tb(25,"ion-label",17),r.Ac(26,"Quantit\xe9 (par bouteille de 1 litre)"),r.Pb(27,"atom-asterisk"),r.Sb(),r.Sb(),r.Tb(28,"div",18),r.Tb(29,"ion-button",19),r.bc("click",function(e){return r.sc(t),r.fc().removeQuantity(e)}),r.Pb(30,"ion-icon",20),r.Sb(),r.Tb(31,"ion-input",21),r.bc("ionChange",function(e){return r.sc(t),r.fc().onQuantityChange(e)}),r.Sb(),r.Tb(32,"ion-button",19),r.bc("click",function(e){return r.sc(t),r.fc().addQuantity(e)}),r.Pb(33,"ion-icon",22),r.Sb(),r.Sb(),r.Sb(),r.Tb(34,"div",23),r.Tb(35,"mat-form-field",24),r.Tb(36,"mat-label"),r.Ac(37,"Date de retrait"),r.Sb(),r.Pb(38,"input",25),r.Pb(39,"mat-datepicker-toggle",26),r.Pb(40,"mat-datepicker",27,28),r.Tb(42,"p",29),r.Ac(43,"(entre 16h30 et 18h30)"),r.Sb(),r.Sb(),r.Sb(),r.Tb(44,"ion-item",30),r.Tb(45,"ion-label"),r.Ac(46,"J'ai mon propre contenant"),r.Pb(47,"atom-asterisk"),r.Sb(),r.Sb(),r.Tb(48,"div",31),r.Tb(49,"ion-text"),r.Ac(50,"Non"),r.Sb(),r.Tb(51,"ion-toggle",32),r.bc("ionChange",function(e){return r.sc(t),r.fc().toggleHasContainer(e)}),r.Sb(),r.Tb(52,"ion-text",33),r.Ac(53,"Oui"),r.Sb(),r.Sb(),r.Tb(54,"div",34),r.Tb(55,"p",35),r.Ac(56),r.Sb(),r.yc(57,_,2,1,"p",36),r.Sb(),r.Tb(58,"div",37),r.yc(59,T,2,0,"ion-button",38),r.Sb(),r.Sb(),r.Sb()}if(2&t){const t=r.rc(41),e=r.fc();r.mc("formGroup",e.chaiTakeAwayForm),r.Db(7),r.mc("ngClass",e.chaiTakeAwayForm.get("lastName").invalid&&e.chaiTakeAwayForm.get("lastName").touched?"show-error":""),r.Db(7),r.mc("ngClass",e.chaiTakeAwayForm.get("firstName").invalid&&e.chaiTakeAwayForm.get("firstName").touched?"show-error":""),r.Db(7),r.mc("ngClass",e.chaiTakeAwayForm.get("phone").invalid&&e.chaiTakeAwayForm.get("phone").touched?"show-error":""),r.Db(8),r.mc("disabled",e.quantity<=1),r.Db(2),r.mc("value",e.quantity),r.Db(1),r.mc("disabled",e.quantity>=4),r.Db(6),r.mc("min",e.minDateFilter)("max",e.maxDateFilter)("matDatepickerFilter",e.dateFilter)("matDatepicker",t),r.Db(1),r.mc("for",t),r.Db(12),r.mc("checked",e.hasContainer),r.Db(1),r.mc("color",e.hasContainer?"primary":""),r.Db(4),r.Cc("Total: ",e.totalPrice,"\u20ac"),r.Db(1),r.mc("ngIf",!e.hasContainer),r.Db(2),r.mc("ngIf",e.isLoading)}}let S=(()=>{class t{constructor(t){this.takeAwayService=t,this.isLoading=!1,this.formSentSuccess=!1,this.formSentFail=!1,this.hideForm=!1,this.showForm=!1,this.price=8,this.totalPrice=8,this.oneLiterPrice=8,this.depositAmount=3,this.totalDeposit=3,this.orderQuantity=1,this.hasContainer=!1,this.quantity=1,this.quantities=["1 litre","2 litres","3 litres","4 litres"]}ngOnInit(){this._initChaiForm(),this._setMinMaxDates(),this._getTotalPrice()}onSubmit(){this.isLoading=!0,this.hideForm=!0;const t=this.chaiTakeAwayForm.value,e=Object.assign(Object.assign({},t),{price:this.price,totalPrice:this.totalPrice,totalDeposit:this.totalDeposit});this.pickUpDay=t.pickUpDate.getDate(),this.pickUpMonth=new Intl.DateTimeFormat("fr-FR",{month:"long"}).format(t.pickUpDate),this.takeAwayService.createChaiTakeAwayOrder(e).subscribe(t=>{this.isLoading=!1,this.formSentSuccess=!0,this.chaiTakeAwayForm.reset()},t=>{this.isLoading=!1,this.formSentFail=!0})}onToggleForm(){this.showForm=!this.showForm}onReload(){location.reload()}toggleHasContainer(t){this.hasContainer=!this.hasContainer,this._getTotalPrice()}dateFilter(t){const e=(t||new Date).getDay();return 0!==e&&1!==e&&3!==e&&5!==e&&6!==e}onQuantityChange(t){this.price=this.oneLiterPrice*t.detail.value,this.orderQuantity=t.detail.value,this._getTotalPrice()}removeQuantity(t){this.quantity--}addQuantity(t){this.quantity++}_initChaiForm(){this.chaiTakeAwayForm=new s.j({lastName:new s.g(null,s.x.required),firstName:new s.g(null,s.x.required),phone:new s.g(null,s.x.required),quantity:new s.g(1,s.x.required),hasOwnContainer:new s.g(!1,s.x.required),pickUpDate:new s.g(null,s.x.required)})}_setMinMaxDates(){const t=(new Date).getFullYear();this.minDateFilter=new Date,this.maxDateFilter=new Date(t+0,11,31)}_getTotalPrice(){this.hasContainer?(this.totalPrice=this.price,this.totalDeposit=0):(this.totalDeposit=this.depositAmount*this.orderQuantity,this.totalPrice=this.price+this.totalDeposit)}}return t.\u0275fac=function(e){return new(e||t)(r.Ob(b.a))},t.\u0275cmp=r.Ib({type:t,selectors:[["organism-chai-take-away"]],decls:9,vars:4,consts:[[1,"form__container"],[1,"overlay"],[4,"ngIf"],["class","form__response",4,"ngIf"],["class","form",3,"formGroup","ngSubmit",4,"ngIf"],[1,"form__response"],["color","primary"],["color","danger"],[1,"btn__container","ion-margin-vertical"],["type","button","color","primary",3,"click"],[1,"form",3,"formGroup","ngSubmit"],["position","floating"],["type","text","name","lastName","formControlName","lastName","required",""],[1,"error-message",3,"ngClass"],["type","text","name","firstName","formControlName","firstName","required",""],["type","text","name","phone","formControlName","phone","required",""],[1,"quantity__container"],[1,"label"],[1,"quantity__form"],["size","small",3,"disabled","click"],["name","remove"],["formControlName","quantity",1,"ion-text-center",3,"value","ionChange"],["name","add"],[1,"calendar"],["appearance","fill",1,"form__calendar"],["matInput","","formControlName","pickUpDate","disabled","",3,"min","max","matDatepickerFilter","matDatepicker"],["matSuffix","",3,"for"],["disabled","false"],["picker",""],[1,"font-sm"],["lines","none",1,"slide-toggle__section"],[1,"slide-toggle__container"],["formControlName","hasOwnContainer",1,"slide-toggle__input",3,"checked","ionChange"],[3,"color"],[1,"price"],[1,"price__amount","ion-text-center"],["class","price__deposit ion-text-center",4,"ngIf"],[1,"btn__container","btn__container--block","btn__container--submit"],["type","button","color","secondary","expand","block",4,"ngIf"],[1,"price__deposit","ion-text-center"],["type","button","color","secondary","expand","block"]],template:function(t,e){1&t&&(r.Tb(0,"ion-card",0),r.Tb(1,"div",1),r.Tb(2,"p"),r.Ac(3,"En pause COVID..."),r.Sb(),r.Sb(),r.Tb(4,"ion-card-content"),r.yc(5,g,1,0,"loader",2),r.yc(6,h,18,2,"div",3),r.yc(7,f,7,0,"div",3),r.yc(8,y,60,17,"form",4),r.Sb(),r.Sb()),2&t&&(r.Db(5),r.mc("ngIf",e.isLoading),r.Db(1),r.mc("ngIf",!e.isLoading&&e.formSentSuccess),r.Db(1),r.mc("ngIf",!e.isLoading&&e.formSentFail),r.Db(1),r.mc("ngIf",!e.isLoading&&!e.hideForm))},directives:[o.h,o.i,i.m,l.a,o.N,o.f,s.y,s.s,s.k,o.w,o.u,o.v,m.a,o.t,o.ab,s.r,s.i,s.w,i.k,o.x,o.s,d.b,d.e,p.b,s.c,u.b,u.d,d.f,u.a,o.Q,o.a],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");[_nghost-%COMP%]{position:relative;display:flex;flex:1}.overlay[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;background:rgba(0,0,0,.4);display:flex;justify-content:center;align-items:center}.overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:2rem;background:#5dbeba;color:#fff;border-radius:8px;transform:rotate(-15deg)}.spinner[_ngcontent-%COMP%]{padding:5rem 0}.heading[_ngcontent-%COMP%]{color:#ffde00;text-align:center}.form__container[_ngcontent-%COMP%]{width:100%;max-width:430px;margin:0 auto}.form__response[_ngcontent-%COMP%]{display:flex;flex-flow:column;justify-content:center;align-items:center;text-align:center}.form__response[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 auto .5rem}.calendar[_ngcontent-%COMP%]{margin:1rem 0 0}.quantity__container[_ngcontent-%COMP%]{margin:1rem 0}.quantity__form[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 4rem}.slide-toggle__section[_ngcontent-%COMP%]{display:flex;flex-flow:column}.slide-toggle__container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-evenly}.price__amount[_ngcontent-%COMP%]{display:block;padding:.5rem;font-weight:700;font-size:1.1rem;color:#5dbeba;border-bottom:2px solid #5dbeba;border-top:2px solid #5dbeba}.price__amount[_ngcontent-%COMP%], .price__deposit[_ngcontent-%COMP%]{margin:1rem 0 0}.btn__container--flex[_ngcontent-%COMP%]{display:flex;justify-content:center}.btn__container--block[_ngcontent-%COMP%]{display:block}.btn__container--submit[_ngcontent-%COMP%]{margin:3rem 0 1rem}']}),t})();const w=[{path:"",component:(()=>{class t{constructor(){this.HEADER_TITLE="A Emporter",this.TITLE="Notre d\xe9licieux Cha\xef \xe0 emporter"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Ib({type:t,selectors:[["app-take-away"]],decls:25,vars:2,consts:[[3,"headerTitle"],[1,"ion-no-padding"],["size","12","size-lg","8"],[1,"title-xl"],[1,"main-container"],[1,"chai-card__container","ion-padding"],[1,"chai-card"],["src","./assets/img/chai-ingredients.jpg"],[1,"chai-card__content"],[1,"chai-form","ion-padding"],["size","12","size-lg","4",1,"ion-no-padding","ion-hide-lg-down"],[1,"take-away__image"]],template:function(t,e){1&t&&(r.Pb(0,"ion-header-component",0),r.Tb(1,"ion-content"),r.Tb(2,"ion-grid",1),r.Tb(3,"ion-row"),r.Tb(4,"ion-col",2),r.Tb(5,"h1",3),r.Ac(6),r.Sb(),r.Tb(7,"div",4),r.Tb(8,"div",5),r.Tb(9,"ion-card",6),r.Pb(10,"img",7),r.Tb(11,"ion-card-content"),r.Tb(12,"h2"),r.Ac(13,"Commandez votre Cha\xef v\xe9g\xe9tal"),r.Sb(),r.Tb(14,"p",8),r.Ac(15," Nous le pr\xe9parons avec des \xe9pices et du gingembre frais, ce qui lui donne tant de go\xfbt! "),r.Sb(),r.Tb(16,"p",8),r.Ac(17," \xc7a se cong\xe8le aussi tr\xe8s bien ! "),r.Sb(),r.Tb(18,"p",8),r.Ac(19," Les commandes se font toujours au minimum de la veille pour le lendemain, \xe0 r\xe9cup\xe9rer entre 15h et 19h. "),r.Sb(),r.Tb(20,"p",8),r.Ac(21," Apr\xe8s, vous pouvez toujours tenter le coup directement sur place, mais nous n'en n'aurons pas forc\xe9ment assez... "),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Pb(22,"organism-chai-take-away",9),r.Sb(),r.Sb(),r.Tb(23,"ion-col",10),r.Pb(24,"div",11),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&t&&(r.mc("headerTitle",e.HEADER_TITLE),r.Db(6),r.Bc(e.TITLE))},directives:[c.a,o.o,o.q,o.G,o.n,o.h,o.i,S],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");@media (min-width:768px){.main-container[_ngcontent-%COMP%]{display:flex}}.chai-card__container[_ngcontent-%COMP%]{flex:1}.chai-card[_ngcontent-%COMP%]{width:100%;max-width:430px;margin:0 auto;background:#5dbeba;color:#fff}.chai-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700}.chai-card__content[_ngcontent-%COMP%], .chai-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 1rem}.take-away__image[_ngcontent-%COMP%]{width:100%;height:100%;background-image:url(come-outside.50a32d13e158b04b8a3a.jpg);background-repeat:no-repeat;background-position:-340px;background-size:auto 100%}']}),t})()},{path:"a-emporter",redirectTo:"",pathMatch:"full"}];let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Mb({type:t}),t.\u0275inj=r.Lb({imports:[[a.k.forChild(w)],a.k]}),t})();var C=n("PI13"),k=n("PCNd"),D=n("ox1a");let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Mb({type:t}),t.\u0275inj=r.Lb({imports:[[i.b,s.v,o.S,C.a,k.a,D.a]]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Mb({type:t}),t.\u0275inj=r.Lb({imports:[[i.b,o.S,P,x,k.a]]}),t})()}}]);