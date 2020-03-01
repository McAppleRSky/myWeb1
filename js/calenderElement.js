monthNumbers = ("01,02,03,04,05,06,07,08,09,10,11,12").split(',');
monthNames = ("январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь").split(',');
document.addEventListener("DOMContentLoaded", fillDate);
var birthdate, birthmonth, birthyear, panel;

function fillDate() {
  birthdate = document.querySelector("#birthdate");
  birthmonth = document.querySelector(".birthmonth");
  birthyear = document.querySelector(".birthyear");
  panel = document.querySelector(".panel");

  let srcDate = new Date();

  let date = "";
  if (srcDate.getDate() < 10) date = "0" + srcDate.getDate();
  else date = srcDate.getDate();

  let month = srcDate.getMonth();

  let year = srcDate.getYear() - 12;

  birthdate.value = `${date}.${monthNumbers[month]}.${year-100+2000}`;


  monthNames.forEach(function(entry) {
//    console.log(entry);
    let option = document.createElement("option");
    option.textContent=entry;
    birthmonth.appendChild(option);
  });
  birthmonth.setAttribute("value", monthNumbers[month]);

/**
  for (var i = 6 + year; i > year - 6; i--) {
    let option = document.createElement("option");
    option.textContent=i - 100 + 2000;
    option.setAttribute("value", i);
    birthyear.appendChild(option);
  }
  */
  var option;
  for (var i = 0; i < 12; i++) {
    option = document.createElement("option");
    birthyear.appendChild(option);
  }
  option.textContent=year;
  birthyear.value=year;
  fillYear(birthyear);
}

function fillYear(yearSelector){
  //console.log(yearSelector.value);
  let year =  Number(yearSelector.value);
  let options = yearSelector.getElementsByTagName("option");
  for (var i = 6 + year, j=0; i > year - 6; i--,j++) {
    //console.log(i, j);
    options[j].textContent= i - 100 + 2000;
    options[j].setAttribute("value", i);
  }
  yearSelector.value=year;
}

function incYear(inc){
  year = Number(birthyear.value);
  birthyear.value=year+inc;
  fillYear(birthyear);
}

function fillCalender(){
}
