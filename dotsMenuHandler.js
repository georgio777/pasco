var dots = document.querySelectorAll('.dots');
var littleMenu = document.querySelectorAll('.context-menu')
var menuItems = document.querySelectorAll('.immortal')

var contextMenuHandler = function (c, d) {
  c.addEventListener('click', function(evt) {
    d.classList.toggle('context-menu-closed');
    evt.stopPropagation();
  });
};

for (var i = 0; i < dots.length; i++) {
  var a = dots[i];
  var b = littleMenu[i];
  contextMenuHandler(a, b);
}

    document.addEventListener('click', function(evt) {
          if (evt.target !== menuItems[0] && evt.target !== menuItems[1] && evt.target !== menuItems[2] && evt.target !== menuItems[3] && evt.target !== menuItems[4] && evt.target !== menuItems[5] && evt.target !== menuItems[6] && evt.target !== menuItems[7] && evt.target !== menuItems[8] && evt.target !== menuItems[9] && evt.target !== menuItems[10] && evt.target !== menuItems[11] && evt.target !== menuItems[12] && evt.target !== menuItems[13] && evt.target !== menuItems[14]) {
            for (var j = 0; j < littleMenu.length; j++) {
              littleMenu[j].classList.add('context-menu-closed');
        }   
      }
    });

