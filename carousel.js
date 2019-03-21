// этот код помечает картинки, для удобства разработки 
var lis = document.querySelectorAll('.images-li');
for (var i = 0; i < lis.length; i++) {
  lis[i].style.position = 'relative';
  var span = document.createElement('span');
  // обычно лучше использовать CSS-классы,
  // но этот код - для удобства разработки, так что не будем трогать стили
  span.style.cssText = 'position:absolute;left:0;top:0';
  span.innerHTML = i + 1;
  lis[i].appendChild(span);
}

// конфигурация 
var width = 200; // ширина изображения
var count = 1; // количество изображений

var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');

var position = 0; // текущий сдвиг влево

carousel.querySelector('.prev-container').onclick = function() {
  // сдвиг влево
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position + width * count, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next-container').onclick = function() {
  // сдвиг вправо
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  console.log(position);
  position = Math.max(position - width * count, -width * (listElems.length - count));
  console.log(position);
  list.style.marginLeft = position + 'px';
  
};