//var pageCount;
prepCalcThisPage();

//deleteCookie(htmPage);
//deleteCookie(htmPage + "StartSession");
calcThisPage();

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

function calcThisPage(){
  let pageCount = Number(getCookie(htmPage));
  let date = new Date(Date.now());
  if(pageCount >= 0){
    if(pageCount == 0){
      setCookie(htmPage+"TimeStamp", date.toUTCString(), 1);
    }
    setCookie(htmPage, pageCount + 1, 1);
  }
  //console.log(getCookie(htmPage));
}

//function sessionStartStamp(){console.log("sessionStartStamp run");}
