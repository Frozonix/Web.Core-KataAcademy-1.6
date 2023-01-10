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
// ==================================================================
document.getElementById('feedbackOpen').addEventListener('click', function () {
   document.getElementById('modalFeedback').style.right = 0;
   document.getElementById('modalFeedback').style.boxShadow = '-2px 0px 4px rgba(69, 79, 126, 0.02), 16px 0px 52px rgba(14, 24, 80, 0.2)';
});
document.getElementById('feedbackClose').addEventListener('click', function () {
   document.getElementById('modalFeedback').style.right = '-520px';
   document.getElementById('modalFeedback').style.boxShadow = 'none';
});

document.getElementById('feedbackOpen-header').addEventListener('click', function () {
   document.getElementById('modalFeedback').style.right = 0;
   document.getElementById('modalFeedback').style.boxShadow = '-2px 0px 4px rgba(69, 79, 126, 0.02), 16px 0px 52px rgba(14, 24, 80, 0.2)';
});
document.getElementById('feedbackClose').addEventListener('click', function () {
   document.getElementById('modalFeedback').style.right = '-520px';
   document.getElementById('modalFeedback').style.boxShadow = 'none';
});
