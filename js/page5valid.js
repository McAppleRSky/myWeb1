//var form // = document.querySelector('#messageForm')
//;
//var submitStatus = false;
//var validadedElements = new Array();

const telef_pattern = /(\+[3|7]\d{10})|\d{9}/;
//  var telef_pattern_uni=/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
const mail_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;

const birthday_pattern = /^\d{1,2}\.\d{1,2}\.\d{4}$/;
//document.addEventListener("DOMContentLoaded", page5init);

function validMessageForm() {
  //  var fns = form.familyNameSurname.value;
  //  var fnsWordTextCnt = qHowManyTextWord(form.familyNameSurname.value);
  //console.log(`howManyTextWord: ${howManyTextWord(form.familyNameSurname.value)}`);
  //console.log(`qHowManyTextWord: ${qHowManyTextWord(form.familyNameSurname.value)}`);
  //  var gender = form.gender.value;
  //  var mail = form.mail.value;
  //  var message = form.message.value;
  //  var telef = form.telef.value;

  //var form = document.querySelector('#messageForm');
  //var submitMessage = document.querySelector('#MessageFormSubmitedMessage');
  //let result = false;
  if ($(".invalid").eq(0).length == 0) result = true;
  else event.preventDefault();
  /*
    if (submitStatus) {
      form.style.display = "none";
      submitMessage.style.display = "inline";
      //console.log("Проверка mainForm page5 успешно пройдена.");
    }
    */
  console.log($(".invalid").eq(0).length);
  /*
    return //result;
      false;
      */
}

$(function() {
  // TODO: deletingNode
  initDateElements(); //init calender script(js/calenderElement.js)
  //$("input[name=birthdate]").val("---");
  initValidElements(); //init valid script (js/page5valid.js)
});
/*
function page5init() {
  //console.log("initing");
  initDateElements(); //init calender script(js/calenderElement.js)
  initValidElements(); //init valid script (js/page5valid.js)
}
*/

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
/**
function howManyTextWord(str) {
  var cnt = 0, startpos = 0;
  while (str.indexOf(" ", startpos) >= 0) {
    cnt++;
    // переведем стартовую  позицию для поиска на следующий символ
    startpos = str.indexOf(" ", startpos) + 1;
  }
  // увеличим счетчик, если последний пробел стоит не в конце строки
  if (startpos < str.length) {cnt++;}
  return cnt;
}
*/

/*
function canSubmit(){
  //console.log("test canSubmit");
  let result = false;
  //for (var i = validadedElements.length; i --; ) {if(validadedElements[i].classList.contains("valid")==false) result=false;}
//  console.log($(".invalid").get(0));
  if($(".invalid")
      .eq(0)
      .length == 0
    ) result=true;
  console.log(`result canSubmit ${result}, ${$(".invalid")}`);
  return result;
}
*/

function fnsFocusinHandler() {
  //  let fns = form.familyNameSurname;
  $("input[name=familyNameSurname]")
    .addClass("focused")
    .removeClass("valid")
    .removeClass("invalid");
  //$("#submit-button")
  /*
  fns.classList.add("focused");
  fns.classList.remove("valid");
  fns.classList.remove("invalid");
  */
  //document.querySelector
  //$("#submit-button").disabled = true;
  $("#submit-button") //.disabled = false;
    .prop("disabled", true);
}

function fnsFocusoutHandler() {
  //  let fns = form.familyNameSurname;
  //  let fnsValue = form.familyNameSurname.value;
  //  fns.classList.remove("focused");
  $("input[name=familyNameSurname]")
    .removeClass("focused");
  //let fnsWordTextCnt = qHowManyTextWord(form.familyNameSurname.value);
  if ($("input[name=familyNameSurname]").val() == "") {
    //    form.querySelector("#valid01").style.display = "inline";
    $("#valid01")
      .css("display", "inline");
    //submitStatus = false;
    //fns.classList.add("invalid");
    $("input[name=familyNameSurname]")
      .addClass("invalid");
    //    document.getElementsByName('familyNameSurname')[0].focus();
  } else {
    //form.querySelector("#valid01").style.display = "none";
    $("#valid01")
      .css("display", "none");
    if ($("input[name=familyNameSurname]").val() == ' ') {
      //form.querySelector("#valid02").style.display = "inline";
      $("#valid02")
        .css("display", "inline");
      //submitStatus = false;
      //fns.classList.add("invalid");
      $("input[name=familyNameSurname]")
        .addClass("invalid");
      //      document.getElementsByName('familyNameSurname')[0].focus();
    } else {
      //form.querySelector("#valid02").style.display = "none";
      $("#valid02")
        .css("display", "none");
      if ($("input[name=familyNameSurname]").val().charAt(0) == ' ') {
        //form.querySelector("#valid03").style.display = "inline";
        $("#valid03")
          .css("display", "inline");
        //submitStatus = false;
        //fns.classList.add("invalid");
        $("input[name=familyNameSurname]")
          .addClass("invalid");
        //        document.getElementsByName('familyNameSurname')[0].focus();
      } else {
        //form.querySelector("#valid03").style.display = "none";
        $("#valid03")
          .css("display", "none");
        if ($("input[name=familyNameSurname]")
          .val() == "Фамилия Имя Отчество") {
          //console.log("проверка ФИО");
          //form.querySelector("#valid04").style.display = "inline";
          $("#valid04")
            .css("display", "inline");
          //submitStatus = false;
          //fns.classList.add("invalid");
          $("input[name=familyNameSurname]")
            .addClass("invalid");
          //          document.getElementsByName('familyNameSurname')[0].focus();
        } else {
          //form.querySelector("#valid04").style.display = "none";
          $("#valid04")
            .css("display", "none");
          //if (fnsWordTextCnt < 3) {
          if (qHowManyTextWord(
              $("input[name=familyNameSurname]").val()) < 3) {
            //form.querySelector("#valid05").style.display = "inline";
            $("#valid05")
              .css("display", "inline");
            //submitStatus = false;
            //fns.classList.add("invalid");
            $("input[name=familyNameSurname]")
              .addClass("invalid");
            //            document.getElementsByName('familyNameSurname')[0].focus();
          } else {
            //form.querySelector("#valid05").style.display = "none";
            $("#valid05")
              .css("display", "none");
            //if (fnsWordTextCnt > 3) {
            if (qHowManyTextWord(
                $("input[name=familyNameSurname]").val()) > 3) {
              //form.querySelector("#valid06").style.display = "inline";
              $("#valid06")
                .css("display", "inline");
              //submitStatus = false;
              //fns.classList.add("invalid");
              $("input[name=familyNameSurname]")
                .addClass("invalid");
              //              document.getElementsByName('familyNameSurname')[0].focus();
            } else {
              //form.querySelector("#valid06").style.display = "none";
              $("#valid06")
                .css("display", "none");
              //fns.classList.add("valid");
              $("input[name=familyNameSurname]")
                .addClass("valid");
              // TODO: jquery disabled
              //if(canSubmit())//document.querySelector
              if ($(".invalid").eq(0).length == 0)
                $("#submit-button") //.disabled = false;
                .prop("disabled", false);
            }
          }
        }
      }
    }
  }

}

function genderFocusinHandler() {
  /*let genderOutline = document.querySelector("#genderOutline");
    genderOutline.classList.add("focused");
    genderOutline.classList.remove("valid");
    genderOutline.classList.remove("invalid");*/
  $("#genderOutline")
    .addClass("focused")
    .removeClass("valid")
    .removeClass("invalid");
  //document.querySelector
  //$("#submit-button").disabled = true;
  $("#submit-button") //.disabled = false;
    .prop("disabled", true);
}

function genderFocusoutHandler() {
  /*
  let genderOutline = document.querySelector("#genderOutline");
  let genderValue = form.gender.value;
  */
  //genderOutline.classList.remove("focused");
  $("#genderOutline")
    .removeClass("focused");
  if ( //genderValue == "") {
    $("input[name=gender]").is(":checked") == false) {
    //form.querySelector("#valid11").style.display = "inline";
    $("#valid11")
      .css("display", "inline");
    //    submitStatus = false;
    //    document.getElementsByName('gender')[0].focus();
    //genderOutline.classList.add("invalid");
    $("#genderOutline")
      .addClass("invalid");
  } else {
    //form.querySelector("#valid11").style.display = "none";
    $("#valid11")
      .css("display", "none");
    //genderOutline.classList.add("valid");
    $("#genderOutline")
      .addClass("valid");
    //if(canSubmit())//document.querySelector
    //if ($(".invalid").eq(0).length == 0) $("#submit-button").disabled = false;
    if ($(".invalid").eq(0).length == 0)
      $("#submit-button") //.disabled = false;
      .prop("disabled", false);
  }
}

function telefFocusinHandler() {
  /*
  //let telef = form.telef;
  //telef.classList.add("focused");
  //telef.classList.remove("valid");
  //telef.classList.remove("invalid");
  $("input[name=telef]")
    .addClass("focused")
    .removeClass("valid")
    .removeClass("invalid");
    */
  $("input[name=telef]")
    .addClass("focused")
    .removeClass("valid")
    .removeClass("invalid");
  //document.querySelector
  //$("#submit-button").disabled = true;
  $("#submit-button") //.disabled = false;
    .prop("disabled", true);
}

function telefFocusoutHandler() {
  //let telef = form.telef;
  //let telefValue = form.telef.value;
  //telef.classList.remove
  $("input[name=telef]")
    .removeClass("focused");
  if (($("input[name=telef]").val().length > 12) ||
    ($("input[name=telef]").val().length < 9)) {
    //form.querySelector("#valid201").style.display = "inline";
    $("#valid201")
      .css("display", "inline");
    //    submitStatus = false;
    //    document.getElementsByName("telef")[0].focus();
    $("input[name=telef]")
      .addClass("invalid");
  } else {
    //form.querySelector("#valid201").style.display = "none";
    $("#valid201")
      .css("display", "none");
    if (telef_pattern.test($("input[name=telef]").val()) == false) {
      //console.log("telef invalid");
      //form.querySelector("#valid20").style.display = "inline";
      $("#valid20")
        .css("display", "inline");
      //      submitStatus = false;
      //      document.getElementsByName("telef")[0].focus();
      $("input[name=telef]")
        .addClass("invalid");
    } else {
      //console.log("telef valid");
      //form.querySelector("#valid20").style.display = "none";
      $("#valid20")
        .css("display", "none");
      //telef.classList.add("valid");
      $("input[name=telef]")
        .addClass("valid");
      //if(canSubmit())//document.querySelector
      //if ($(".invalid").eq(0).length == 0) $("#submit-button").disabled = false;
      if ($(".invalid").eq(0).length == 0)
        $("#submit-button") //.disabled = false;
        .prop("disabled", false);
    }
  }
}

function mailFocusinHandler() {
  //let mail = form.mail;
  /*
  mail.classList.add("focused");
  mail.classList.remove("valid");
  mail.classList.remove("invalid");
  */
  $("input[name=mail]")
    .addClass("focused")
    .removeClass("valid")
    .removeClass("invalid");
  //document.querySelector
  //$("#submit-button").disabled = true;
  $("#submit-button") //.disabled = false;
    .prop("disabled", true);
}

function mailFocusoutHandler() {
  //let mail = form.mail;
  //let mailValue = form.mail.value;
  //mail.classList.remove("focused");
  $("input[name=mail]")
    .removeClass("focused");
  if (mail_pattern.test($("input[name=mail]").val()) == false) {
    //form.querySelector("#valid21").style.display = "inline";
    $("#valid21")
      .css("display", "inline");
    //    submitStatus = false;
    //    document.getElementsByName('mail')[0].focus();
    $("input[name=mail]")
      .addClass("invalid");
  } else {
    //form.querySelector("#valid21").style.display = "none";
    $("#valid21")
      .css("display", "none");
    //mail.classList.add("valid");
    $("input[name=mail]")
      .addClass("valid");
    //if(canSubmit())//document.querySelector
    //if ($(".invalid").eq(0).length == 0) $("#submit-button").disabled = false;
    if ($(".invalid").eq(0).length == 0)
      $("#submit-button") //.disabled = false;
      .prop("disabled", false);
  }
}

function messageFocusinHandler() {
  /*
    let message = form.message;
    message.classList.add("focused");
    message.classList.remove("valid");
    message.classList.remove("invalid");
    */
  $("input[name=message]")
    .addClass("focused")
    .removeClass("valid")
    .removeClass("invalid");
  //document.querySelector
  //$("#submit-button").disabled = true;
  if ($(".invalid").eq(0).length != 0)
    $("#submit-button") //.disabled = false;
    .prop("disabled", true);
}

function messageFocusoutHandler() {
  //let message = form.message;
  //let messageValue = form.message.value;
  //message.classList.remove("focused")
  $("input[name=message]")
    .removeClass("focused");
  if ($("input[name=message]").val() == "") {
    //form.querySelector("#valid31").style.display = "inline";
    $("#valid31")
      .css("display", "inline");
    //    submitStatus = false;
    //    document.getElementsByName('message')[0].focus();
    $("input[name=message]")
      .addClass("invalid");
  } else {
    //form.querySelector("#valid31").style.display = "none";
    $("#valid31")
      .css("display", "none");
    if ($("input[name=message]").val() == "текст сообщения") {
      //form.querySelector("#valid32").style.display = "inline";
      $("#valid32")
        .css("display", "inline");
      //      submitStatus = false;
      //      document.getElementsByName('message')[0].focus();
      $("input[name=message]")
        .addClass("invalid");
    } else {
      //form.querySelector("#valid32").style.display = "none";
      $("#valid32")
        .css("display", "none");
      //message.classList.add("valid");
      $("input[name=message]")
        .addClass("valid");
      //if(canSubmit())//document.querySelector
      //if ($(".invalid").eq(0).length == 0) $("#submit-button").disabled = false;
      if ($(".invalid").eq(0).length == 0)
        $("#submit-button") //.disabled = false;
        .prop("disabled", false);
    }
  }
}

function birthdateFocusinHandler() {
  /*let birthday = form.birthdate;
    birthday.classList.add("focused");
    birthday.classList.remove("valid");
    birthday.classList.remove("invalid");*/
  //console.log("IN handler");
  $("input[name=birthdate]")
    .addClass("focused")
    .removeClass("valid")
    .removeClass("invalid");
  //document.querySelector
  //$("#submit-button").disabled = true;
  $("#submit-button") //.disabled = false;
    .prop("disabled", true);
}

function birthdateFocusoutHandler() {
  //let birthday = form.birthdate;
  //let birthdayValue = form.birthdate.value;
  //birthday.classList.remove("focused");
  //console.log("OUT handler");
  $("input[name=birthdate]")
    .removeClass("focused");
  if (($("input[name=birthdate]").val() == '') ||
    (birthday_pattern
      .test($("input[name=birthdate]").val()) == false)) {
    //console.log("birthdate validate IF");
    //    form.querySelector("#valid21").style.display = "inline";
    $("#valid41")
      .css("display", "inline");
    //    submitStatus = false;
    //birthday.classList.add("invalid");
    $("input[name=birthdate]")
      .addClass("invalid")
    //    document.getElementsByName('mail')[0].focus();
  } else { //console.log("else");
    //form.querySelector("#valid21").style.display = "none";
    $("#valid41")
      .css("display", "none");
    //birthday.classList.add("valid");
    $("input[name=birthdate]")
      .addClass("valid")
    //if(canSubmit())//document.querySelector
    //if ($(".invalid").eq(0).length == 0) $("#submit-button").disabled = false;
    if ($(".invalid").eq(0).length == 0)
      $("#submit-button") //.disabled = false;
      .prop("disabled", false);
  }
}

function initValidElements() {
  //form = document.querySelector('#messageForm');
  //let fns = form.familyNameSurname;
  //validadedElements.push(fns);
  //fns.addEventListener("focusin", fnsFocusinHandler);
  //fns.addEventListener("focusout", fnsFocusoutHandler);
  //  fnsFocusinHandler();
  //  fnsFocusoutHandler();
  $("input[name=familyNameSurname]")
    .focusin(fnsFocusinHandler)
    .focusout(fnsFocusoutHandler)
    .attr("data-toggle", "popover")
    .attr("title", "Tips (popover):")
    .attr("data-content", "Поле должно содержать три слова разделенных пробелами для прохождения валидации по потере фокуса")
  //.focus()
  ;
  //let genderRadios = document.getElementsByName("gender");
  //let genderOutline = document.querySelector("#genderOutline");
  //validadedElements.push(genderOutline);
  /*
  for (let i = genderRadios.length; i--;) {
    genderRadios[i].addEventListener("focusin", genderFocusinHandler);
    genderRadios[i].addEventListener("focusout", genderFocusoutHandler);}
  */
  $("#genderOutline")
    .attr("data-toggle", "popover")
    .attr("title", "Tips (popover):")
    .attr("data-content", "Отметьте радиобоксом пол для прохождения валидации по потере фокуса")
  ;
  $("input[name=gender]")
    .each(function() {
      $(this)
        .focusin(genderFocusinHandler)
        .focusout(genderFocusoutHandler);
    });
  $("input[name=gender]").eq(0)
    .focus();
  //let telef = form.telef;
  //validadedElements.push(telef);
  //telef.addEventListener("focusin", telefFocusinHandler);
  //telef.addEventListener("focusout", telefFocusoutHandler);
  //  telefFocusinHandler();
  //  telefFocusoutHandler();
  $("input[name=telef]")
    .focusin(telefFocusinHandler)
    .focusout(telefFocusoutHandler)
    .attr("data-toggle", "popover")
    .attr("title", "Tips (popover):")
    .attr("data-content", "Заполните номер телефона (от 9 до 11 цифр на +3 и +7) для прохождения валидации по потере фокуса")
    .focus();
  //let mail = form.mail;
  //validadedElements.push(mail);
  //mail.addEventListener("focusin", mailFocusinHandler);
  //mail.addEventListener("focusout", mailFocusoutHandler);
  //  mailFocusinHandler();
  //  mailFocusoutHandler();
  $("input[name=mail]")
    .focusin(mailFocusinHandler)
    .focusout(mailFocusoutHandler)
    .attr("data-toggle", "popover")
    .attr("title", "Tips (popover):")
    .attr("data-content", "Заполните действительный адрес электронной почты для прохождения валидации по потере фокуса")
    .focus();
  //let message = form.message;
  //validadedElements.push(message);
  //message.addEventListener("focusin", messageFocusinHandler);
  //message.addEventListener("focusout", messageFocusoutHandler);
  //  messageFocusinHandler();
  //  messageFocusoutHandler();
  $("input[name=message]")
    .focusin(messageFocusinHandler)
    .focusout(messageFocusoutHandler)
    .attr("data-toggle", "popover")
    .attr("title", "Tips (popover):")
    .attr("data-content", "Заполните сообщение, отражающего суть обращения, для прохождения валидации по потере фокуса")
    .focus();
  //let birthday = form.birthdate;
  //validadedElements.push(birthday);
  //birthday.addEventListener("focusin", birthdayFocusinHandler);
  //birthday.addEventListener("focusout", birthdayFocusoutHandler);
  //  birthdayFocusinHandler();
  //  birthdayFocusoutHandler();
  $("input[name=birthdate]")
    //.attr("onclick", "").unbind("click")
    .focusin(birthdateFocusinHandler)
    .focusout(birthdateFocusoutHandler)
    //.click(fillCalender($("input[name=birthday]")))
    .attr("data-toggle", "popover")
    .attr("title", "Tips (popover):")
    .attr("data-content", "заполните дату рождения в формате ДД.ММ.ГГГГ  для прохождения валидации по потере фокуса")
    .focus();

  $("#submitReset")
    //.attr("onclick", "").unbind("click")
    //.click(fillCalender($("input[name=birthday]")))
    .attr("data-toggle", "popover")
    .attr("title", "Tips (popover):")
    .attr("data-content", "Для отправки необходимо заполнить поля формы и пройти валидацию по потере фокуса")
    .children("input[type=submit]")
      .css("pointer-events", "none")
      .addClass("btn")
      .addClass("btn-success")
  ;
  $("#submitReset")
    .children("input[type=reset]")
      .addClass("btn")
      .addClass("btn-warning")
  ;
  $("input[name=familyNameSurname]")
    .focus();
  //document.querySelector
  //$("#submit-button").disabled=true;
  $('[data-toggle="popover"]').popover({
    trigger: 'hover',
    delay: {
      "show": 100,
      "hide": 500
    }
  });
}
