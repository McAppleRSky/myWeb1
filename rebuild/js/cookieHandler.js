function getCookie(name){
  let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, exlpiration_days){
  let date = new Date(Date.now() + 86400e3*exlpiration_days);
  date = date.toUTCString();
  document.cookie = encodeURIComponent(name)
   + '=' + encodeURIComponent(value) + "; expires=" + date;
}

function deleteCookie(name) {
  setCookie(name, "", {'max-age': -1})
}
