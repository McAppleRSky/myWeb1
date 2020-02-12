var photos = new Array();
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

mainArticle = document.getElementById("mainArticle");
//console.log(mainArticle);
mainArticle.appendChild(photoTable);
