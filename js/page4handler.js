
const imgListPath = "img/album/"
  ,file = 0
  ,title = 1
  ,width = 2
  ,height = 3
  ,full = 0
  ,formated = 1
  ,listCount = 2;

var lists = new Array()
  ,photos = new Array()
  ,mainArticle
  //,j
  ,i;

function Photo(file, title, width, height) {
  this.file = file;
  this.title = title;
  this.width = width;
  this.height = height;
}

document.onreadystatechange = function() {
  if (document.readyState == "complete") {
    for (i = listCount; i--;)
      try {
        lists[i] = window.frames[i].document
          .querySelector("pre").textContent.split("\n");
      } catch (e) {
        console.log(`list${i} with exception| ${e}`);
      }
    runHandler();
  }
}

function runHandler() {
  mainArticle = document.querySelector("#mainArticle");
  let curPhotoParam
  //  , pos
  ;

  for (i = 0;i<lists[formated].length; i++) {
    curPhotoParam = lists[formated][i].split(';');
    if(lists[full].includes(curPhotoParam[file])) {
      if(curPhotoParam.length == 4) {
        console.log(curPhotoParam[file]);
        console.log(curPhotoParam[title]);
        console.log(curPhotoParam[width]);
        console.log(curPhotoParam[height]);
        console.log("");
        /**
        photos.push(
          new Photo(
            curPhotoParam[file],
            curPhotoParam[title],
            curPhotoParam[width],
            curPhotoParam[height]
        ));
        */
      }
    }
  }
//console.log(photos.length);
//    photos[i]=new Photo

//lists = mainArticle.getElementsByClassName("imgList");
//object = document.getElementById("data");
//object.onload = function() {
//  console.log(object);
//    var data = object.contentDocument.body.childNodes[0].innerHTML;
// use the data
//};

  //mainArticle = document.querySelector("#mainArticle");
  //lists = mainArticle.getElementsByClassName("imgList");
  //for (i = 0; i < lists.length; i++) {lists[i].style.display="none";}
  //console.log(`${arrayFlagIsObjectLoaded[0]}, ${arrayFlagIsObjectLoaded[1]}`);
  //console.log(`lists: ${lists.length}`);

  //var photos = new Array();
  //    console.log(lists[0].contentWindow.document);
  //  }
  //  console.log('A');
  //  date = new Date();
  //  console.log(date.getTime()/ (1000));
  //  console.log(lists[0].contentWindow.document
  //    .querySelectorAll("pre")
  //.getElementsByTagName("pre").length
  //.nodeName()
  //contentDocument.
  //.childNodes[0].childNodes[1].childNodes[0]//.childNodes[0]
  //.innerText
  //.textContent
  //.querySelector("#document")
  //.length
  //[0]
  //.textContent
  //  );

  //for (var i = 0; i < lists[0].length; i++) {
  //photos[i]
  //}

  //photos = [];
  //photoArray = new Array();
  //console.log("begin");
  /**
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
  */

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
        //        newCell.innerHTML = "<a href=\"img/" +
        //          photos[k].file + "\" target=\"_blank\"> <figure><img src=\"img/" +
        //          photos[k].file + "\" width=\"" + photos[k].width + "\" " +
        //          "height=\"" + photos[k].height + "\"><figcaption>" +
        //          photos[k++].title + "</figcaption></figure></a>";
      }
    }
    //i++;
  }

  //console.log(mainArticle);
  mainArticle.appendChild(photoTable);
}

//document.addEventListener("DOMContentLoaded", runHandler);
//window.onload = runHandler();
/**
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOMContentLoaded");
  runHandler();
});
*/

/**
function ifListLoaded(i) {
  console.log(`ifListLoaded ${i}`);
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
*/

//function initPage4() {
//  console.log("initPage4");
//  for (i = listsCount; i--;) {
//    arrayFlagIsObjectLoaded[i] = false;
//  }
//  for (i = listsCount; i--;) {
//lists[i].contentWindow.document.onloaddata = ifListLoaded(i);
//lists[i].contentWindow.document.onload = ifListLoaded(i);
//lists[i].contentWindow.document.addEventListener("DOMContentLoaded", ifListLoaded(i));
//console.log(`addEventListener ${i}`);
//    lists[i].contentWindow.document.onreadystatechange = function() {
//      console.log(`readyState in list(${lists[i].contentWindow.document.readyState}) ${i}`);
//      if(lists[i].contentWindow.document.readyState=="complete"){
//        ifListLoaded(i)
//        console.log('В');
//        date = new Date();
//        console.log(date.getTime()/ (1000));
//    console.log(lists[0].contentWindow.document
//      .querySelectorAll("pre")
//.getElementsByTagName("pre").length
//    );
//    }
//    }

//  }
//}

//initPage4();

/**
function onloadFrame(myFrame){
  console.log('Д');
  console.log(`myFrame(${myFrame.childNodes[0]})`);
  frame1 = this;
  //myFrame.querySelector("pre");
}
*/
