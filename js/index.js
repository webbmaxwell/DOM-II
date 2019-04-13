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

let button = document.querySelectorAll('.btn');
button[0].addEventListener('click', function() {
    window.alert('Thanks for signing up for Fun in the Sun!');
  });

button[1].addEventListener('click', function() {
  window.alert('Thanks for signing up for the Mountain Excursion!');
  });

button[2].addEventListener('click', function() {
  window.alert('Thanks for signing up for the Island Getaway!');
  });

let navItem = document.querySelectorAll('.nav-link');
navItem.forEach(function(event) {
  event.addEventListener('click', function(ev) {
    ev.preventDefault();
  });
});

let mapPic = document.querySelector('#mapImg');
mapPic.addEventListener('mouseenter', function(event) {
  event.target.src = 'img/map.jpg'
});

mapPic.addEventListener('mouseleave', function(event) {
  event.target.src = 'img/adventure.jpg'
});
