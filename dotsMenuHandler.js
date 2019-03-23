var dots = document.querySelectorAll('.dots');
var contextMenu = document.querySelectorAll('.context-menu')
var menuItems = document.querySelectorAll('.immortal')

var contextMenuHandler = function (c, d) {
  c.addEventListener('click', function(evt) {
    d.classList.toggle('context-menu-closed');
    console.log(d.classList);
    evt.stopPropagation();
  });
};

for (var i = 0; i < dots.length; i++) {
  var a = dots[i];
  var b = contextMenu[i];
  contextMenuHandler(a, b);
}

var contextMenuCloser = function (item, menu) {
    document.addEventListener('click', function(evt) {
      if (evt.target !== item && evt.target !== menu) {
      menu.classList.add('context-menu-closed');
      }
    });
};

for (var j = 0; j < contextMenu.length; j++) {
  contextMenuCloser(menuItems[j], contextMenu[j]);
}