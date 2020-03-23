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
  full, formated, OnesReadystatechange = 0,
  i;

let myConsole = window.console;

function Photo(file, title, width, height) {
  this.file = file;
  this.title = title;
  this.width = width;
  this.height = height;
}

document.onreadystatechange = fillListsAndPhotosAndRunHandler;

function fillListsAndPhotosAndRunHandler() {
  let imgList = document.querySelector(".imgList");
  mainArticle = document.querySelector(".mainArticle");
  if (document.readyState == "complete") {
    if (window.location.protocol == "http:") {
      fillListsFromHttp();
      mainArticle.removeChild(imgList);
      fillPhotos();
      runHandler();
    }
  } else {
    if (window.location.protocol == "file:") {
      myConsole.log("protocol is file");
      while(window.frames.length<2){
        setTimeout("go()",1000);
        console.log(window.frames.length);
        //lists[0] = window.frames[0];
      }
    } else {
      myConsole.log("invalid protocol");
    }
  }
}


function fillListsFromHttp() {
  let curListValueCount;
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
  for (i = 0; i < lists[full].length; i++) {
    if (lists[full][i] != "") {
      photos.push(new Photo(lists[full][i], lists[full][i], "100", "100"));
    }
  }
}

function runHandler() {
  let photoTable,
    cellCount,
    tableWidthPercent,
    newRow, newCell, fileName, anchEl, figEl, imgEl, figcapEl, j, k;

  //mainArticle = document.querySelector("#mainArticle")

  photoTable = document.createElement("table");

  photoTable.id = "photoTable";
  cellCount = 4;
  tableWidthPercent = "100";
  photoTable.setAttribute("width", "" + tableWidthPercent + "%");
  i = 0;
  k = 0;
  while (k < photos.length) {
    newRow = photoTable.insertRow(i);
    for (j = 0; j < cellCount; j++) {
      newCell = newRow.insertCell(-1);
      if (k < photos.length) {
        newCell.width = "" + tableWidthPercent / cellCount;
        newCell.style.textAlign = "center";

        fileName = imgListPath + photos[k].file;

        imgEl = document.createElement("img");
        imgEl.setAttribute("src", fileName);
        imgEl.setAttribute("width", photos[k].width);
        imgEl.setAttribute("height", photos[k].height);

        figcapEl = document.createElement("figcaption");
        figcapEl.textContent = photos[k].title;
        figcapEl.setAttribute("class", "figcapTitle");

        figEl = document.createElement("figure");
        figEl.appendChild(imgEl);
        figEl.appendChild(figcapEl);

        anchEl = document.createElement("a");
        anchEl.setAttribute("href", fileName);
        anchEl.setAttribute("target", "_blank");
        anchEl.appendChild(figEl);

        newCell.appendChild(anchEl);

        k++;
      }
    }
    i++;
  }
  mainArticle.appendChild(photoTable);
}
