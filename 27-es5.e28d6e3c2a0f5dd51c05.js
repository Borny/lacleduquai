!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{YSFO:function(t,i,o){"use strict";o.r(i),o.d(i,"TakeAwayPageModule",function(){return N});var a=o("ofXK"),r=o("TEn/"),c=o("tyNb"),s=o("fXoL"),l=o("TTZi"),m=o("3Pt+"),b=o("xsb0"),u=o("kmnG"),d=o("qFsG"),p=o("iadO");function g(e,t){1&e&&s.Nb(0,"ion-spinner",4)}function f(e,t){if(1&e&&(s.Rb(0,"div",5),s.Rb(1,"p"),s.Ac(2,"Merci beaucoup !"),s.Qb(),s.Rb(3,"p"),s.Ac(4),s.Qb(),s.Rb(5,"p"),s.Ac(6," D\u2019ici l\xe0, portez-vous bien !"),s.Nb(7,"br"),s.Ac(8," A tr\xe8s vite,"),s.Nb(9,"br"),s.Ac(10," La Cl\xe9 du Quai. "),s.Qb(),s.Qb()),2&e){var n=s.dc();s.Bb(4),s.Dc(" Vous pourrez venir r\xe9cup\xe9rer votre commande le ",n.pickUpDay," ",n.pickUpMonth,", entre 16h30 et 18h30, au 49 rue du Mirail. ")}}function h(e,t){if(1&e){var n=s.Sb();s.Rb(0,"div",5),s.Rb(1,"p"),s.Ac(2,"D\xe9sol\xe9, une erreur s'est produite. Veuillez r\xe9essayer."),s.Qb(),s.Rb(3,"ion-button",6),s.Zb("click",function(){return s.qc(n),s.dc().onReload()}),s.Ac(4," Passer commande "),s.Qb(),s.Qb()}}function y(e,t){if(1&e&&(s.Rb(0,"p",34),s.Ac(1),s.Qb()),2&e){var n=s.dc(2);s.Bb(1),s.Cc(" (dont ",n.totalDeposit,"\u20ac de consigne) ")}}function _(e,t){if(1&e){var n=s.Sb();s.Rb(0,"form",7),s.Zb("ngSubmit",function(){return s.qc(n),s.dc().onSubmit()}),s.Rb(1,"ion-item",8),s.Rb(2,"ion-label",9),s.Ac(3,"Nom"),s.Qb(),s.Nb(4,"ion-input",10),s.Qb(),s.Rb(5,"p",11),s.Ac(6," Veuillez renseigner votre nom "),s.Qb(),s.Rb(7,"ion-item",8),s.Rb(8,"ion-label",9),s.Ac(9,"Pr\xe9nom"),s.Qb(),s.Nb(10,"ion-input",12),s.Qb(),s.Rb(11,"p",11),s.Ac(12," Veuillez renseigner votre pr\xe9nom "),s.Qb(),s.Rb(13,"ion-item",8),s.Rb(14,"ion-label",9),s.Ac(15,"T\xe9l\xe9phone"),s.Qb(),s.Nb(16,"ion-input",13),s.Qb(),s.Rb(17,"p",11),s.Ac(18," Veuillez renseigner votre num\xe9ro de t\xe9l\xe9phone "),s.Qb(),s.Rb(19,"div",14),s.Rb(20,"ion-label",15),s.Ac(21,"Quantit\xe9 (par bouteille de 1 litre):"),s.Qb(),s.Rb(22,"div",16),s.Rb(23,"ion-button",17),s.Zb("click",function(e){return s.qc(n),s.dc().removeQuantity(e)}),s.Nb(24,"ion-icon",18),s.Qb(),s.Rb(25,"ion-input",19),s.Zb("ionChange",function(e){return s.qc(n),s.dc().onQuantityChange(e)}),s.Qb(),s.Rb(26,"ion-button",17),s.Zb("click",function(e){return s.qc(n),s.dc().addQuantity(e)}),s.Nb(27,"ion-icon",20),s.Qb(),s.Qb(),s.Qb(),s.Rb(28,"div",8),s.Rb(29,"mat-form-field",21),s.Rb(30,"mat-label"),s.Ac(31,"Date de retrait :"),s.Qb(),s.Nb(32,"input",22),s.Nb(33,"mat-datepicker-toggle",23),s.Nb(34,"mat-datepicker",24,25),s.Rb(36,"p",26),s.Ac(37,"(entre 16h30 et 18h30)"),s.Qb(),s.Qb(),s.Qb(),s.Rb(38,"div",27),s.Rb(39,"ion-label"),s.Ac(40,"J'ai mon propre contenant"),s.Qb(),s.Rb(41,"div",28),s.Rb(42,"ion-text"),s.Ac(43,"Non"),s.Qb(),s.Rb(44,"ion-toggle",29),s.Zb("ionChange",function(e){return s.qc(n),s.dc().toggleHasContainer(e)}),s.Qb(),s.Rb(45,"ion-text",30),s.Ac(46,"Oui"),s.Qb(),s.Qb(),s.Qb(),s.Rb(47,"p",31),s.Ac(48),s.Qb(),s.yc(49,y,2,1,"p",32),s.Rb(50,"ion-button",33),s.Ac(51," Commandez ! "),s.Qb(),s.Qb()}if(2&e){var i=s.pc(35),o=s.dc();s.jc("formGroup",o.chaiTakeAwayForm),s.Bb(5),s.jc("ngClass",o.chaiTakeAwayForm.get("lastName").invalid&&o.chaiTakeAwayForm.get("lastName").touched?"show-error":""),s.Bb(6),s.jc("ngClass",o.chaiTakeAwayForm.get("firstName").invalid&&o.chaiTakeAwayForm.get("firstName").touched?"show-error":""),s.Bb(6),s.jc("ngClass",o.chaiTakeAwayForm.get("phone").invalid&&o.chaiTakeAwayForm.get("phone").touched?"show-error":""),s.Bb(6),s.jc("disabled",o.quantity<=1),s.Bb(2),s.jc("value",o.quantity),s.Bb(1),s.jc("disabled",o.quantity>=4),s.Bb(6),s.jc("min",o.minDateFilter)("max",o.maxDateFilter)("matDatepickerFilter",o.dateFilter)("matDatepicker",i),s.Bb(1),s.jc("for",i),s.Bb(11),s.jc("checked",o.hasContainer),s.Bb(1),s.jc("color",o.hasContainer?"primary":""),s.Bb(3),s.Cc("Total: ",o.totalPrice,"\u20ac"),s.Bb(1),s.jc("ngIf",!o.hasContainer),s.Bb(1),s.jc("disabled",o.chaiTakeAwayForm.invalid)}}var w,C,k,v,P,Q=((w=function(){function t(n){e(this,t),this.takeAwayService=n,this.isLoading=!1,this.formSentSuccess=!1,this.formSentFail=!1,this.hideForm=!1,this.showForm=!1,this.price=8,this.totalPrice=8,this.oneLiterPrice=8,this.depositAmount=3,this.totalDeposit=3,this.orderQuantity=1,this.hasContainer=!1,this.quantity=1,this.quantities=["1 litre","2 litres","3 litres","4 litres"]}return n(t,[{key:"ngOnInit",value:function(){this._initChaiForm(),this._setMinMaxDates(),this._getTotalPrice()}},{key:"onSubmit",value:function(){var e=this;this.isLoading=!0,this.hideForm=!0;var t=this.chaiTakeAwayForm.value,n=Object.assign(Object.assign({},t),{price:this.price,totalPrice:this.totalPrice,totalDeposit:this.totalDeposit});this.pickUpDay=t.pickUpDate.getDate(),this.pickUpMonth=new Intl.DateTimeFormat("fr-FR",{month:"long"}).format(t.pickUpDate),this.takeAwayService.createChaiTakeAwayOrder(n).subscribe(function(t){e.isLoading=!1,e.formSentSuccess=!0,e.chaiTakeAwayForm.reset()},function(t){e.isLoading=!1,e.formSentFail=!0})}},{key:"onToggleForm",value:function(){this.showForm=!this.showForm}},{key:"onReload",value:function(){location.reload()}},{key:"toggleHasContainer",value:function(e){this.hasContainer=!this.hasContainer,this._getTotalPrice()}},{key:"dateFilter",value:function(e){var t=(e||new Date).getDay();return 0!==t&&1!==t&&3!==t&&5!==t&&6!==t}},{key:"onQuantityChange",value:function(e){this.price=this.oneLiterPrice*e.detail.value,this.orderQuantity=e.detail.value,this._getTotalPrice()}},{key:"removeQuantity",value:function(e){this.quantity--}},{key:"addQuantity",value:function(e){this.quantity++}},{key:"_initChaiForm",value:function(){this.chaiTakeAwayForm=new m.j({lastName:new m.g(null,m.w.required),firstName:new m.g(null,m.w.required),phone:new m.g(null,m.w.required),quantity:new m.g(1,m.w.required),hasOwnContainer:new m.g(!1,m.w.required),pickUpDate:new m.g(null,m.w.required)})}},{key:"_setMinMaxDates",value:function(){var e=(new Date).getFullYear();this.minDateFilter=new Date,this.maxDateFilter=new Date(e+0,11,31)}},{key:"_getTotalPrice",value:function(){this.hasContainer?(this.totalPrice=this.price,this.totalDeposit=0):(this.totalDeposit=this.depositAmount*this.orderQuantity,this.totalPrice=this.price+this.totalDeposit)}}]),t}()).\u0275fac=function(e){return new(e||w)(s.Mb(b.a))},w.\u0275cmp=s.Gb({type:w,selectors:[["chai-take-away"]],decls:6,vars:4,consts:[[1,"form__container"],["name","crescent","color","primary",4,"ngIf"],["class","form__response",4,"ngIf"],["class","take-away-form",3,"formGroup","ngSubmit",4,"ngIf"],["name","crescent","color","primary"],[1,"form__response"],["type","button","color","primary",3,"click"],[1,"take-away-form",3,"formGroup","ngSubmit"],[1,"form-control"],["position","floating"],["type","text","name","lastName","formControlName","lastName","required",""],[1,"error-message",3,"ngClass"],["type","text","name","firstName","formControlName","firstName","required",""],["type","text","name","phone","formControlName","phone","required",""],[1,"form-control","quantity__container"],[1,"label"],[1,"quantity__form"],["size","small",3,"disabled","click"],["name","remove"],["formControlName","quantity",1,"input",3,"value","ionChange"],["name","add"],["appearance","fill",1,"form__calendar"],["matInput","","formControlName","pickUpDate","disabled","",3,"min","max","matDatepickerFilter","matDatepicker"],["matSuffix","",3,"for"],["disabled","false"],["picker",""],[1,"font-sm"],[1,"slide-toggle__section"],[1,"slide-toggle__container"],["formControlName","hasOwnContainer",1,"slide-toggle__input",3,"checked","ionChange"],[3,"color"],[1,"text-center","price"],["class","text-center",4,"ngIf"],["type","submit","color","primary",1,"submit-btn",3,"disabled"],[1,"text-center"]],template:function(e,t){1&e&&(s.Rb(0,"ion-card",0),s.Rb(1,"ion-card-content"),s.yc(2,g,1,0,"ion-spinner",1),s.yc(3,f,11,2,"div",2),s.yc(4,h,5,0,"div",2),s.yc(5,_,52,17,"form",3),s.Qb(),s.Qb()),2&e&&(s.Bb(2),s.jc("ngIf",t.isLoading),s.Bb(1),s.jc("ngIf",t.formSentSuccess),s.Bb(1),s.jc("ngIf",t.formSentFail),s.Bb(1),s.jc("ngIf",!t.isLoading&&!t.hideForm))},directives:[r.h,r.i,a.m,r.G,r.f,m.x,m.r,m.k,r.s,r.t,r.r,r.V,m.q,m.i,m.v,a.k,r.q,u.c,u.f,d.b,m.c,p.b,p.d,u.g,p.a,r.K,r.N,r.a],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");.heading[_ngcontent-%COMP%]{color:#ffde00;text-align:center}.form__container[_ngcontent-%COMP%]{margin:0 auto}.form__container[_ngcontent-%COMP%], .form__response[_ngcontent-%COMP%]{display:flex;flex-flow:column;justify-content:center;align-items:center}.form__response[_ngcontent-%COMP%]{text-align:center}.form__response[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 auto .5rem}.take-away-form[_ngcontent-%COMP%]{display:flex;flex-flow:column;justify-content:center;width:100%}.form-control[_ngcontent-%COMP%], .form__calendar[_ngcontent-%COMP%]{width:100%}.form__calendar[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%], .form__calendar[_ngcontent-%COMP%]   mat-datepicker-toggle[_ngcontent-%COMP%]{color:#5dbeba}.form__calendar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.5rem 0}.quantity__container[_ngcontent-%COMP%]{width:100%;margin:1rem 0}.quantity__container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:block;margin:0 0 .5rem}.quantity__form[_ngcontent-%COMP%]{display:flex;align-items:center}.quantity__form[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{text-align:center}.slide-toggle__section[_ngcontent-%COMP%]{display:flex;flex-flow:column;margin:0 0 1rem}.slide-toggle__container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-evenly}.slide-toggle__input[_ngcontent-%COMP%]{margin:.5rem 0}.price[_ngcontent-%COMP%]{display:block;font-weight:700;font-size:1.1rem;border-bottom:2px solid #5dbeba;border-top:2px solid #5dbeba;padding:.5rem;color:#5dbeba}.submit-btn[_ngcontent-%COMP%]{margin:1rem auto 2rem}']}),w),R=[{path:"",component:(C=function(){function t(){e(this,t),this.HEADER_TITLE="A Emporter",this.TITLE="Notre d\xe9licieux th\xe9 Cha\xef \xe0 emporter"}return n(t,[{key:"ngOnInit",value:function(){}}]),t}(),C.\u0275fac=function(e){return new(e||C)},C.\u0275cmp=s.Gb({type:C,selectors:[["app-take-away"]],decls:22,vars:2,consts:[[3,"headerTitle"],[1,"ion-no-padding"],["size","12","size-md","8",1,"ion-padding"],[1,"title-xl"],[1,"main-container"],[1,"chai-card"],["src","./assets/img/chai-ingredients.jpg"],[1,"chai-card__content"],[1,"chai-form"],["size","12","size-md","4",1,"ion-no-padding","ion-hide-md-down"],[1,"take-away__image"]],template:function(e,t){1&e&&(s.Nb(0,"ion-header-component",0),s.Rb(1,"ion-content"),s.Rb(2,"ion-grid",1),s.Rb(3,"ion-row"),s.Rb(4,"ion-col",2),s.Rb(5,"h1",3),s.Ac(6),s.Qb(),s.Rb(7,"div",4),s.Rb(8,"ion-card",5),s.Nb(9,"img",6),s.Rb(10,"ion-card-content"),s.Rb(11,"h2"),s.Ac(12,"Commandez votre Cha\xef v\xe9g\xe9tal"),s.Qb(),s.Rb(13,"p",7),s.Ac(14," Nous le pr\xe9parons avec des \xe9pices et du gingembre frais, ce qui lui donne tant de go\xfbt! "),s.Qb(),s.Rb(15,"p",7),s.Ac(16," Passez le r\xe9cup\xe9rer le mardi ou le jeudi entre 16h30 et 18h30. "),s.Qb(),s.Rb(17,"p",7),s.Ac(18,"\xc7a se cong\xe8le aussi tr\xe8s bien !"),s.Qb(),s.Qb(),s.Qb(),s.Nb(19,"chai-take-away",8),s.Qb(),s.Qb(),s.Rb(20,"ion-col",9),s.Nb(21,"div",10),s.Qb(),s.Qb(),s.Qb(),s.Qb()),2&e&&(s.jc("headerTitle",t.HEADER_TITLE),s.Bb(6),s.Bc(t.TITLE))},directives:[l.a,r.n,r.o,r.D,r.m,r.h,r.i,Q],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");.title-xl[_ngcontent-%COMP%]{margin:0 auto 2rem!important}@media (min-width:768px){.main-container[_ngcontent-%COMP%]{display:flex}}.chai-card[_ngcontent-%COMP%]{flex:1;margin:0;background:#5dbeba;color:#fff}.chai-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700}.chai-card__content[_ngcontent-%COMP%], .chai-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 1rem}.chai-form[_ngcontent-%COMP%]{display:block;flex:1;margin:2rem 0 0}@media (min-width:768px){.chai-form[_ngcontent-%COMP%]{margin:0;padding:0 1rem}}.take-away__image[_ngcontent-%COMP%]{width:100%;height:100%;background-image:url(come-outside.50a32d13e158b04b8a3a.jpg);background-repeat:no-repeat;background-position:-340px;background-size:auto 100%}']}),C)},{path:"a-emporter",redirectTo:"",pathMatch:"full"}],O=((k=function t(){e(this,t)}).\u0275mod=s.Kb({type:k}),k.\u0275inj=s.Jb({factory:function(e){return new(e||k)},imports:[[c.k.forChild(R)],c.k]}),k),M=o("PI13"),A=((v=function t(){e(this,t)}).\u0275mod=s.Kb({type:v}),v.\u0275inj=s.Jb({factory:function(e){return new(e||v)},imports:[[a.b,m.u,r.P,M.a]]}),v),x=o("PCNd"),N=((P=function t(){e(this,t)}).\u0275mod=s.Kb({type:P}),P.\u0275inj=s.Jb({factory:function(e){return new(e||P)},imports:[[a.b,r.P,O,A,x.a]]}),P)}}])}();