var icons = new Array();
square = 0;
caret = 1;
caretSquare = 2;
iconSize = "12";
icons[square] = "square.png";
icons[caret] = "caret.png";
icons[caretSquare] = "caret-square.png";

function loaded(linkHref){
  //console.log(linkHref);
  result = false;
  if (window.location.href==linkHref)
    result = true;
  return result;
}

function ChangeOver(liMenu) {
  //console.log();
  if (loaded(liMenu.getElementsByTagName('a')[0].href))
    liMenu.querySelector('.li-menu-img').src
    = 'img/icon/'+icons[square];
  else liMenu.querySelector('.li-menu-img').src
    = 'img/icon/'+icons[caretSquare];
};

function ChangeOut(liMenu) {
  liMenu.querySelector('.li-menu-img').src
  = 'img/icon/'+icons[caret];
}
