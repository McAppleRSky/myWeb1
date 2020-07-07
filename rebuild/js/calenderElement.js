const monthNames = ("январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь").split(',');
const westDays = "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(',');
const euroeastDays = "Пн,Вт,Ср,Чт,Пт,Сб,Вс".split(',');

//ИНИЦИАЛИЗАЦИЯ ПЕРЕНЕСЕНА В (js/page5valid.js) В СВЯЗИ С ОБЪЕДИНЕНИЕМ СОБЫТИЯ
//document.addEventListener("DOMContentLoaded", InitDateElements);

var birthdate, birthmonth, birthyear, daysTSpace
//, dateValue
//, panel
;
var appendTableFlag=false;

function fillBirthdate(date, month, year) {
  const monthNumbers = ("01,02,03,04,05,06,07,08,09,10,11,12").split(',');
  if (date < 10) date = '0' + date;
  else date = '' + date;
  birthdate.value = `${date}.${monthNumbers[month]}.${year}`;
  //console.log(birthdate.value);
}

function initDateElements() {
  let year, month, date //= ""
  ;
  birthdate = document.querySelector("#birthdate");
  birthmonth = document.querySelector("#birthmonth");
  birthyear = document.querySelector("#birthyear");
  daysTSpace = document.querySelector("#days-space");
  //panel = document.querySelector(".panel");

  let srcDate = new Date();
  date = srcDate.getDate();
  month = srcDate.getMonth();
  year = srcDate.getFullYear() //- 12
  ;
  fillBirthdate(date, month, year);

  for (var i = 0; i < monthNames.length; i++){
    let optionMonth = document.createElement("option");
    optionMonth.textContent = monthNames[i];
    optionMonth.value = i;
    birthmonth.appendChild(optionMonth);
  }
  birthmonth.value = month;

  let optionYear;
  for (var i = 0; i < 12; i++) {
    optionYear = document.createElement("option");
    birthyear.appendChild(optionYear);
  }
  optionYear.textContent = year;
  birthyear.value = year;
  fillYear(birthyear);

  daysTSpace.value = date;
  //dateValue = date;
  //console.log(dateValue);
}

function fillYear(yearSelector){
  //console.log(yearSelector.value);
  let year =  Number(yearSelector.value);
  let options = yearSelector.getElementsByTagName("option");
  for (let i = 6 + year, j=0; i > year - 6; i--,j++) {
    //console.log(i, j);
    options[j].textContent= i ;
    options[j].setAttribute("value", i);
  }
  yearSelector.value=year;
  //fillCalender(document.querySelector("#birthdate"));
}

function incYear(inc, runnerElement){
  let year = Number(birthyear.value);
  birthyear.value=year+inc;
  fillYear(birthyear);
  fillBirthdate(daysTSpace.value, birthmonth.value, birthyear.value);
  fillCalender(runnerElement)
}

function fillCalender(runnerElement){
  console.log(`start filling calender ${runnerElement.id}`);
  //var daysTSpace = document.querySelector(".days-space");
  if(runnerElement.id == "birthmonth") {
    fillBirthdate(daysTSpace.value, birthmonth.value, birthyear.value);
  }

  if(runnerElement.id == "birthyear") {
    fillYear(runnerElement);
    fillBirthdate(daysTSpace.value, birthmonth.value, birthyear.value);
  }
  //console.log(dateValue);
  //fillBirthdate(daysTSpace.value, birthmonth.value, birthyear.value);

  let daysTable, daysTBody, daysTr, daysTh;
  if(appendTableFlag==true){
    let deletingNode = document.querySelector("#calenderTableUniq");
    daysTSpace.removeChild(deletingNode);
    appendTableFlag=false;
  }
  daysTable = document.createElement("table");
  daysTBody = document.createElement("tbody");
  daysTr = document.createElement("tr");
  daysTh = new Array(7);
  for (var i = 0; i < daysTh.length; i++) {
    daysTh[i] = document.createElement("th");
    daysTh[i].textContent=euroeastDays[i];
    daysTr.appendChild(daysTh[i]);
  }
  //daysTable.classList.add("calenderTable");
  daysTable.id = "calenderTableUniq";
  daysTBody.appendChild(daysTr);
  daysTable.appendChild(daysTBody);
  daysTSpace.appendChild(daysTable);
  appendTableFlag=true;

  let dateComponent, currentYear, currentMonth,
  lastDateCurrentMonth,firstDateCurrenMonth, firstDayCurrenMonth
  ,tokenDate = 1;
  //console.log(birthdate.value);
  dateComponent = birthdate.value.split('.');
  currentYear = Number(dateComponent[2]);
  currentMonth = Number(dateComponent[1]) - 1
  ;
  firstDateCurrenMonth = new Date(currentYear, currentMonth, 1);
  //console.log(firstDateCurrenMonth);
  firstDayCurrenMonth = firstDateCurrenMonth.getDay();
  //console.log(firstDayCurrenMonth);
  //СДВИГ НА РУССКИЙ ПОРЯДОК ДНЕЙ НЕДЕЛИ
  if (firstDayCurrenMonth == 0) firstDayCurrenMonth = 6;
  else firstDayCurrenMonth --;
  //console.log(firstDayCurrenMonth);
//  console.log(currentMonth);
  while (currentMonth == (new Date(currentYear, currentMonth, ++tokenDate)).getMonth()) {
    lastDateCurrentMonth = tokenDate;
//    console.log(lastDateCurrentMonth);
  }

  var daysTds = new Array();
  var daysTrs = new Array();
  let tokenDay, tokenRow = 0,
  appendChildTrFlag;

  daysTrs[tokenRow] = document.createElement("tr");
  appendChildTrFlag = false;
  daysTds[tokenRow] = new Array(7);
  for (tokenDay = 0; tokenDay < daysTds[tokenRow].length; tokenDay++) {
    daysTds[tokenRow][tokenDay]= document.createElement("td");
    daysTrs[tokenRow].appendChild(daysTds[tokenRow][tokenDay]);
  }

  for (tokenDate = 1,tokenDay = firstDayCurrenMonth;
      tokenDate <= lastDateCurrentMonth; tokenDay++,tokenDate++) {
    if(tokenDay==7){
      daysTBody.appendChild(daysTrs[tokenRow++]);
      appendChildTrFlag = true;
      daysTrs[tokenRow] = document.createElement("tr");
      appendChildTrFlag = false;
      daysTds[tokenRow] = new Array(7);

      for (tokenDay = 0; tokenDay < daysTds[tokenRow].length; tokenDay++) {
        daysTds[tokenRow][tokenDay]= document.createElement("td");
        daysTrs[tokenRow].appendChild(daysTds[tokenRow][tokenDay]);
      }
      tokenDay=0;
    }
    //console.log(`date ${tokenDate}, day ${tokenDay}, row ${tokenRow}`);
    let aHrefElement = document.createElement("a");
    aHrefElement.setAttribute("href","##");
    aHrefElement.textContent=tokenDate;
    daysTds[tokenRow][tokenDay].appendChild(aHrefElement);
    daysTds[tokenRow][tokenDay].onclick = function () {
      //let dateEdit = document.querySelector("#birthdate");
      //console.log(`${this.textContent},${birthmonth.value},${birthyear.value}`);
      daysTSpace.value = Number(this.textContent);
      fillBirthdate(daysTSpace.value, birthmonth.value, birthyear.value);
    };
  }
  if(appendChildTrFlag == false){
    daysTBody.appendChild(daysTrs[tokenRow]);
    appendChildTrFlag = true;
  }
}
