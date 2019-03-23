var closedHamburger = document.querySelector('.hamburger-closed');
var hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
  closedHamburger.classList.toggle('hamburger-opend')
});