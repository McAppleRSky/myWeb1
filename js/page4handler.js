const imgListPath = "img/album/",
  listFilename = "list.txt",
  listfFilename = "listf.txt",
  file = 0,
  title = 1,
  width = 2,
  height = 3,
  listCount = 2;

var lists = [],
  photos = [],
  mainArticle, imgList, fileElem,
//  listPre = false,
//  listfPre = false,
  full = false, formated = false,
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
      fillListAndPhotosAndRunHandler();
    }
  }
};

function fillListAndPhotosAndRunHandler() {
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
      document.querySelector("#fileElem").style.display = "block";
    } else {
      myConsole.log("invalid protocol");
    }
  }
}

function handleFiles(files) {
  let reader = [];
  for (i = 0; i < files.length; i++) {
    if (files[i].name == listFilename) {
      reader[i] = new FileReader();
      reader[i].readAsText(files[i]);
      if(reader[i].result[0].split(';').length == 4){
        full=true;
      }
      //listPre = document.createElement("pre");
      //listPre.textContent = reader[i].result;
      lists.push()
      document.querySelector(`object[data="${imgListPath + listFilename}"]`)
        .appendChild(listPre);

      //lists[full]= reader[i].result;
    } else {
      if(files[i].name == listfFilename){
        reader[i] = new FileReader();
        reader[i].readAsText(files[i]);
        if(reader[i].result[0].split(';').length == 4){
          listfPre = document.createElement("pre");
          listfPre.textContent = reader[i].result;
          document.querySelector(`object[data="${imgListPath + listFilename}"]`)
            .appendChild(listPre);


          //lists[formated] = reader[i].result;
        }
      }
    }
  }

  listfPre = document.createElement("pre");
  document.querySelector(`object[data="${imgListPath + listfFilename}"]`)
    .appendChild(listfPre);

  if (listPre && listfPre) {
    fillListFromFileAndFillPhotosRunHandler();
  }

  console.log(files[0].name);

  let reader = [];
  for (i = 0; i < files.length; i++) {
    reader[i] = new FileReader();
    reader[i].onload = "" //readerResulter
    ;
  }

  for (i = 0; i < files.length; i++) {
    reader[i].readAsText(files[i]);
  }
}
//function readerResulter() {lists.push(reader.result);}

function fillListFromFileAndFillPhotosRunHandler() {
  //fileElem = document.getElementById("fileElem");
  //let fileSelect = document.getElementById("fileSelect");
  //for (i = 0; i < listCount; i++) {
  //window.frames[i].addEventListener("click", function(e) {
  //    fileElem.click();
  //    e.preventDefault(); // предотвращает перемещение к "#"
  //}, false);
  //}

  /*
  fileSelect.addEventListener("click", function(e) {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault(); // предотвращает перемещение к "#"
  }, false);
  */
  //let objects = document.querySelectorAll("object");
  //let pre0 = document.querySelectorAll("pre");

  //  for (i = 0; i < listCount; i++) {
  //    objects[i].onclick = fileLoader;
  //objects[i].addEventListener("click",fileLoader);

  /*
  function(e) {
    fileElem.click();
    e.preventDefault(); // предотвращает перемещение к "#"
  }, false);
  */
  //  }
  /*
    for (i = 0; i < listCount; i++) {
      reader[i] = new FileReader();
      reader[i].onload = readerResulter;
    }
    */
}
/*
function fileLoader() {
  console.log("click");
  fileElem.click();
}

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
