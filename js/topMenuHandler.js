var icons = new Array();
icons[0] = {
    file: "square.png",
    title: "square",
    width: "32",
    height: "32"
}
icons[1] = {
    file: "caret.png",
    title: "caret",
    width: "32",
    height: "32"
}
function ChangeOver(imgLi) {
  imgLi.src= 'img/icons/'+icons[0].file;
};

function ChangeOut(imgLi) {
  imgLi.src= 'img/icons/'+icons[1].file;
}
