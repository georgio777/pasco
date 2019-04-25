var heart = document.querySelectorAll('.heart');

function addToFav(x) {}

for (var f = 0; f < heart.length; f++) (function(f) {
  heart[f].addEventListener('click', function(){
    heart[f].classList.toggle('red-heart');
  });
})(f);