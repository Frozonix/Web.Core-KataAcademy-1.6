!function(){"use strict";var e,t={6062:function(e,t,n){var r=n(7054);if(r.ZP.use([r.W_,r.tl,r.LW,r.Gk,r.Rv]),window.innerWidth<=768){document.getElementById("swiper2_init").className="swiper mySwiper",document.querySelector(".content__brands-wrapper").className="content__brands-wrapper swiper-wrapper";for(var o=document.querySelectorAll(".swiper2_slide"),d=0;d<o.length;d++)o[d].className="swiper-slide";document.getElementById("swiper3_init").className="swiper mySwiper",document.querySelector(".content__types-wrapper").className="content__types-wrapper swiper-wrapper";for(var l=document.querySelectorAll(".swiper3_slide"),c=0;c<l.length;c++)l[c].className="swiper-slide";document.getElementById("swiper4_init").className="swiper mySwiper",document.querySelector(".content__price-table").className="content__price-table swiper-wrapper";for(var i=document.querySelectorAll(".swiper4_slide"),a=0;a<i.length;a++)i[a].className="swiper-slide";new r.ZP(".mySwiper",{pagination:{el:".swiper-pagination",clickable:!0},mousewheel:{sensitivity:.8},touchRatio:.5,touchAngle:180,slidesPerView:1,spaceBetween:16,speed:400,updateOnWindowResize:!0,freeMode:!0})}new r.ZP(".titleSwiper",{mousewheel:{sensitivity:.8},draggable:!0,grabCursor:!0,touchRatio:.6,touchAngle:180,slidesPerView:1,spaceBetween:16,speed:400,width:180,updateOnWindowResize:!0,freeMode:!0});document.getElementById("readMore-1").addEventListener("click",(function(e){var t;console.log(e.target.id),"unset"==(t=document.getElementById("more-1")).style.display?(t.style.display="none",document.getElementById("readMore-1").querySelector("p").innerHTML="Читать далее",document.getElementById("readMore-1").querySelector("img").style.transform="rotate(360deg)"):(t.style.display="unset",document.getElementById("readMore-1").querySelector("p").innerHTML="Скрыть",document.getElementById("readMore-1").querySelector("img").style.transform="rotate(180deg)")}));var s=!0;document.getElementById("readMore-2").addEventListener("click",(function(){var e;e=document.querySelector(".content__brands-wrapper").offsetHeight,console.log(e),s?(document.querySelector(".content__brand-hide-wrapper").style.height=e+"px",document.getElementById("readMore-2").querySelector("p").innerHTML="Скрыть",document.getElementById("readMore-2").querySelector("img").style.transform="rotate(180deg)",s=!1):(document.querySelector(".content__brand-hide-wrapper").style.height="164px",document.getElementById("readMore-2").querySelector("p").innerHTML="Показать все",document.getElementById("readMore-2").querySelector("img").style.transform="rotate(360deg)",s=!0)}));var u=!0;function m(e){var t=e.substr(0,4);return"modal"+t.charAt(0).toUpperCase()+t.slice(1)}function p(){document.getElementById("modalFeed").style.right="-520px",document.getElementById("modalCall").style.right="-520px"}function y(e){var t=m(e);p(),document.getElementById(t).style.right=0,document.getElementById(t).style.boxShadow="-2px 0px 4px rgba(69, 79, 126, 0.02), 16px 0px 52px rgba(14, 24, 80, 0.2)"}function g(e){var t=m(e);document.getElementById(t).style.right="-520px",document.getElementById(t).style.boxShadow="none"}document.getElementById("readMore-3").addEventListener("click",(function(){var e;e=document.querySelector(".content__types-wrapper").offsetHeight,console.log(e),u?(document.querySelector(".content__type-hide-wrapper").style.height=e+"px",document.getElementById("readMore-3").querySelector("p").innerHTML="Скрыть",document.getElementById("readMore-3").querySelector("img").style.transform="rotate(180deg)",u=!1):(document.querySelector(".content__type-hide-wrapper").style.height="162px",document.getElementById("readMore-3").querySelector("p").innerHTML="Показать все",document.getElementById("readMore-3").querySelector("img").style.transform="rotate(360deg)",u=!0)})),document.getElementById("navOpen").addEventListener("click",(function(){document.getElementById("nav").style.left=0,document.getElementById("nav").style.boxShadow="16px 0px 52px rgba(14, 24, 80, 0.2)"})),document.getElementById("navClose").addEventListener("click",(function(){document.getElementById("nav").style.left="-320px",document.getElementById("nav").style.boxShadow="none"})),document.getElementById("feedOpen").addEventListener("click",(function(e){console.log(e.target.id),y(e.target.id)})),document.getElementById("callOpen").addEventListener("click",(function(e){console.log(e.target.id),y(e.target.id)})),document.getElementById("feedOpen-header").addEventListener("click",(function(e){y(e.target.id)})),document.getElementById("callOpen-header").addEventListener("click",(function(e){y(e.target.id)})),document.getElementById("feedClose").addEventListener("click",(function(e){console.log(e.target.id),g(e.target.id)})),document.getElementById("callClose").addEventListener("click",(function(e){console.log(e.target.id),g(e.target.id)})),document.getElementById("mainContent").addEventListener("click",(function(){window.innerWidth>=576&&window.innerWidth<=768&&p()}))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var d=n[e]={exports:{}};return t[e](d,d.exports,r),d.exports}r.m=t,e=[],r.O=function(t,n,o,d){if(!n){var l=1/0;for(a=0;a<e.length;a++){n=e[a][0],o=e[a][1],d=e[a][2];for(var c=!0,i=0;i<n.length;i++)(!1&d||l>=d)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(c=!1,d<l&&(l=d));c&&(e.splice(a--,1),t=o())}return t}d=d||0;for(var a=e.length;a>0&&e[a-1][2]>d;a--)e[a]=e[a-1];e[a]=[n,o,d]},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,d,l=n[0],c=n[1],i=n[2],a=0;for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(i)var s=i(r);for(t&&t(n);a<l.length;a++)d=l[a],r.o(e,d)&&e[d]&&e[d][0](),e[l[a]]=0;return r.O(s)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),r.O(void 0,[424],(function(){return r(1202)}));var o=r.O(void 0,[424],(function(){return r(6062)}));o=r.O(o)}();