!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{YSFO:function(t,i,o){"use strict";o.r(i),o.d(i,"TakeAwayPageModule",function(){return q});var a=o("ofXK"),r=o("TEn/"),c=o("tyNb"),s=o("fXoL"),l=o("TTZi"),b=o("3Pt+"),u=o("xsb0"),d=o("o7am"),m=o("wzJV"),p=o("kmnG"),g=o("qFsG"),h=o("iadO");function f(e,t){1&e&&s.Nb(0,"loader")}function _(e,t){if(1&e&&(s.Rb(0,"div",4),s.Rb(1,"ion-text",5),s.Rb(2,"p"),s.Bc(3,"Merci beaucoup !"),s.Qb(),s.Rb(4,"p"),s.Bc(5),s.Rb(6,"strong"),s.Bc(7),s.Qb(),s.Bc(8,", entre "),s.Rb(9,"strong"),s.Bc(10,"16h30 et 18h30"),s.Qb(),s.Bc(11,", au 49 rue du Mirail. "),s.Qb(),s.Rb(12,"p"),s.Bc(13," D\u2019ici l\xe0, portez-vous bien !"),s.Nb(14,"br"),s.Bc(15," A tr\xe8s vite,"),s.Nb(16,"br"),s.Bc(17," La Cl\xe9 du Quai. "),s.Qb(),s.Qb(),s.Qb()),2&e){var n=s.dc();s.Bb(5),s.Dc(" Vous pourrez venir r\xe9cup\xe9rer votre commande le ",n.pickUpDay," "),s.Bb(2),s.Cc(n.pickUpMonth)}}function y(e,t){if(1&e){var n=s.Sb();s.Rb(0,"div",4),s.Rb(1,"ion-text",6),s.Rb(2,"p"),s.Bc(3,"D\xe9sol\xe9, une erreur s'est produite. Veuillez r\xe9essayer."),s.Qb(),s.Qb(),s.Rb(4,"div",7),s.Rb(5,"ion-button",8),s.Zb("click",function(){return s.rc(n),s.dc().onReload()}),s.Bc(6," Passer commande "),s.Qb(),s.Qb(),s.Qb()}}function k(e,t){if(1&e&&(s.Rb(0,"p",38),s.Bc(1),s.Qb()),2&e){var n=s.dc(2);s.Bb(1),s.Dc(" (dont ",n.totalDeposit,"\u20ac de consigne) ")}}function w(e,t){1&e&&(s.Rb(0,"ion-button",39),s.Nb(1,"loader"),s.Qb())}function Q(e,t){if(1&e){var n=s.Sb();s.Rb(0,"form",9),s.Zb("ngSubmit",function(){return s.rc(n),s.dc().onSubmit()}),s.Rb(1,"ion-list"),s.Rb(2,"ion-item"),s.Rb(3,"ion-label",10),s.Bc(4,"Nom"),s.Nb(5,"atom-asterisk"),s.Qb(),s.Nb(6,"ion-input",11),s.Qb(),s.Rb(7,"p",12),s.Bc(8," Veuillez renseigner votre nom "),s.Qb(),s.Rb(9,"ion-item"),s.Rb(10,"ion-label",10),s.Bc(11,"Pr\xe9nom"),s.Nb(12,"atom-asterisk"),s.Qb(),s.Nb(13,"ion-input",13),s.Qb(),s.Rb(14,"p",12),s.Bc(15," Veuillez renseigner votre pr\xe9nom "),s.Qb(),s.Rb(16,"ion-item"),s.Rb(17,"ion-label",10),s.Bc(18,"T\xe9l\xe9phone"),s.Nb(19,"atom-asterisk"),s.Qb(),s.Nb(20,"ion-input",14),s.Qb(),s.Rb(21,"p",12),s.Bc(22," Veuillez renseigner votre num\xe9ro de t\xe9l\xe9phone "),s.Qb(),s.Rb(23,"div",15),s.Rb(24,"ion-list-header"),s.Rb(25,"ion-label",16),s.Bc(26,"Quantit\xe9 (par bouteille de 1 litre)"),s.Nb(27,"atom-asterisk"),s.Qb(),s.Qb(),s.Rb(28,"div",17),s.Rb(29,"ion-button",18),s.Zb("click",function(e){return s.rc(n),s.dc().removeQuantity(e)}),s.Nb(30,"ion-icon",19),s.Qb(),s.Rb(31,"ion-input",20),s.Zb("ionChange",function(e){return s.rc(n),s.dc().onQuantityChange(e)}),s.Qb(),s.Rb(32,"ion-button",18),s.Zb("click",function(e){return s.rc(n),s.dc().addQuantity(e)}),s.Nb(33,"ion-icon",21),s.Qb(),s.Qb(),s.Qb(),s.Rb(34,"div",22),s.Rb(35,"mat-form-field",23),s.Rb(36,"mat-label"),s.Bc(37,"Date de retrait"),s.Qb(),s.Nb(38,"input",24),s.Nb(39,"mat-datepicker-toggle",25),s.Nb(40,"mat-datepicker",26,27),s.Rb(42,"p",28),s.Bc(43,"(entre 16h30 et 18h30)"),s.Qb(),s.Qb(),s.Qb(),s.Rb(44,"ion-item",29),s.Rb(45,"ion-label"),s.Bc(46,"J'ai mon propre contenant"),s.Nb(47,"atom-asterisk"),s.Qb(),s.Qb(),s.Rb(48,"div",30),s.Rb(49,"ion-text"),s.Bc(50,"Non"),s.Qb(),s.Rb(51,"ion-toggle",31),s.Zb("ionChange",function(e){return s.rc(n),s.dc().toggleHasContainer(e)}),s.Qb(),s.Rb(52,"ion-text",32),s.Bc(53,"Oui"),s.Qb(),s.Qb(),s.Rb(54,"div",33),s.Rb(55,"p",34),s.Bc(56),s.Qb(),s.zc(57,k,2,1,"p",35),s.Qb(),s.Rb(58,"div",36),s.zc(59,w,2,0,"ion-button",37),s.Qb(),s.Qb(),s.Qb()}if(2&e){var i=s.qc(41),o=s.dc();s.kc("formGroup",o.chaiTakeAwayForm),s.Bb(7),s.kc("ngClass",o.chaiTakeAwayForm.get("lastName").invalid&&o.chaiTakeAwayForm.get("lastName").touched?"show-error":""),s.Bb(7),s.kc("ngClass",o.chaiTakeAwayForm.get("firstName").invalid&&o.chaiTakeAwayForm.get("firstName").touched?"show-error":""),s.Bb(7),s.kc("ngClass",o.chaiTakeAwayForm.get("phone").invalid&&o.chaiTakeAwayForm.get("phone").touched?"show-error":""),s.Bb(8),s.kc("disabled",o.quantity<=1),s.Bb(2),s.kc("value",o.quantity),s.Bb(1),s.kc("disabled",o.quantity>=4),s.Bb(6),s.kc("min",o.minDateFilter)("max",o.maxDateFilter)("matDatepickerFilter",o.dateFilter)("matDatepicker",i),s.Bb(1),s.kc("for",i),s.Bb(12),s.kc("checked",o.hasContainer),s.Bb(1),s.kc("color",o.hasContainer?"primary":""),s.Bb(4),s.Dc("Total: ",o.totalPrice,"\u20ac"),s.Bb(1),s.kc("ngIf",!o.hasContainer),s.Bb(2),s.kc("ngIf",o.isLoading)}}var v,C,R,x,B,P=((v=function(){function t(n){e(this,t),this.takeAwayService=n,this.isLoading=!1,this.formSentSuccess=!1,this.formSentFail=!1,this.hideForm=!1,this.showForm=!1,this.price=8,this.totalPrice=8,this.oneLiterPrice=8,this.depositAmount=3,this.totalDeposit=3,this.orderQuantity=1,this.hasContainer=!1,this.quantity=1,this.quantities=["1 litre","2 litres","3 litres","4 litres"]}return n(t,[{key:"ngOnInit",value:function(){this._initChaiForm(),this._setMinMaxDates(),this._getTotalPrice()}},{key:"onSubmit",value:function(){var e=this;this.isLoading=!0,this.hideForm=!0;var t=this.chaiTakeAwayForm.value,n=Object.assign(Object.assign({},t),{price:this.price,totalPrice:this.totalPrice,totalDeposit:this.totalDeposit});this.pickUpDay=t.pickUpDate.getDate(),this.pickUpMonth=new Intl.DateTimeFormat("fr-FR",{month:"long"}).format(t.pickUpDate),this.takeAwayService.createChaiTakeAwayOrder(n).subscribe(function(t){e.isLoading=!1,e.formSentSuccess=!0,e.chaiTakeAwayForm.reset()},function(t){e.isLoading=!1,e.formSentFail=!0})}},{key:"onToggleForm",value:function(){this.showForm=!this.showForm}},{key:"onReload",value:function(){location.reload()}},{key:"toggleHasContainer",value:function(e){this.hasContainer=!this.hasContainer,this._getTotalPrice()}},{key:"dateFilter",value:function(e){var t=(e||new Date).getDay();return 0!==t&&1!==t&&3!==t&&5!==t&&6!==t}},{key:"onQuantityChange",value:function(e){this.price=this.oneLiterPrice*e.detail.value,this.orderQuantity=e.detail.value,this._getTotalPrice()}},{key:"removeQuantity",value:function(e){this.quantity--}},{key:"addQuantity",value:function(e){this.quantity++}},{key:"_initChaiForm",value:function(){this.chaiTakeAwayForm=new b.j({lastName:new b.g(null,b.x.required),firstName:new b.g(null,b.x.required),phone:new b.g(null,b.x.required),quantity:new b.g(1,b.x.required),hasOwnContainer:new b.g(!1,b.x.required),pickUpDate:new b.g(null,b.x.required)})}},{key:"_setMinMaxDates",value:function(){var e=(new Date).getFullYear();this.minDateFilter=new Date,this.maxDateFilter=new Date(e+0,11,31)}},{key:"_getTotalPrice",value:function(){this.hasContainer?(this.totalPrice=this.price,this.totalDeposit=0):(this.totalDeposit=this.depositAmount*this.orderQuantity,this.totalPrice=this.price+this.totalDeposit)}}]),t}()).\u0275fac=function(e){return new(e||v)(s.Mb(u.a))},v.\u0275cmp=s.Gb({type:v,selectors:[["organism-chai-take-away"]],decls:6,vars:4,consts:[[1,"form__container"],[4,"ngIf"],["class","form__response",4,"ngIf"],["class","form",3,"formGroup","ngSubmit",4,"ngIf"],[1,"form__response"],["color","primary"],["color","danger"],[1,"btn__container","ion-margin-vertical"],["type","button","color","primary",3,"click"],[1,"form",3,"formGroup","ngSubmit"],["position","floating"],["type","text","name","lastName","formControlName","lastName","required",""],[1,"error-message",3,"ngClass"],["type","text","name","firstName","formControlName","firstName","required",""],["type","text","name","phone","formControlName","phone","required",""],[1,"quantity__container"],[1,"label"],[1,"quantity__form"],["size","small",3,"disabled","click"],["name","remove"],["formControlName","quantity",1,"ion-text-center",3,"value","ionChange"],["name","add"],[1,"calendar"],["appearance","fill",1,"form__calendar"],["matInput","","formControlName","pickUpDate","disabled","",3,"min","max","matDatepickerFilter","matDatepicker"],["matSuffix","",3,"for"],["disabled","false"],["picker",""],[1,"font-sm"],["lines","none",1,"slide-toggle__section"],[1,"slide-toggle__container"],["formControlName","hasOwnContainer",1,"slide-toggle__input",3,"checked","ionChange"],[3,"color"],[1,"price"],[1,"price__amount","ion-text-center"],["class"," price__deposit ion-text-center",4,"ngIf"],[1,"btn__container","btn__container--block","btn__container--submit"],["type","button","color","secondary","expand","block",4,"ngIf"],[1,"price__deposit","ion-text-center"],["type","button","color","secondary","expand","block"]],template:function(e,t){1&e&&(s.Rb(0,"ion-card",0),s.Rb(1,"ion-card-content"),s.zc(2,f,1,0,"loader",1),s.zc(3,_,18,2,"div",2),s.zc(4,y,7,0,"div",2),s.zc(5,Q,60,17,"form",3),s.Qb(),s.Qb()),2&e&&(s.Bb(2),s.kc("ngIf",t.isLoading),s.Bb(1),s.kc("ngIf",!t.isLoading&&t.formSentSuccess),s.Bb(1),s.kc("ngIf",!t.isLoading&&t.formSentFail),s.Bb(1),s.kc("ngIf",!t.isLoading&&!t.hideForm))},directives:[r.h,r.i,a.m,d.a,r.L,r.f,b.y,b.r,b.k,r.v,r.t,r.u,m.a,r.s,r.Y,b.q,b.i,b.w,a.k,r.w,r.r,p.c,p.f,g.b,b.c,h.b,h.d,p.g,h.a,r.O,r.a],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");.spinner[_ngcontent-%COMP%]{padding:5rem 0}.heading[_ngcontent-%COMP%]{color:#ffde00;text-align:center}.form__container[_ngcontent-%COMP%]{width:100%;max-width:430px;margin:0 auto}.form__response[_ngcontent-%COMP%]{display:flex;flex-flow:column;justify-content:center;align-items:center;text-align:center}.form__response[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 auto .5rem}.calendar[_ngcontent-%COMP%]{margin:1rem 0 0}.quantity__container[_ngcontent-%COMP%]{margin:1rem 0}.quantity__form[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 4rem}.slide-toggle__section[_ngcontent-%COMP%]{display:flex;flex-flow:column}.slide-toggle__container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-evenly}.price__amount[_ngcontent-%COMP%]{display:block;padding:.5rem;font-weight:700;font-size:1.1rem;color:#5dbeba;border-bottom:2px solid #5dbeba;border-top:2px solid #5dbeba}.price__amount[_ngcontent-%COMP%], .price__deposit[_ngcontent-%COMP%]{margin:1rem 0 0}.btn__container--flex[_ngcontent-%COMP%]{display:flex;justify-content:center}.btn__container--block[_ngcontent-%COMP%]{display:block}.btn__container--submit[_ngcontent-%COMP%]{margin:3rem 0 1rem}']}),v),N=[{path:"",component:(C=function(){function t(){e(this,t),this.HEADER_TITLE="A Emporter",this.TITLE="Notre d\xe9licieux th\xe9 Cha\xef \xe0 emporter"}return n(t,[{key:"ngOnInit",value:function(){}}]),t}(),C.\u0275fac=function(e){return new(e||C)},C.\u0275cmp=s.Gb({type:C,selectors:[["app-take-away"]],decls:23,vars:2,consts:[[3,"headerTitle"],[1,"ion-no-padding"],["size","12","size-lg","8"],[1,"title-xl"],[1,"main-container"],[1,"chai-card__container","ion-padding"],[1,"chai-card"],["src","./assets/img/chai-ingredients.jpg"],[1,"chai-card__content"],[1,"chai-form","ion-padding"],["size","12","size-lg","4",1,"ion-no-padding","ion-hide-lg-down"],[1,"take-away__image"]],template:function(e,t){1&e&&(s.Nb(0,"ion-header-component",0),s.Rb(1,"ion-content"),s.Rb(2,"ion-grid",1),s.Rb(3,"ion-row"),s.Rb(4,"ion-col",2),s.Rb(5,"h1",3),s.Bc(6),s.Qb(),s.Rb(7,"div",4),s.Rb(8,"div",5),s.Rb(9,"ion-card",6),s.Nb(10,"img",7),s.Rb(11,"ion-card-content"),s.Rb(12,"h2"),s.Bc(13,"Commandez votre Cha\xef v\xe9g\xe9tal"),s.Qb(),s.Rb(14,"p",8),s.Bc(15," Nous le pr\xe9parons avec des \xe9pices et du gingembre frais, ce qui lui donne tant de go\xfbt! "),s.Qb(),s.Rb(16,"p",8),s.Bc(17," Passez le r\xe9cup\xe9rer le mardi ou le jeudi entre 16h30 et 18h30. "),s.Qb(),s.Rb(18,"p",8),s.Bc(19,"\xc7a se cong\xe8le aussi tr\xe8s bien !"),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Nb(20,"organism-chai-take-away",9),s.Qb(),s.Qb(),s.Rb(21,"ion-col",10),s.Nb(22,"div",11),s.Qb(),s.Qb(),s.Qb(),s.Qb()),2&e&&(s.kc("headerTitle",t.HEADER_TITLE),s.Bb(6),s.Cc(t.TITLE))},directives:[l.a,r.n,r.p,r.E,r.m,r.h,r.i,P],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");@media (min-width:768px){.main-container[_ngcontent-%COMP%]{display:flex}}.chai-card__container[_ngcontent-%COMP%]{flex:1}.chai-card[_ngcontent-%COMP%]{width:100%;max-width:430px;margin:0 auto;background:#5dbeba;color:#fff}.chai-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700}.chai-card__content[_ngcontent-%COMP%], .chai-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 1rem}.chai-form[_ngcontent-%COMP%]{display:flex;flex:1}.take-away__image[_ngcontent-%COMP%]{width:100%;height:100%;background-image:url(come-outside.50a32d13e158b04b8a3a.jpg);background-repeat:no-repeat;background-position:-340px;background-size:auto 100%}']}),C)},{path:"a-emporter",redirectTo:"",pathMatch:"full"}],O=((R=function t(){e(this,t)}).\u0275mod=s.Kb({type:R}),R.\u0275inj=s.Jb({factory:function(e){return new(e||R)},imports:[[c.k.forChild(N)],c.k]}),R),D=o("PI13"),M=o("PCNd"),F=o("ox1a"),T=((B=function t(){e(this,t)}).\u0275mod=s.Kb({type:B}),B.\u0275inj=s.Jb({factory:function(e){return new(e||B)},imports:[[a.b,b.v,r.Q,D.a,M.a,F.a]]}),B),q=((x=function t(){e(this,t)}).\u0275mod=s.Kb({type:x}),x.\u0275inj=s.Jb({factory:function(e){return new(e||x)},imports:[[a.b,r.Q,O,T,M.a]]}),x)}}])}();