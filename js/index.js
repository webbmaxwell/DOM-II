// Your code goes here
let funLogo = document.querySelector('.logo-heading');
funLogo.addEventListener('click', function() {
  window.alert('You clicked on the logo!');
});

let venice1 = document.querySelector('#funImg');
venice1.addEventListener('mouseenter', function(event) {
  event.target.src = 'img/venice.jpg';
});
venice1.addEventListener('mouseleave', function(event) {
  event.target.src = 'img/fun.jpg';
});
