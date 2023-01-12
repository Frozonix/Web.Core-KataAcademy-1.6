import './stylus/main.scss';
// import json from './assets/json';
// console.log('show json file', json);

// alert('hello');

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
// let modalIsOpen = false;
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
