//var pageCount;
prepCalcThisPage();
sessionStoragePrepCalcThisPage();

//deleteCookie(htmPage);
//deleteCookie(htmPage + "StartSession");
calcThisPage();
sessionStorageCalcThisPage();
//mainArticle = document.querySelector("#mainArticle")

function prepCalcThisPage(){
  //console.log("prepCalcThisPage on " + htmPage);
  //let htmPageStr = getCookie(htmPage);
  if (getCookie(htmPage) == undefined){
    setCookie(htmPage, '', 1);
  }
  if(getCookie(htmPage) == ''){
    setCookie(htmPage, '0', 1);
  }
//  console.log("prepCalc "+getCookie(htmPage));
};

function sessionStoragePrepCalcThisPage(){
  //console.log("prepCalcThisPage on " + htmPage);
  //let htmPageStr = getCookie(htmPage);
  if (sessionStorage.getItem(htmPage) == null){
    sessionStorage.setItem(htmPage, '', 1);
  }
  if(sessionStorage.getItem(htmPage) == ''){
    sessionStorage.setItem(htmPage, '0', 1);
  }
//  console.log("prepCalc "+getCookie(htmPage));
};

function calcThisPage(){
  let pageCount = Number(getCookie(htmPage));
  if(pageCount >= 0){
    if(pageCount == 0){
      let date = new Date(Date.now());
      setCookie(htmPage + "TimeStamp", date.toUTCString(), 1);
    }
    setCookie(htmPage, pageCount + 1, 1);
  }
  //console.log(getCookie(htmPage));
}

function sessionStorageCalcThisPage(){
  let pageCount = Number(sessionStorage.getItem(htmPage));
  if(pageCount >= 0){
    if(pageCount == 0){
      let date = new Date(Date.now());
      sessionStorage.setItem(htmPage + "TimeStamp", date.toUTCString());
    }
    sessionStorage.setItem(htmPage, pageCount + 1);
  }
  //console.log(getCookie(htmPage));
}
