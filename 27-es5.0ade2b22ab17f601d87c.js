!function(){function e(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function i(e,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{egi8:function(n,t,o){"use strict";o.r(t),o.d(t,"ResidencePageModule",function(){return E});var r=o("ofXK"),a=o("3Pt+"),s=o("TEn/"),c=o("tyNb"),l=o("DsUL"),b=o("fXoL"),m=o("oUaF"),u=o("TTZi"),d=o("JgnI"),p=o("JXrQ"),g=o("o7am"),f=o("wzJV");function v(e,i){1&e&&b.Ob(0,"loader")}function S(e,i){if(1&e){var n=b.Tb();b.Sb(0,"div",18),b.Sb(1,"ion-text",19),b.Sb(2,"p",20),b.zc(3," Votre candidature n'a pas pu \xeatre envoy\xe9e. Veuillez r\xe9essayer. "),b.Rb(),b.Rb(),b.Sb(4,"div",21),b.Sb(5,"ion-button",22),b.ac("click",function(){return b.rc(n),b.ec().onReload()}),b.zc(6),b.Rb(),b.Rb(),b.Rb()}if(2&e){var t=b.ec();b.Cb(6),b.Ac(t.RELOAD)}}function h(e,i){if(1&e){var n=b.Tb();b.Sb(0,"div",23),b.Sb(1,"ion-text",24),b.Sb(2,"p",20),b.zc(3," Merci, votre demande a bien \xe9t\xe9 envoy\xe9e. Nous vous r\xe9pondrons le plus t\xf4t possible. "),b.Rb(),b.Rb(),b.Sb(4,"div",21),b.Sb(5,"ion-button",22),b.ac("click",function(){return b.rc(n),b.ec().onNavigateHome()}),b.zc(6),b.Rb(),b.Rb(),b.Rb()}if(2&e){var t=b.ec();b.Cb(6),b.Ac(t.HOME_BTN_TEXT)}}function R(e,i){if(1&e&&(b.Sb(0,"ion-item",50),b.Sb(1,"ion-label"),b.zc(2),b.Rb(),b.Ob(3,"ion-radio",51),b.Rb()),2&e){var n=i.$implicit;b.Cb(2),b.Ac(n),b.Cb(1),b.lc("value",n)}}function C(e,i){if(1&e&&(b.Sb(0,"ion-item",50),b.Sb(1,"ion-label"),b.zc(2),b.Rb(),b.Ob(3,"ion-checkbox",52),b.Rb()),2&e){var n=i.index,t=b.ec(2);b.Cb(2),b.Ac(t.artisticPractices[n]),b.Cb(1),b.lc("formControlName",n)}}function y(e,i){if(1&e&&(b.Sb(0,"ion-item",50),b.Sb(1,"ion-label"),b.zc(2),b.Rb(),b.Ob(3,"ion-checkbox",53),b.Rb()),2&e){var n=i.index,t=b.ec(2);b.Cb(2),b.Ac(t.availabilities[n]),b.Cb(1),b.lc("formControlName",n)("disabled",0===n||1===n||2===n)}}function F(e,i){if(1&e){var n=b.Tb();b.Sb(0,"ion-button",56),b.ac("click",function(e){b.rc(n);var i=b.ec().index;return b.ec(2).onRemoveTeamMember(e,i)}),b.zc(1," Supprimer "),b.Ob(2,"ion-icon",57),b.Rb()}}function w(e,i){if(1&e&&(b.Sb(0,"div"),b.Sb(1,"ion-item"),b.Sb(2,"ion-label",26),b.zc(3,"Nom, pr\xe9nom et fonction"),b.Ob(4,"atom-asterisk"),b.Rb(),b.Ob(5,"ion-input",54),b.Rb(),b.Sb(6,"p",28),b.zc(7," Veuillez renseigner les informations "),b.Rb(),b.xc(8,F,3,0,"ion-button",55),b.Rb()),2&e){var n=i.$implicit,t=i.index,o=b.ec(2);b.Cb(5),b.lc("formControlName",t),b.Cb(1),b.lc("ngClass",n.invalid&&n.touched?"show-error":""),b.Cb(2),b.lc("ngIf",o.projectTeamFormArray.controls.length>1)}}function O(e,i){1&e&&b.Ob(0,"ion-icon",58)}function z(e,i){1&e&&b.Ob(0,"loader")}function x(e,i){if(1&e){var n=b.Tb();b.Sb(0,"form",25),b.ac("ngSubmit",function(){return b.rc(n),b.ec().onSubmit()}),b.Sb(1,"ion-list"),b.Sb(2,"ion-item"),b.Sb(3,"ion-label",26),b.zc(4,"Nom du projet"),b.Ob(5,"atom-asterisk"),b.Rb(),b.Ob(6,"ion-input",27),b.Rb(),b.Sb(7,"p",28),b.zc(8," Veuillez renseigner un nom de projet "),b.Rb(),b.Sb(9,"ion-item"),b.Sb(10,"ion-label",26),b.zc(11,"Nom de la compagnie"),b.Ob(12,"atom-asterisk"),b.Rb(),b.Ob(13,"ion-input",29),b.Rb(),b.Sb(14,"p",28),b.zc(15," Veuillez renseigner le nom de la compagnie "),b.Rb(),b.Sb(16,"ion-item"),b.Sb(17,"ion-label",26),b.zc(18,"Nom de la personne qui g\xe8re cette candidature"),b.Sb(19,"span",30),b.zc(20,"*"),b.Rb(),b.Rb(),b.Ob(21,"ion-input",31),b.Rb(),b.Sb(22,"p",28),b.zc(23," Veuillez renseigner votre nom "),b.Rb(),b.Sb(24,"ion-item"),b.Sb(25,"ion-label",26),b.zc(26,"E-mail"),b.Ob(27,"atom-asterisk"),b.Rb(),b.Ob(28,"ion-input",32),b.Rb(),b.Sb(29,"p",28),b.zc(30," Veuillez renseigner votre email "),b.Rb(),b.Sb(31,"ion-item"),b.Sb(32,"ion-label",26),b.zc(33,"T\xe9l\xe9phone"),b.Ob(34,"atom-asterisk"),b.Rb(),b.Ob(35,"ion-input",33),b.Rb(),b.Sb(36,"p",28),b.zc(37," Veuillez renseigner un num\xe9ro de t\xe9l\xe9phone "),b.Rb(),b.Sb(38,"ion-item"),b.Sb(39,"ion-label",26),b.zc(40,"Adresse de gestion de la structure"),b.Ob(41,"atom-asterisk"),b.Rb(),b.Ob(42,"ion-input",34),b.Rb(),b.Sb(43,"p",28),b.zc(44," Veuillez renseigner une adresse "),b.Rb(),b.Sb(45,"ion-item"),b.Sb(46,"ion-label",26),b.zc(47,"Quelques mots sur votre projet"),b.Ob(48,"atom-asterisk"),b.Rb(),b.Ob(49,"ion-input",35),b.Rb(),b.Sb(50,"p",28),b.zc(51," Veuillez renseigner une description "),b.Rb(),b.Sb(52,"ion-item"),b.Sb(53,"ion-label",26),b.zc(54," Un lien vid\xe9o vers un projet actuel ou pass\xe9 ?"),b.Rb(),b.Ob(55,"ion-input",36),b.Rb(),b.Sb(56,"ion-item"),b.Sb(57,"ion-label",26),b.zc(58,"Site internet"),b.Rb(),b.Ob(59,"ion-input",37),b.Rb(),b.Sb(60,"ion-item"),b.Sb(61,"ion-label",26),b.zc(62,"Des partenaires ou soutiens ? "),b.Rb(),b.Ob(63,"ion-input",38),b.Rb(),b.Sb(64,"ion-radio-group",39),b.Sb(65,"ion-list-header"),b.Sb(66,"ion-label"),b.zc(67,"Vous \xeates install\xe9 dans quel coin ?"),b.Ob(68,"atom-asterisk"),b.Rb(),b.Rb(),b.xc(69,R,4,2,"ion-item",40),b.Rb(),b.Sb(70,"ion-list",41),b.Sb(71,"ion-list-header"),b.Sb(72,"ion-label"),b.zc(73,"Votre pratique artistique"),b.Ob(74,"atom-asterisk"),b.Rb(),b.Rb(),b.xc(75,C,4,2,"ion-item",40),b.Rb(),b.Sb(76,"ion-list",42),b.Sb(77,"ion-list-header"),b.Sb(78,"ion-label"),b.zc(79,"Sur quelles p\xe9riodes \xeates-vous disponibles pour travailler chez nous ?"),b.Ob(80,"atom-asterisk"),b.Rb(),b.Rb(),b.xc(81,y,4,3,"ion-item",40),b.Rb(),b.Sb(82,"p",28),b.zc(83," Veuillez renseigner une disponibilit\xe9 "),b.Rb(),b.Sb(84,"ion-list",43),b.Sb(85,"ion-list-header"),b.Sb(86,"ion-label"),b.zc(87,"De qui l'\xe9quipe sera-t-elle constitu\xe9e?"),b.Rb(),b.Rb(),b.xc(88,w,9,3,"div",44),b.Sb(89,"div",21),b.Sb(90,"ion-button",45),b.ac("click",function(){return b.rc(n),b.ec().onAddTeamMember()}),b.zc(91," Ajouter un membre d'\xe9quipe "),b.Ob(92,"ion-icon",46),b.Rb(),b.Rb(),b.Rb(),b.Sb(93,"div",47),b.Sb(94,"ion-button",48),b.xc(95,O,1,0,"ion-icon",49),b.xc(96,z,1,0,"loader",14),b.zc(97),b.Rb(),b.Rb(),b.Rb(),b.Rb()}if(2&e){var t=b.ec();b.lc("formGroup",t.residenceForm),b.Cb(7),b.lc("ngClass",t.residenceForm.get("projectName").invalid&&t.residenceForm.get("projectName").touched?"show-error":""),b.Cb(7),b.lc("ngClass",t.residenceForm.get("companyName").invalid&&t.residenceForm.get("companyName").touched?"show-error":""),b.Cb(8),b.lc("ngClass",t.residenceForm.get("managerName").invalid&&t.residenceForm.get("managerName").touched?"show-error":""),b.Cb(7),b.lc("ngClass",t.residenceForm.get("email").invalid&&t.residenceForm.get("email").touched?"show-error":""),b.Cb(7),b.lc("ngClass",t.residenceForm.get("phone").invalid&&t.residenceForm.get("phone").touched?"show-error":""),b.Cb(7),b.lc("ngClass",t.residenceForm.get("address").invalid&&t.residenceForm.get("address").touched?"show-error":""),b.Cb(7),b.lc("ngClass",t.residenceForm.get("projectDescription").invalid&&t.residenceForm.get("projectDescription").touched?"show-error":""),b.Cb(19),b.lc("ngForOf",t.locations),b.Cb(6),b.lc("ngForOf",t.artisticPracticeFormArray.controls),b.Cb(6),b.lc("ngForOf",t.availabilityFormArray.controls),b.Cb(1),b.lc("ngClass",t.residenceForm.get("availability").invalid&&t.residenceForm.get("availability").touched?"show-error":""),b.Cb(6),b.lc("ngForOf",t.projectTeamFormArray.controls),b.Cb(6),b.lc("disabled",t.residenceForm.invalid||t.isLoading),b.Cb(1),b.lc("ngIf",!t.isLoading),b.Cb(1),b.lc("ngIf",t.isLoading),b.Cb(1),b.Bc(" ",t.SEND_BUTTON_TEXT," ")}}var N,T,k,q,_=[{path:"",component:(N=function(){function n(i,t){e(this,n),this.residenceService=i,this.router=t,this.isLoading=!1,this.hideForm=!1,this.isFormSent=!1,this.isFormFailed=!1,this.locations=["Bordeaux M\xe9tropole","R\xe9gion Nouvelle-Aquitaine","France","Au-del\xe0..."],this.artisticPractices=["Danse contemporaine","Th\xe9\xe2tre","Danse - th\xe9\xe2tre","Autre"],this.availabilities=["du 11 au 15 janvier","du 8 au 12 f\xe9vrier","du 8 au 12 mars","du 12 au 16 avril","du 10 au 14 mai","du 31 mai au 4 juin"],this.HEADER_TITLE="Accueil en r\xe9sidence",this.TITLE="Demande de R\xe9sidence Artistique",this.SEND_BUTTON_TEXT="Envoyer",this.HOME_BTN_TEXT="Accueil",this.RELOAD="R\xe9essayer"}var t,o,r;return t=n,(o=[{key:"ngOnInit",value:function(){this._initContactForm()}},{key:"ionViewDidLeave",value:function(){this.residenceForm.reset(),this.isLoading=!1,this.hideForm=!1,this.isFormSent=!1,this.isFormFailed=!1}},{key:"onSubmit",value:function(){var e=this;if(!this.residenceForm.invalid){this.isLoading=!0;var i=this.residenceForm.value.artisticPractice.map(function(i,n){return i?e.artisticPractices[n]:null}).filter(function(e){return null!==e}),n=this.residenceForm.value.availability.map(function(i,n){return i?e.availabilities[n]:null}).filter(function(e){return null!==e}),t=this.residenceForm.value;t.availability=n,t.artisticPractice=i,this.residenceService.postResidenceForm(t).subscribe(function(i){e.isLoading=!1,e.isFormSent=!0,e.hideForm=!0,e.residenceForm.reset()},function(i){e.isLoading=!1,e.isFormFailed=!0})}}},{key:"onNavigateHome",value:function(){this.isLoading=!1,this.isFormSent=!1,this.isFormFailed=!1,this.residenceForm.reset(),this.router.navigateByUrl("/lcdq/accueil")}},{key:"onReload",value:function(){location.reload()}},{key:"onAddTeamMember",value:function(){this.residenceForm.get("projectTeam").push(new a.g(null,a.x.required))}},{key:"onRemoveTeamMember",value:function(e,i){this.residenceForm.get("projectTeam").removeAt(i)}},{key:"projectTeamFormArray",get:function(){return this.residenceForm.get("projectTeam")}},{key:"artisticPracticeFormArray",get:function(){return this.residenceForm.get("artisticPractice")}},{key:"availabilityFormArray",get:function(){return this.residenceForm.get("availability")}},{key:"_initContactForm",value:function(){this.residenceForm=new a.j({projectName:new a.g(null,a.x.required),companyName:new a.g(null,a.x.required),managerName:new a.g(null,a.x.required),email:new a.g(null,[a.x.required,a.x.email]),phone:new a.g(null,a.x.required),address:new a.g(null,a.x.required),location:new a.g(null,a.x.required),projectDescription:new a.g(null,a.x.required),projectTeam:new a.e([new a.g(null,a.x.required)],a.x.required),artisticPractice:new a.e([],Object(l.a)()),availability:new a.e([],Object(l.a)()),videoLink:new a.g(null),website:new a.g(null),partners:new a.g(null)}),this._addControl("artisticPractice",this.artisticPractices),this._addControl("availability",this.availabilities)}},{key:"_addControl",value:function(e,i){var n=this.residenceForm.controls[e];i.forEach(function(){n.push(new a.g(null))})}}])&&i(t.prototype,o),r&&i(t,r),n}(),N.\u0275fac=function(e){return new(e||N)(b.Nb(m.a),b.Nb(c.g))},N.\u0275cmp=b.Hb({type:N,selectors:[["app-residence"]],decls:51,vars:6,consts:[[3,"headerTitle"],[1,"ion-no-padding"],[1,"squared-shapes",3,"title"],[1,"ion-padding"],["size","12","size-sm","6","offset-sm","3"],[1,"description-container"],[1,"description"],[1,"description-item"],[1,"description-item--icon"],[1,"description-item--content"],[1,"row","ion-padding"],[1,"row"],["size","12","size-sm","4","offset-sm","4",1,"ion-no-padding"],[1,"ion-no-margin","ion-margin-vertical"],[4,"ngIf"],["class","message-sent message-sent--fail",4,"ngIf"],["class","message-sent message-sent--success",4,"ngIf"],["class","residence-form",3,"formGroup","ngSubmit",4,"ngIf"],[1,"message-sent","message-sent--fail"],["color","danger"],[1,"ion-text-center","message-sent__content"],[1,"btn__container","ion-margin-vertical"],[3,"click"],[1,"message-sent","message-sent--success"],["color","primary"],[1,"residence-form",3,"formGroup","ngSubmit"],["position","floating"],["type","text","name","projectName","formControlName","projectName","required",""],[1,"error-message",3,"ngClass"],["type","text","name","companyName","formControlName","companyName","required",""],[1,"label-asterisk"],["type","text","name","managerName","formControlName","managerName","required",""],["type","email","name","email","formControlName","email","required",""],["type","text","name","phone","formControlName","phone","required",""],["type","text","name","address","formControlName","address","required",""],["type","text","name","projectDescription","formControlName","projectDescription"],["name","videoLink","formControlName","videoLink"],["name","website","formControlName","website"],["name","partners","formControlName","partners"],["aria-label","R\xe9gion","formControlName","location",1,"radio-group"],["lines","none",4,"ngFor","ngForOf"],["formArrayName","artisticPractice"],["formArrayName","availability"],["formArrayName","projectTeam"],[4,"ngFor","ngForOf"],["fill","clear","size","small",3,"click"],["slot","start","name","add-outline"],[1,"btn__container","btn__container--submit"],["type","submit","color","primary",1,"ion-margin-vertical",3,"disabled"],["slot","start","name","paper-plane-outline",4,"ngIf"],["lines","none"],["slot","start",3,"value"],["slot","start",3,"formControlName"],["slot","start",3,"formControlName","disabled"],["type","text","name","projectTeam","required","",3,"formControlName"],["fill","clear","size","small","color","secondary",3,"click",4,"ngIf"],["fill","clear","size","small","color","secondary",3,"click"],["slot","end","name","close-outline"],["slot","start","name","paper-plane-outline"]],template:function(e,i){1&e&&(b.Ob(0,"ion-header-component",0),b.Sb(1,"ion-content"),b.Sb(2,"ion-grid",1),b.Sb(3,"ion-row"),b.Sb(4,"ion-col"),b.Ob(5,"squared-shapes-svg",2),b.Rb(),b.Rb(),b.Sb(6,"ion-row",3),b.Sb(7,"ion-col",4),b.Sb(8,"div",5),b.Sb(9,"ul",6),b.Sb(10,"li",7),b.Ob(11,"two-triangle-svg",8),b.Sb(12,"p",9),b.zc(13," Pour les artistes et compagnies du spectacle vivant, plus sp\xe9cifiquement en danse contemporaine et en th\xe9\xe2tre, en priorit\xe9 aux compagnies et artistes install\xe9s dans la r\xe9gion bordelaise. "),b.Rb(),b.Rb(),b.Sb(14,"li",7),b.Ob(15,"two-triangle-svg",8),b.Sb(16,"p",9),b.zc(17," Accueil en r\xe9sidence pendant 5 jours, du lundi au vendredi, 9h \xe0 16h. "),b.Rb(),b.Rb(),b.Sb(18,"li",7),b.Ob(19,"two-triangle-svg",8),b.Sb(20,"p",9),b.zc(21," Possibilit\xe9 d\u2019accompagnement artistique avec les membres de la Cie Bela & C\xf4me - Bela Balsa et C\xf4me Tanguy. "),b.Rb(),b.Rb(),b.Sb(22,"li",7),b.Ob(23,"two-triangle-svg",8),b.Sb(24,"p",9),b.zc(25," Pr\xe9sentation en fin de semaine aupr\xe8s d\u2019un public restreint d\u2019une \xe9tape de travail, extrait, lecture, selon l\u2019envie des artistes. "),b.Rb(),b.Rb(),b.Sb(26,"li",7),b.Ob(27,"two-triangle-svg",8),b.Sb(28,"p",9),b.zc(29," L\u2019espace de travail est de 50m2 et ne permet pas d\u2019accueillir de grands groupes."),b.Ob(30,"br"),b.Rb(),b.Rb(),b.Sb(31,"li",7),b.Ob(32,"two-triangle-svg",8),b.Sb(33,"p",9),b.zc(34,"Pas de technique lumi\xe8re."),b.Rb(),b.Rb(),b.Sb(35,"li",7),b.Ob(36,"two-triangle-svg",8),b.Sb(37,"p",9),b.zc(38," Possibilit\xe9 de stocker, le temps de la r\xe9sidence, une tr\xe8s petite quantit\xe9 de mat\xe9riel. "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(39,"ion-row",10),b.Sb(40,"ion-col",4),b.Sb(41,"div"),b.zc(42," Merci de compl\xe9ter le formulaire pour que nous commencions \xe0 faire connaissance. Si vous ne disposez pas de certains \xe9l\xe9ments ou si nos questions ne correspondent pas du tout \xe0 ce que vous faites, pas de soucis, adaptez... Rien n'est d\xe9finitif ni exhaustif. "),b.Rb(),b.Rb(),b.Rb(),b.Sb(43,"ion-row",11),b.Sb(44,"ion-col",12),b.Sb(45,"ion-card",13),b.Sb(46,"ion-card-content"),b.xc(47,v,1,0,"loader",14),b.xc(48,S,7,1,"div",15),b.xc(49,h,7,1,"div",16),b.xc(50,x,98,17,"form",17),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&e&&(b.lc("headerTitle",i.HEADER_TITLE),b.Cb(5),b.lc("title",i.TITLE),b.Cb(42),b.lc("ngIf",i.isLoading),b.Cb(1),b.lc("ngIf",!i.isLoading&&i.isFormFailed&&!i.isFormSent),b.Cb(1),b.lc("ngIf",!i.isLoading&&i.isFormSent),b.Cb(1),b.lc("ngIf",!i.isLoading&&!i.hideForm))},directives:[u.a,s.n,s.p,s.F,s.m,d.a,p.a,s.h,s.i,r.m,g.a,s.M,s.f,a.y,a.s,a.k,s.v,s.t,s.u,f.a,s.s,s.Z,a.r,a.i,a.w,r.k,s.C,s.Y,s.w,r.l,a.f,s.r,s.B,s.W,s.l,s.a],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");.description-item[_ngcontent-%COMP%]{margin:1rem auto 0}.description-item[_ngcontent-%COMP%], .description-item--icon[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:flex-start}.description-item--icon[_ngcontent-%COMP%]{width:20px;height:20px;margin:0 1rem 0 0}.description-item--content[_ngcontent-%COMP%]{flex:1}.message-sent[_ngcontent-%COMP%]{display:flex;flex-direction:column}.message-sent__content[_ngcontent-%COMP%]{margin:1rem 0}.btn__container[_ngcontent-%COMP%]{display:flex;justify-content:center}.btn__container--submit[_ngcontent-%COMP%]{margin:2rem 0 0}']}),N)},{path:"residence",redirectTo:"",pathMatch:"full"}],j=((k=function i(){e(this,i)}).\u0275fac=function(e){return new(e||k)},k.\u0275mod=b.Lb({type:k}),k.\u0275inj=b.Kb({imports:[[c.k.forChild(_)],c.k]}),k),A=((T=function i(){e(this,i)}).\u0275fac=function(e){return new(e||T)},T.\u0275mod=b.Lb({type:T}),T.\u0275inj=b.Kb({providers:[],imports:[[r.b,a.v,s.R]]}),T),P=o("PCNd"),L=o("ox1a"),E=((q=function i(){e(this,i)}).\u0275fac=function(e){return new(e||q)},q.\u0275mod=b.Lb({type:q}),q.\u0275inj=b.Kb({imports:[[r.b,a.v,s.R,j,P.a,A,L.a]]}),q)}}])}();