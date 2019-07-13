let topBlock = document.querySelectorAll('.block');

console.log(topBlock);

topBlock.forEach(function(event) {
  event.addEventListener('click', function(ev){
    ev.target.style.order = '-1';
  });
});
