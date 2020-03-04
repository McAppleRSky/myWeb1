var form // = document.querySelector('#messageForm')
;

const telef_pattern = /(\+[3|7]\d{10})|\d{9}/;
//  var telef_pattern_uni=/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
const mail_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;

document.addEventListener("DOMContentLoaded", page5init);

function qHowManyTextWord(message) {
  var dec = 0;
  message = message.trim(); //убрать дубли пробелов на конце и начале
  if (message.length > 0) {
    if (message.charAt(0) == " ") {
      dec++; //учет пробела на первым символом
    }
    if (message.length > 1) {
      if (message.charAt(message.length - 1) == " ") {
        dec++; //учет пробела последним символом
      }
    }
  }
  return message.split(" ").length - dec; //можно было бы убирать дубли внутри
}

function fnsFocusinHandler() {
  let fns = form.familyNameSurname;
  fns.classList.add("focused");
  fns.classList.remove("valid");
  fns.classList.remove("invalid");
}
function fnsFocusoutHandler() {
  let fns = form.familyNameSurname;
  let fnsValue = form.familyNameSurname.value;
  fns.classList.remove("focused");
  let fnsWordTextCnt = qHowManyTextWord(form.familyNameSurname.value);
  if (fnsValue == "") {
    form.querySelector("#valid01").style.display = "inline";
    //submitStatus = false;
    fns.classList.add("invalid");
//    document.getElementsByName('familyNameSurname')[0].focus();
  } else {
    form.querySelector("#valid01").style.display = "none";
    if (fnsValue == ' ') {
      form.querySelector("#valid02").style.display = "inline";
      //submitStatus = false;
      fns.classList.add("invalid");
//      document.getElementsByName('familyNameSurname')[0].focus();
    } else {
      form.querySelector("#valid02").style.display = "none";
      if (fnsValue.charAt(0) == ' ') {
        form.querySelector("#valid03").style.display = "inline";
        //submitStatus = false;
        fns.classList.add("invalid");
//        document.getElementsByName('familyNameSurname')[0].focus();
      } else {
        form.querySelector("#valid03").style.display = "none";
        if (fnsValue == "Фамилия Имя Отчество") {
          //console.log("проверка ФИО");
          form.querySelector("#valid04").style.display = "inline";
          //submitStatus = false;
          fns.classList.add("invalid");
//          document.getElementsByName('familyNameSurname')[0].focus();
        } else {
          form.querySelector("#valid04").style.display = "none";
          if (fnsWordTextCnt < 3) {
            form.querySelector("#valid05").style.display = "inline";
            //submitStatus = false;
            fns.classList.add("invalid");
//            document.getElementsByName('familyNameSurname')[0].focus();
          } else {
            form.querySelector("#valid05").style.display = "none";
            if (fnsWordTextCnt > 3) {
              form.querySelector("#valid06").style.display = "inline";
              //submitStatus = false;
              fns.classList.add("invalid");
//              document.getElementsByName('familyNameSurname')[0].focus();
            } else {
              form.querySelector("#valid06").style.display = "none";
              fns.classList.add("valid");
            }
          }
        }
      }
    }
  }

}

function genderFocusinHandler() {
  let genderOutline = document.querySelector("#genderOutline");
  genderOutline.classList.add("focused");
  genderOutline.classList.remove("valid");
  genderOutline.classList.remove("invalid");
}
function genderFocusoutHandler() {
  let genderOutline = document.querySelector("#genderOutline");
  let genderValue = form.gender.value;
  genderOutline.classList.remove("focused");
  if (genderValue == "") {
    form.querySelector("#valid11").style.display = "inline";
//    submitStatus = false;
//    document.getElementsByName('gender')[0].focus();
    genderOutline.classList.add("invalid");
  } else {
    form.querySelector("#valid11").style.display = "none";
    genderOutline.classList.add("valid");
  }

}

function telefFocusinHandler() {
  let telef = form.telef;
  telef.classList.add("focused");
  telef.classList.remove("valid");
  telef.classList.remove("invalid");
}
function telefFocusoutHandler() {
  let telef = form.telef;
  let telefValue = form.telef.value;
  telef.classList.remove("focused");

  if ((telefValue.length > 12) || (telef.length < 9)) {
    form.querySelector("#valid201").style.display = "inline";
//    submitStatus = false;
//    document.getElementsByName("telef")[0].focus();
  } else {
    form.querySelector("#valid201").style.display = "none";
    if (telef_pattern.test(telefValue) == false) {
      //console.log("telef invalid");
      form.querySelector("#valid20").style.display = "inline";
//      submitStatus = false;
//      document.getElementsByName("telef")[0].focus();
    } else {
      //console.log("telef valid");
      form.querySelector("#valid20").style.display = "none";
      telef.classList.add("valid");
    }
  }
}

function mailFocusinHandler() {
  let mail = form.mail;
  mail.classList.add("focused");
  mail.classList.remove("valid");
  mail.classList.remove("invalid");
}
function mailFocusoutHandler() {
  let mail = form.mail;
  let mailValue = form.mail.value;
  mail.classList.remove("focused");
  if (mail_pattern.test(mailValue) == false) {
    form.querySelector("#valid21").style.display = "inline";
//    submitStatus = false;
//    document.getElementsByName('mail')[0].focus();
  } else {
    form.querySelector("#valid21").style.display = "none";
    mail.classList.add("valid");
  }
}

function messageFocusinHandler() {
  let message = form.message;
  message.classList.add("focused");
  message.classList.remove("valid");
  message.classList.remove("invalid");
}
function messageFocusoutHandler() {
  let message = form.message;
  let messageValue = form.message.value;
  message.classList.remove("focused")
  if (messageValue == "") {
    form.querySelector("#valid31").style.display = "inline";
//    submitStatus = false;
//    document.getElementsByName('message')[0].focus();
  } else {
    form.querySelector("#valid31").style.display = "none";
    if (messageValue == "текст сообщения") {
      form.querySelector("#valid32").style.display = "inline";
//      submitStatus = false;
//      document.getElementsByName('message')[0].focus();
    } else {
      form.querySelector("#valid32").style.display = "none";
      message.classList.add("valid");
    }
  }
}

function birthdayFocusinHandler() {
  let birthday = form.birthdate;
  birthday.classList.add("focused");
  birthday.classList.remove("valid");
  birthday.classList.remove("invalid");
}
function birthdayFocusoutHandler() {
  let birthday = form.birthdate;
  let birthdayValue = form.birthdate.value;
  birthday.classList.remove("focused");
  if (birthdayValue=='') {
//    form.querySelector("#valid21").style.display = "inline";
//    submitStatus = false;
      birthday.classList.add("invalid");
//    document.getElementsByName('mail')[0].focus();
  } else {
    form.querySelector("#valid21").style.display = "none";
    birthday.classList.add("valid");
  }

}

function initValidElements() {
  form = document.querySelector('#messageForm');
  let fns = form.familyNameSurname;
  fns.addEventListener("focusin", fnsFocusinHandler);
  fns.addEventListener("focusout", fnsFocusoutHandler);
  let genderRadios = document.getElementsByName("gender");
  let genderOutline = document.querySelector("#genderOutline");
  for (let i = genderRadios.length; i--;) {
    genderRadios[i].addEventListener("focusin", genderFocusinHandler);
    genderRadios[i].addEventListener("focusout", genderFocusoutHandler);
  }
  let telef = form.telef;
  telef.addEventListener("focusin", telefFocusinHandler);
  telef.addEventListener("focusout", telefFocusoutHandler);
  let mail = form.mail;
  mail.addEventListener("focusin", mailFocusinHandler);
  mail.addEventListener("focusout", mailFocusoutHandler);
  let message = form.message;
  message.addEventListener("focusin", messageFocusinHandler);
  message.addEventListener("focusout", messageFocusoutHandler);
  let birthday = form.birthdate;
  birthday.addEventListener("focusin", birthdayFocusinHandler);
  birthday.addEventListener("focusout", birthdayFocusoutHandler);
}

function page5init() {
  //console.log("initing");
  initDateElements(); //init calender script(js/calenderElement.js)
  initValidElements(); //init valid script (js/page5valid.js)
}

function howManyTextWord(str) {
  var cnt = 0,
    startpos = 0;
  while (str.indexOf(" ", startpos) >= 0) {
    cnt++;
    // переведем стартовую  позицию для поиска на следующий символ
    startpos = str.indexOf(" ", startpos) + 1;
  }
  // увеличим счетчик, если последний пробел стоит не в конце строки
  if (startpos < str.length) {
    cnt++;
  }
  return cnt;
}

function validMessageForm() {
  var form = document.querySelector('#messageForm');
  var submitMessage = document.querySelector('#MessageFormSubmitedMessage');
  var submitStatus = true;

//  var fns = form.familyNameSurname.value;
  //  var fnsWordTextCnt = qHowManyTextWord(form.familyNameSurname.value);
  //console.log(`howManyTextWord: ${howManyTextWord(form.familyNameSurname.value)}`);
  //console.log(`qHowManyTextWord: ${qHowManyTextWord(form.familyNameSurname.value)}`);
//  var gender = form.gender.value;
//  var mail = form.mail.value;
//  var message = form.message.value;
//  var telef = form.telef.value;

  if (submitStatus) {
    form.style.display = "none";
    submitMessage.style.display = "inline";
    //console.log("Проверка mainForm page5 успешно пройдена.");
  }

  return submitStatus;

}
