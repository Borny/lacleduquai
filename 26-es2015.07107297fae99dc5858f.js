(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{egi8:function(e,i,n){"use strict";n.r(i),n.d(i,"ResidencePageModule",function(){return _});var t=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),s=n("tyNb");function a(e=1){return function(i){let n=0;return Object.keys(i.controls).forEach(e=>{!0===i.controls[e].value&&n++}),n<e?{requireOneCheckboxToBeChecked:!0}:null}}var c=n("fXoL"),l=n("AytR"),b=n("tk/3");let m=(()=>{class e{constructor(e){this.http=e,this.RESIDENCE_URL=l.a.apiUrl+"/residence"}postResidenceForm(e){return console.log("residence service:",e),this.http.post(this.RESIDENCE_URL,e)}}return e.\u0275fac=function(i){return new(i||e)(c.Vb(b.b))},e.\u0275prov=c.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=n("TTZi"),u=n("JgnI"),p=n("JXrQ"),g=n("o7am");function f(e,i){1&e&&c.Nb(0,"loader")}function R(e,i){if(1&e){const e=c.Sb();c.Rb(0,"div",18),c.Rb(1,"ion-text",19),c.Rb(2,"p",20),c.Bc(3,"Votre message n'a pas pu \xeatre envoy\xe9. Veuillez r\xe9essayer."),c.Qb(),c.Qb(),c.Rb(4,"div",21),c.Rb(5,"ion-button",22),c.Zb("click",function(){return c.rc(e),c.dc().onReload()}),c.Bc(6),c.Qb(),c.Qb(),c.Qb()}if(2&e){const e=c.dc();c.Bb(6),c.Cc(e.RELOAD)}}function h(e,i){if(1&e){const e=c.Sb();c.Rb(0,"div",23),c.Rb(1,"ion-text",24),c.Rb(2,"p",20),c.Bc(3," Merci, votre demande a bien \xe9t\xe9 envoy\xe9e. Nous vous r\xe9pondrons le plus t\xf4t possible. "),c.Qb(),c.Qb(),c.Rb(4,"div",21),c.Rb(5,"ion-button",22),c.Zb("click",function(){return c.rc(e),c.dc().onNavigateHome()}),c.Bc(6),c.Qb(),c.Qb(),c.Qb()}if(2&e){const e=c.dc();c.Bb(6),c.Cc(e.HOME_BTN_TEXT)}}function Q(e,i){if(1&e&&(c.Rb(0,"ion-item",50),c.Rb(1,"ion-label"),c.Bc(2),c.Qb(),c.Nb(3,"ion-radio",51),c.Qb()),2&e){const e=i.$implicit;c.Bb(2),c.Cc(e),c.Bb(1),c.kc("value",e)}}function v(e,i){if(1&e&&(c.Rb(0,"ion-item",50),c.Rb(1,"ion-label"),c.Bc(2),c.Qb(),c.Nb(3,"ion-checkbox",52),c.Qb()),2&e){const e=i.index,n=c.dc(2);c.Bb(2),c.Cc(n.artisticPractices[e]),c.Bb(1),c.kc("formControlName",e)}}function B(e,i){if(1&e&&(c.Rb(0,"ion-item",50),c.Rb(1,"ion-label"),c.Bc(2),c.Qb(),c.Nb(3,"ion-checkbox",53),c.Qb()),2&e){const e=i.index,n=c.dc(2);c.Bb(2),c.Cc(n.availabilities[e]),c.Bb(1),c.kc("formControlName",e)("disabled",0===e||1===e)}}function N(e,i){if(1&e){const e=c.Sb();c.Rb(0,"ion-button",56),c.Zb("click",function(i){c.rc(e);const n=c.dc().index;return c.dc(2).onRemoveTeamMember(i,n)}),c.Bc(1," Supprimer "),c.Nb(2,"ion-icon",57),c.Qb()}}function F(e,i){if(1&e&&(c.Rb(0,"div"),c.Rb(1,"ion-item"),c.Rb(2,"ion-label",26),c.Bc(3,"Nom, pr\xe9nom et fonction"),c.Rb(4,"span",27),c.Bc(5,"*"),c.Qb(),c.Qb(),c.Nb(6,"ion-input",54),c.Qb(),c.Rb(7,"p",29),c.Bc(8," Veuillez renseigner les informations "),c.Qb(),c.zc(9,N,3,0,"ion-button",55),c.Qb()),2&e){const e=i.$implicit,n=i.index,t=c.dc(2);c.Bb(6),c.kc("formControlName",n),c.Bb(1),c.kc("ngClass",e.invalid&&e.touched?"show-error":""),c.Bb(2),c.kc("ngIf",t.projectTeamFormArray.controls.length>1)}}function y(e,i){1&e&&c.Nb(0,"ion-icon",58)}function w(e,i){1&e&&c.Nb(0,"loader")}function C(e,i){if(1&e){const e=c.Sb();c.Rb(0,"form",25),c.Zb("ngSubmit",function(){return c.rc(e),c.dc().onSubmit()}),c.Rb(1,"ion-list"),c.Rb(2,"ion-item"),c.Rb(3,"ion-label",26),c.Bc(4,"Nom du projet"),c.Rb(5,"span",27),c.Bc(6,"*"),c.Qb(),c.Qb(),c.Nb(7,"ion-input",28),c.Qb(),c.Rb(8,"p",29),c.Bc(9," Veuillez renseigner un nom de projet "),c.Qb(),c.Rb(10,"ion-item"),c.Rb(11,"ion-label",26),c.Bc(12,"Nom de la compagnie"),c.Rb(13,"span",27),c.Bc(14,"*"),c.Qb(),c.Qb(),c.Nb(15,"ion-input",30),c.Qb(),c.Rb(16,"p",29),c.Bc(17," Veuillez renseigner le nom de la compagnie "),c.Qb(),c.Rb(18,"ion-item"),c.Rb(19,"ion-label",26),c.Bc(20,"Nom de la personne qui g\xe8re cette candidature"),c.Rb(21,"span",27),c.Bc(22,"*"),c.Qb(),c.Qb(),c.Nb(23,"ion-input",31),c.Qb(),c.Rb(24,"p",29),c.Bc(25," Veuillez renseigner votre nom "),c.Qb(),c.Rb(26,"ion-item"),c.Rb(27,"ion-label",26),c.Bc(28,"E-mail"),c.Rb(29,"span",27),c.Bc(30,"*"),c.Qb(),c.Qb(),c.Nb(31,"ion-input",32),c.Qb(),c.Rb(32,"p",29),c.Bc(33," Veuillez renseigner votre email "),c.Qb(),c.Rb(34,"ion-item"),c.Rb(35,"ion-label",26),c.Bc(36,"T\xe9l\xe9phone"),c.Rb(37,"span",27),c.Bc(38,"*"),c.Qb(),c.Qb(),c.Nb(39,"ion-input",33),c.Qb(),c.Rb(40,"p",29),c.Bc(41," Veuillez renseigner un num\xe9ro de t\xe9l\xe9phone "),c.Qb(),c.Rb(42,"ion-item"),c.Rb(43,"ion-label",26),c.Bc(44,"Adresse de gestion de la structure"),c.Rb(45,"span",27),c.Bc(46,"*"),c.Qb(),c.Qb(),c.Nb(47,"ion-input",34),c.Qb(),c.Rb(48,"p",29),c.Bc(49," Veuillez renseigner une adresse "),c.Qb(),c.Rb(50,"ion-item"),c.Rb(51,"ion-label",26),c.Bc(52,"Quelques mots sur votre projet"),c.Rb(53,"span",27),c.Bc(54,"*"),c.Qb(),c.Qb(),c.Nb(55,"ion-input",35),c.Qb(),c.Rb(56,"p",29),c.Bc(57," Veuillez renseigner une description "),c.Qb(),c.Rb(58,"ion-item"),c.Rb(59,"ion-label",26),c.Bc(60," Un lien vid\xe9o vers un projet actuel ou pass\xe9 ?"),c.Qb(),c.Nb(61,"ion-input",36),c.Qb(),c.Rb(62,"ion-item"),c.Rb(63,"ion-label",26),c.Bc(64,"Site internet"),c.Qb(),c.Nb(65,"ion-input",37),c.Qb(),c.Rb(66,"ion-item"),c.Rb(67,"ion-label",26),c.Bc(68,"Des partenaires ou soutiens ? "),c.Qb(),c.Nb(69,"ion-input",38),c.Qb(),c.Rb(70,"ion-radio-group",39),c.Rb(71,"ion-list-header"),c.Rb(72,"ion-label"),c.Bc(73,"Vous \xeates install\xe9 dans quel coin ?"),c.Rb(74,"span",27),c.Bc(75,"*"),c.Qb(),c.Qb(),c.Qb(),c.zc(76,Q,4,2,"ion-item",40),c.Qb(),c.Rb(77,"ion-list",41),c.Rb(78,"ion-list-header"),c.Rb(79,"ion-label"),c.Bc(80,"Votre pratique artistique"),c.Rb(81,"span",27),c.Bc(82,"*"),c.Qb(),c.Qb(),c.Qb(),c.zc(83,v,4,2,"ion-item",40),c.Qb(),c.Rb(84,"ion-list",42),c.Rb(85,"ion-list-header"),c.Rb(86,"ion-label"),c.Bc(87,"Sur quelles p\xe9riodes \xeates-vous disponibles pour travailler chez nous ?"),c.Rb(88,"span",27),c.Bc(89,"*"),c.Qb(),c.Qb(),c.Qb(),c.zc(90,B,4,3,"ion-item",40),c.Qb(),c.Rb(91,"p",29),c.Bc(92," Veuillez renseigner une disponibilit\xe9 "),c.Qb(),c.Rb(93,"ion-list",43),c.Rb(94,"ion-list-header"),c.Rb(95,"ion-label"),c.Bc(96,"De qui l'\xe9quipe sera-t-elle constitu\xe9e?"),c.Qb(),c.Qb(),c.zc(97,F,10,3,"div",44),c.Rb(98,"div",21),c.Rb(99,"ion-button",45),c.Zb("click",function(){return c.rc(e),c.dc().onAddTeamMember()}),c.Bc(100," Ajouter un membre d'\xe9quipe "),c.Nb(101,"ion-icon",46),c.Qb(),c.Qb(),c.Qb(),c.Rb(102,"div",47),c.Rb(103,"ion-button",48),c.zc(104,y,1,0,"ion-icon",49),c.zc(105,w,1,0,"loader",14),c.Bc(106),c.Qb(),c.Qb(),c.Qb(),c.Qb()}if(2&e){const e=c.dc();c.kc("formGroup",e.residenceForm),c.Bb(8),c.kc("ngClass",e.residenceForm.get("projectName").invalid&&e.residenceForm.get("projectName").touched?"show-error":""),c.Bb(8),c.kc("ngClass",e.residenceForm.get("companyName").invalid&&e.residenceForm.get("companyName").touched?"show-error":""),c.Bb(8),c.kc("ngClass",e.residenceForm.get("managerName").invalid&&e.residenceForm.get("managerName").touched?"show-error":""),c.Bb(8),c.kc("ngClass",e.residenceForm.get("email").invalid&&e.residenceForm.get("email").touched?"show-error":""),c.Bb(8),c.kc("ngClass",e.residenceForm.get("phone").invalid&&e.residenceForm.get("phone").touched?"show-error":""),c.Bb(8),c.kc("ngClass",e.residenceForm.get("address").invalid&&e.residenceForm.get("address").touched?"show-error":""),c.Bb(8),c.kc("ngClass",e.residenceForm.get("projectDescription").invalid&&e.residenceForm.get("projectDescription").touched?"show-error":""),c.Bb(14),c.kc("value",e.locations[0]),c.Bb(6),c.kc("ngForOf",e.locations),c.Bb(7),c.kc("ngForOf",e.artisticPracticeFormArray.controls),c.Bb(7),c.kc("ngForOf",e.availabilityFormArray.controls),c.Bb(1),c.kc("ngClass",e.residenceForm.get("availability").invalid&&e.residenceForm.get("availability").touched?"show-error":""),c.Bb(6),c.kc("ngForOf",e.projectTeamFormArray.controls),c.Bb(6),c.kc("disabled",e.residenceForm.invalid||e.isLoading),c.Bb(1),c.kc("ngIf",!e.isLoading),c.Bb(1),c.kc("ngIf",e.isLoading),c.Bb(1),c.Dc(" ",e.SEND_BUTTON_TEXT," ")}}const k=[{path:"",component:(()=>{class e{constructor(e,i){this.residenceService=e,this.router=i,this.isLoading=!1,this.hideForm=!1,this.isFormSent=!1,this.isFormFailed=!1,this.locations=["Bordeaux M\xe9tropole","R\xe9gion Nouvelle-Aquitaine","France","Au-del\xe0..."],this.artisticPractices=["Danse contemporaine","Th\xe9\xe2tre","Danse - th\xe9\xe2tre","Autre"],this.availabilities=["du 11 au 15 janvier","du 8 au 12 f\xe9vrier","du 8 au 12 mars","du 12 au 16 avril","du 10 au 14 mai","du 31 mai au 4 juin"],this.HEADER_TITLE="Accueil en r\xe9sidence",this.TITLE="Demande de R\xe9sidence Artisitique",this.SEND_BUTTON_TEXT="Envoyer",this.HOME_BTN_TEXT="Accueil",this.RELOAD="R\xe9essayer"}ngOnInit(){this._initContactForm()}ionViewDidLeave(){this.residenceForm.reset(),this.isLoading=!1,this.hideForm=!1,this.isFormSent=!1,this.isFormFailed=!1}onSubmit(){if(this.residenceForm.invalid)return;this.isLoading=!0;const e=this.residenceForm.value.artisticPractice.map((e,i)=>e?this.artisticPractices[i]:null).filter(e=>null!==e),i=this.residenceForm.value.availability.map((e,i)=>e?this.availabilities[i]:null).filter(e=>null!==e),n=this.residenceForm.value;n.availability=i,n.artisticPractice=e,this.residenceService.postResidenceForm(n).subscribe(e=>{this.isLoading=!1,this.isFormSent=!0,this.hideForm=!0,this.residenceForm.reset()},e=>{this.isLoading=!1,this.isFormFailed=!0})}onNavigateHome(){this.isLoading=!1,this.isFormSent=!1,this.isFormFailed=!1,this.residenceForm.reset(),this.router.navigateByUrl("/lcdq/accueil")}onReload(){location.reload()}onAddTeamMember(){this.residenceForm.get("projectTeam").push(new o.g(null,o.x.required))}onRemoveTeamMember(e,i){this.residenceForm.get("projectTeam").removeAt(i)}get projectTeamFormArray(){return this.residenceForm.get("projectTeam")}get artisticPracticeFormArray(){return this.residenceForm.get("artisticPractice")}get availabilityFormArray(){return this.residenceForm.get("availability")}_initContactForm(){this.residenceForm=new o.j({projectName:new o.g(null,o.x.required),companyName:new o.g(null,o.x.required),managerName:new o.g(null,o.x.required),email:new o.g(null,[o.x.required,o.x.email]),phone:new o.g(null,o.x.required),address:new o.g(null,o.x.required),location:new o.g(null,o.x.required),projectDescription:new o.g(null,o.x.required),projectTeam:new o.e([new o.g(null,o.x.required)],o.x.required),artisticPractice:new o.e([],a()),availability:new o.e([],a()),videoLink:new o.g(null),website:new o.g(null),partners:new o.g(null)}),this._addControl("artisticPractice",this.artisticPractices),this._addControl("availability",this.availabilities)}_addControl(e,i){const n=this.residenceForm.controls[e];i.forEach(()=>{n.push(new o.g(null))})}}return e.\u0275fac=function(i){return new(i||e)(c.Mb(m),c.Mb(s.g))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-residence"]],decls:51,vars:6,consts:[[3,"headerTitle"],[1,"ion-no-padding"],[1,"squared-shapes",3,"title"],[1,"ion-padding"],["size","12","size-sm","6","offset-sm","3"],[1,"description-container"],[1,"description"],[1,"description-item"],[1,"description-item--icon"],[1,"description-item--content"],[1,"row","ion-padding"],[1,"row"],["size","12","size-sm","4","offset-sm","4",1,"ion-no-padding"],[1,"ion-no-margin","ion-margin-vertical"],[4,"ngIf"],["class","message-sent message-sent--fail ",4,"ngIf"],["class","message-sent message-sent--success",4,"ngIf"],["class","residence-form",3,"formGroup","ngSubmit",4,"ngIf"],[1,"message-sent","message-sent--fail"],["color","danger"],[1,"ion-text-center","message-sent__content"],[1,"btn__container","ion-margin-vertical"],[3,"click"],[1,"message-sent","message-sent--success"],["color","primary"],[1,"residence-form",3,"formGroup","ngSubmit"],["position","floating"],[1,"label-asterisk"],["type","text","name","projectName","formControlName","projectName","required",""],[1,"error-message",3,"ngClass"],["type","text","name","companyName","formControlName","companyName","required",""],["type","text","name","managerName","formControlName","managerName","required",""],["type","email","name","email","formControlName","email","required",""],["type","text","name","phone","formControlName","phone","required",""],["type","text","name","address","formControlName","address","required",""],["type","text","name","projectDescription","formControlName","projectDescription"],["name","videoLink","formControlName","videoLink"],["name","website","formControlName","website"],["name","partners","formControlName","partners"],["aria-label","R\xe9gion","formControlName","location",1,"radio-group",3,"value"],["lines","none",4,"ngFor","ngForOf"],["formArrayName","artisticPractice"],["formArrayName","availability"],["formArrayName","projectTeam"],[4,"ngFor","ngForOf"],["fill","clear","size","small",3,"click"],["slot","start","name","add-outline"],[1,"btn__container","btn__container--submit"],["type","submit","color","primary",1,"ion-margin-vertical",3,"disabled"],["slot","start","name","paper-plane-outline",4,"ngIf"],["lines","none"],["slot","start",3,"value"],["slot","start",3,"formControlName"],["slot","start",3,"formControlName","disabled"],["type","text","name","projectTeam","required","",3,"formControlName"],["fill","clear","size","small","color","secondary",3,"click",4,"ngIf"],["fill","clear","size","small","color","secondary",3,"click"],["slot","end","name","close-outline"],["slot","start","name","paper-plane-outline"]],template:function(e,i){1&e&&(c.Nb(0,"ion-header-component",0),c.Rb(1,"ion-content"),c.Rb(2,"ion-grid",1),c.Rb(3,"ion-row"),c.Rb(4,"ion-col"),c.Nb(5,"squared-shapes-svg",2),c.Qb(),c.Qb(),c.Rb(6,"ion-row",3),c.Rb(7,"ion-col",4),c.Rb(8,"div",5),c.Rb(9,"ul",6),c.Rb(10,"li",7),c.Nb(11,"two-triangle-svg",8),c.Rb(12,"p",9),c.Bc(13," Pour les artistes et compagnies du spectacle vivant, plus sp\xe9cifiquement en danse contemporaine et en th\xe9\xe2tre, en priorit\xe9 aux compagnies et artistes install\xe9s dans la r\xe9gion bordelaise. "),c.Qb(),c.Qb(),c.Rb(14,"li",7),c.Nb(15,"two-triangle-svg",8),c.Rb(16,"p",9),c.Bc(17," Accueil en r\xe9sidence pendant 5 jours, du lundi au vendredi, 9h \xe0 16h. "),c.Qb(),c.Qb(),c.Rb(18,"li",7),c.Nb(19,"two-triangle-svg",8),c.Rb(20,"p",9),c.Bc(21," Possibilit\xe9 d\u2019accompagnement artistique avec les membres de la Cie Bela & C\xf4me - Bela Balsa et C\xf4me Tanguy. "),c.Qb(),c.Qb(),c.Rb(22,"li",7),c.Nb(23,"two-triangle-svg",8),c.Rb(24,"p",9),c.Bc(25," Pr\xe9sentation en fin de semaine aupr\xe8s d\u2019un public restreint d\u2019une \xe9tape de travail, extrait, lecture, selon l\u2019envie des artistes. "),c.Qb(),c.Qb(),c.Rb(26,"li",7),c.Nb(27,"two-triangle-svg",8),c.Rb(28,"p",9),c.Bc(29," L\u2019espace de travail est de 50m2 et ne permet pas d\u2019accueillir de grands groupes."),c.Nb(30,"br"),c.Qb(),c.Qb(),c.Rb(31,"li",7),c.Nb(32,"two-triangle-svg",8),c.Rb(33,"p",9),c.Bc(34,"Pas de technique lumi\xe8re."),c.Qb(),c.Qb(),c.Rb(35,"li",7),c.Nb(36,"two-triangle-svg",8),c.Rb(37,"p",9),c.Bc(38," Possibilit\xe9 de stocker, le temps de la r\xe9sidence, une tr\xe8s petite quantit\xe9 de mat\xe9riel. "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(39,"ion-row",10),c.Rb(40,"ion-col",4),c.Rb(41,"div"),c.Bc(42," Merci de compl\xe9ter le formulaire pour que nous commencions \xe0 faire connaissance. Si vous ne disposez pas de certains \xe9l\xe9ments ou si nos questions ne correspondent pas du tout \xe0 ce que vous faites, pas de soucis, adaptez... Rien n'est d\xe9finitif ni exhaustif. "),c.Qb(),c.Qb(),c.Qb(),c.Rb(43,"ion-row",11),c.Rb(44,"ion-col",12),c.Rb(45,"ion-card",13),c.Rb(46,"ion-card-content"),c.zc(47,f,1,0,"loader",14),c.zc(48,R,7,1,"div",15),c.zc(49,h,7,1,"div",16),c.zc(50,C,107,18,"form",17),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&e&&(c.kc("headerTitle",i.HEADER_TITLE),c.Bb(5),c.kc("title",i.TITLE),c.Bb(42),c.kc("ngIf",i.isLoading),c.Bb(1),c.kc("ngIf",!i.isLoading&&i.isFormFailed&&!i.isFormSent),c.Bb(1),c.kc("ngIf",!i.isLoading&&i.isFormSent),c.Bb(1),c.kc("ngIf",!i.isLoading&&!i.hideForm))},directives:[d.a,r.n,r.p,r.E,r.m,u.a,p.a,r.h,r.i,t.m,g.a,r.L,r.f,o.y,o.r,o.k,r.v,r.t,r.u,r.s,r.Y,o.q,o.i,o.w,t.k,r.C,r.X,r.w,t.l,o.f,r.r,r.B,r.V,r.l,r.a],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");.description-item[_ngcontent-%COMP%]{margin:1rem auto 0}.description-item[_ngcontent-%COMP%], .description-item--icon[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:flex-start}.description-item--icon[_ngcontent-%COMP%]{width:20px;height:20px;margin:0 1rem 0 0}.description-item--content[_ngcontent-%COMP%]{flex:1}.message-sent[_ngcontent-%COMP%]{display:flex;flex-direction:column}.message-sent__content[_ngcontent-%COMP%]{margin:1rem 0}.btn__container[_ngcontent-%COMP%]{display:flex;justify-content:center}.btn__container--submit[_ngcontent-%COMP%]{margin:2rem 0 0}']}),e})()},{path:"residence",redirectTo:"",pathMatch:"full"}];let T=(()=>{class e{}return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(i){return new(i||e)},imports:[[s.k.forChild(k)],s.k]}),e})(),x=(()=>{class e{}return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(i){return new(i||e)},providers:[],imports:[[t.b,o.v,r.Q]]}),e})();var q=n("PCNd");let _=(()=>{class e{}return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(i){return new(i||e)},imports:[[t.b,o.v,r.Q,T,q.a,x]]}),e})()}}]);