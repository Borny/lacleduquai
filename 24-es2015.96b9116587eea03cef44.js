(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"68nU":function(i,e,t){"use strict";t.r(e),t.d(e,"GalleryPageModule",function(){return d});var l=t("ofXK"),g=t("3Pt+"),s=t("TEn/"),a=t("tyNb"),n=t("fXoL"),r=t("TTZi"),o=t("JgnI");const h=function(i){return{highlight:i}};function c(i,e){if(1&i){const i=n.Sb();n.Rb(0,"li",7),n.Zb("click",function(){n.qc(i);const t=e.index;return n.dc().onHightLightImg(t)}),n.Nb(1,"img",8),n.Rb(2,"p",9),n.Ac(3),n.Qb(),n.Qb()}if(2&i){const i=e.$implicit;n.kc("ngClass",n.mc(4,h,i.highlight)),n.Bb(1),n.kc("src",i.src,n.rc)("alt",i.label),n.Bb(2),n.Bc(i.label)}}const p=[{path:"",component:(()=>{class i{constructor(){this.HEADER_TITLE="Galerie",this.pictures=[{src:"/assets/img/gallery/bela-floor-smiling.jpg",label:"Bela",highlight:!1},{src:"/assets/img/gallery/bela-shadow.jpg",label:"Bela ombre",highlight:!1},{src:"/assets/img/gallery/chai-ingredients.jpg",label:"Chai",highlight:!1},{src:"/assets/img/gallery/chai-pie.jpg",label:"Cha\xef et tarte aux poires",highlight:!1},{src:"/assets/img/gallery/espace-zen.jpg",label:"Espace zen",highlight:!1},{src:"/assets/img/gallery/et-rien-ne-bouge.jpg",label:"Et Rien Ne Bouge",highlight:!1},{src:"/assets/img/gallery/globe.jpg",label:"Globe",highlight:!1},{src:"/assets/img/gallery/indoor.jpg",label:"Int\xe9rieur",highlight:!1},{src:"/assets/img/gallery/lutine-beer.jpg",label:"Bi\xe8re La Lutine",highlight:!1},{src:"/assets/img/gallery/muffins.jpg",label:"Muffins",highlight:!1},{src:"/assets/img/gallery/mushroom-pie.jpg",label:"Tarte aux champignons",highlight:!1},{src:"/assets/img/gallery/outside-drawing.jpg",label:"Dessin",highlight:!1},{src:"/assets/img/gallery/pineapple-bela-drawing.jpg",label:"Ananas",highlight:!1},{src:"/assets/img/gallery/smoothie.jpg",label:"Smoothie",highlight:!1},{src:"/assets/img/gallery/soup.jpg",label:"Soupe",highlight:!1},{src:"/assets/img/gallery/studio-color.jpg",label:"Studio",highlight:!1},{src:"/assets/img/gallery/tartine.jpg",label:"Tartine",highlight:!1},{src:"/assets/img/gallery/tea-butterfly.jpg",label:"Th\xe9",highlight:!1},{src:"/assets/img/gallery/tiny-flags.jpg",label:"Drapeaux",highlight:!1},{src:"/assets/img/gallery/wrap.jpg",label:"Wrap",highlight:!1}]}ngOnInit(){}onHightLightImg(i){!0===this.pictures[i].highlight?(console.log("true"),this.pictures[i].highlight=!1):(console.log("false"),this.pictures.forEach(i=>i.highlight=!1),this.pictures[i].highlight=!0)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=n.Gb({type:i,selectors:[["app-gallery"]],decls:10,vars:3,consts:[[3,"headerTitle"],[1,"ion-no-padding"],[1,"squared-shapes",3,"title"],[1,"ion-margin-vertical","ion-padding-bottom"],["size","12","size-sm","10","offset-sm","1","size-md","10","offset-md","1",1,"ion-margin-bottom","ion-padding-bottom"],[1,"gallery__container"],["class","gallery__item",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"gallery__item",3,"ngClass","click"],[1,"gallery__img",3,"src","alt"],[1,"ion-padding-start","gallery__img-label"]],template:function(i,e){1&i&&(n.Nb(0,"ion-header-component",0),n.Rb(1,"ion-content"),n.Rb(2,"ion-grid",1),n.Rb(3,"ion-row"),n.Rb(4,"ion-col"),n.Nb(5,"squared-shapes-svg",2),n.Qb(),n.Qb(),n.Rb(6,"ion-row",3),n.Rb(7,"ion-col",4),n.Rb(8,"ul",5),n.yc(9,c,4,6,"li",6),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb()),2&i&&(n.kc("headerTitle",e.HEADER_TITLE),n.Bb(5),n.kc("title",e.HEADER_TITLE),n.Bb(4),n.kc("ngForOf",e.pictures))},directives:[r.a,s.n,s.p,s.F,s.m,o.a,l.l,l.k],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");.gallery__container[_ngcontent-%COMP%]{position:relative;display:flex;flex-flow:row wrap}.gallery__item[_ngcontent-%COMP%]{position:relative;width:33.33333333%;height:100px;padding:.5rem;transition:transform .3s ease-in,width .3s ease-in,height .3s ease-in;overflow:hidden;cursor:pointer}@media (min-width:480px){.gallery__item[_ngcontent-%COMP%]{width:25%;height:150px}}@media (min-width:768px){.gallery__item[_ngcontent-%COMP%]{width:20%}}@media (min-width:992px){.gallery__item[_ngcontent-%COMP%]{width:20%;height:200px}}.gallery__item.highlight[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1;width:100%;height:300px;padding:0;border:3px solid #fff}@media (min-width:768px){.gallery__item.highlight[_ngcontent-%COMP%]{width:50%;height:500px}}.gallery__item.highlight[_ngcontent-%COMP%]   .gallery__img[_ngcontent-%COMP%]{border-radius:2px}.gallery__item.highlight[_ngcontent-%COMP%]   .gallery__img-label[_ngcontent-%COMP%]{bottom:0;font-size:1.5rem}.gallery__img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.gallery__img-label[_ngcontent-%COMP%]{position:absolute;width:100%;height:50px;display:flex;align-items:center;bottom:-50px;left:0;color:#fff;background:linear-gradient(0deg,#000,transparent);transition:.3s ease-out}']}),i})()},{path:"galerie",redirectTo:"",pathMatch:"full"}];let m=(()=>{class i{}return i.\u0275mod=n.Kb({type:i}),i.\u0275inj=n.Jb({factory:function(e){return new(e||i)},imports:[[a.k.forChild(p)],a.k]}),i})();var b=t("PCNd");let d=(()=>{class i{}return i.\u0275mod=n.Kb({type:i}),i.\u0275inj=n.Jb({factory:function(e){return new(e||i)},imports:[[l.b,g.l,s.R,m,b.a]]}),i})()}}]);