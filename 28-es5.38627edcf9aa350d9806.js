!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{YSFO:function(t,i,o){"use strict";o.r(i),o.d(i,"TakeAwayPageModule",function(){return N});var a=o("ofXK"),r=o("TEn/"),c=o("tyNb"),s=o("fXoL"),l=o("TTZi"),b=o("3Pt+"),m=o("xsb0"),u=o("o7am"),d=o("wzJV"),p=o("kmnG"),g=o("qFsG"),f=o("iadO");function h(e,t){1&e&&s.Pb(0,"loader")}function y(e,t){if(1&e&&(s.Tb(0,"div",5),s.Tb(1,"ion-text",6),s.Tb(2,"p"),s.Ac(3,"Merci beaucoup !"),s.Sb(),s.Tb(4,"p"),s.Ac(5),s.Tb(6,"strong"),s.Ac(7),s.Sb(),s.Ac(8,", entre "),s.Tb(9,"strong"),s.Ac(10,"16h30 et 18h30"),s.Sb(),s.Ac(11,", au 49 rue du Mirail. "),s.Sb(),s.Tb(12,"p"),s.Ac(13," D\u2019ici l\xe0, portez-vous bien !"),s.Pb(14,"br"),s.Ac(15," A tr\xe8s vite,"),s.Pb(16,"br"),s.Ac(17," La Cl\xe9 du Quai. "),s.Sb(),s.Sb(),s.Sb()),2&e){var n=s.fc();s.Db(5),s.Cc(" Vous pourrez venir r\xe9cup\xe9rer votre commande le ",n.pickUpDay," "),s.Db(2),s.Bc(n.pickUpMonth)}}function _(e,t){if(1&e){var n=s.Ub();s.Tb(0,"div",5),s.Tb(1,"ion-text",7),s.Tb(2,"p"),s.Ac(3,"D\xe9sol\xe9, une erreur s'est produite. Veuillez r\xe9essayer."),s.Sb(),s.Sb(),s.Tb(4,"div",8),s.Tb(5,"ion-button",9),s.bc("click",function(){return s.sc(n),s.fc().onReload()}),s.Ac(6," Passer commande "),s.Sb(),s.Sb(),s.Sb()}}function T(e,t){if(1&e&&(s.Tb(0,"p",39),s.Ac(1),s.Sb()),2&e){var n=s.fc(2);s.Db(1),s.Cc(" (dont ",n.totalDeposit,"\u20ac de consigne) ")}}function S(e,t){1&e&&(s.Tb(0,"ion-button",40),s.Pb(1,"loader"),s.Sb())}function k(e,t){if(1&e){var n=s.Ub();s.Tb(0,"form",10),s.bc("ngSubmit",function(){return s.sc(n),s.fc().onSubmit()}),s.Tb(1,"ion-list"),s.Tb(2,"ion-item"),s.Tb(3,"ion-label",11),s.Ac(4,"Nom"),s.Pb(5,"atom-asterisk"),s.Sb(),s.Pb(6,"ion-input",12),s.Sb(),s.Tb(7,"p",13),s.Ac(8," Veuillez renseigner votre nom "),s.Sb(),s.Tb(9,"ion-item"),s.Tb(10,"ion-label",11),s.Ac(11,"Pr\xe9nom"),s.Pb(12,"atom-asterisk"),s.Sb(),s.Pb(13,"ion-input",14),s.Sb(),s.Tb(14,"p",13),s.Ac(15," Veuillez renseigner votre pr\xe9nom "),s.Sb(),s.Tb(16,"ion-item"),s.Tb(17,"ion-label",11),s.Ac(18,"T\xe9l\xe9phone"),s.Pb(19,"atom-asterisk"),s.Sb(),s.Pb(20,"ion-input",15),s.Sb(),s.Tb(21,"p",13),s.Ac(22," Veuillez renseigner votre num\xe9ro de t\xe9l\xe9phone "),s.Sb(),s.Tb(23,"div",16),s.Tb(24,"ion-list-header"),s.Tb(25,"ion-label",17),s.Ac(26,"Quantit\xe9 (par bouteille de 1 litre)"),s.Pb(27,"atom-asterisk"),s.Sb(),s.Sb(),s.Tb(28,"div",18),s.Tb(29,"ion-button",19),s.bc("click",function(e){return s.sc(n),s.fc().removeQuantity(e)}),s.Pb(30,"ion-icon",20),s.Sb(),s.Tb(31,"ion-input",21),s.bc("ionChange",function(e){return s.sc(n),s.fc().onQuantityChange(e)}),s.Sb(),s.Tb(32,"ion-button",19),s.bc("click",function(e){return s.sc(n),s.fc().addQuantity(e)}),s.Pb(33,"ion-icon",22),s.Sb(),s.Sb(),s.Sb(),s.Tb(34,"div",23),s.Tb(35,"mat-form-field",24),s.Tb(36,"mat-label"),s.Ac(37,"Date de retrait"),s.Sb(),s.Pb(38,"input",25),s.Pb(39,"mat-datepicker-toggle",26),s.Pb(40,"mat-datepicker",27,28),s.Tb(42,"p",29),s.Ac(43,"(entre 16h30 et 18h30)"),s.Sb(),s.Sb(),s.Sb(),s.Tb(44,"ion-item",30),s.Tb(45,"ion-label"),s.Ac(46,"J'ai mon propre contenant"),s.Pb(47,"atom-asterisk"),s.Sb(),s.Sb(),s.Tb(48,"div",31),s.Tb(49,"ion-text"),s.Ac(50,"Non"),s.Sb(),s.Tb(51,"ion-toggle",32),s.bc("ionChange",function(e){return s.sc(n),s.fc().toggleHasContainer(e)}),s.Sb(),s.Tb(52,"ion-text",33),s.Ac(53,"Oui"),s.Sb(),s.Sb(),s.Tb(54,"div",34),s.Tb(55,"p",35),s.Ac(56),s.Sb(),s.yc(57,T,2,1,"p",36),s.Sb(),s.Tb(58,"div",37),s.yc(59,S,2,0,"ion-button",38),s.Sb(),s.Sb(),s.Sb()}if(2&e){var i=s.rc(41),o=s.fc();s.mc("formGroup",o.chaiTakeAwayForm),s.Db(7),s.mc("ngClass",o.chaiTakeAwayForm.get("lastName").invalid&&o.chaiTakeAwayForm.get("lastName").touched?"show-error":""),s.Db(7),s.mc("ngClass",o.chaiTakeAwayForm.get("firstName").invalid&&o.chaiTakeAwayForm.get("firstName").touched?"show-error":""),s.Db(7),s.mc("ngClass",o.chaiTakeAwayForm.get("phone").invalid&&o.chaiTakeAwayForm.get("phone").touched?"show-error":""),s.Db(8),s.mc("disabled",o.quantity<=1),s.Db(2),s.mc("value",o.quantity),s.Db(1),s.mc("disabled",o.quantity>=4),s.Db(6),s.mc("min",o.minDateFilter)("max",o.maxDateFilter)("matDatepickerFilter",o.dateFilter)("matDatepicker",i),s.Db(1),s.mc("for",i),s.Db(12),s.mc("checked",o.hasContainer),s.Db(1),s.mc("color",o.hasContainer?"primary":""),s.Db(4),s.Cc("Total: ",o.totalPrice,"\u20ac"),s.Db(1),s.mc("ngIf",!o.hasContainer),s.Db(2),s.mc("ngIf",o.isLoading)}}var v,w,P,C,D,x=((v=function(){function t(n){e(this,t),this.takeAwayService=n,this.isLoading=!1,this.formSentSuccess=!1,this.formSentFail=!1,this.hideForm=!1,this.showForm=!1,this.price=8,this.totalPrice=8,this.oneLiterPrice=8,this.depositAmount=3,this.totalDeposit=3,this.orderQuantity=1,this.hasContainer=!1,this.quantity=1,this.quantities=["1 litre","2 litres","3 litres","4 litres"]}return n(t,[{key:"ngOnInit",value:function(){this._initChaiForm(),this._setMinMaxDates(),this._getTotalPrice()}},{key:"onSubmit",value:function(){var e=this;this.isLoading=!0,this.hideForm=!0;var t=this.chaiTakeAwayForm.value,n=Object.assign(Object.assign({},t),{price:this.price,totalPrice:this.totalPrice,totalDeposit:this.totalDeposit});this.pickUpDay=t.pickUpDate.getDate(),this.pickUpMonth=new Intl.DateTimeFormat("fr-FR",{month:"long"}).format(t.pickUpDate),this.takeAwayService.createChaiTakeAwayOrder(n).subscribe(function(t){e.isLoading=!1,e.formSentSuccess=!0,e.chaiTakeAwayForm.reset()},function(t){e.isLoading=!1,e.formSentFail=!0})}},{key:"onToggleForm",value:function(){this.showForm=!this.showForm}},{key:"onReload",value:function(){location.reload()}},{key:"toggleHasContainer",value:function(e){this.hasContainer=!this.hasContainer,this._getTotalPrice()}},{key:"dateFilter",value:function(e){var t=(e||new Date).getDay();return 0!==t&&1!==t&&3!==t&&5!==t&&6!==t}},{key:"onQuantityChange",value:function(e){this.price=this.oneLiterPrice*e.detail.value,this.orderQuantity=e.detail.value,this._getTotalPrice()}},{key:"removeQuantity",value:function(e){this.quantity--}},{key:"addQuantity",value:function(e){this.quantity++}},{key:"_initChaiForm",value:function(){this.chaiTakeAwayForm=new b.j({lastName:new b.g(null,b.x.required),firstName:new b.g(null,b.x.required),phone:new b.g(null,b.x.required),quantity:new b.g(1,b.x.required),hasOwnContainer:new b.g(!1,b.x.required),pickUpDate:new b.g(null,b.x.required)})}},{key:"_setMinMaxDates",value:function(){var e=(new Date).getFullYear();this.minDateFilter=new Date,this.maxDateFilter=new Date(e+0,11,31)}},{key:"_getTotalPrice",value:function(){this.hasContainer?(this.totalPrice=this.price,this.totalDeposit=0):(this.totalDeposit=this.depositAmount*this.orderQuantity,this.totalPrice=this.price+this.totalDeposit)}}]),t}()).\u0275fac=function(e){return new(e||v)(s.Ob(m.a))},v.\u0275cmp=s.Ib({type:v,selectors:[["organism-chai-take-away"]],decls:9,vars:4,consts:[[1,"form__container"],[1,"overlay"],[4,"ngIf"],["class","form__response",4,"ngIf"],["class","form",3,"formGroup","ngSubmit",4,"ngIf"],[1,"form__response"],["color","primary"],["color","danger"],[1,"btn__container","ion-margin-vertical"],["type","button","color","primary",3,"click"],[1,"form",3,"formGroup","ngSubmit"],["position","floating"],["type","text","name","lastName","formControlName","lastName","required",""],[1,"error-message",3,"ngClass"],["type","text","name","firstName","formControlName","firstName","required",""],["type","text","name","phone","formControlName","phone","required",""],[1,"quantity__container"],[1,"label"],[1,"quantity__form"],["size","small",3,"disabled","click"],["name","remove"],["formControlName","quantity",1,"ion-text-center",3,"value","ionChange"],["name","add"],[1,"calendar"],["appearance","fill",1,"form__calendar"],["matInput","","formControlName","pickUpDate","disabled","",3,"min","max","matDatepickerFilter","matDatepicker"],["matSuffix","",3,"for"],["disabled","false"],["picker",""],[1,"font-sm"],["lines","none",1,"slide-toggle__section"],[1,"slide-toggle__container"],["formControlName","hasOwnContainer",1,"slide-toggle__input",3,"checked","ionChange"],[3,"color"],[1,"price"],[1,"price__amount","ion-text-center"],["class","price__deposit ion-text-center",4,"ngIf"],[1,"btn__container","btn__container--block","btn__container--submit"],["type","button","color","secondary","expand","block",4,"ngIf"],[1,"price__deposit","ion-text-center"],["type","button","color","secondary","expand","block"]],template:function(e,t){1&e&&(s.Tb(0,"ion-card",0),s.Tb(1,"div",1),s.Tb(2,"p"),s.Ac(3,"En pause COVID..."),s.Sb(),s.Sb(),s.Tb(4,"ion-card-content"),s.yc(5,h,1,0,"loader",2),s.yc(6,y,18,2,"div",3),s.yc(7,_,7,0,"div",3),s.yc(8,k,60,17,"form",4),s.Sb(),s.Sb()),2&e&&(s.Db(5),s.mc("ngIf",t.isLoading),s.Db(1),s.mc("ngIf",!t.isLoading&&t.formSentSuccess),s.Db(1),s.mc("ngIf",!t.isLoading&&t.formSentFail),s.Db(1),s.mc("ngIf",!t.isLoading&&!t.hideForm))},directives:[r.h,r.i,a.m,u.a,r.N,r.f,b.y,b.s,b.k,r.w,r.u,r.v,d.a,r.t,r.ab,b.r,b.i,b.w,a.k,r.x,r.s,p.b,p.e,g.b,b.c,f.b,f.d,p.f,f.a,r.Q,r.a],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");[_nghost-%COMP%]{position:relative;display:flex;flex:1}.overlay[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;background:rgba(0,0,0,.4);display:flex;justify-content:center;align-items:center}.overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:2rem;background:#5dbeba;color:#fff;border-radius:8px;transform:rotate(-15deg)}.spinner[_ngcontent-%COMP%]{padding:5rem 0}.heading[_ngcontent-%COMP%]{color:#ffde00;text-align:center}.form__container[_ngcontent-%COMP%]{width:100%;max-width:430px;margin:0 auto}.form__response[_ngcontent-%COMP%]{display:flex;flex-flow:column;justify-content:center;align-items:center;text-align:center}.form__response[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 auto .5rem}.calendar[_ngcontent-%COMP%]{margin:1rem 0 0}.quantity__container[_ngcontent-%COMP%]{margin:1rem 0}.quantity__form[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 4rem}.slide-toggle__section[_ngcontent-%COMP%]{display:flex;flex-flow:column}.slide-toggle__container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-evenly}.price__amount[_ngcontent-%COMP%]{display:block;padding:.5rem;font-weight:700;font-size:1.1rem;color:#5dbeba;border-bottom:2px solid #5dbeba;border-top:2px solid #5dbeba}.price__amount[_ngcontent-%COMP%], .price__deposit[_ngcontent-%COMP%]{margin:1rem 0 0}.btn__container--flex[_ngcontent-%COMP%]{display:flex;justify-content:center}.btn__container--block[_ngcontent-%COMP%]{display:block}.btn__container--submit[_ngcontent-%COMP%]{margin:3rem 0 1rem}']}),v),A=[{path:"",component:(w=function(){function t(){e(this,t),this.HEADER_TITLE="A Emporter",this.TITLE="Notre d\xe9licieux Cha\xef \xe0 emporter"}return n(t,[{key:"ngOnInit",value:function(){}}]),t}(),w.\u0275fac=function(e){return new(e||w)},w.\u0275cmp=s.Ib({type:w,selectors:[["app-take-away"]],decls:25,vars:2,consts:[[3,"headerTitle"],[1,"ion-no-padding"],["size","12","size-lg","8"],[1,"title-xl"],[1,"main-container"],[1,"chai-card__container","ion-padding"],[1,"chai-card"],["src","./assets/img/chai-ingredients.jpg"],[1,"chai-card__content"],[1,"chai-form","ion-padding"],["size","12","size-lg","4",1,"ion-no-padding","ion-hide-lg-down"],[1,"take-away__image"]],template:function(e,t){1&e&&(s.Pb(0,"ion-header-component",0),s.Tb(1,"ion-content"),s.Tb(2,"ion-grid",1),s.Tb(3,"ion-row"),s.Tb(4,"ion-col",2),s.Tb(5,"h1",3),s.Ac(6),s.Sb(),s.Tb(7,"div",4),s.Tb(8,"div",5),s.Tb(9,"ion-card",6),s.Pb(10,"img",7),s.Tb(11,"ion-card-content"),s.Tb(12,"h2"),s.Ac(13,"Commandez votre Cha\xef v\xe9g\xe9tal"),s.Sb(),s.Tb(14,"p",8),s.Ac(15," Nous le pr\xe9parons avec des \xe9pices et du gingembre frais, ce qui lui donne tant de go\xfbt! "),s.Sb(),s.Tb(16,"p",8),s.Ac(17," \xc7a se cong\xe8le aussi tr\xe8s bien ! "),s.Sb(),s.Tb(18,"p",8),s.Ac(19," Les commandes se font toujours au minimum de la veille pour le lendemain, \xe0 r\xe9cup\xe9rer entre 15h et 19h. "),s.Sb(),s.Tb(20,"p",8),s.Ac(21," Apr\xe8s, vous pouvez toujours tenter le coup directement sur place, mais nous n'en n'aurons pas forc\xe9ment assez... "),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Pb(22,"organism-chai-take-away",9),s.Sb(),s.Sb(),s.Tb(23,"ion-col",10),s.Pb(24,"div",11),s.Sb(),s.Sb(),s.Sb(),s.Sb()),2&e&&(s.mc("headerTitle",t.HEADER_TITLE),s.Db(6),s.Bc(t.TITLE))},directives:[l.a,r.o,r.q,r.G,r.n,r.h,r.i,x],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");@media (min-width:768px){.main-container[_ngcontent-%COMP%]{display:flex}}.chai-card__container[_ngcontent-%COMP%]{flex:1}.chai-card[_ngcontent-%COMP%]{width:100%;max-width:430px;margin:0 auto;background:#5dbeba;color:#fff}.chai-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700}.chai-card__content[_ngcontent-%COMP%], .chai-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 1rem}.take-away__image[_ngcontent-%COMP%]{width:100%;height:100%;background-image:url(come-outside.50a32d13e158b04b8a3a.jpg);background-repeat:no-repeat;background-position:-340px;background-size:auto 100%}']}),w)},{path:"a-emporter",redirectTo:"",pathMatch:"full"}],O=((P=function t(){e(this,t)}).\u0275fac=function(e){return new(e||P)},P.\u0275mod=s.Mb({type:P}),P.\u0275inj=s.Lb({imports:[[c.k.forChild(A)],c.k]}),P),M=o("PI13"),F=o("PCNd"),q=o("ox1a"),I=((D=function t(){e(this,t)}).\u0275fac=function(e){return new(e||D)},D.\u0275mod=s.Mb({type:D}),D.\u0275inj=s.Lb({imports:[[a.b,b.v,r.S,M.a,F.a,q.a]]}),D),N=((C=function t(){e(this,t)}).\u0275fac=function(e){return new(e||C)},C.\u0275mod=s.Mb({type:C}),C.\u0275inj=s.Lb({imports:[[a.b,r.S,O,I,F.a]]}),C)}}])}();