!function(){function e(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function i(e,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function n(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{egi8:function(i,t,o){"use strict";o.r(t),o.d(t,"ResidencePageModule",function(){return O});var r=o("ofXK"),a=o("3Pt+"),s=o("TEn/"),c=o("tyNb");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(i){var n=0;return Object.keys(i.controls).forEach(function(e){!0===i.controls[e].value&&n++}),n<e?{requireOneCheckboxToBeChecked:!0}:null}}var b,m=o("fXoL"),u=o("AytR"),d=o("tk/3"),p=((b=function(){function i(n){e(this,i),this.http=n,this.RESIDENCE_URL=u.a.apiUrl+"/residence"}return n(i,[{key:"postResidenceForm",value:function(e){return console.log("residence service:",e),this.http.post(this.RESIDENCE_URL,e)}}]),i}()).\u0275fac=function(e){return new(e||b)(m.Vb(d.b))},b.\u0275prov=m.Ib({token:b,factory:b.\u0275fac,providedIn:"root"}),b),g=o("TTZi"),f=o("JgnI"),v=o("JXrQ"),R=o("o7am");function h(e,i){1&e&&m.Nb(0,"loader")}function Q(e,i){if(1&e){var n=m.Sb();m.Rb(0,"div",18),m.Rb(1,"ion-text",19),m.Rb(2,"p",20),m.Bc(3,"Votre message n'a pas pu \xeatre envoy\xe9. Veuillez r\xe9essayer."),m.Qb(),m.Qb(),m.Rb(4,"div",21),m.Rb(5,"ion-button",22),m.Zb("click",function(){return m.rc(n),m.dc().onReload()}),m.Bc(6),m.Qb(),m.Qb(),m.Qb()}if(2&e){var t=m.dc();m.Bb(6),m.Cc(t.RELOAD)}}function B(e,i){if(1&e){var n=m.Sb();m.Rb(0,"div",23),m.Rb(1,"ion-text",24),m.Rb(2,"p",20),m.Bc(3," Merci, votre demande a bien \xe9t\xe9 envoy\xe9e. Nous vous r\xe9pondrons le plus t\xf4t possible. "),m.Qb(),m.Qb(),m.Rb(4,"div",21),m.Rb(5,"ion-button",22),m.Zb("click",function(){return m.rc(n),m.dc().onNavigateHome()}),m.Bc(6),m.Qb(),m.Qb(),m.Qb()}if(2&e){var t=m.dc();m.Bb(6),m.Cc(t.HOME_BTN_TEXT)}}function y(e,i){if(1&e&&(m.Rb(0,"ion-item",50),m.Rb(1,"ion-label"),m.Bc(2),m.Qb(),m.Nb(3,"ion-radio",51),m.Qb()),2&e){var n=i.$implicit;m.Bb(2),m.Cc(n),m.Bb(1),m.kc("value",n)}}function N(e,i){if(1&e&&(m.Rb(0,"ion-item",50),m.Rb(1,"ion-label"),m.Bc(2),m.Qb(),m.Nb(3,"ion-checkbox",52),m.Qb()),2&e){var n=i.index,t=m.dc(2);m.Bb(2),m.Cc(t.artisticPractices[n]),m.Bb(1),m.kc("formControlName",n)}}function F(e,i){if(1&e&&(m.Rb(0,"ion-item",50),m.Rb(1,"ion-label"),m.Bc(2),m.Qb(),m.Nb(3,"ion-checkbox",53),m.Qb()),2&e){var n=i.index,t=m.dc(2);m.Bb(2),m.Cc(t.availabilities[n]),m.Bb(1),m.kc("formControlName",n)("disabled",0===n||1===n)}}function k(e,i){if(1&e){var n=m.Sb();m.Rb(0,"ion-button",56),m.Zb("click",function(e){m.rc(n);var i=m.dc().index;return m.dc(2).onRemoveTeamMember(e,i)}),m.Bc(1," Supprimer "),m.Nb(2,"ion-icon",57),m.Qb()}}function w(e,i){if(1&e&&(m.Rb(0,"div"),m.Rb(1,"ion-item"),m.Rb(2,"ion-label",26),m.Bc(3,"Nom, pr\xe9nom et fonction"),m.Rb(4,"span",27),m.Bc(5,"*"),m.Qb(),m.Qb(),m.Nb(6,"ion-input",54),m.Qb(),m.Rb(7,"p",29),m.Bc(8," Veuillez renseigner les informations "),m.Qb(),m.zc(9,k,3,0,"ion-button",55),m.Qb()),2&e){var n=i.$implicit,t=i.index,o=m.dc(2);m.Bb(6),m.kc("formControlName",t),m.Bb(1),m.kc("ngClass",n.invalid&&n.touched?"show-error":""),m.Bb(2),m.kc("ngIf",o.projectTeamFormArray.controls.length>1)}}function C(e,i){1&e&&m.Nb(0,"ion-icon",58)}function T(e,i){1&e&&m.Nb(0,"loader")}function x(e,i){if(1&e){var n=m.Sb();m.Rb(0,"form",25),m.Rb(1,"ion-list"),m.Rb(2,"ion-item"),m.Rb(3,"ion-label",26),m.Bc(4,"Nom du projet"),m.Rb(5,"span",27),m.Bc(6,"*"),m.Qb(),m.Qb(),m.Nb(7,"ion-input",28),m.Qb(),m.Rb(8,"p",29),m.Bc(9," Veuillez renseigner un nom de projet "),m.Qb(),m.Rb(10,"ion-item"),m.Rb(11,"ion-label",26),m.Bc(12,"Nom de la compagnie"),m.Rb(13,"span",27),m.Bc(14,"*"),m.Qb(),m.Qb(),m.Nb(15,"ion-input",30),m.Qb(),m.Rb(16,"p",29),m.Bc(17," Veuillez renseigner le nom de la compagnie "),m.Qb(),m.Rb(18,"ion-item"),m.Rb(19,"ion-label",26),m.Bc(20,"Nom de la personne qui g\xe8re cette candidature"),m.Rb(21,"span",27),m.Bc(22,"*"),m.Qb(),m.Qb(),m.Nb(23,"ion-input",31),m.Qb(),m.Rb(24,"p",29),m.Bc(25," Veuillez renseigner votre nom "),m.Qb(),m.Rb(26,"ion-item"),m.Rb(27,"ion-label",26),m.Bc(28,"E-mail"),m.Rb(29,"span",27),m.Bc(30,"*"),m.Qb(),m.Qb(),m.Nb(31,"ion-input",32),m.Qb(),m.Rb(32,"p",29),m.Bc(33," Veuillez renseigner votre email "),m.Qb(),m.Rb(34,"ion-item"),m.Rb(35,"ion-label",26),m.Bc(36,"T\xe9l\xe9phone"),m.Rb(37,"span",27),m.Bc(38,"*"),m.Qb(),m.Qb(),m.Nb(39,"ion-input",33),m.Qb(),m.Rb(40,"p",29),m.Bc(41," Veuillez renseigner un num\xe9ro de t\xe9l\xe9phone "),m.Qb(),m.Rb(42,"ion-item"),m.Rb(43,"ion-label",26),m.Bc(44,"Adresse de gestion de la structure"),m.Rb(45,"span",27),m.Bc(46,"*"),m.Qb(),m.Qb(),m.Nb(47,"ion-input",34),m.Qb(),m.Rb(48,"p",29),m.Bc(49," Veuillez renseigner une adresse "),m.Qb(),m.Rb(50,"ion-item"),m.Rb(51,"ion-label",26),m.Bc(52,"Quelques mots sur votre projet"),m.Rb(53,"span",27),m.Bc(54,"*"),m.Qb(),m.Qb(),m.Nb(55,"ion-input",35),m.Qb(),m.Rb(56,"p",29),m.Bc(57," Veuillez renseigner une description "),m.Qb(),m.Rb(58,"ion-item"),m.Rb(59,"ion-label",26),m.Bc(60," Un lien vid\xe9o vers un projet actuel ou pass\xe9 ?"),m.Qb(),m.Nb(61,"ion-input",36),m.Qb(),m.Rb(62,"ion-item"),m.Rb(63,"ion-label",26),m.Bc(64,"Site internet"),m.Qb(),m.Nb(65,"ion-input",37),m.Qb(),m.Rb(66,"ion-item"),m.Rb(67,"ion-label",26),m.Bc(68,"Des partenaires ou soutiens ? "),m.Qb(),m.Nb(69,"ion-input",38),m.Qb(),m.Rb(70,"ion-radio-group",39),m.Rb(71,"ion-list-header"),m.Rb(72,"ion-label"),m.Bc(73,"Vous \xeates install\xe9 dans quel coin ?"),m.Rb(74,"span",27),m.Bc(75,"*"),m.Qb(),m.Qb(),m.Qb(),m.zc(76,y,4,2,"ion-item",40),m.Qb(),m.Rb(77,"ion-list",41),m.Rb(78,"ion-list-header"),m.Rb(79,"ion-label"),m.Bc(80,"Votre pratique artistique"),m.Rb(81,"span",27),m.Bc(82,"*"),m.Qb(),m.Qb(),m.Qb(),m.zc(83,N,4,2,"ion-item",40),m.Qb(),m.Rb(84,"ion-list",42),m.Rb(85,"ion-list-header"),m.Rb(86,"ion-label"),m.Bc(87,"Sur quelles p\xe9riodes \xeates-vous disponibles pour travailler chez nous ?"),m.Rb(88,"span",27),m.Bc(89,"*"),m.Qb(),m.Qb(),m.Qb(),m.zc(90,F,4,3,"ion-item",40),m.Qb(),m.Rb(91,"p",29),m.Bc(92," Veuillez renseigner une disponibilit\xe9 "),m.Qb(),m.Rb(93,"ion-list",43),m.Rb(94,"ion-list-header"),m.Rb(95,"ion-label"),m.Bc(96,"De qui l'\xe9quipe sera-t-elle constitu\xe9e?"),m.Qb(),m.Qb(),m.zc(97,w,10,3,"div",44),m.Rb(98,"div",21),m.Rb(99,"ion-button",45),m.Zb("click",function(){return m.rc(n),m.dc().onAddTeamMember()}),m.Bc(100," Ajouter un membre d'\xe9quipe "),m.Nb(101,"ion-icon",46),m.Qb(),m.Qb(),m.Qb(),m.Rb(102,"div",47),m.Rb(103,"ion-button",48),m.zc(104,C,1,0,"ion-icon",49),m.zc(105,T,1,0,"loader",14),m.Bc(106),m.Qb(),m.Qb(),m.Qb(),m.Qb()}if(2&e){var t=m.dc();m.kc("formGroup",t.residenceForm),m.Bb(8),m.kc("ngClass",t.residenceForm.get("projectName").invalid&&t.residenceForm.get("projectName").touched?"show-error":""),m.Bb(8),m.kc("ngClass",t.residenceForm.get("companyName").invalid&&t.residenceForm.get("companyName").touched?"show-error":""),m.Bb(8),m.kc("ngClass",t.residenceForm.get("managerName").invalid&&t.residenceForm.get("managerName").touched?"show-error":""),m.Bb(8),m.kc("ngClass",t.residenceForm.get("email").invalid&&t.residenceForm.get("email").touched?"show-error":""),m.Bb(8),m.kc("ngClass",t.residenceForm.get("phone").invalid&&t.residenceForm.get("phone").touched?"show-error":""),m.Bb(8),m.kc("ngClass",t.residenceForm.get("address").invalid&&t.residenceForm.get("address").touched?"show-error":""),m.Bb(8),m.kc("ngClass",t.residenceForm.get("projectDescription").invalid&&t.residenceForm.get("projectDescription").touched?"show-error":""),m.Bb(14),m.kc("value",t.locations[0]),m.Bb(6),m.kc("ngForOf",t.locations),m.Bb(7),m.kc("ngForOf",t.artisticPracticeFormArray.controls),m.Bb(7),m.kc("ngForOf",t.availabilityFormArray.controls),m.Bb(1),m.kc("ngClass",t.residenceForm.get("availability").invalid&&t.residenceForm.get("availability").touched?"show-error":""),m.Bb(6),m.kc("ngForOf",t.projectTeamFormArray.controls),m.Bb(6),m.kc("disabled",t.residenceForm.invalid||t.isLoading),m.Bb(1),m.kc("ngIf",!t.isLoading),m.Bb(1),m.kc("ngIf",t.isLoading),m.Bb(1),m.Dc(" ",t.SEND_BUTTON_TEXT," ")}}var q,_,j,z,E=[{path:"",component:(q=function(){function i(n,t){e(this,i),this.residenceService=n,this.router=t,this.isLoading=!1,this.hideForm=!1,this.isFormSent=!1,this.isFormFailed=!1,this.locations=["Bordeaux M\xe9tropole","R\xe9gion Nouvelle-Aquitaine","France","Au-del\xe0..."],this.artisticPractices=["Danse contemporaine","Th\xe9\xe2tre","Danse - th\xe9\xe2tre","Autre"],this.availabilities=["du 11 au 15 janvier","du 8 au 12 f\xe9vrier","du 8 au 12 mars","du 12 au 16 avril","du 10 au 14 mai","du 31 mai au 4 juin"],this.HEADER_TITLE="Accueil en r\xe9sidence",this.TITLE="Demande de R\xe9sidence Artisitique",this.SEND_BUTTON_TEXT="Envoyer",this.HOME_BTN_TEXT="Accueil",this.RELOAD="R\xe9essayer"}return n(i,[{key:"ngOnInit",value:function(){this._initContactForm()}},{key:"ionViewDidLeave",value:function(){this.residenceForm.reset(),this.isLoading=!1,this.hideForm=!1,this.isFormSent=!1,this.isFormFailed=!1}},{key:"onSubmit",value:function(){var e=this;if(!this.residenceForm.invalid){this.isLoading=!0;var i=this.residenceForm.value.artisticPractice.map(function(i,n){return i?e.artisticPractices[n]:null}).filter(function(e){return null!==e}),n=this.residenceForm.value.availability.map(function(i,n){return i?e.availabilities[n]:null}).filter(function(e){return null!==e}),t=this.residenceForm.value;t.availability=n,t.artisticPractice=i,this.residenceService.postResidenceForm(t).subscribe(function(i){e.isLoading=!1,e.isFormSent=!0,e.hideForm=!0,e.residenceForm.reset()},function(i){e.isLoading=!1,e.isFormFailed=!0})}}},{key:"onNavigateHome",value:function(){this.isLoading=!1,this.isFormSent=!1,this.isFormFailed=!1,this.residenceForm.reset(),this.router.navigateByUrl("/lcdq/accueil")}},{key:"onReload",value:function(){location.reload()}},{key:"onAddTeamMember",value:function(){this.residenceForm.get("projectTeam").push(new a.g(null,a.x.required))}},{key:"onRemoveTeamMember",value:function(e,i){this.residenceForm.get("projectTeam").removeAt(i)}},{key:"_initContactForm",value:function(){this.residenceForm=new a.j({projectName:new a.g(null,a.x.required),companyName:new a.g(null,a.x.required),managerName:new a.g(null,a.x.required),email:new a.g(null,[a.x.required,a.x.email]),phone:new a.g(null,a.x.required),address:new a.g(null,a.x.required),location:new a.g(null,a.x.required),projectDescription:new a.g(null,a.x.required),projectTeam:new a.e([new a.g(null,a.x.required)],a.x.required),artisticPractice:new a.e([],l()),availability:new a.e([],l()),videoLink:new a.g(null),website:new a.g(null),partners:new a.g(null)}),this._addControl("artisticPractice",this.artisticPractices),this._addControl("availability",this.availabilities)}},{key:"_addControl",value:function(e,i){var n=this.residenceForm.controls[e];i.forEach(function(){n.push(new a.g(null))})}},{key:"projectTeamFormArray",get:function(){return this.residenceForm.get("projectTeam")}},{key:"artisticPracticeFormArray",get:function(){return this.residenceForm.get("artisticPractice")}},{key:"availabilityFormArray",get:function(){return this.residenceForm.get("availability")}}]),i}(),q.\u0275fac=function(e){return new(e||q)(m.Mb(p),m.Mb(c.g))},q.\u0275cmp=m.Gb({type:q,selectors:[["app-residence"]],decls:51,vars:6,consts:[[3,"headerTitle"],[1,"ion-no-padding"],[1,"squared-shapes",3,"title"],[1,"ion-padding"],["size","12","size-sm","6","offset-sm","3"],[1,"description-container"],[1,"description"],[1,"description-item"],[1,"description-item--icon"],[1,"description-item--content"],[1,"row","ion-padding"],[1,"row"],["size","12","size-sm","4","offset-sm","4",1,"ion-no-padding"],[1,"ion-no-margin","ion-margin-vertical"],[4,"ngIf"],["class","message-sent message-sent--fail ",4,"ngIf"],["class","message-sent message-sent--success",4,"ngIf"],["class","residence-form",3,"formGroup",4,"ngIf"],[1,"message-sent","message-sent--fail"],["color","danger"],[1,"ion-text-center","message-sent__content"],[1,"btn__container","ion-margin-vertical"],[3,"click"],[1,"message-sent","message-sent--success"],["color","primary"],[1,"residence-form",3,"formGroup"],["position","floating"],[1,"label-asterisk"],["type","text","name","projectName","formControlName","projectName","required",""],[1,"error-message",3,"ngClass"],["type","text","name","companyName","formControlName","companyName","required",""],["type","text","name","managerName","formControlName","managerName","required",""],["type","email","name","email","formControlName","email","required",""],["type","text","name","phone","formControlName","phone","required",""],["type","text","name","address","formControlName","address","required",""],["type","text","name","projectDescription","formControlName","projectDescription"],["name","videoLink","formControlName","videoLink"],["name","website","formControlName","website"],["name","partners","formControlName","partners"],["aria-label","R\xe9gion","formControlName","location",1,"radio-group",3,"value"],["lines","none",4,"ngFor","ngForOf"],["formArrayName","artisticPractice"],["formArrayName","availability"],["formArrayName","projectTeam"],[4,"ngFor","ngForOf"],["fill","clear","size","small",3,"click"],["slot","start","name","add-outline"],[1,"btn__container","btn__container--submit"],["type","submit","color","primary",1,"ion-margin-vertical",3,"disabled"],["slot","start","name","paper-plane-outline",4,"ngIf"],["lines","none"],["slot","start",3,"value"],["slot","start",3,"formControlName"],["slot","start",3,"formControlName","disabled"],["type","text","name","projectTeam","required","",3,"formControlName"],["fill","clear","size","small","color","secondary",3,"click",4,"ngIf"],["fill","clear","size","small","color","secondary",3,"click"],["slot","end","name","close-outline"],["slot","start","name","paper-plane-outline"]],template:function(e,i){1&e&&(m.Nb(0,"ion-header-component",0),m.Rb(1,"ion-content"),m.Rb(2,"ion-grid",1),m.Rb(3,"ion-row"),m.Rb(4,"ion-col"),m.Nb(5,"squared-shapes-svg",2),m.Qb(),m.Qb(),m.Rb(6,"ion-row",3),m.Rb(7,"ion-col",4),m.Rb(8,"div",5),m.Rb(9,"ul",6),m.Rb(10,"li",7),m.Nb(11,"two-triangle-svg",8),m.Rb(12,"p",9),m.Bc(13," Pour les artistes et compagnies du spectacle vivant, plus sp\xe9cifiquement en danse contemporaine et en th\xe9\xe2tre, en priorit\xe9 aux compagnies et artistes install\xe9s dans la r\xe9gion bordelaise. "),m.Qb(),m.Qb(),m.Rb(14,"li",7),m.Nb(15,"two-triangle-svg",8),m.Rb(16,"p",9),m.Bc(17," Accueil en r\xe9sidence pendant 5 jours, du lundi au vendredi, 9h \xe0 16h. "),m.Qb(),m.Qb(),m.Rb(18,"li",7),m.Nb(19,"two-triangle-svg",8),m.Rb(20,"p",9),m.Bc(21," Possibilit\xe9 d\u2019accompagnement artistique avec les membres de la Cie Bela & C\xf4me - Bela Balsa et C\xf4me Tanguy. "),m.Qb(),m.Qb(),m.Rb(22,"li",7),m.Nb(23,"two-triangle-svg",8),m.Rb(24,"p",9),m.Bc(25," Pr\xe9sentation en fin de semaine aupr\xe8s d\u2019un public restreint d\u2019une \xe9tape de travail, extrait, lecture, selon l\u2019envie des artistes. "),m.Qb(),m.Qb(),m.Rb(26,"li",7),m.Nb(27,"two-triangle-svg",8),m.Rb(28,"p",9),m.Bc(29," L\u2019espace de travail est de 50m2 et ne permet pas d\u2019accueillir de grands groupes."),m.Nb(30,"br"),m.Qb(),m.Qb(),m.Rb(31,"li",7),m.Nb(32,"two-triangle-svg",8),m.Rb(33,"p",9),m.Bc(34,"Pas de technique lumi\xe8re."),m.Qb(),m.Qb(),m.Rb(35,"li",7),m.Nb(36,"two-triangle-svg",8),m.Rb(37,"p",9),m.Bc(38," Possibilit\xe9 de stocker, le temps de la r\xe9sidence, une tr\xe8s petite quantit\xe9 de mat\xe9riel. "),m.Qb(),m.Qb(),m.Qb(),m.Qb(),m.Qb(),m.Qb(),m.Rb(39,"ion-row",10),m.Rb(40,"ion-col",4),m.Rb(41,"div"),m.Bc(42," Merci de compl\xe9ter le formulaire pour que nous commencions \xe0 faire connaissance. Si vous ne disposez pas de certains \xe9l\xe9ments ou si nos questions ne correspondent pas du tout \xe0 ce que vous faites, pas de soucis, adaptez... Rien n'est d\xe9finitif ni exhaustif. "),m.Qb(),m.Qb(),m.Qb(),m.Rb(43,"ion-row",11),m.Rb(44,"ion-col",12),m.Rb(45,"ion-card",13),m.Rb(46,"ion-card-content"),m.zc(47,h,1,0,"loader",14),m.zc(48,Q,7,1,"div",15),m.zc(49,B,7,1,"div",16),m.zc(50,x,107,18,"form",17),m.Qb(),m.Qb(),m.Qb(),m.Qb(),m.Qb(),m.Qb()),2&e&&(m.kc("headerTitle",i.HEADER_TITLE),m.Bb(5),m.kc("title",i.TITLE),m.Bb(42),m.kc("ngIf",i.isLoading),m.Bb(1),m.kc("ngIf",!i.isLoading&&i.isFormFailed&&!i.isFormSent),m.Bb(1),m.kc("ngIf",!i.isLoading&&i.isFormSent),m.Bb(1),m.kc("ngIf",!i.isLoading&&!i.hideForm))},directives:[g.a,s.n,s.p,s.E,s.m,f.a,v.a,s.h,s.i,r.m,R.a,s.L,s.f,a.y,a.r,a.k,s.v,s.t,s.u,s.s,s.Y,a.q,a.i,a.w,r.k,s.C,s.X,s.w,r.l,a.f,s.r,s.B,s.V,s.l,s.a],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");.description-item[_ngcontent-%COMP%]{margin:1rem auto 0}.description-item[_ngcontent-%COMP%], .description-item--icon[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:flex-start}.description-item--icon[_ngcontent-%COMP%]{width:20px;height:20px;margin:0 1rem 0 0}.description-item--content[_ngcontent-%COMP%]{flex:1}.message-sent[_ngcontent-%COMP%]{display:flex;flex-direction:column}.message-sent__content[_ngcontent-%COMP%]{margin:1rem 0}.btn__container[_ngcontent-%COMP%]{display:flex;justify-content:center}.btn__container--submit[_ngcontent-%COMP%]{margin:2rem 0 0}']}),q)},{path:"residence",redirectTo:"",pathMatch:"full"}],P=((j=function i(){e(this,i)}).\u0275mod=m.Kb({type:j}),j.\u0275inj=m.Jb({factory:function(e){return new(e||j)},imports:[[c.k.forChild(E)],c.k]}),j),L=((_=function i(){e(this,i)}).\u0275mod=m.Kb({type:_}),_.\u0275inj=m.Jb({factory:function(e){return new(e||_)},providers:[],imports:[[r.b,a.v,s.Q]]}),_),A=o("PCNd"),O=((z=function i(){e(this,i)}).\u0275mod=m.Kb({type:z}),z.\u0275inj=m.Jb({factory:function(e){return new(e||z)},imports:[[r.b,a.v,s.Q,P,A.a,L]]}),z)}}])}();