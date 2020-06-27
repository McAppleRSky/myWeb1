$(function() {
  $("body")
    .append('<div class="win" name="modal"></div>');
  $("[name=modal]")
    .css("background-color", "#81ecec")
    .css("top", "25%")
    .css("left", "25%")
    .css("border", "solid black")
    .append("<section><p>Вы действительно хотите это сделать?</p></section>")
    .append(
      '<section><input type="button" name="yesBut" value="Да"><input type="button" name="noBut"value="Нет"></section>'
    )
    .children("section").eq(0)
    .css("height", "80%")
    .css("display", "table")
    .children("p")
    .css("display", "table-cell")
    .css("vertical-align", "middle")
    .css("text-align", "center")
  //          table-cell!important;
  ;
  $("[name=modal]")
    .children("section").eq(1)
    .children("input")
    .css("width", "49%")
    .eq(0);
  $("#mainForm")
    .children("input[type=submit]")
    .attr("type", "button")
    .click(function() {
      $(".blured")
        .addClass("blur");
      $("body")
        .addClass("lock");
      $("[name=modal]")
        .removeClass("win")
        .addClass("win-modal");
    });
  $("#mainForm")
    .attr("onsubmit","")
  $("[name=noBut]")
    .click(function() {
      $(".blured")
        .removeClass("blur");
      $("body")
        .removeClass("lock");
      $("[name=modal]")
        .addClass("win")
        .removeClass("win-modal");
    });

  $("[name=yesBut]")
    .click(function() {
      let test = validMainForm();
      if (test// = validMainForm()
      ){
        $('#mainForm').submit();
        $('#mainForm')
          .css("display", "none");
        //    var submitMessage = document.querySelector('#MainFormSubmitedMessage');
        //    submitMessage.style.display="inline";
        $("#MainFormSubmitedMessage")
          .css("display", "inline");
        //$('#mainForm').submit();
      }
      console.log(test);

      $(".blured")
        .removeClass("blur");
      $("body")
        .removeClass("lock");
      $("[name=modal]")
        .addClass("win")
        .removeClass("win-modal");
/*
      */

    }
  );

  $("#mainForm li").eq(0)
    .attr("data-toggle", "popover")
    .attr("title", "Tips (popover):")
    .attr("data-content",
      "все поля должны быть заполнены словами не менее из 3 букв, не должны быть заполнены словами Nicname, Family, Name, Surname. Nicname заполняется латиницей для соместимости без utf-8"
    );
  $("#mainForm li").eq(2)
    .attr("data-toggle", "popover")
    .attr("title", "Tips (popover):")
    .attr("data-content", "поле должно быть отмечено");
  $("#mainForm li").eq(3)
    .attr("data-toggle", "popover")
    .attr("title", "Tips (popover):")
    .attr("data-content", "варианты должны быть выбраны");
  $("#mainForm li").eq(4)
    .attr("data-toggle", "popover")
    .attr("title", "Tips (popover):")
    .attr("data-content", "ответ должен быть длинной не менее 30 символов");
  $("#mainForm li").eq(5)
    .attr("data-toggle", "popover")
    .attr("title", "Tips (popover):")
    .attr("data-content", "должны быть отмечены несколько варриантов");
  $("#mainForm li").eq(6)
    .attr("data-toggle", "popover")
    .attr("title", "Tips (popover):")
    .attr("data-content", "ответ нужно выбрать");
  $("#mainForm li").eq(7)
    .attr("data-toggle", "popover")
    .attr("title", "Tips (popover):")
    .attr("data-content", "должны быть отмечены несколько варриантов");
  $('[data-toggle="popover"]').popover({
    trigger: 'hover',
    delay: {
      "show": 100,
      "hide": 500
    }
  });
});

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

function howManyChecked(checkObject) {
  let numberChecked = 0;
  for (let i = 0; i < checkObject.length; i++) {
    if (checkObject[i].checked)
      numberChecked++;
  }
  //console.log("ask2 checked "+numberChecked);
  return numberChecked;
}

function validMainForm() {
  let validStatus = true;
  let form = document.querySelector('#mainForm');

  if (howMany($("li#ask6").children("select[name=ask6]").get(0)) == 0) {
    //    form.querySelector("#ask6").style.border = "2px dashed red";
    $("#ask6")
      .css("border", "2px dashed red");
    $("#valid61")
      .css("display", "inline")
    //    form.querySelector("#valid61").style.display="inline";
    validStatus = false;
    //    document.getElementsByName('ask6')[0].focus();
    $("li#ask6")
      .children("select[name=ask6]")
      .focus();
  } else {
    //    form.querySelector("#ask6").style.border = "1px solid gray";
    $("#ask6")
      .css("border", "1px solid gray");
    //    form.querySelector("#valid61").style.display="none";
    $("#valid61")
      .css("display", "none")

  }
  //    if(ask5Cnt==0){
  if (howManyNotnone($("li#ask5").children("select[name=ask5]").get(0)) == 0) {
    //    form.querySelector("#ask5").style.border = "2px dashed red";
    //    form.querySelector("#valid51").style.display="inline";
    $("#ask5")
      .css("border", "2px dashed red");
    $("#valid51")
      .css("display", "inline")
    validStatus = false;
    //    document.getElementsByName('ask5')[0].focus();
    $("li#ask5")
      .children("select[name=ask5]")
      .focus();
  } else {
    //    form.querySelector("#ask5").style.border = "1px solid gray";
    //    form.querySelector("#valid51").style.display="none";
    $("#ask5")
      .css("border", "1px solid gray");
    $("#valid51")
      .css("display", "none")
  }
  //  if(ask4Cnt==0){
  if (howMany($("li#ask4").children("select[name=ask4]").get(0)) == 0) {
    //    form.querySelector("#ask4").style.border = "2px dashed red";
    //    form.querySelector("#valid41").style.display="inline";
    $("#ask4")
      .css("border", "2px dashed red");
    $("#valid41")
      .css("display", "inline")
    validStatus = false;
    //    document.getElementsByName('ask4')[0].focus();
    $("li#ask4")
      .children("select[name=ask4]")
      .focus();
  } else {
    //    form.querySelector("#ask4").style.border = "1px solid gray";
    //    form.querySelector("#valid41").style.display="none";
    $("#ask4")
      .css("border", "1px solid gray");
    $("#valid41")
      .css("display", "none")
  }
  //С проверкой не менее 30 слов
  //  if(ask3==""){
  if ($("li#ask3").children("textarea[name=ask3]").val() == "") {
    //    form.querySelector("#ask3").style.border = "2px dashed red";
    //    form.querySelector("#valid31").style.display="inline";
    $("#ask3")
      .css("border", "2px dashed red");
    $("#valid31")
      .css("display", "inline")
    validStatus = false;
    //    document.getElementsByName('ask3')[0].focus();
    $("li#ask3")
      .children("textarea[name=ask3]")
      .focus();
  } else {
    //    form.querySelector("#ask3").style.border = "1px solid gray";
    //    form.querySelector("#valid31").style.display="none";
    $("#ask3")
      .css("border", "1px solid gray");
    $("#valid31")
      .css("display", "none")
    //    console.log(`Слов: ${ask3.split(" ").length}`);
    //    if(ask3.split(" ").length<30){
    if ($("li#ask3").children("textarea[name=ask3]").val().split(" ").length < 30) {
      //      form.querySelector("#ask3").style.border = "2px dashed red";
      //      form.querySelector("#valid311").style.display="inline";
      $("#ask3")
        .css("border", "2px dashed red");
      $("#valid311")
        .css("display", "inline")
      validStatus = false;
      //      document.getElementsByName('ask3')[0].focus();
      $("li#ask3")
        .children("textarea[name=ask3]")
        .focus();
    } else {
      //      form.querySelector("#ask3").style.border = "1px solid gray";
      //      form.querySelector("#valid311").style.display="none";
      $("#ask3")
        .css("border", "1px solid gray");
      $("#valid311")
        .css("display", "none")
    }
  }
  //    if(ask2Cnt==0){
  if (howManyChecked($("li#ask2").children("input[name=ask2]")) == 0) {
    //console.log($("li#ask2").children("input[name=ask2]").length);
    //    form.querySelector("#ask2").style.border = "2px dashed red";
    //    form.querySelector("#valid21").style.display="inline";
    $("#ask2")
      .css("border", "2px dashed red");
    $("#valid21")
      .css("display", "inline")
    validStatus = false;
    //    document.getElementsByName('ask2')[0].focus();
    $("li#ask2")
      .children("input[name=ask2]")
      .get(0)
      .focus();
  } else {
    //    form.querySelector("#ask2").style.border = "1px solid gray";
    //    form.querySelector("#valid21").style.display="none";
    $("#ask2")
      .css("border", "1px solid gray");
    $("#valid21")
      .css("display", "none")
  }
  //  var ask1 = form.ask1.value;
  //  if(ask1==""){
  //  if($("li#ask1").children("input[name=ask1]").val()==""){
  if (form.ask1.value == "") {
    //    form.querySelector("#ask1").style.border = "2px dashed red";
    //    form.querySelector("#valid11").style.display="inline";
    $("#ask1")
      .css("border", "2px dashed red");
    $("#valid11")
      .css("display", "inline")
    validStatus = false;
    //    document.getElementsByName('ask1')[0].focus();
    $("li#ask1")
      .children("input[name=ask1]")
      .get(0)
      .focus();
  } else {
    //    form.querySelector("#ask1").style.border = "1px solid gray";
    //    form.querySelector("#valid11").style.display="none";
    $("#ask1")
      .css("border", "1px solid gray");
    $("#valid11")
      .css("display", "none")
  }

  //  if (nicname == "") {
  if ($("input[name=nicname]").val() == "") {
    //    form.nicname.style.border = "2px dashed red";
    //    form.querySelector("#valid01").style.display="inline";
    $("input[name=nicname]")
      .css("border", "2px dashed red");
    $("#valid01")
      .css("display", "inline")
    validStatus = false;
    //    form.nicname.focus();
    $("input[name=nicname]")
      .focus();
  } else {
    //    form.nicname.style.border = "1px solid gray";
    //    form.querySelector("#valid01").style.display="none";
    $("input[name=nicname]")
      .css("border", "1px solid gray");
    $("#valid01")
      .css("display", "none")
    //    if (nicname.length<3) {
    if ($("input[name=nicname]").val().length < 3) {
      //      form.nicname.style.border = "2px dashed red";
      //      form.querySelector("#valid02").style.display="inline";
      $("input[name=nicname]")
        .css("border", "2px dashed red");
      $("#valid02")
        .css("display", "inline")
      validStatus = false;
      //      form.nicname.focus();
      $("input[name=nicname]")
        .focus();
    } else {
      //      form.nicname.style.border = "1px solid gray";
      //      form.querySelector("#valid02").style.display="none";
      $("input[name=nicname]")
        .css("border", "1px solid gray");
      $("#valid02")
        .css("display", "none")
      //      if(nicname == "nicname"){
      if ($("input[name=nicname]").val() == "nicname") {
        //        form.nicname.style.border = "2px dashed red";
        //        form.querySelector("#valid03").style.display="inline";
        $("input[name=nicname]")
          .css("border", "2px dashed red");
        $("#valid03")
          .css("display", "inline")
        validStatus = false;
        //        form.nicname.focus();
        $("input[name=nicname]")
          .focus();
      } else {
        //        form.nicname.style.border = "1px solid gray";
        //        form.querySelector("#valid03").style.display="none";
        $("input[name=nicname]")
          .css("border", "1px solid gray");
        $("#valid03")
          .css("display", "none")
        //        if(family == ""){
        if ($("input[name=family]").val() == "") {
          //          form.family.style.border = "2px dashed red";
          //          form.querySelector("#valid011").style.display="inline";
          $("input[name=family]")
            .css("border", "2px dashed red");
          $("#valid011")
            .css("display", "inline")
          validStatus = false;
          //          form.family.focus();
          $("input[name=family]")
            .focus();
        } else {
          //          form.family.style.border = "1px solid gray";
          //          form.querySelector("#valid011").style.display="none";
          $("input[name=family]")
            .css("border", "1px solid gray");
          $("#valid011")
            .css("display", "none")
          //          if(family.length<3){
          if ($("input[name=family]").val().length < 3) {
            //            form.family.style.border = "2px dashed red";
            //            form.querySelector("#valid012").style.display="inline";
            $("input[name=family]")
              .css("border", "2px dashed red");
            $("#valid012")
              .css("display", "inline")
            validStatus = false;
            //            form.family.focus();
            $("input[name=family]")
              .focus();
          } else {
            //            form.family.style.border = "1px solid gray";
            //            form.querySelector("#valid012").style.display="none";
            $("input[name=family]")
              .css("border", "1px solid gray");
            $("#valid012")
              .css("display", "none")
            //          if(name == ""){
            if ($("input[name=name]").val() == "") {
              //              form.name.style.border = "2px dashed red";
              //              form.querySelector("#valid021").style.display="inline";
              $("input[name=name]")
                .css("border", "2px dashed red");
              $("#valid021")
                .css("display", "inline")
              validStatus = false;
              //              form.name.focus();
              $("input[name=name]")
                .focus();
            } else {
              //              form.name.style.border = "1px solid gray";
              //              form.querySelector("#valid021").style.display="none";
              $("input[name=name]")
                .css("border", "1px solid gray");
              $("#valid021")
                .css("display", "none")
              //              if(name.length<3){
              if ($("input[name=name]").val().length < 3) {
                //                form.name.style.border = "2px dashed red";
                //                form.querySelector("#valid022").style.display="inline";
                $("input[name=name]")
                  .css("border", "2px dashed red");
                $("#valid022")
                  .css("display", "inline")
                validStatus = false;
                //                form.name.focus();
                $("input[name=name]")
                  .focus();
              } else {
                //                form.name.style.border = "1px solid gray";
                //                form.querySelector("#valid022").style.display="none";
                $("input[name=name]")
                  .css("border", "1px solid gray");
                $("#valid022")
                  .css("display", "none")
                //                if(surname == ""){
                if ($("input[name=surname]").val() == "") {
                  //                  form.surname.style.border = "2px dashed red";
                  //                  form.querySelector("#valid031").style.display="inline";
                  $("input[name=surname]")
                    .css("border", "2px dashed red");
                  $("#valid031")
                    .css("display", "inline")
                  validStatus = false;
                  //                  form.surname.focus();
                  $("input[name=surname]")
                    .focus();
                } else {
                  //                  form.surname.style.border = "1px solid gray";
                  //                  form.querySelector("#valid031").style.display="none";
                  $("input[name=surname]")
                    .css("border", "1px solid gray");
                  $("#valid031")
                    .css("display", "none")
                  //                  if(surname.length<3){
                  if ($("input[name=surname]").val().length < 3) {
                    //                    form.name.style.border = "2px dashed red";
                    //                    form.querySelector("#valid032").style.display="inline";
                    $("input[name=surname]")
                      .css("border", "2px dashed red");
                    $("#valid032")
                      .css("display", "inline")
                    validStatus = false;
                    //                    form.surname.focus();
                    $("input[name=surname]")
                      .focus();
                  } else {
                    //                    form.name.style.border = "1px solid gray";
                    //                    form.querySelector("#valid032").style.display="none";
                    $("input[name=surname]")
                      .css("border", "1px solid gray");
                    $("#valid032")
                      .css("display", "none")
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return validStatus;
}
