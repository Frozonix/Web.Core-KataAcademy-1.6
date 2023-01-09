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
