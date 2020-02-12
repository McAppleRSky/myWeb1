
function howMany(selectObject) {
  var numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected == true)
      numberSelected++;
  }
  return numberSelected;
}

function howManyNotnone(selectObject) {
  let numberSelected = 0;
  for (let i = 1; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected == true)
      numberSelected++;
  }
  return numberSelected;
}

function howManyChecked(checkObject){
  let numberChecked = 0;
  for (let i = 0; i < checkObject.length; i++) {
    if (checkObject[i].checked)
      numberChecked++;
  }
  //console.log("ask2 checked "+numberChecked);
  return numberChecked;
}

function validMainForm() {
  var form = document.querySelector('#mainForm');
  var submitMessage = document.querySelector('#MainFormSubmitedMessage');
  var submitStatus = true; //false if def

  var nicname = form.nicname.value;
  var family = form.family.value;
  var name = form.name.value;
  var surname = form.surname.value;
  var ask1 = form.ask1.value;
  var ask2Cnt = howManyChecked(form.ask2);
  var ask3 = form.ask3.value;
  var ask4Cnt = howMany(form.ask4);
  var ask5Cnt = howManyNotnone(form.ask5);
  var ask6Cnt = howMany(form.ask6);
  //console.log("Cnt"+ask4Cnt+ask5Cnt+ask6Cnt);

  //  var tel_pattern = /^\d{11}$/;
  //  var adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;

  //	form.name.style.border = "1px solid gray";
  //	form.telnum.style.border = "1px solid gray";
  //	form.email.style.border = "1px solid gray";

  if(ask6Cnt==0){
    form.querySelector("#ask6").style.border = "2px dashed red";
    form.querySelector("#valid61").style.display="inline";
    submitStatus=false;
    document.getElementsByName('ask6')[0].focus();
  }else{
    form.querySelector("#ask6").style.border = "1px solid gray";
    form.querySelector("#valid61").style.display="none";
  }
    if(ask5Cnt==0){
    form.querySelector("#ask5").style.border = "2px dashed red";
    form.querySelector("#valid51").style.display="inline";
    submitStatus=false;
    document.getElementsByName('ask5')[0].focus();
  }else{
    form.querySelector("#ask5").style.border = "1px solid gray";
    form.querySelector("#valid51").style.display="none";
  }
  if(ask4Cnt==0){
    form.querySelector("#ask4").style.border = "2px dashed red";
    form.querySelector("#valid41").style.display="inline";
    submitStatus=false;
    document.getElementsByName('ask4')[0].focus();
  }else{
    form.querySelector("#ask4").style.border = "1px solid gray";
    form.querySelector("#valid41").style.display="none";
  }
  //С проверкой не менее 30 слов
  if(ask3==""){
    form.querySelector("#ask3").style.border = "2px dashed red";
    form.querySelector("#valid31").style.display="inline";
    submitStatus=false;
    document.getElementsByName('ask3')[0].focus();
  }else{
    form.querySelector("#ask3").style.border = "1px solid gray";
    form.querySelector("#valid31").style.display="none";
    console.log(`Слов: ${ask3.split(" ").length}`);
    if(ask3.split(" ").length<30){
      form.querySelector("#ask3").style.border = "2px dashed red";
      form.querySelector("#valid311").style.display="inline";
      submitStatus=false;
      document.getElementsByName('ask3')[0].focus();
    }else{
      form.querySelector("#ask3").style.border = "1px solid gray";
      form.querySelector("#valid311").style.display="none";
    }
  }
    if(ask2Cnt==0){
    form.querySelector("#ask2").style.border = "2px dashed red";
    form.querySelector("#valid21").style.display="inline";
    submitStatus=false;
    document.getElementsByName('ask2')[0].focus();
  }else{
    form.querySelector("#ask2").style.border = "1px solid gray";
    form.querySelector("#valid21").style.display="none";
  }
  if(ask1==""){
    form.querySelector("#ask1").style.border = "2px dashed red";
    form.querySelector("#valid11").style.display="inline";
    submitStatus=false;
    document.getElementsByName('ask1')[0].focus();
  }else{
    form.querySelector("#ask1").style.border = "1px solid gray";
    form.querySelector("#valid11").style.display="none";
  }

  if (nicname == "") {
    form.nicname.style.border = "2px dashed red";
    form.querySelector("#valid01").style.display="inline";
    submitStatus=false;
    form.nicname.focus();
  } else {
    form.nicname.style.border = "1px solid gray";
    form.querySelector("#valid01").style.display="none";
    if (nicname.length<3) {
      form.nicname.style.border = "2px dashed red";
      form.querySelector("#valid02").style.display="inline";
      submitStatus=false;
      form.nicname.focus();
    } else {
      form.nicname.style.border = "1px solid gray";
      form.querySelector("#valid02").style.display="none";
      if(nicname == "nicname"){
        form.nicname.style.border = "2px dashed red";
        form.querySelector("#valid03").style.display="inline";
        submitStatus=false;
        form.nicname.focus();
      }else{
        form.nicname.style.border = "1px solid gray";
        form.querySelector("#valid03").style.display="none";
        if(family == ""){
          form.family.style.border = "2px dashed red";
          form.querySelector("#valid011").style.display="inline";
          submitStatus=false;
          form.family.focus();
        }else{
          form.family.style.border = "1px solid gray";
          form.querySelector("#valid011").style.display="none";
          if(family.length<3){
            form.family.style.border = "2px dashed red";
            form.querySelector("#valid012").style.display="inline";
            submitStatus=false;
            form.family.focus();
          }else{
            form.family.style.border = "1px solid gray";
            form.querySelector("#valid012").style.display="none";
            if(name == ""){
              form.name.style.border = "2px dashed red";
              form.querySelector("#valid021").style.display="inline";
              submitStatus=false;
              form.name.focus();
            }else{
              form.name.style.border = "1px solid gray";
              form.querySelector("#valid021").style.display="none";
              if(name.length<3){
                form.name.style.border = "2px dashed red";
                form.querySelector("#valid022").style.display="inline";
                submitStatus=false;
                form.name.focus();
              }else{
                form.name.style.border = "1px solid gray";
                form.querySelector("#valid022").style.display="none";
                if(surname == ""){
                  form.surname.style.border = "2px dashed red";
                  form.querySelector("#valid031").style.display="inline";
                  submitStatus=false;
                  form.surname.focus();
                }else{
                  form.surname.style.border = "1px solid gray";
                  form.querySelector("#valid031").style.display="none";
                  if(surname.length<3){
                    form.name.style.border = "2px dashed red";
                    form.querySelector("#valid032").style.display="inline";
                    submitStatus=false;
                    form.surname.focus();
                  }else{
                    form.name.style.border = "1px solid gray";
                    form.querySelector("#valid032").style.display="none";
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  if(submitStatus){
    form.style.display="none";
    submitMessage.style.display="inline";
    //console.log("Проверка mainForm page6 успешно пройдена.");
  }

  return submitStatus;

  /*  if (name == "") {
      fail = "Имя пользователя не должно быть пустым";
      form.name.style.border = "2px solid red";
    } else {
      form.name.style.border = "1px solid gray";
      if (tel_pattern.test(telnum) == false) {
        fail = "Вы ввели телефон в некорректном виде (необходимо 11 цифр)";
        form.telnum.style.border = "2px solid red";
      } else {
        form.telnum.style.border = "1px solid gray";
        if (adr_pattern.test(email) == false) {
          fail = "Вы ввели некорректный email";
          form.email.style.border = "2px solid red";
        } else form.email.style.border = "1px solid gray";
      }
    }

    if (fail) alert(fail);
    else alert("Проверка успешно пройдена.");
  }*/
  //if (!fail){
  //  alert(fail + " " + nicname + " " + family + " " + name + " " + surname + " " + ask1 + " " + ask2 + " " + ask3 + " " + ask4Cnt + " " + ask5Cnt + " " + ask6Cnt);
      //alert(fail);
  //    console.log(fail);
  //    return false;
  //}
  //else {
  //}
}
