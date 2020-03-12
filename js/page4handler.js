var i;
var listsCount = 2;
var mainArticle;
var lists;
var arrayFlagIsObjectLoaded = new Array();

function runHandler() {
  mainArticle = document.querySelector("#mainArticle");
  lists = mainArticle.getElementsByClassName("imgList");
  //console.log(`${arrayFlagIsObjectLoaded[0]}, ${arrayFlagIsObjectLoaded[1]}`);
  console.log(`lists: ${lists.length}`);
  for (i = 0; i < lists.length; i++) {
    //  lists[i].style.display="none";
  }
  path = "img/album/";
  photo = {
    file: "",
    title: "",
    width: "",
    height: "",
    fillProp: function(file, title, width, height) {
      this.file = file;
      this.title = title;
      this.width = width;
      this.height = height;
    }
  }

  var photos = new Array();
  //    console.log(lists[0].contentWindow.document);
  //  }

  console.log(
    lists[0].contentWindow.document
    .querySelectorAll("pre")
    //.getElementsByTagName("pre").
    //.nodeName()
    //contentDocument.
    //.childNodes[0].childNodes[1].childNodes[0]//.childNodes[0]
    //.innerText
    //.textContent
    //.querySelector("#document")
    //.length
    //[0]
    //.textContent
  );

  for (var i = 0; i < lists[0].length; i++) {
    //photos[i]
  }

  //photos = [];
  //photoArray = new Array();
  //console.log("begin");
  photos[0] = {
    file: "normal.jpg",
    title: "oldMy",
    width: "50",
    height: "40"
  }
  photos[1] = {
    file: "photo_2019-10-22_16-49-22.jpg",
    title: "newMy",
    width: "50",
    height: "75"
  }
  photos[2] = {
    file: "photo_2019-11-22_10-36-12.jpg",
    title: "flower1",
    width: "75",
    height: "50"
  }
  photos[3] = {
    file: "photo_2019-11-22_10-39-46.jpg",
    title: "flower2",
    width: "75",
    height: "50"
  }
  photos[4] = {
    file: "photo_2019-11-22_10-39-51.jpg",
    title: "flower3",
    width: "50",
    height: "75"
  }
  photos[5] = {
    file: "photo_2019-11-22_10-39-59.jpg",
    title: "flower4",
    width: "75",
    height: "50"
  }
  photos[6] = {
    file: "photo_2019-11-22_10-40-06.jpg",
    title: "flower5",
    width: "50",
    height: "75"
  }
  photos[7] = {
    file: "photo_2019-11-22_10-40-12.jpg",
    title: "flower6",
    width: "75",
    height: "50"
  }
  photos[8] = {
    file: "photo_2019-11-22_10-40-24.jpg",
    title: "flower7",
    width: "75",
    height: "50"
  }

  photoTable = document.createElement('table');

  photoTable.id = 'photoTable';
  cellCount = 4;
  tableWidthPercent = '78';
  photoTable.setAttribute('width', "" + tableWidthPercent + "%");
  i = 0;
  k = 0;
  //console.log("i : "+i+", k : "+k);
  //console.log(photos.length);
  while (k < photos.length) {
    //console.log("i : "+i);
    newRow = photoTable.insertRow(i++);
    for (var j = 0; j < cellCount; j++) {
      //console.log("j : "+j+", k : "+k);
      newCell = newRow.insertCell(-1);
      if (k < photos.length) {
        newCell.width = "" + tableWidthPercent / cellCount;
        newCell.style.textAlign = "center";
        newCell.innerHTML = "<a href=\"img/" +
          photos[k].file + "\" target=\"_blank\"> <figure><img src=\"img/" +
          photos[k].file + "\" width=\"" + photos[k].width + "\" " +
          "height=\"" + photos[k].height + "\"><figcaption>" +
          photos[k++].title + "</figcaption></figure></a>";
      }
    }
    //i++;
  }

  //console.log(mainArticle);
  mainArticle.appendChild(photoTable);
}

function ifListLoaded(i) {
  arrayFlagIsObjectLoaded[i] = true;
  var counter;
  for (i = listsCount, counter = 0; i--;) {
    if (arrayFlagIsObjectLoaded[i] == true) counter++;
  }
  if (counter == listsCount) {
    console.log(`counter(${counter}) listsCount(${listsCount})`);
    runHandler();
  }
}

function initPage4() {
  for (i = listsCount; i--;) {
    arrayFlagIsObjectLoaded[i] = false;
  }
  for (i = listsCount; i--;) {
    lists[i].contentWindow.document.onloaddata = ifListLoaded(i);
    //lists[i].contentWindow.document.onload = ifListLoaded(i);
    //lists[i].contentWindow.document.addEventListener("DOMContentLoaded", ifListLoaded(i));
  }
}

//document.addEventListener("DOMContentLoaded", runHandler);
//window.onload = runHandler();

//mainArticle = document.querySelector("#mainArticle");
//lists = mainArticle.getElementsByClassName("imgList");
//lists[0].contentWindow.document.onreadystatechange = function() {
  //if (document.readyState == "compleate") {runHandler();}
  //console.log(`readyState(${lists[0].contentWindow.document.readyState})`);
//}
