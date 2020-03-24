const imgListPath = "img/album/",
  file = 0,
  title = 1,
  width = 2,
  height = 3;
const
  listCount = 2;

var lists = [],
  photos = [];

var mainArticle, imgList,
  full, formated, OnesReadystatechangeCount = 0,
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
//      console.log("OnesReadystatechangeCount " + OnesReadystatechangeCount);
      fillListAndPhotosAndRunHandler();
    }
  }
};

function fillListAndPhotosAndRunHandler() {
  let reader, blob;
  //myElement,
  imgList = document.querySelector(".imgList");
  mainArticle = document.querySelector(".mainArticle");
  if (window.location.protocol == "http:") {
    fillListFromHttp();
    mainArticle.removeChild(imgList);
    fillPhotos();
    runHandler();
  } else {
    if (window.location.protocol == "file:") {
      myConsole.log("protocol is file");
      fillListFromFileAndFillPhotosRunHandler();
      /*
      //TODO Достать блоб из input file достать путь и имя
      if (window.FileReader && window.File && window.Blob && window.FileList) {

        window
        .requestFileSystem(
          window.PERSISTENT, 5 * 1024 * 1024, onInitFs, errorHandler
        );

        blob = new Blob([""], {
          type: "text/plain"
        });
        reader = new FileReader();
        re2ader.readAsText(blob);
        reader.onload = function() {
          console.log(reader.result);
        }
      } else {
        myConsole.log("fileAPISupport" + false);
      }
      */
    } else {
      myConsole.log("invalid protocol");
    }
  }
  //}
}

function fillListFromFileAndFillPhotosRunHandler() {
  var fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem");
  fileSelect.addEventListener("click", function(e) {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault(); // предотвращает перемещение к "#"

    console.log(fileElem.name);
    readFile(fileElem);

    mainArticle.removeChild(imgList);
    /*
    fillPhotos();
    runHandler();
    */
  }, false);
}

function handleFiles(files){
  console.log("handleFiles func " + files);
}
function readFile(object) {
  console.log("readFile func. files : " + object.files.length);
  var file = object.files[0];
  //  console.log("file (1) " + file);
  var reader = new FileReader();
  reader.onload = function() {
    document.getElementById('out').innerHTML = reader.result;
  };
  console.log("file (2) " + file);
  reader.readAsText(file);
}

/*
<input type="file" id="fileElem" multiple accept="image/*" style="display:none" onchange="handleFiles(this.files)">
<a href="#" id="fileSelect">Select some files</a>

Код, обрабатывающий событие click, может выглядеть следующим образом:


var fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // предотвращает перемещение к "#"
}, false);
*/

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

/*
function onInitFs(fs) {
  console.log("Opened file system: " + fs.name);

  fs.root.getFile("img/list.txt", {}, function(fileEntry) {
    fileEntry.file(function(file) {
      var reader = new FileReader();

      reader.onloadend = function(e) {
        var txtArea = document.createElement('textarea');
        txtArea.value = this.result;
        document.body.appendChild(txtArea);
      };

      reader.readAsText(file);
    }, errorHandler);

  }, errorHandler);
}

function errorHandler(e) {
  var msg = '';

  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'QUOTA_EXCEEDED_ERR';
      break;
    case FileError.NOT_FOUND_ERR:
      msg = 'NOT_FOUND_ERR';
      break;
    case FileError.SECURITY_ERR:
      msg = 'SECURITY_ERR';
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'INVALID_MODIFICATION_ERR';
      break;
    case FileError.INVALID_STATE_ERR:
      msg = 'INVALID_STATE_ERR';
      break;
    default:
      msg = 'Unknown Error';
      break;
  };

  myConsole.log('Error: ' + msg);
}
*/
