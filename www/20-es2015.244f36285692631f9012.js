(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"14/Y":function(e,n,t){"use strict";t.r(n),t.d(n,"ContactPageModule",function(){return C});var o=t("ofXK"),i=t("3Pt+"),s=t("TEn/"),a=t("tyNb"),c=t("fXoL"),r=t("AytR"),b=t("tk/3");let l=(()=>{class e{constructor(e){this.http=e,this.CONTACT_URL=r.a.apiUrl+"/contact"}postMessage(e){return this.http.post(`${this.CONTACT_URL}`,e)}}return e.\u0275fac=function(n){return new(n||e)(c.Xb(b.b))},e.\u0275prov=c.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var m=t("TTZi"),u=t("JgnI"),g=t("o7am"),d=t("wzJV");function T(e,n){1&e&&c.Pb(0,"loader")}function f(e,n){if(1&e){const e=c.Ub();c.Tb(0,"div",15),c.Tb(1,"p"),c.Ac(2,"Votre message n'a pas pu \xeatre envoy\xe9. Veuillez r\xe9essayer."),c.Sb(),c.Tb(3,"div",16),c.Tb(4,"ion-button",17),c.bc("click",function(){return c.sc(e),c.fc().onReload()}),c.Ac(5),c.Sb(),c.Sb(),c.Sb()}if(2&e){const e=c.fc();c.Db(5),c.Bc(e.RELOAD)}}function p(e,n){if(1&e){const e=c.Ub();c.Tb(0,"div",18),c.Tb(1,"p"),c.Ac(2," Merci, votre message a bien \xe9t\xe9 envoy\xe9. Nous vous r\xe9pondrons d\xe8s que possible. "),c.Sb(),c.Tb(3,"div",16),c.Tb(4,"ion-button",17),c.bc("click",function(){return c.sc(e),c.fc().onNavigateHome()}),c.Ac(5),c.Sb(),c.Sb(),c.Sb()}if(2&e){const e=c.fc();c.Db(5),c.Bc(e.HOME_BTN_TEXT)}}function h(e,n){if(1&e){const e=c.Ub();c.Tb(0,"form",19),c.bc("ngSubmit",function(){return c.sc(e),c.fc().onSubmit()}),c.Tb(1,"ion-list"),c.Tb(2,"ion-item"),c.Tb(3,"ion-label",20),c.Ac(4,"Nom - Pr\xe9nom"),c.Pb(5,"atom-asterisk"),c.Sb(),c.Pb(6,"ion-input",21),c.Sb(),c.Tb(7,"p",22),c.Ac(8," Veuillez renseigner votre nom "),c.Sb(),c.Tb(9,"ion-item"),c.Tb(10,"ion-label",20),c.Ac(11,"Objet"),c.Pb(12,"atom-asterisk"),c.Sb(),c.Pb(13,"ion-input",23),c.Sb(),c.Tb(14,"p",22),c.Ac(15," Veuillez renseigner un object "),c.Sb(),c.Tb(16,"ion-item"),c.Tb(17,"ion-label",20),c.Ac(18,"E-mail"),c.Pb(19,"atom-asterisk"),c.Sb(),c.Pb(20,"ion-input",24),c.Sb(),c.Tb(21,"p",22),c.Ac(22," Veuillez renseigner votre email "),c.Sb(),c.Tb(23,"ion-item"),c.Tb(24,"ion-label",20),c.Ac(25,"Message"),c.Pb(26,"atom-asterisk"),c.Sb(),c.Pb(27,"ion-textarea",25),c.Sb(),c.Tb(28,"p",22),c.Ac(29," Veuillez \xe9crire un message "),c.Sb(),c.Tb(30,"div",16),c.Tb(31,"ion-button",26),c.Pb(32,"ion-icon",27),c.Ac(33),c.Sb(),c.Sb(),c.Sb(),c.Sb()}if(2&e){const e=c.fc();c.mc("formGroup",e.contactForm),c.Db(7),c.mc("ngClass",e.contactForm.get("name").invalid&&e.contactForm.get("name").touched?"show-error":""),c.Db(7),c.mc("ngClass",e.contactForm.get("subject").invalid&&e.contactForm.get("subject").touched?"show-error":""),c.Db(7),c.mc("ngClass",e.contactForm.get("email").invalid&&e.contactForm.get("email").touched?"show-error":""),c.Db(7),c.mc("ngClass",e.contactForm.get("message").invalid&&e.contactForm.get("message").touched?"show-error":""),c.Db(3),c.mc("disabled",e.contactForm.invalid),c.Db(2),c.Cc(" ",e.SEND_BUTTON_TEXT," ")}}const S=function(){return["/lcdq/contact/mentions-legales"]},v=[{path:"",component:(()=>{class e{constructor(e,n){this.router=e,this.contactService=n,this.isLoading=!1,this.isMessageSent=!1,this.isSendMessageFailed=!1,this.contactForm=new i.j({}),this.HEADER_TITLE="Contact",this.TITLE="La Cl\xe9 Du Quai Bordeaux Centre",this.HOME_BTN_TEXT="Accueil",this.SEND_BUTTON_TEXT="Envoyer",this.RELOAD="R\xe9essayer"}ngOnInit(){this._initContactForm()}onSubmit(){this.contactForm.invalid||(this.isLoading=!0,this.contactService.postMessage(this.contactForm.value).subscribe(e=>{this.isLoading=!1,this.isMessageSent=!0},e=>{this.isLoading=!1,this.isSendMessageFailed=!0}))}onNavigateHome(){this.isLoading=!1,this.isMessageSent=!1,this.isSendMessageFailed=!1,this.contactForm.reset(),this.router.navigateByUrl("/lcdq/accueil")}onReload(){location.reload()}_initContactForm(){this.contactForm=new i.j({name:new i.g(null,i.x.required),subject:new i.g(null,i.x.required),email:new i.g(null,[i.x.required,i.x.email]),message:new i.g(null,i.x.required)})}}return e.\u0275fac=function(n){return new(n||e)(c.Ob(a.g),c.Ob(l))},e.\u0275cmp=c.Ib({type:e,selectors:[["app-contact"]],decls:26,vars:8,consts:[[3,"headerTitle"],[1,"ion-no-padding"],[1,"squared-shapes",3,"title"],["size","12","size-md","4","offset-md","4"],[1,"info__container"],["color","primary",1,"display-block"],["href","tel:+33688028199",1,"phone-number"],[1,"display-block"],[1,"ion-no-margin"],[4,"ngIf"],["class","message-sent--fail",4,"ngIf"],["class","message-sent--success",4,"ngIf"],["class","contact-form",3,"formGroup","ngSubmit",4,"ngIf"],[1,"color-primary","ion-margin-vertical","ion-padding-vertical","ion-text-center"],[3,"routerLink"],[1,"message-sent--fail"],[1,"btn__container"],[3,"click"],[1,"message-sent--success"],[1,"contact-form",3,"formGroup","ngSubmit"],["position","floating"],["type","text","name","name","formControlName","name","required",""],[1,"error-message",3,"ngClass"],["type","text","name","subject","formControlName","subject","required",""],["type","email","name","email","formControlName","email","required",""],["name","message","formControlName","message","required",""],["type","submit","color","primary",1,"ion-margin-vertical",3,"disabled"],["slot","start","name","paper-plane-outline"]],template:function(e,n){1&e&&(c.Pb(0,"ion-header-component",0),c.Tb(1,"ion-content"),c.Tb(2,"ion-grid",1),c.Tb(3,"ion-row"),c.Tb(4,"ion-col"),c.Pb(5,"squared-shapes-svg",2),c.Sb(),c.Sb(),c.Tb(6,"ion-row"),c.Tb(7,"ion-col",3),c.Tb(8,"p",4),c.Ac(9," Nos locaux sont situ\xe9s au 49 rue du Mirail. Vous pouvez nous contacter par t\xe9l\xe9phone au "),c.Tb(10,"ion-text",5),c.Tb(11,"a",6),c.Ac(12," 06 88 02 81 99 "),c.Sb(),c.Sb(),c.Tb(13,"span",7),c.Ac(14,"ou via ce formulaire"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(15,"ion-row"),c.Tb(16,"ion-col",3),c.Tb(17,"ion-card",8),c.Tb(18,"ion-card-content"),c.yc(19,T,1,0,"loader",9),c.yc(20,f,6,1,"div",10),c.yc(21,p,6,1,"div",11),c.yc(22,h,34,7,"form",12),c.Sb(),c.Sb(),c.Tb(23,"p",13),c.Tb(24,"a",14),c.Ac(25,"Mentions L\xe9gales"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&e&&(c.mc("headerTitle",n.HEADER_TITLE),c.Db(5),c.mc("title",n.TITLE),c.Db(14),c.mc("ngIf",n.isLoading),c.Db(1),c.mc("ngIf",!n.isLoading&&n.isSendMessageFailed),c.Db(1),c.mc("ngIf",!n.isLoading&&n.isMessageSent),c.Db(1),c.mc("ngIf",!n.isLoading&&!n.isMessageSent&&!n.isSendMessageFailed),c.Db(2),c.mc("routerLink",c.nc(7,S)))},directives:[m.a,s.n,s.p,s.F,s.m,u.a,s.M,s.h,s.i,o.m,a.j,s.X,g.a,s.f,i.y,i.s,i.k,s.v,s.t,s.u,d.a,s.s,s.Z,i.r,i.i,i.w,o.k,s.N,s.r],styles:[".info__container[_ngcontent-%COMP%], .message-sent--fail[_ngcontent-%COMP%], .message-sent--success[_ngcontent-%COMP%]{text-align:center}.info__container[_ngcontent-%COMP%]{margin:2rem auto 1rem}.btn__container[_ngcontent-%COMP%]{margin:2rem 0 0;display:flex;justify-content:center}"]}),e})()},{path:"mentions-legales",loadChildren:()=>t.e(21).then(t.bind(null,"/D53")).then(e=>e.LegalPageModule)},{path:"contact",redirectTo:"",pathMatch:"full"}];let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({imports:[[a.k.forChild(v)],a.k]}),e})();var M=t("PCNd"),_=t("ox1a");let C=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({imports:[[o.b,s.R,y,M.a,i.v,_.a]]}),e})()}}]);