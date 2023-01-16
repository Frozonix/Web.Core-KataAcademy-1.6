import './stylus/main.scss';

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

var swiper = new Swiper('.mySwiper', {
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
});
//==================================================================
//Read more

function readMore() {
   let more1 = document.getElementById('more-1');
   if (more1.style.display == 'unset') {
      more1.style.display = 'none';
      document.getElementById('readMore-1').querySelector('p').innerHTML = 'Читать далее';
      document.getElementById('readMore-1').querySelector('img').style.transform = 'rotate(360deg)';
   } else {
      more1.style.display = 'unset';
      document.getElementById('readMore-1').querySelector('p').innerHTML = 'Скрыть';
      document.getElementById('readMore-1').querySelector('img').style.transform = 'rotate(180deg)';
   }
}

function readMore2() {
   let startHeight = 164;
   let openHeight = document.querySelector('.content__brands-wrapper').offsetHeight;
   console.log(openHeight);
   if (readMore_2_isClose) {
      document.querySelector('.content__brand-hide-wrapper').style.height = openHeight + 'px';
      document.getElementById('readMore-2').querySelector('p').innerHTML = 'Скрыть';
      document.getElementById('readMore-2').querySelector('img').style.transform = 'rotate(180deg)';

      readMore_2_isClose = false;
   } else {
      document.querySelector('.content__brand-hide-wrapper').style.height = startHeight + 'px';
      document.getElementById('readMore-2').querySelector('p').innerHTML = 'Показать все';
      document.getElementById('readMore-2').querySelector('img').style.transform = 'rotate(360deg)';
      readMore_2_isClose = true;
   }
}

function readMore3() {
   let startHeight = 162;
   let openHeight = document.querySelector('.content__types-wrapper').offsetHeight;
   console.log(openHeight);
   if (readMore_3_isClose) {
      document.querySelector('.content__type-hide-wrapper').style.height = openHeight + 'px';
      document.getElementById('readMore-3').querySelector('p').innerHTML = 'Скрыть';
      document.getElementById('readMore-3').querySelector('img').style.transform = 'rotate(180deg)';

      readMore_3_isClose = false;
   } else {
      document.querySelector('.content__type-hide-wrapper').style.height = startHeight + 'px';
      document.getElementById('readMore-3').querySelector('p').innerHTML = 'Показать все';
      document.getElementById('readMore-3').querySelector('img').style.transform = 'rotate(360deg)';
      readMore_3_isClose = true;
   }
   // if (screen_width >= 1100) {
   //    openHeight = document.querySelectorAll('.brand-items--1100');
   // } else {
   //    openHeight = document.querySelectorAll('.brand-items--768');
   // }
}
document.getElementById('readMore-1').addEventListener('click', function (e) {
   console.log(e.target.id);
   readMore();
});
let readMore_2_isClose = true;
document.getElementById('readMore-2').addEventListener('click', function () {
   readMore2();
});
let readMore_3_isClose = true;
document.getElementById('readMore-3').addEventListener('click', function () {
   readMore3();
});
//==================================================================
//Открытие и закрытие navbar

document.getElementById('navOpen').addEventListener('click', function () {
   document.getElementById('nav').style.left = 0;
   document.getElementById('nav').style.boxShadow = '16px 0px 52px rgba(14, 24, 80, 0.2)';
});
document.getElementById('navClose').addEventListener('click', function () {
   document.getElementById('nav').style.left = '-320px';
   document.getElementById('nav').style.boxShadow = 'none';
});
//==================================================================
//Вспомогательные функции для модальных окон

function setModalId(target) {
   let id = target.substr(0, 4);
   let result = 'modal' + id.charAt(0).toUpperCase() + id.slice(1);
   return result;
}
function removeModals() {
   document.getElementById('modalFeed').style.right = '-520px';
   document.getElementById('modalCall').style.right = '-520px';
}
// ==================================================================
//Открытие модальных окон
function modalOpen(target) {
   let result = setModalId(target);
   removeModals();
   document.getElementById(result).style.right = 0;
   document.getElementById(result).style.boxShadow = '-2px 0px 4px rgba(69, 79, 126, 0.02), 16px 0px 52px rgba(14, 24, 80, 0.2)';
}

document.getElementById('feedOpen').addEventListener('click', function (e) {
   console.log(e.target.id);
   modalOpen(e.target.id);
});
document.getElementById('callOpen').addEventListener('click', function (e) {
   console.log(e.target.id);
   modalOpen(e.target.id);
});
document.getElementById('feedOpen-header').addEventListener('click', function (e) {
   modalOpen(e.target.id);
});
document.getElementById('callOpen-header').addEventListener('click', function (e) {
   modalOpen(e.target.id);
});

// ==============================================================================
//Закрытие модальных окон
function modalClose(target) {
   let result = setModalId(target);
   document.getElementById(result).style.right = '-520px';
   document.getElementById(result).style.boxShadow = 'none';
}

document.getElementById('feedClose').addEventListener('click', function (e) {
   console.log(e.target.id);
   modalClose(e.target.id);
});
document.getElementById('callClose').addEventListener('click', function (e) {
   console.log(e.target.id);
   modalClose(e.target.id);
});
document.getElementById('mainContent').addEventListener('click', function () {
   if (window.innerWidth >= 576 && window.innerWidth <= 768) {
      removeModals();
   }
});
