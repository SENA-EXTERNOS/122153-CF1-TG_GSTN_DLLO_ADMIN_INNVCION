(function(e){function a(a){for(var i,o,r=a[0],s=a[1],d=a[2],u=0,l=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);f&&f(a);while(l.length)l.shift()();return t.push.apply(t,d||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],i=!0,o=1;o<n.length;o++){var r=n[o];0!==c[r]&&(i=!1)}i&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},c={app:0},t=[];function r(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"091103d8","chunk-0206bfa0":"08ff7102","chunk-039c07ee":"9157d02d","chunk-13a6037e":"795db77f","chunk-16215048":"dd2f4567","chunk-18f95272":"92ff8633","chunk-2c06842c":"7dd02792","chunk-2d0c5615":"66262bf8","chunk-2d0e96ec":"0e3944de","chunk-2d208d90":"687062ac","chunk-2d21d0e2":"3396eb7b","chunk-2d22c123":"f6af4ae4","chunk-2e80bb9a":"ef232ae9","chunk-2fdc87ee":"bf1212d0","chunk-30d2f332":"739e77dd","chunk-36769079":"a99a338f","chunk-398c63f0":"87bcb814","chunk-44daca35":"40802002","chunk-4adb6690":"1a0d735a","chunk-5309f94e":"7c7600cc","chunk-53ccb27e":"c2e3d10f","chunk-55d286b8":"3335923a","chunk-681f37d3":"d6188e20","chunk-6928a14a":"7c039623","chunk-69444b4c":"e256e6c7","chunk-6e45141e":"a7b43e30","chunk-863a1ee8":"1d2351db","chunk-923527cc":"3698c4a6","chunk-a48a3e88":"9b6b4a94","chunk-c796899c":"7a3e85cf","chunk-e8a7823a":"9ddf7174","chunk-eaa1fac2":"39a4b7b8","chunk-f2a44bde":"2ad66664",comple:"b4194870",creditos:"aa165a52",glosario:"46c8ba75",intro:"61595bb5",referencias:"d6ed96ce",sintesis:"c368eab8",tema1:"4f9c752d",tema2:"68410656",tema3:"0b4b5af9"}[e]+".js"}function s(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-039c07ee":1,"chunk-16215048":1,"chunk-30d2f332":1,"chunk-398c63f0":1,"chunk-44daca35":1,"chunk-4adb6690":1,"chunk-681f37d3":1,"chunk-6928a14a":1,"chunk-6e45141e":1,"chunk-863a1ee8":1,"chunk-923527cc":1,"chunk-a48a3e88":1,"chunk-f2a44bde":1,comple:1,creditos:1,glosario:1,referencias:1};o[e]?a.push(o[e]):0!==o[e]&&n[e]&&a.push(o[e]=new Promise((function(a,n){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-039c07ee":"c02cabcb","chunk-13a6037e":"31d6cfe0","chunk-16215048":"c02cabcb","chunk-18f95272":"31d6cfe0","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-2fdc87ee":"31d6cfe0","chunk-30d2f332":"c02cabcb","chunk-36769079":"31d6cfe0","chunk-398c63f0":"cb84b683","chunk-44daca35":"c02cabcb","chunk-4adb6690":"c02cabcb","chunk-5309f94e":"31d6cfe0","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-681f37d3":"c02cabcb","chunk-6928a14a":"836e2e3e","chunk-69444b4c":"31d6cfe0","chunk-6e45141e":"c0e85eea","chunk-863a1ee8":"f9b8b43c","chunk-923527cc":"985220b5","chunk-a48a3e88":"c02cabcb","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-eaa1fac2":"31d6cfe0","chunk-f2a44bde":"c02cabcb",comple:"ef260fee",creditos:"aaeac7f7",glosario:"833dfdd0",intro:"31d6cfe0",referencias:"b465cd62",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",c=s.p+i,t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var d=t[r],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===i||u===c))return a()}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){d=l[r],u=d.getAttribute("data-href");if(u===i||u===c)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var i=a&&a.target&&a.target.src||c,t=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=i,delete o[e],f.parentNode.removeChild(f),n(t)},f.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[e]=0})));var i=c[e];if(0!==i)if(i)a.push(i[2]);else{var t=new Promise((function(a,n){i=c[e]=[a,n]}));a.push(i[2]=t);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=r(e);var l=new Error;d=function(a){u.onerror=u.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,n[1](l)}c[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(a)},s.m=e,s.c=i,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)s.d(n,i,function(a){return e[a]}.bind(null,i));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=a,d=d.slice();for(var l=0;l<d.length;l++)a(d[l]);var f=u;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);var i=n("68f3"),o=function(){var e=this,a=e._self._c;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},c=[],t={name:"App",data:()=>({menuOpen:!1}),computed:{menuState(){return this.$store.getters.isMenuOpen}},mounted(){this.$aos.init({offset:100})}},r=t,s=n("2877"),d=Object(s["a"])(r,o,c,!1,null,null,null),u=d.exports,l=n("2b0e"),f=n("8c4f"),m=n("ae58"),p=n("7e58");l["a"].use(f["a"]);const h=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:()=>n.e("intro").then(n.bind(null,"5167"))},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:()=>n.e("tema1").then(n.bind(null,"02c8"))},{path:"tema2",name:"tema2",component:()=>n.e("tema2").then(n.bind(null,"fd11"))},{path:"tema3",name:"tema3",component:()=>n.e("tema3").then(n.bind(null,"eb46"))}]},{path:"/actividad",name:"actividad",component:()=>n.e("actividad").then(n.bind(null,"4298"))},{path:"/glosario",name:"glosario",component:()=>n.e("glosario").then(n.bind(null,"69a7"))},{path:"/complementario",name:"complementario",component:()=>n.e("comple").then(n.bind(null,"dd8c"))},{path:"/referencias",name:"referencias",component:()=>n.e("referencias").then(n.bind(null,"64ef"))},{path:"/sintesis",name:"sintesis",component:()=>n.e("sintesis").then(n.bind(null,"15a3"))},{path:"/creditos",name:"creditos",component:()=>n.e("creditos").then(n.bind(null,"ef72"))}],scrollBehavior(e,a){if(e.hash){const n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise(e=>{setTimeout(()=>{e(n)},500)})}setTimeout(()=>{window.scrollTo({left:0,top:0,behavior:"auto"})},100)}});var b=h,v=n("1c2c"),g=(n("a3a0"),{global:{componenteFormativo:"Introducción a la administración",descripcionCurso:"La historia ha demostrado que, en la práctica, pueden aplicarse diversas teorías para resolver o apoyar la solución de problemáticas naturales del devenir empresarial u organizacional. En este componente formativo, se estudiarán las diferentes teorías y conceptos que le han dado origen a la administración como ciencia aplicable.",imagenBannerPrincipal:n("ed6d"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")},{clases:["banner-principal-decorativo-3"],imagen:n("7d72")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Fundamentos e introducción a la administración",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Orígenes y enfoques",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Administración estratégica",hash:"t_1_2"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Principios del proceso administrativo",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Planeación",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Organización",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Dirección",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"Control",hash:"t_2_4"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"La empresa como escenario activo de administración",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Principios del proceso administrativo",referencia:"Ecosistema de Recursos Educativos Digitales SENA (2022).<i> Proceso Administrativo: fase de control</i> [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=aB34nClq0o0"},{tema:"Fundamentos e introducción a la administración",referencia:"Bancoldex (s.f.).<i> Clasificación de empresas en Colombia.</i> Bancoldex.",tipo:"Página web",link:"https://www.bancoldex.com/clasificacion-de-empresas-en-colombia-200"},{tema:"La empresa como escenario activo de administración",referencia:"Münch, L. (2018). <i>Administración: gestión organizacional, enfoques y procesos administrativos.</i> ",tipo:"PDF",link:"https://profesorailleanasilva.files.wordpress.com/2015/10/administracic3b3n-lourdes-munch-2a-edicic3b3n.pdf"}],glosario:[{termino:"Administración",significado:"conjunto de acciones que se realizan para administrar una empresa."},{termino:"Bienes",significado:"bienes producidos por la industria y que el consumidor puede comprar."},{termino:"Burocracia",significado:"conjunto de actividades y trámites que se deben seguir para resolver un asunto de carácter administrativo."},{termino:"Conductista",significado:"hace referencia al estudio de la conducta de las personas."},{termino:"Empresa",significado:"entidad en la que intervienen el capital y el trabajo como factores de producción de actividades industriales o mercantiles, o para la prestación de servicios."},{termino:"Estratégica",significado:"una decisión o panorama inteligente frente a la situación o contexto de una empresa."},{termino:"Organización",significado:"grupo de personas y medios organizados con un fin determinado."},{termino:"Sector productivo",significado:"es una agrupación de las actividades productivas según sus características, de tal forma que permita hacer una clasificación más ordenada de la producción y facilitar su análisis."},{termino:"Servicios",significado:"actividad que se presta, a nivel empresarial, con relación a productos intangibles."}],referencias:[{referencia:"Chiavenato, I. (2019). <em>Introducción a la teoría general de la administración.</em> McGraw-Hill."},{referencia:"Hernández, S., Palafox, G. & Aguado, C. (2020). <i>Administración: pensamiento, procesos estratégicos y administrativos para la era de la inteligencia artificial.</i> McGraw-Hill."},{referencia:"Münch, L. (2018). <i>Administración: gestión organizacional, enfoques y procesos administrativos.</i><br>",link:"https://profesorailleanasilva.files.wordpress.com/2015/10/administracic3b3n-lourdes-munch-2a-edicic3b3n.pdf"}],creditos:{liderEquipo:[{nombre:"Innovative Education",cargo:"Líder del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],contenidoInstruccional:[{nombre:"Innovative Education",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],desarrolloProducto:[{nombre:"Innovative Education",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Innovative Education",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Innovative Education ",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Innovative Education",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Innovative Education",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Innovative Education",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Innovative Education",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Innovative Education",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});i["a"].prototype.$config=g;const k=n("9224");i["a"].prototype.$package=k,new i["a"]({router:b,store:v["a"],render:e=>e(u)}).$mount("#app")},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.6062f449.svg"},"7d72":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.160ff15c.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.7f8ee192.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.7.14","vue-router":"^3.6.5","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.19","@vue/cli-plugin-eslint":"^4.5.19","@vue/cli-plugin-router":"^4.5.19","@vue/cli-plugin-vuex":"^4.5.19","@vue/cli-service":"^4.5.19","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.7.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.43e61d0f.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.32228650.png"},ed6d:function(e,a,n){e.exports=n.p+"img/banner-img.43cf9ae0.png"}});
//# sourceMappingURL=app.afe783e6.js.map