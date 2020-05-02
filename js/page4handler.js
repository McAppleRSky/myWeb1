const imgListPath = ["img/", "album/"],
  listFilename = "list.txt", listfFilename = "listf.txt",
  file    = 0,
  title   = 1,
  width   = 2,
  height  = 3,
  listCount = 2;

var lists = [],
  photos = [],
  reader = [],
  readerIndex = -1,
  mainArticle, imgList, fileElem,
  //  listPre = false,
  //  listfPre = false,
  full = false,
  formated = false,
  OnesReadystatechangeCount = 0,
  i;

let myConsole = window.console;

function Photo(file, title, width, height) {
  this.file = file;
  this.title = title;
  this.width = width;
  this.height = height;
}

document.onreadystatechange = function() {
  if (document.readyState == "complete") {
    if (OnesReadystatechangeCount++ == 0) {
      fillListAndPhotosAndAlbumHandler();
    }
  }
};

function fillListAndPhotosAndAlbumHandler() {
  imgList = document.querySelector(".imgList");
  mainArticle = document.querySelector(".mainArticle");
  if (window.location.protocol == "http:") {
    fillListFromHttp();
    mainArticle.removeChild(imgList);
    fillPhotos();
    albumHandler();
  } else {
    if (window.location.protocol == "file:") {
      myConsole.log("protocol is file");
      document.querySelector("#fileElem").style.display = "block";
    } else {
      myConsole.log("invalid protocol");
    }
  }
}

function fillListFromFileAndfillPhotosAndAlbumHandler(event) {
  let files = event.target.files;
  //var reader = [];
  for (i = 0; i < files.length; i++) {
    if (
      (files[i].name == listFilename) && (full === false)
    ) {
      reader[++readerIndex] = new FileReader();
      reader[readerIndex].onload = function(e) {
        let str = this.result.split("\n");
        if (str[0].split(';').length == 1) {
          lists.push(str);
          full = lists.length - 1;
          document.querySelector(
            `object[data='${imgListPath[0] + listFilename}']`
          ).style.display = "none";
        }
        //console.log("e.target.result " + e.target.result);
        if (lists.length == listCount) {
          mainArticle.removeChild(imgList);
          fillPhotos();
          albumHandler();
        }
      };
      reader[readerIndex].readAsText(files[i]);
    } else {
      if (
        (files[i].name == listfFilename) && (formated === false)
      ) {
        reader[++readerIndex] = new FileReader();
        reader[readerIndex].onload = function(e) {
          let str = this.result.split("\n");
          if (str[0].split(';').length == 4) {
            lists.push(str);
            formated = lists.length - 1;
            document.querySelector(
              `object[data='${imgListPath[0] + listfFilename}']`
            ).style.display = "none";
          }
          if (lists.length == listCount) {
            mainArticle.removeChild(imgList);
            fillPhotos();
            albumHandler();
          }
        };
        reader[readerIndex].readAsText(files[i]);
      }
    }
  }
}

function fillListFromHttp() {
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

function albumHandler() {
  let photoTable, photoWin, winImg,
    cellCount,
    tableWidthPercent,
    newRow, newCell, fileName, anchEl, figEl, imgEl, figcapEl,
    j, k;

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

        fileName = imgListPath[0] + imgListPath[1] + photos[k].file;

        imgEl = document.createElement("img");
        imgEl.setAttribute("value", photos[k].file);
        imgEl.setAttribute("src", fileName);
        imgEl.setAttribute("width", photos[k].width);
        imgEl.setAttribute("height", photos[k].height);
        imgEl.onclick = function (event) {
          //console.log("imgOnclick");
          let photoWin = document.querySelector(".win");
          if(photoWin){
            //console.log(photoWin);
            photoWin.childNodes[0].setAttribute("src", event.path[0].src);
            //console.log(event);
            //console.log(event.path[0].src);
            photoWin.classList.add("win-modal");
            photoWin.classList.remove("win");
          }
          //photoWin.style.display = "block";
        };

        figcapEl = document.createElement("figcaption");
        figcapEl.textContent = photos[k].title;
        figcapEl.classList.add("figcapTitle");

        figEl = document.createElement("figure");
        figEl.appendChild(imgEl);
        figEl.appendChild(figcapEl);

        anchEl = document.createElement("a");
        /*anchEl.setAttribute("href", fileName);
        anchEl.setAttribute("target", "_blank");*/
        anchEl.appendChild(figEl);

        newCell.appendChild(anchEl);

        k++;
      }
    }
    i++;
  }

  mainArticle.appendChild(photoTable);

  photoWin = document.createElement("div");
  photoWin.classList.add("win");

  winImg = document.createElement("img");
  winImg.onclick = function (){
    console.log("winImgOnclick");
    let winImg = document.querySelector(".win-modal");
    if(winImg){
      winImg.childNodes[0].setAttribute("src", "");
      winImg.classList.add("win");
      winImg.classList.remove("win-modal");
      //winImg.style.display = "none";
    }
  };
  //photoWin.textContent = "Title";
  //winImg.setAttribute("src", fileName);
  //winImg.setAttribute("width", photos[k].width);
  //winImg.setAttribute("height", photos[k].height);
  photoWin.appendChild(winImg);
  console.log("appendChild win");
  mainArticle.appendChild(photoWin);
}
//function showPic(fileName){}
