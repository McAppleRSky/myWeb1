function valid (form) {
	var fail= false;
	var name = form.name.value;
	var telnum = form.telnum.value;
	var email = form.email.value;
	var tel_pattern= /^\d{11}$/;
	var adr_pattern= /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;

//	form.name.style.border = "1px solid gray";
//	form.telnum.style.border = "1px solid gray";
//	form.email.style.border = "1px solid gray";

	if(name=="") {
		fail="Имя пользователя не должно быть пустым";
		form.name.style.border = "2px solid red";
	}
	else {
		form.name.style.border = "1px solid gray";
		if(tel_pattern.test(telnum)== false){
			fail="Вы ввели телефон в некорректном виде (необходимо 11 цифр)";
			form.telnum.style.border = "2px solid red";
		}
		else {
			form.telnum.style.border = "1px solid gray";
			if(adr_pattern.test(email)== false){
				fail="Вы ввели некорректный email";				
				form.email.style.border = "2px solid red";
			}
			else form.email.style.border = "1px solid gray";
		}
	}

	if (fail) alert(fail); else alert("Проверка успешно пройдена.");
}