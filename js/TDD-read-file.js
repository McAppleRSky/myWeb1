function getFileFromServer(url) {
  var xhr;

  xhr = new XMLHttpRequest();
//  xhr.onreadystatechange = handleStateChange;
  xhr.open("GET", url, true);
  xhr.send();

  console.log(`Output: ${xhr.readyState} ${xhr.status} ${xhr.responseText}`);
}

getFileFromServer("img/list");
