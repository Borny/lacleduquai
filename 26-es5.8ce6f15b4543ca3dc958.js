!function(){function e(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function i(e,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function n(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{egi8:function(i,t,o){"use strict";o.r(t),o.d(t,"ResidencePageModule",function(){return S});var r=o("ofXK"),a=o("3Pt+"),s=o("TEn/"),c=o("tyNb");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(i){var n=0;return Object.keys(i.controls).forEach(function(e){!0===i.controls[e].value&&n++}),n<e?{requireOneCheckboxToBeChecked:!0}:null}}var b,u=o("fXoL"),d=o("AytR"),m=o("tk/3"),p=((b=function(){function i(n){e(this,i),this.http=n,this.RESIDENCE_URL=d.a.apiUrl+"/residence"}return n(i,[{key:"postResidenceForm",value:function(e){return console.log("residence service:",e),this.http.post(this.RESIDENCE_URL,e)}}]),i}()).\u0275fac=function(e){return new(e||b)(u.Vb(m.b))},b.\u0275prov=u.Ib({token:b,factory:b.\u0275fac,providedIn:"root"}),b),g=o("TTZi"),f=o("JgnI"),v=o("JXrQ"),h=o("o7am");function R(e,i){1&e&&u.Nb(0,"loader")}function Q(e,i){1&e&&(u.Rb(0,"div",18),u.Rb(1,"p"),u.Ac(2,"Votre message n'a pas pu \xeatre envoy\xe9. Veuillez r\xe9essayer."),u.Qb(),u.Qb())}function y(e,i){if(1&e){var n=u.Sb();u.Rb(0,"div",19),u.Rb(1,"p"),u.Ac(2," Merci, votre demande a bien \xe9t\xe9 envoy\xe9e. Nous vous r\xe9pondrons le plus t\xf4t possible. "),u.Qb(),u.Rb(3,"div",20),u.Rb(4,"ion-button",21),u.Zb("click",function(){return u.qc(n),u.dc().onNavigateHome()}),u.Ac(5),u.Qb(),u.Qb(),u.Qb()}if(2&e){var t=u.dc();u.Bb(5),u.Bc(t.HOME_BTN_TEXT)}}function N(e,i){if(1&e&&(u.Rb(0,"ion-item",45),u.Rb(1,"ion-label"),u.Ac(2),u.Qb(),u.Nb(3,"ion-radio",46),u.Qb()),2&e){var n=i.$implicit;u.Bb(2),u.Bc(n),u.Bb(1),u.jc("value",n)}}function w(e,i){if(1&e&&(u.Rb(0,"ion-item",45),u.Rb(1,"ion-label"),u.Ac(2),u.Qb(),u.Nb(3,"ion-checkbox",47),u.Qb()),2&e){var n=i.index,t=u.dc(2);u.Bb(2),u.Bc(t.artisticPractices[n]),u.Bb(1),u.jc("formControlName",n)}}function F(e,i){if(1&e){var n=u.Sb();u.Rb(0,"ion-button",50),u.Zb("click",function(e){u.qc(n);var i=u.dc().index;return u.dc(2).onRemoveTeamMember(e,i)}),u.Rb(1,"ion-label"),u.Ac(2,"Supprimer"),u.Qb(),u.Nb(3,"ion-icon",51),u.Qb()}}function A(e,i){if(1&e&&(u.Rb(0,"div"),u.Rb(1,"ion-item"),u.Rb(2,"ion-label",23),u.Ac(3,"Nom, pr\xe9nom et fonction "),u.Qb(),u.Nb(4,"ion-input",48),u.Qb(),u.Rb(5,"p",25),u.Ac(6," Veuillez renseigner les informations "),u.Qb(),u.yc(7,F,4,0,"ion-button",49),u.Qb()),2&e){var n=i.$implicit,t=i.index,o=u.dc(2);u.Bb(4),u.jc("formControlName",t),u.Bb(1),u.jc("ngClass",n.invalid&&n.touched?"show-error":""),u.Bb(2),u.jc("ngIf",o.projectTeamFormArray.controls.length>1)}}function j(e,i){if(1&e&&(u.Rb(0,"ion-item",45),u.Rb(1,"ion-label"),u.Ac(2),u.Qb(),u.Nb(3,"ion-checkbox",47),u.Qb()),2&e){var n=i.index,t=u.dc(2);u.Bb(2),u.Bc(t.availabilities[n]),u.Bb(1),u.jc("formControlName",n)}}function q(e,i){1&e&&u.Nb(0,"ion-icon",52)}function B(e,i){1&e&&u.Nb(0,"loader")}function C(e,i){if(1&e){var n=u.Sb();u.Rb(0,"form",22),u.Zb("ngSubmit",function(){return u.qc(n),u.dc().onSubmit()}),u.Rb(1,"ion-item"),u.Rb(2,"ion-label",23),u.Ac(3,"Nom du projet"),u.Qb(),u.Nb(4,"ion-input",24),u.Qb(),u.Rb(5,"p",25),u.Ac(6," Veuillez renseigner un nom de projet "),u.Qb(),u.Rb(7,"ion-item"),u.Rb(8,"ion-label",23),u.Ac(9,"Nom de la compagnie"),u.Qb(),u.Nb(10,"ion-input",26),u.Qb(),u.Rb(11,"p",25),u.Ac(12," Veuillez renseigner le nom de la compagnie "),u.Qb(),u.Rb(13,"ion-item"),u.Rb(14,"ion-label",23),u.Ac(15,"Nom de la personne qui g\xe8re cette candidature"),u.Qb(),u.Nb(16,"ion-input",27),u.Qb(),u.Rb(17,"p",25),u.Ac(18," Veuillez renseigner votre nom "),u.Qb(),u.Rb(19,"ion-item"),u.Rb(20,"ion-label",23),u.Ac(21,"E-mail"),u.Qb(),u.Nb(22,"ion-input",28),u.Qb(),u.Rb(23,"p",25),u.Ac(24," Veuillez renseigner votre email "),u.Qb(),u.Rb(25,"ion-item"),u.Rb(26,"ion-label",23),u.Ac(27,"T\xe9l\xe9phone"),u.Qb(),u.Nb(28,"ion-input",29),u.Qb(),u.Rb(29,"p",25),u.Ac(30," Veuillez renseigner un num\xe9ro de t\xe9l\xe9phone "),u.Qb(),u.Rb(31,"ion-item"),u.Rb(32,"ion-label",23),u.Ac(33,"Adresse de gestion de la structure"),u.Qb(),u.Nb(34,"ion-input",30),u.Qb(),u.Rb(35,"p",25),u.Ac(36," Veuillez renseigner une adresse "),u.Qb(),u.Rb(37,"div",31),u.Rb(38,"ion-list"),u.Rb(39,"ion-radio-group",32),u.Rb(40,"ion-list-header"),u.Rb(41,"ion-label"),u.Ac(42,"Vous \xeates install\xe9 dans quel coin ?"),u.Qb(),u.Qb(),u.yc(43,N,4,2,"ion-item",33),u.Qb(),u.Qb(),u.Qb(),u.Rb(44,"div",31),u.Rb(45,"ion-list",34),u.Rb(46,"ion-list-header"),u.Rb(47,"ion-label"),u.Ac(48,"Votre pratique artistique"),u.Qb(),u.Qb(),u.yc(49,w,4,2,"ion-item",33),u.Qb(),u.Qb(),u.Rb(50,"ion-item"),u.Rb(51,"ion-label",23),u.Ac(52,"Quelques mots sur votre projet ?"),u.Qb(),u.Nb(53,"ion-input",35),u.Qb(),u.Rb(54,"p",25),u.Ac(55," Veuillez renseigner une description "),u.Qb(),u.Rb(56,"ion-label"),u.Ac(57,"De qui l'\xe9quipe sera-t-elle constitu\xe9e?"),u.Qb(),u.Rb(58,"div",36),u.yc(59,A,8,3,"div",37),u.Rb(60,"ion-button",38),u.Zb("click",function(){return u.qc(n),u.dc().onAddTeamMember()}),u.Rb(61,"ion-label"),u.Ac(62,"Ajouter un membre d'\xe9quipe"),u.Qb(),u.Nb(63,"ion-icon",39),u.Qb(),u.Qb(),u.Rb(64,"div",31),u.Rb(65,"ion-list",40),u.Rb(66,"ion-list-header"),u.Rb(67,"ion-label",41),u.Ac(68,"Sur quelles p\xe9riodes \xeates-vous disponibles pour travailler chez nous ?"),u.Qb(),u.Qb(),u.yc(69,j,4,2,"ion-item",33),u.Qb(),u.Rb(70,"p",25),u.Ac(71," Veuillez renseigner une disponibilit\xe9 "),u.Qb(),u.Qb(),u.Rb(72,"ion-item"),u.Rb(73,"ion-label",23),u.Ac(74," Un lien vid\xe9o vers un projet actuel ou pass\xe9 que vous pouvez nous partager ?"),u.Nb(75,"br"),u.Ac(76," Vous avez un site internet qu'on peut visiter ?"),u.Nb(77,"br"),u.Ac(78," Et des partenaires ou soutiens (institutionnels ou autres...) ? "),u.Qb(),u.Nb(79,"ion-textarea",42),u.Qb(),u.Rb(80,"p",25),u.Ac(81," Veuillez renseigner des informations "),u.Qb(),u.Rb(82,"div",20),u.Rb(83,"ion-button",43),u.yc(84,q,1,0,"ion-icon",44),u.yc(85,B,1,0,"loader",14),u.Ac(86),u.Qb(),u.Qb(),u.Qb()}if(2&e){var t=u.dc();u.jc("formGroup",t.residenceForm),u.Bb(5),u.jc("ngClass",t.residenceForm.get("projectName").invalid&&t.residenceForm.get("projectName").touched?"show-error":""),u.Bb(6),u.jc("ngClass",t.residenceForm.get("companyName").invalid&&t.residenceForm.get("companyName").touched?"show-error":""),u.Bb(6),u.jc("ngClass",t.residenceForm.get("managerName").invalid&&t.residenceForm.get("managerName").touched?"show-error":""),u.Bb(6),u.jc("ngClass",t.residenceForm.get("email").invalid&&t.residenceForm.get("email").touched?"show-error":""),u.Bb(6),u.jc("ngClass",t.residenceForm.get("phone").invalid&&t.residenceForm.get("phone").touched?"show-error":""),u.Bb(6),u.jc("ngClass",t.residenceForm.get("address").invalid&&t.residenceForm.get("address").touched?"show-error":""),u.Bb(4),u.jc("value",t.locations[0]),u.Bb(4),u.jc("ngForOf",t.locations),u.Bb(6),u.jc("ngForOf",t.artisticPracticeFormArray.controls),u.Bb(5),u.jc("ngClass",t.residenceForm.get("projectDescription").invalid&&t.residenceForm.get("projectDescription").touched?"show-error":""),u.Bb(5),u.jc("ngForOf",t.projectTeamFormArray.controls),u.Bb(10),u.jc("ngForOf",t.availabilityFormArray.controls),u.Bb(1),u.jc("ngClass",t.residenceForm.get("availability").invalid&&t.residenceForm.get("availability").touched?"show-error":""),u.Bb(10),u.jc("ngClass",t.residenceForm.get("extraInfo").invalid&&t.residenceForm.get("extraInfo").touched?"show-error":""),u.Bb(3),u.jc("disabled",t.residenceForm.invalid||t.isLoading),u.Bb(1),u.jc("ngIf",!t.isLoading),u.Bb(1),u.jc("ngIf",t.isLoading),u.Bb(1),u.Cc(" ",t.SEND_BUTTON_TEXT," ")}}var T,k,x,P,E=[{path:"",component:(T=function(){function i(n,t){e(this,i),this.residenceService=n,this.router=t,this.isLoading=!1,this.hideForm=!1,this.isFormSent=!1,this.isFormFailed=!1,this.locations=["Bordeaux M\xe9tropole","R\xe9gion Nouvelle-Aquitaine","France","Au-del\xe0..."],this.artisticPractices=["Danse contemporaine","Th\xe9\xe2tre","Danse - th\xe9\xe2tre","Autre"],this.availabilities=["du 11 au 15 janvier","du 8 au 12 f\xe9vrier","du 8 au 12 mars","du 12 au 16 avril","du 10 au 14 mai","du 31 mai au 4 juin"],this.HEADER_TITLE="Accueil en r\xe9sidence",this.TITLE="Demande de R\xe9sidence Artisitique",this.SEND_BUTTON_TEXT="Envoyer",this.HOME_BTN_TEXT="Accueil",this.RELOAD="R\xe9essayer"}return n(i,[{key:"ngOnInit",value:function(){this._initContactForm()}},{key:"ionViewDidLeave",value:function(){this.residenceForm.reset(),this.isLoading=!1,this.hideForm=!1,this.isFormSent=!1,this.isFormFailed=!1}},{key:"onSubmit",value:function(){var e=this;if(!this.residenceForm.invalid){this.isLoading=!0;var i=this.residenceForm.value.artisticPractice.map(function(i,n){return i?e.artisticPractices[n]:null}).filter(function(e){return null!==e}),n=this.residenceForm.value.availability.map(function(i,n){return i?e.availabilities[n]:null}).filter(function(e){return null!==e}),t=this.residenceForm.value;t.availability=n,t.artisticPractice=i,this.residenceService.postResidenceForm(t).subscribe(function(i){e.isLoading=!1,e.isFormSent=!0,e.hideForm=!0,e.residenceForm.reset()},function(i){e.isLoading=!1,e.isFormFailed=!0})}}},{key:"onNavigateHome",value:function(){this.isLoading=!1,this.isFormSent=!1,this.isFormFailed=!1,this.residenceForm.reset(),this.router.navigateByUrl("/lcdq/accueil")}},{key:"onReload",value:function(){location.reload()}},{key:"onAddTeamMember",value:function(){this.residenceForm.get("projectTeam").push(new a.g(null,a.w.required))}},{key:"onRemoveTeamMember",value:function(e,i){this.residenceForm.get("projectTeam").removeAt(i)}},{key:"_initContactForm",value:function(){this.residenceForm=new a.j({projectName:new a.g(null,a.w.required),companyName:new a.g(null,a.w.required),managerName:new a.g(null,a.w.required),email:new a.g(null,[a.w.required,a.w.email]),phone:new a.g(null,a.w.required),address:new a.g(null,a.w.required),location:new a.g(null,a.w.required),projectDescription:new a.g(null,a.w.required),extraInfo:new a.g(null,a.w.required),projectTeam:new a.e([new a.g(null,a.w.required)],a.w.required),artisticPractice:new a.e([],l()),availability:new a.e([],l())}),this._addControl("artisticPractice",this.artisticPractices),this._addControl("availability",this.availabilities)}},{key:"_addControl",value:function(e,i){var n=this.residenceForm.controls[e];i.forEach(function(){n.push(new a.g(null))})}},{key:"projectTeamFormArray",get:function(){return this.residenceForm.get("projectTeam")}},{key:"artisticPracticeFormArray",get:function(){return this.residenceForm.get("artisticPractice")}},{key:"availabilityFormArray",get:function(){return this.residenceForm.get("availability")}}]),i}(),T.\u0275fac=function(e){return new(e||T)(u.Mb(p),u.Mb(c.g))},T.\u0275cmp=u.Gb({type:T,selectors:[["app-residence"]],decls:51,vars:6,consts:[[3,"headerTitle"],[1,"ion-no-padding"],[1,"squared-shapes",3,"title"],[1,"ion-padding"],["size","12","size-sm","6","offset-sm","3"],[1,"description-container"],[1,"description"],[1,"description-item"],[1,"description-item--icon"],[1,"description-item--content"],[1,"row","ion-padding"],[1,"row"],["size","12","size-sm","4","offset-sm","4",1,"ion-no-padding"],[1,"ion-no-margin"],[4,"ngIf"],["class","message-sent--fail",4,"ngIf"],["class","message-sent--success",4,"ngIf"],["class","residence-form",3,"formGroup","ngSubmit",4,"ngIf"],[1,"message-sent--fail"],[1,"message-sent--success"],[1,"btn__container"],[3,"click"],[1,"residence-form",3,"formGroup","ngSubmit"],["position","floating"],["type","text","name","projectName","formControlName","projectName","required",""],[1,"error-message",3,"ngClass"],["type","text","name","companyName","formControlName","companyName","required",""],["type","text","name","managerName","formControlName","managerName","required",""],["type","email","name","email","formControlName","email","required",""],["type","text","name","phone","formControlName","phone","required",""],["type","text","name","address","formControlName","address","required",""],[1,"form-control","radio-container"],["aria-label","R\xe9gion","formControlName","location",1,"radio-group",3,"value"],["lines","none",4,"ngFor","ngForOf"],["formArrayName","artisticPractice"],["type","text","name","projectDescription","formControlName","projectDescription","required",""],["formArrayName","projectTeam"],[4,"ngFor","ngForOf"],["size","small",3,"click"],["slot","start","name","add-outline"],["formArrayName","availability"],[1,"label"],["name","extraInfo","formControlName","extraInfo","required",""],["type","submit","color","primary",1,"ion-margin-vertical",3,"disabled"],["slot","start","name","paper-plane-outline",4,"ngIf"],["lines","none"],["slot","start",3,"value"],["slot","start",3,"formControlName"],["type","text","name","projectTeam","required","",3,"formControlName"],["fill","clear","size","small",3,"click",4,"ngIf"],["fill","clear","size","small",3,"click"],["name","close-outline"],["slot","start","name","paper-plane-outline"]],template:function(e,i){1&e&&(u.Nb(0,"ion-header-component",0),u.Rb(1,"ion-content"),u.Rb(2,"ion-grid",1),u.Rb(3,"ion-row"),u.Rb(4,"ion-col"),u.Nb(5,"squared-shapes-svg",2),u.Qb(),u.Qb(),u.Rb(6,"ion-row",3),u.Rb(7,"ion-col",4),u.Rb(8,"div",5),u.Rb(9,"ul",6),u.Rb(10,"li",7),u.Nb(11,"two-triangle-svg",8),u.Rb(12,"p",9),u.Ac(13," Pour les artistes et compagnies du spectacle vivant, plus sp\xe9cifiquement en danse contemporaine et en th\xe9\xe2tre, en priorit\xe9 aux compagnies et artistes install\xe9s dans la r\xe9gion bordelaise. "),u.Qb(),u.Qb(),u.Rb(14,"li",7),u.Nb(15,"two-triangle-svg",8),u.Rb(16,"p",9),u.Ac(17," Accueil en r\xe9sidence pendant 5 jours, du lundi au vendredi, 9h \xe0 16h. "),u.Qb(),u.Qb(),u.Rb(18,"li",7),u.Nb(19,"two-triangle-svg",8),u.Rb(20,"p",9),u.Ac(21," Possibilit\xe9 d\u2019accompagnement artistique avec les membres de la Cie Bela & C\xf4me - Bela Balsa et C\xf4me Tanguy. "),u.Qb(),u.Qb(),u.Rb(22,"li",7),u.Nb(23,"two-triangle-svg",8),u.Rb(24,"p",9),u.Ac(25," Pr\xe9sentation en fin de semaine aupr\xe8s d\u2019un public restreint d\u2019une \xe9tape de travail, extrait, lecture, selon l\u2019envie des artistes. "),u.Qb(),u.Qb(),u.Rb(26,"li",7),u.Nb(27,"two-triangle-svg",8),u.Rb(28,"p",9),u.Ac(29," L\u2019espace de travail est de 50m2 et ne permet pas d\u2019accueillir de grands groupes."),u.Nb(30,"br"),u.Qb(),u.Qb(),u.Rb(31,"li",7),u.Nb(32,"two-triangle-svg",8),u.Rb(33,"p",9),u.Ac(34,"Pas de technique lumi\xe8re."),u.Qb(),u.Qb(),u.Rb(35,"li",7),u.Nb(36,"two-triangle-svg",8),u.Rb(37,"p",9),u.Ac(38," Possibilit\xe9 de stocker, le temps de la r\xe9sidence, une tr\xe8s petite quantit\xe9 de mat\xe9riel. "),u.Qb(),u.Qb(),u.Qb(),u.Qb(),u.Qb(),u.Qb(),u.Rb(39,"ion-row",10),u.Rb(40,"ion-col",4),u.Rb(41,"div"),u.Ac(42," Merci de compl\xe9ter le formulaire pour que nous commencions \xe0 faire connaissance. Si vous ne disposez pas de certains \xe9l\xe9ments ou si nos questions ne correspondent pas du tout \xe0 ce que vous faites, pas de soucis, adaptez... Rien n'est d\xe9finitif ni exhaustif. "),u.Qb(),u.Qb(),u.Qb(),u.Rb(43,"ion-row",11),u.Rb(44,"ion-col",12),u.Rb(45,"ion-card",13),u.Rb(46,"ion-card-content"),u.yc(47,R,1,0,"loader",14),u.yc(48,Q,3,0,"div",15),u.yc(49,y,6,1,"div",16),u.yc(50,C,87,19,"form",17),u.Qb(),u.Qb(),u.Qb(),u.Qb(),u.Qb(),u.Qb()),2&e&&(u.jc("headerTitle",i.HEADER_TITLE),u.Bb(5),u.jc("title",i.TITLE),u.Bb(42),u.jc("ngIf",i.isLoading),u.Bb(1),u.jc("ngIf",!i.isLoading&&i.isFormFailed&&!i.isFormSent),u.Bb(1),u.jc("ngIf",!i.isLoading&&i.isFormSent),u.Bb(1),u.jc("ngIf",!i.isLoading&&!i.hideForm))},directives:[g.a,s.n,s.o,s.D,s.m,f.a,v.a,s.h,s.i,r.m,h.a,s.f,a.x,a.r,a.k,s.s,s.t,s.r,s.V,a.q,a.i,a.v,r.k,s.u,s.B,s.U,s.v,r.l,a.f,s.q,s.L,s.A,s.S,s.l,s.a],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");.description-item[_ngcontent-%COMP%]{margin:1rem auto 0}.description-item[_ngcontent-%COMP%], .description-item--icon[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:flex-start}.description-item--icon[_ngcontent-%COMP%]{width:20px;height:20px;margin:0 1rem 0 0}.description-item--content[_ngcontent-%COMP%]{flex:1}.residence-form[_ngcontent-%COMP%]{width:100%;max-width:320px;margin:0 auto}.btn__container[_ngcontent-%COMP%]{display:flex;justify-content:center}']}),T)},{path:"residence",redirectTo:"",pathMatch:"full"}],I=((x=function i(){e(this,i)}).\u0275mod=u.Kb({type:x}),x.\u0275inj=u.Jb({factory:function(e){return new(e||x)},imports:[[c.k.forChild(E)],c.k]}),x),_=((k=function i(){e(this,i)}).\u0275mod=u.Kb({type:k}),k.\u0275inj=u.Jb({factory:function(e){return new(e||k)},providers:[],imports:[[r.b,a.u,s.P]]}),k),L=o("PCNd"),S=((P=function i(){e(this,i)}).\u0275mod=u.Kb({type:P}),P.\u0275inj=u.Jb({factory:function(e){return new(e||P)},imports:[[r.b,a.u,s.P,I,L.a,_]]}),P)}}])}();