const imgListPath = ["img/", "album/"],
  listFilename = "list.txt",
  listfFilename = "listf.txt",
  file = 0,
  title = 1,
  width = 2,
  height = 3,
  listCount = 2;

var lists = [],
  photos = [],
  reader = [],
  readerIndex = -1,
  mainArticle, imgList,
  fileElem,
  full = false,
  formated = false,
  OnesReadystatechangeCount = 0,
  i,
  currentPhotoView, curPhotoViewHeight, curPhotoViewWidth = 0;

let myConsole = window.console;

function Photo(file, title, width, height) {
  this.file = file;
  this.title = title;
  this.width = width;
  this.height = height;
}

$(".mainArticle")
  .css("background-image", 'url("img/cfa82088a277960755ecb3ca54c728be.png")')
  .css("background-repeat", "repeat-y")
  .css("background-position", "left")
  .css("background-size", "100%");
$(".commonTable")
  .width("78%");
$("figcapTitle")
  .css("font-size", "75%");
$("table.commonTable tr th")
  .width("15%");


document.onreadystatechange = function() {
  if (document.readyState == "complete") {
    if (OnesReadystatechangeCount++ == 0) {
      fillListAndPhotosAndAlbumHandler();
    }
  }
};

function fillListAndPhotosAndAlbumHandler() {
  if (window.location.protocol == "http:") {
    fillListFromHttp();
    $(".mainArticle").children(".imgList").remove();
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
            $(`object[data='${imgListPath[0] + listfFilename}']`)
              .css("display", "none");
          }
          if (lists.length == listCount) {
            $(".mainArticle")
              .children(".imgList")
                .remove();
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
    cellCount = 4,
    tableWidthPercent = "100",
    newRow, newCell, fileName, anchEl, figEl, imgEl, figcapEl,
    j, k;
  photoTable = document.createElement("table");
  photoTable.id = "photoTable";
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
        imgEl.onclick = function(event) {
          let currentSrc = event.path[0].src,
            componentSrc = currentSrc.split('/')
          ;
          photos.forEach((item, i) => {
            if (item.file == componentSrc[componentSrc.length - 1])
              currentPhotoView = i;
          });

          $("#viewLayer")
            .addClass("win-modal")
            .removeClass("win")
          ;

          setPhotoViewLayer(currentSrc);

          $(".blured")
            .addClass("blur");
          $("body")
            .addClass("lock");
        };
        figcapEl = document.createElement("figcaption");
        figcapEl.textContent = photos[k].title;
        figcapEl.classList.add("figcapTitle");

        figEl = document.createElement("figure");
        figEl.appendChild(imgEl);
        figEl.appendChild(figcapEl);

        anchEl = document.createElement("a");
        anchEl.appendChild(figEl);

        newCell.appendChild(anchEl);

        k++;
      }
    }
    i++;
  }

  photoTable.classList.add("blured");

  $(".mainArticle").append(photoTable);
  $(".mainArticle")
    .css("padding-top", "5px");
  $(".mainArticle")
    .append('<div class="win" id="viewLayer"></div>');
  $("#viewLayer")
    .css("background-color", "#81ecec")
    .css("top", "5%")
    .css("left", "5%")
    .append(`
      <figure>
        <img src="" alt="" >
        <figcaption>
          <table>
            <tr>
              <td></td>
              <td>-----------------------------------</td>
              <td></td>
            </tr>
          </table>
        </figcaption>
      </figure>
      `)
    .find("img")
    .click(function() {
      $(".win-modal")
        .addClass("win")
        .removeClass("win-modal");
      $(".blured")
        .removeClass("blur");
      $("body")
        .removeClass("lock");
    });
  $("#viewLayer")
    .find("table")
    .width("100%")
    .find("tr")
    .css("background-color", "#81ecec")
    .find("td").eq(1)
    .css("color", "gray")
    .css("width", "50%")
    .css("text-align", "center");
  $("#viewLayer")
    .find("td:first")
    .css("text-align", "right")
    .append("<label><strong>&lt;&lt;</strong></label>")
    .children()
    .click(function() {
//        console.log("left click");
      if (currentPhotoView == 0)
        currentPhotoView = photos.length - 1;
      else currentPhotoView--;
      setPhotoViewLayer(imgListPath[0] + imgListPath[1] +
        photos[currentPhotoView].file);
    });
  $("#viewLayer")
    .find("td:last")
    .append("<label><strong>&gt;&gt;</strong></label>")
    .children()
    .click(function() {
//        console.log("right click");
      if (currentPhotoView == photos.length - 1)
        currentPhotoView = 0;
      else currentPhotoView++;
      //            console.log(currentPhotoView);
      setPhotoViewLayer(imgListPath[0] + imgListPath[1] +
        photos[currentPhotoView].file);
    });
}

function setPhotoViewLayer(src) {
  let prevPhotoViewWidth, continueIf = false;
  if (curPhotoViewWidth != 0) {
    continueIf = true;
    prevPhotoViewWidth = curPhotoViewWidth;
    $("#viewLayer")
      .find("img")
      .css("opacity", "0.0")
      .css("height", "")
      .css("width", "");
  }
  $("#viewLayer")
    .find("img")
    .attr("src", src)
    .attr("title", photos[currentPhotoView].title)
    .attr("alt", photos[currentPhotoView].alt)
    .attr("height", $(window).height() / 2);
  curPhotoViewHeight = $("#viewLayer").find("img").height();
  curPhotoViewWidth = $("#viewLayer").find("img").width();
  if (continueIf) {
    $("#viewLayer")
      .find("img")
      .removeAttr("height")
      .css("height", curPhotoViewHeight)
      .css("width", prevPhotoViewWidth);
    $("#viewLayer")
      .find("img")
      .animate({
        opacity: 1.0,
        height: curPhotoViewHeight,
        width: curPhotoViewWidth
      }, 300);
  };
  $("#viewLayer")
    .find("td")
    .eq(1)
    .empty()
    .append(`фото ${currentPhotoView+1} из ${photos.length}`);
}
