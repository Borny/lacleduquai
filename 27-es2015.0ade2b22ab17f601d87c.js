(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{egi8:function(e,i,n){"use strict";n.r(i),n.d(i,"ResidencePageModule",function(){return _});var t=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),s=n("tyNb"),a=n("DsUL"),c=n("fXoL"),l=n("oUaF"),b=n("TTZi"),m=n("JgnI"),d=n("JXrQ"),u=n("o7am"),p=n("wzJV");function g(e,i){1&e&&c.Ob(0,"loader")}function f(e,i){if(1&e){const e=c.Tb();c.Sb(0,"div",18),c.Sb(1,"ion-text",19),c.Sb(2,"p",20),c.zc(3," Votre candidature n'a pas pu \xeatre envoy\xe9e. Veuillez r\xe9essayer. "),c.Rb(),c.Rb(),c.Sb(4,"div",21),c.Sb(5,"ion-button",22),c.ac("click",function(){return c.rc(e),c.ec().onReload()}),c.zc(6),c.Rb(),c.Rb(),c.Rb()}if(2&e){const e=c.ec();c.Cb(6),c.Ac(e.RELOAD)}}function S(e,i){if(1&e){const e=c.Tb();c.Sb(0,"div",23),c.Sb(1,"ion-text",24),c.Sb(2,"p",20),c.zc(3," Merci, votre demande a bien \xe9t\xe9 envoy\xe9e. Nous vous r\xe9pondrons le plus t\xf4t possible. "),c.Rb(),c.Rb(),c.Sb(4,"div",21),c.Sb(5,"ion-button",22),c.ac("click",function(){return c.rc(e),c.ec().onNavigateHome()}),c.zc(6),c.Rb(),c.Rb(),c.Rb()}if(2&e){const e=c.ec();c.Cb(6),c.Ac(e.HOME_BTN_TEXT)}}function h(e,i){if(1&e&&(c.Sb(0,"ion-item",50),c.Sb(1,"ion-label"),c.zc(2),c.Rb(),c.Ob(3,"ion-radio",51),c.Rb()),2&e){const e=i.$implicit;c.Cb(2),c.Ac(e),c.Cb(1),c.lc("value",e)}}function R(e,i){if(1&e&&(c.Sb(0,"ion-item",50),c.Sb(1,"ion-label"),c.zc(2),c.Rb(),c.Ob(3,"ion-checkbox",52),c.Rb()),2&e){const e=i.index,n=c.ec(2);c.Cb(2),c.Ac(n.artisticPractices[e]),c.Cb(1),c.lc("formControlName",e)}}function v(e,i){if(1&e&&(c.Sb(0,"ion-item",50),c.Sb(1,"ion-label"),c.zc(2),c.Rb(),c.Ob(3,"ion-checkbox",53),c.Rb()),2&e){const e=i.index,n=c.ec(2);c.Cb(2),c.Ac(n.availabilities[e]),c.Cb(1),c.lc("formControlName",e)("disabled",0===e||1===e||2===e)}}function C(e,i){if(1&e){const e=c.Tb();c.Sb(0,"ion-button",56),c.ac("click",function(i){c.rc(e);const n=c.ec().index;return c.ec(2).onRemoveTeamMember(i,n)}),c.zc(1," Supprimer "),c.Ob(2,"ion-icon",57),c.Rb()}}function F(e,i){if(1&e&&(c.Sb(0,"div"),c.Sb(1,"ion-item"),c.Sb(2,"ion-label",26),c.zc(3,"Nom, pr\xe9nom et fonction"),c.Ob(4,"atom-asterisk"),c.Rb(),c.Ob(5,"ion-input",54),c.Rb(),c.Sb(6,"p",28),c.zc(7," Veuillez renseigner les informations "),c.Rb(),c.xc(8,C,3,0,"ion-button",55),c.Rb()),2&e){const e=i.$implicit,n=i.index,t=c.ec(2);c.Cb(5),c.lc("formControlName",n),c.Cb(1),c.lc("ngClass",e.invalid&&e.touched?"show-error":""),c.Cb(2),c.lc("ngIf",t.projectTeamFormArray.controls.length>1)}}function z(e,i){1&e&&c.Ob(0,"ion-icon",58)}function O(e,i){1&e&&c.Ob(0,"loader")}function w(e,i){if(1&e){const e=c.Tb();c.Sb(0,"form",25),c.ac("ngSubmit",function(){return c.rc(e),c.ec().onSubmit()}),c.Sb(1,"ion-list"),c.Sb(2,"ion-item"),c.Sb(3,"ion-label",26),c.zc(4,"Nom du projet"),c.Ob(5,"atom-asterisk"),c.Rb(),c.Ob(6,"ion-input",27),c.Rb(),c.Sb(7,"p",28),c.zc(8," Veuillez renseigner un nom de projet "),c.Rb(),c.Sb(9,"ion-item"),c.Sb(10,"ion-label",26),c.zc(11,"Nom de la compagnie"),c.Ob(12,"atom-asterisk"),c.Rb(),c.Ob(13,"ion-input",29),c.Rb(),c.Sb(14,"p",28),c.zc(15," Veuillez renseigner le nom de la compagnie "),c.Rb(),c.Sb(16,"ion-item"),c.Sb(17,"ion-label",26),c.zc(18,"Nom de la personne qui g\xe8re cette candidature"),c.Sb(19,"span",30),c.zc(20,"*"),c.Rb(),c.Rb(),c.Ob(21,"ion-input",31),c.Rb(),c.Sb(22,"p",28),c.zc(23," Veuillez renseigner votre nom "),c.Rb(),c.Sb(24,"ion-item"),c.Sb(25,"ion-label",26),c.zc(26,"E-mail"),c.Ob(27,"atom-asterisk"),c.Rb(),c.Ob(28,"ion-input",32),c.Rb(),c.Sb(29,"p",28),c.zc(30," Veuillez renseigner votre email "),c.Rb(),c.Sb(31,"ion-item"),c.Sb(32,"ion-label",26),c.zc(33,"T\xe9l\xe9phone"),c.Ob(34,"atom-asterisk"),c.Rb(),c.Ob(35,"ion-input",33),c.Rb(),c.Sb(36,"p",28),c.zc(37," Veuillez renseigner un num\xe9ro de t\xe9l\xe9phone "),c.Rb(),c.Sb(38,"ion-item"),c.Sb(39,"ion-label",26),c.zc(40,"Adresse de gestion de la structure"),c.Ob(41,"atom-asterisk"),c.Rb(),c.Ob(42,"ion-input",34),c.Rb(),c.Sb(43,"p",28),c.zc(44," Veuillez renseigner une adresse "),c.Rb(),c.Sb(45,"ion-item"),c.Sb(46,"ion-label",26),c.zc(47,"Quelques mots sur votre projet"),c.Ob(48,"atom-asterisk"),c.Rb(),c.Ob(49,"ion-input",35),c.Rb(),c.Sb(50,"p",28),c.zc(51," Veuillez renseigner une description "),c.Rb(),c.Sb(52,"ion-item"),c.Sb(53,"ion-label",26),c.zc(54," Un lien vid\xe9o vers un projet actuel ou pass\xe9 ?"),c.Rb(),c.Ob(55,"ion-input",36),c.Rb(),c.Sb(56,"ion-item"),c.Sb(57,"ion-label",26),c.zc(58,"Site internet"),c.Rb(),c.Ob(59,"ion-input",37),c.Rb(),c.Sb(60,"ion-item"),c.Sb(61,"ion-label",26),c.zc(62,"Des partenaires ou soutiens ? "),c.Rb(),c.Ob(63,"ion-input",38),c.Rb(),c.Sb(64,"ion-radio-group",39),c.Sb(65,"ion-list-header"),c.Sb(66,"ion-label"),c.zc(67,"Vous \xeates install\xe9 dans quel coin ?"),c.Ob(68,"atom-asterisk"),c.Rb(),c.Rb(),c.xc(69,h,4,2,"ion-item",40),c.Rb(),c.Sb(70,"ion-list",41),c.Sb(71,"ion-list-header"),c.Sb(72,"ion-label"),c.zc(73,"Votre pratique artistique"),c.Ob(74,"atom-asterisk"),c.Rb(),c.Rb(),c.xc(75,R,4,2,"ion-item",40),c.Rb(),c.Sb(76,"ion-list",42),c.Sb(77,"ion-list-header"),c.Sb(78,"ion-label"),c.zc(79,"Sur quelles p\xe9riodes \xeates-vous disponibles pour travailler chez nous ?"),c.Ob(80,"atom-asterisk"),c.Rb(),c.Rb(),c.xc(81,v,4,3,"ion-item",40),c.Rb(),c.Sb(82,"p",28),c.zc(83," Veuillez renseigner une disponibilit\xe9 "),c.Rb(),c.Sb(84,"ion-list",43),c.Sb(85,"ion-list-header"),c.Sb(86,"ion-label"),c.zc(87,"De qui l'\xe9quipe sera-t-elle constitu\xe9e?"),c.Rb(),c.Rb(),c.xc(88,F,9,3,"div",44),c.Sb(89,"div",21),c.Sb(90,"ion-button",45),c.ac("click",function(){return c.rc(e),c.ec().onAddTeamMember()}),c.zc(91," Ajouter un membre d'\xe9quipe "),c.Ob(92,"ion-icon",46),c.Rb(),c.Rb(),c.Rb(),c.Sb(93,"div",47),c.Sb(94,"ion-button",48),c.xc(95,z,1,0,"ion-icon",49),c.xc(96,O,1,0,"loader",14),c.zc(97),c.Rb(),c.Rb(),c.Rb(),c.Rb()}if(2&e){const e=c.ec();c.lc("formGroup",e.residenceForm),c.Cb(7),c.lc("ngClass",e.residenceForm.get("projectName").invalid&&e.residenceForm.get("projectName").touched?"show-error":""),c.Cb(7),c.lc("ngClass",e.residenceForm.get("companyName").invalid&&e.residenceForm.get("companyName").touched?"show-error":""),c.Cb(8),c.lc("ngClass",e.residenceForm.get("managerName").invalid&&e.residenceForm.get("managerName").touched?"show-error":""),c.Cb(7),c.lc("ngClass",e.residenceForm.get("email").invalid&&e.residenceForm.get("email").touched?"show-error":""),c.Cb(7),c.lc("ngClass",e.residenceForm.get("phone").invalid&&e.residenceForm.get("phone").touched?"show-error":""),c.Cb(7),c.lc("ngClass",e.residenceForm.get("address").invalid&&e.residenceForm.get("address").touched?"show-error":""),c.Cb(7),c.lc("ngClass",e.residenceForm.get("projectDescription").invalid&&e.residenceForm.get("projectDescription").touched?"show-error":""),c.Cb(19),c.lc("ngForOf",e.locations),c.Cb(6),c.lc("ngForOf",e.artisticPracticeFormArray.controls),c.Cb(6),c.lc("ngForOf",e.availabilityFormArray.controls),c.Cb(1),c.lc("ngClass",e.residenceForm.get("availability").invalid&&e.residenceForm.get("availability").touched?"show-error":""),c.Cb(6),c.lc("ngForOf",e.projectTeamFormArray.controls),c.Cb(6),c.lc("disabled",e.residenceForm.invalid||e.isLoading),c.Cb(1),c.lc("ngIf",!e.isLoading),c.Cb(1),c.lc("ngIf",e.isLoading),c.Cb(1),c.Bc(" ",e.SEND_BUTTON_TEXT," ")}}const y=[{path:"",component:(()=>{class e{constructor(e,i){this.residenceService=e,this.router=i,this.isLoading=!1,this.hideForm=!1,this.isFormSent=!1,this.isFormFailed=!1,this.locations=["Bordeaux M\xe9tropole","R\xe9gion Nouvelle-Aquitaine","France","Au-del\xe0..."],this.artisticPractices=["Danse contemporaine","Th\xe9\xe2tre","Danse - th\xe9\xe2tre","Autre"],this.availabilities=["du 11 au 15 janvier","du 8 au 12 f\xe9vrier","du 8 au 12 mars","du 12 au 16 avril","du 10 au 14 mai","du 31 mai au 4 juin"],this.HEADER_TITLE="Accueil en r\xe9sidence",this.TITLE="Demande de R\xe9sidence Artistique",this.SEND_BUTTON_TEXT="Envoyer",this.HOME_BTN_TEXT="Accueil",this.RELOAD="R\xe9essayer"}ngOnInit(){this._initContactForm()}ionViewDidLeave(){this.residenceForm.reset(),this.isLoading=!1,this.hideForm=!1,this.isFormSent=!1,this.isFormFailed=!1}onSubmit(){if(this.residenceForm.invalid)return;this.isLoading=!0;const e=this.residenceForm.value.artisticPractice.map((e,i)=>e?this.artisticPractices[i]:null).filter(e=>null!==e),i=this.residenceForm.value.availability.map((e,i)=>e?this.availabilities[i]:null).filter(e=>null!==e),n=this.residenceForm.value;n.availability=i,n.artisticPractice=e,this.residenceService.postResidenceForm(n).subscribe(e=>{this.isLoading=!1,this.isFormSent=!0,this.hideForm=!0,this.residenceForm.reset()},e=>{this.isLoading=!1,this.isFormFailed=!0})}onNavigateHome(){this.isLoading=!1,this.isFormSent=!1,this.isFormFailed=!1,this.residenceForm.reset(),this.router.navigateByUrl("/lcdq/accueil")}onReload(){location.reload()}onAddTeamMember(){this.residenceForm.get("projectTeam").push(new o.g(null,o.x.required))}onRemoveTeamMember(e,i){this.residenceForm.get("projectTeam").removeAt(i)}get projectTeamFormArray(){return this.residenceForm.get("projectTeam")}get artisticPracticeFormArray(){return this.residenceForm.get("artisticPractice")}get availabilityFormArray(){return this.residenceForm.get("availability")}_initContactForm(){this.residenceForm=new o.j({projectName:new o.g(null,o.x.required),companyName:new o.g(null,o.x.required),managerName:new o.g(null,o.x.required),email:new o.g(null,[o.x.required,o.x.email]),phone:new o.g(null,o.x.required),address:new o.g(null,o.x.required),location:new o.g(null,o.x.required),projectDescription:new o.g(null,o.x.required),projectTeam:new o.e([new o.g(null,o.x.required)],o.x.required),artisticPractice:new o.e([],Object(a.a)()),availability:new o.e([],Object(a.a)()),videoLink:new o.g(null),website:new o.g(null),partners:new o.g(null)}),this._addControl("artisticPractice",this.artisticPractices),this._addControl("availability",this.availabilities)}_addControl(e,i){const n=this.residenceForm.controls[e];i.forEach(()=>{n.push(new o.g(null))})}}return e.\u0275fac=function(i){return new(i||e)(c.Nb(l.a),c.Nb(s.g))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-residence"]],decls:51,vars:6,consts:[[3,"headerTitle"],[1,"ion-no-padding"],[1,"squared-shapes",3,"title"],[1,"ion-padding"],["size","12","size-sm","6","offset-sm","3"],[1,"description-container"],[1,"description"],[1,"description-item"],[1,"description-item--icon"],[1,"description-item--content"],[1,"row","ion-padding"],[1,"row"],["size","12","size-sm","4","offset-sm","4",1,"ion-no-padding"],[1,"ion-no-margin","ion-margin-vertical"],[4,"ngIf"],["class","message-sent message-sent--fail",4,"ngIf"],["class","message-sent message-sent--success",4,"ngIf"],["class","residence-form",3,"formGroup","ngSubmit",4,"ngIf"],[1,"message-sent","message-sent--fail"],["color","danger"],[1,"ion-text-center","message-sent__content"],[1,"btn__container","ion-margin-vertical"],[3,"click"],[1,"message-sent","message-sent--success"],["color","primary"],[1,"residence-form",3,"formGroup","ngSubmit"],["position","floating"],["type","text","name","projectName","formControlName","projectName","required",""],[1,"error-message",3,"ngClass"],["type","text","name","companyName","formControlName","companyName","required",""],[1,"label-asterisk"],["type","text","name","managerName","formControlName","managerName","required",""],["type","email","name","email","formControlName","email","required",""],["type","text","name","phone","formControlName","phone","required",""],["type","text","name","address","formControlName","address","required",""],["type","text","name","projectDescription","formControlName","projectDescription"],["name","videoLink","formControlName","videoLink"],["name","website","formControlName","website"],["name","partners","formControlName","partners"],["aria-label","R\xe9gion","formControlName","location",1,"radio-group"],["lines","none",4,"ngFor","ngForOf"],["formArrayName","artisticPractice"],["formArrayName","availability"],["formArrayName","projectTeam"],[4,"ngFor","ngForOf"],["fill","clear","size","small",3,"click"],["slot","start","name","add-outline"],[1,"btn__container","btn__container--submit"],["type","submit","color","primary",1,"ion-margin-vertical",3,"disabled"],["slot","start","name","paper-plane-outline",4,"ngIf"],["lines","none"],["slot","start",3,"value"],["slot","start",3,"formControlName"],["slot","start",3,"formControlName","disabled"],["type","text","name","projectTeam","required","",3,"formControlName"],["fill","clear","size","small","color","secondary",3,"click",4,"ngIf"],["fill","clear","size","small","color","secondary",3,"click"],["slot","end","name","close-outline"],["slot","start","name","paper-plane-outline"]],template:function(e,i){1&e&&(c.Ob(0,"ion-header-component",0),c.Sb(1,"ion-content"),c.Sb(2,"ion-grid",1),c.Sb(3,"ion-row"),c.Sb(4,"ion-col"),c.Ob(5,"squared-shapes-svg",2),c.Rb(),c.Rb(),c.Sb(6,"ion-row",3),c.Sb(7,"ion-col",4),c.Sb(8,"div",5),c.Sb(9,"ul",6),c.Sb(10,"li",7),c.Ob(11,"two-triangle-svg",8),c.Sb(12,"p",9),c.zc(13," Pour les artistes et compagnies du spectacle vivant, plus sp\xe9cifiquement en danse contemporaine et en th\xe9\xe2tre, en priorit\xe9 aux compagnies et artistes install\xe9s dans la r\xe9gion bordelaise. "),c.Rb(),c.Rb(),c.Sb(14,"li",7),c.Ob(15,"two-triangle-svg",8),c.Sb(16,"p",9),c.zc(17," Accueil en r\xe9sidence pendant 5 jours, du lundi au vendredi, 9h \xe0 16h. "),c.Rb(),c.Rb(),c.Sb(18,"li",7),c.Ob(19,"two-triangle-svg",8),c.Sb(20,"p",9),c.zc(21," Possibilit\xe9 d\u2019accompagnement artistique avec les membres de la Cie Bela & C\xf4me - Bela Balsa et C\xf4me Tanguy. "),c.Rb(),c.Rb(),c.Sb(22,"li",7),c.Ob(23,"two-triangle-svg",8),c.Sb(24,"p",9),c.zc(25," Pr\xe9sentation en fin de semaine aupr\xe8s d\u2019un public restreint d\u2019une \xe9tape de travail, extrait, lecture, selon l\u2019envie des artistes. "),c.Rb(),c.Rb(),c.Sb(26,"li",7),c.Ob(27,"two-triangle-svg",8),c.Sb(28,"p",9),c.zc(29," L\u2019espace de travail est de 50m2 et ne permet pas d\u2019accueillir de grands groupes."),c.Ob(30,"br"),c.Rb(),c.Rb(),c.Sb(31,"li",7),c.Ob(32,"two-triangle-svg",8),c.Sb(33,"p",9),c.zc(34,"Pas de technique lumi\xe8re."),c.Rb(),c.Rb(),c.Sb(35,"li",7),c.Ob(36,"two-triangle-svg",8),c.Sb(37,"p",9),c.zc(38," Possibilit\xe9 de stocker, le temps de la r\xe9sidence, une tr\xe8s petite quantit\xe9 de mat\xe9riel. "),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(39,"ion-row",10),c.Sb(40,"ion-col",4),c.Sb(41,"div"),c.zc(42," Merci de compl\xe9ter le formulaire pour que nous commencions \xe0 faire connaissance. Si vous ne disposez pas de certains \xe9l\xe9ments ou si nos questions ne correspondent pas du tout \xe0 ce que vous faites, pas de soucis, adaptez... Rien n'est d\xe9finitif ni exhaustif. "),c.Rb(),c.Rb(),c.Rb(),c.Sb(43,"ion-row",11),c.Sb(44,"ion-col",12),c.Sb(45,"ion-card",13),c.Sb(46,"ion-card-content"),c.xc(47,g,1,0,"loader",14),c.xc(48,f,7,1,"div",15),c.xc(49,S,7,1,"div",16),c.xc(50,w,98,17,"form",17),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&e&&(c.lc("headerTitle",i.HEADER_TITLE),c.Cb(5),c.lc("title",i.TITLE),c.Cb(42),c.lc("ngIf",i.isLoading),c.Cb(1),c.lc("ngIf",!i.isLoading&&i.isFormFailed&&!i.isFormSent),c.Cb(1),c.lc("ngIf",!i.isLoading&&i.isFormSent),c.Cb(1),c.lc("ngIf",!i.isLoading&&!i.hideForm))},directives:[b.a,r.n,r.p,r.F,r.m,m.a,d.a,r.h,r.i,t.m,u.a,r.M,r.f,o.y,o.s,o.k,r.v,r.t,r.u,p.a,r.s,r.Z,o.r,o.i,o.w,t.k,r.C,r.Y,r.w,t.l,o.f,r.r,r.B,r.W,r.l,r.a],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");.description-item[_ngcontent-%COMP%]{margin:1rem auto 0}.description-item[_ngcontent-%COMP%], .description-item--icon[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:flex-start}.description-item--icon[_ngcontent-%COMP%]{width:20px;height:20px;margin:0 1rem 0 0}.description-item--content[_ngcontent-%COMP%]{flex:1}.message-sent[_ngcontent-%COMP%]{display:flex;flex-direction:column}.message-sent__content[_ngcontent-%COMP%]{margin:1rem 0}.btn__container[_ngcontent-%COMP%]{display:flex;justify-content:center}.btn__container--submit[_ngcontent-%COMP%]{margin:2rem 0 0}']}),e})()},{path:"residence",redirectTo:"",pathMatch:"full"}];let x=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({imports:[[s.k.forChild(y)],s.k]}),e})(),N=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({providers:[],imports:[[t.b,o.v,r.R]]}),e})();var T=n("PCNd"),q=n("ox1a");let _=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({imports:[[t.b,o.v,r.R,x,T.a,N,q.a]]}),e})()}}]);