function howMany(selectObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected == true)
      numberSelected++;
  }
  return numberSelected;
}

function valid(form) {
  var fail = true; //false if def
  var nicname = form.nicname.value;
  var family = form.family.value;
  var name = form.name.value;
  var surname = form.surname.value;
  var ask1 = form.ask1.value;
  var ask2 = form.ask2.value;
  var ask3 = form.ask3.value;

  var ask4Cnt = howMany(form.ask4);
  var ask5Cnt = howMany(form.ask5);
  var ask6Cnt = howMany(form.ask6);

  //  var tel_pattern = /^\d{11}$/;
  //  var adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;

  //	form.name.style.border = "1px solid gray";
  //	form.telnum.style.border = "1px solid gray";
  //	form.email.style.border = "1px solid gray";

  if (nicname == "") {
    fail = "поле Nicname должно быть заполнен для идентификации в случае отсутствия поддержки utf-8 системой";
    form.nicname.style.border = "2px solid red";
  } else {
    form.nicname.style.border = "1px solid gray";
    if (nicname == "nicname") {
      fail = "Nicname должен быть заполнен для идентификации в случае отсутствия поддержки utf-8 системой. Nicname должен быть уникальным по этому значение \"nicname\" в поле не уникально и не годится";
      form.nicname.style.border = "2px solid red";
    } else {
      form.nicname.style.border = "1px solid gray";
    }
  }


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
  if (fail) alert(fail + " " +
    nicname + " " +
    family + " " +
    name + " " +
    surname + " " +
    ask1 + " " +
    ask2 + " " +
    ask3 + " " +
    ask4Cnt + " " +
    ask5Cnt + " " +
    ask6Cnt);
    alert(fail);
  else console.log("Проверка формы page6 успешно пройдена.");
}
