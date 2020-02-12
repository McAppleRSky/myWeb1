function howManyTextWord(str){
  var cnt = 0,startpos=0;
  while(str.indexOf(" ",startpos)>=0){
     cnt++;
     // переведем стартовую  позицию для поиска на следующий символ
     startpos=str.indexOf(" ",startpos)+1;
  }
  // увеличим счетчик, если последний пробел стоит не в конце строки
  if (startpos<str.length) {
    cnt++;
  }
  return cnt;
}

function qHowManyTextWord(message){
  var dec=0;
  message = message.trim();//убрать дубли пробелов на конце и начале
  if(message.length>0){
    if(message.charAt(0)==" "){
       dec++;//учет пробела на первым символом
    }
    if(message.length>1){
      if(message.charAt(message.length-1)==" "){
        dec++;//учет пробела последним символом
      }
    }
  }
  return message.split(" ").length-dec;//можно было бы убирать дубли внутри
}

function validMessageForm() {
  var form = document.querySelector('#messageForm');
  var submitMessage = document.querySelector('#MessageFormSubmitedMessage');
  var submitStatus = true;

  var fns = form.familyNameSurname.value;
  var fnsWordTextCnt = qHowManyTextWord(form.familyNameSurname.value);
  //console.log(`howManyTextWord: ${howManyTextWord(form.familyNameSurname.value)}`);
  //console.log(`qHowManyTextWord: ${qHowManyTextWord(form.familyNameSurname.value)}`);
  var gender = form.gender.value;
  var mail = form.mail.value;
  var message = form.message.value;
  var telef = form.telef.value;
  var telef_pattern=/(\+[3|7]\d{10})|\d{9}/;
//  var telef_pattern_uni=/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  var mail_pattern= /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;


    if(message==""){
      form.querySelector("#valid31").style.display="inline";
      submitStatus=false;
      document.getElementsByName('message')[0].focus();
    }else{
      form.querySelector("#valid31").style.display="none";
      if(message=="текст сообщения"){
        form.querySelector("#valid32").style.display="inline";
        submitStatus=false;
        document.getElementsByName('message')[0].focus();
      }else{
        form.querySelector("#valid32").style.display="none";
      }
    }
    if(mail_pattern.test(mail)==false){
      form.querySelector("#valid21").style.display="inline";
      submitStatus=false;
      document.getElementsByName('mail')[0].focus();
    }else{
      form.querySelector("#valid21").style.display="none";
    }

    if((telef.length>12)||(telef.length<9)){
      form.querySelector("#valid201").style.display="inline";
      submitStatus=false;
      document.getElementsByName("telef")[0].focus();
    }else{
      form.querySelector("#valid201").style.display="none";
      if(telef_pattern.test(telef)==false){
        //console.log("telef invalid");
        form.querySelector("#valid20").style.display="inline";
        submitStatus=false;
        document.getElementsByName("telef")[0].focus();
      }else{
        //console.log("telef valid");
        form.querySelector("#valid20").style.display="none";
      }
    }

    if(gender==""){
      form.querySelector("#valid11").style.display="inline";
      submitStatus=false;
      document.getElementsByName('gender')[0].focus();
    }else{
      form.querySelector("#valid11").style.display="none";
    }

    if(fns==""){
      form.querySelector("#valid01").style.display="inline";
      submitStatus=false;
      document.getElementsByName('familyNameSurname')[0].focus();
    }else{
      form.querySelector("#valid01").style.display="none";
      if(fns==' '){
        form.querySelector("#valid02").style.display="inline";
        submitStatus=false;
        document.getElementsByName('familyNameSurname')[0].focus();
      }else{
        form.querySelector("#valid02").style.display="none";
        if(fns.charAt(0)==' '){
          form.querySelector("#valid03").style.display="inline";
          submitStatus=false;
          document.getElementsByName('familyNameSurname')[0].focus();
        }else{
          form.querySelector("#valid03").style.display="none";
          if(fns=="Фамилия Имя Отчество"){
            //console.log("проверка ФИО");
            form.querySelector("#valid04").style.display="inline";
            submitStatus=false;
            document.getElementsByName('familyNameSurname')[0].focus();
          }else{
            form.querySelector("#valid04").style.display="none";
            if(fnsWordTextCnt<3){
              form.querySelector("#valid05").style.display="inline";
              submitStatus=false;
              document.getElementsByName('familyNameSurname')[0].focus();
            }else{
              form.querySelector("#valid05").style.display="none";
              if(fnsWordTextCnt>3){
                form.querySelector("#valid06").style.display="inline";
                submitStatus=false;
                document.getElementsByName('familyNameSurname')[0].focus();
            }else{
              form.querySelector("#valid06").style.display="none";
            }
          }
        }
      }
    }
  }

  if(submitStatus){
    form.style.display="none";
    submitMessage.style.display="inline";
    //console.log("Проверка mainForm page5 успешно пройдена.");
  }

  return submitStatus;

}
