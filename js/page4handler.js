const imgListPath = "img/album/",
  file = 0,
  title = 1,
  width = 2,
  height = 3;
const
  listCount = 2;

var lists = [],
  photos = [];

var mainArticle,
  full, formated, i;

let myConsole = window.console;

function Photo(file, title, width, height) {
  this.file = file;
  this.title = title;
  this.width = width;
  this.height = height;
}

document.onreadystatechange = fillListsAndPhotosAndRunHandler;

function fillListsAndPhotosAndRunHandler() {
  let curListValueCount,
    imgList = document.querySelector("#imgList");
  if (document.readyState == "complete") {
    for (i = 0; i < listCount; i++) {
      try {
        lists[i] = window.frames[i].document
          .querySelector("pre").textContent.split("\n");
      } catch (e) {
        myConsole.log(`list${i} with exception| ${e}`);
      } finally {
        curListValueCount = lists[i][0].split(';').length;
        if (curListValueCount == 4) {
          formated = i;
        } else {
          if (curListValueCount == 1) {
            full = i;
          } else {
            myConsole.log("incorrect files list.txt listf.txt");
          }
        }
      }
    }
    //imgList.style.display = "none";
    fillPhotos();
    runHandler();
    //mainArticle = document.querySelector("#mainArticle");
  }
}

function fillPhotos() {

  let curPhotoParam, fileInList;

  for (i = 0; i < lists[formated].length; i++) {
    curPhotoParam = lists[formated][i].split(';');
    fileInList = lists[full].indexOf(curPhotoParam[file]);
    if (lists[full].includes(curPhotoParam[file])) {
      if (curPhotoParam.length == 4) {
        photos.push(
          new Photo(
            lists[full].splice(fileInList, 1)[0],
            curPhotoParam[title],
            curPhotoParam[width],
            curPhotoParam[height]
          )
        );
      }
    }
  }
}

function runHandler() {

  let photoTable,
    cellCount,
    tableWidthPercent,
    newRow, newCell,
    j, k;

  //mainArticle = document.querySelector("#mainArticle")

  photoTable = document.createElement("table");

  photoTable.id = "photoTable";
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
    for (j = 0; j < cellCount; j++) {
      //console.log("j : "+j+", k : "+k);
      newCell = newRow.insertCell(-1);
      if (k < photos.length) {
        newCell.width = "" + tableWidthPercent / cellCount;
        newCell.style.textAlign = "center";
        newCell.innerHTML("");
        //        newCell.innerHTML = "<a href=\"img/" +
        //          photos[k].file +
        //"\" target=\"_blank\"> <figure><img src=\"img/" +
        //          photos[k].file + "\" width=\"" + photos[k].width + "\" " +
        //          "height=\"" + photos[k].height + "\"><figcaption>" +
        //          photos[k++].title + "</figcaption></figure></a>";
      }
    }
    //i++;
  }

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


/**
function onloadFrame(myFrame){
  console.log('Д');
  console.log(`myFrame(${myFrame.childNodes[0]})`);
  frame1 = this;
  //myFrame.querySelector("pre");
}
*/
