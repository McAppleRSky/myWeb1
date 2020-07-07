var dayNames = "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота",
  month = "",
  beginDateParts = "",
  currentDate;

function go() {
  currentDate = new Date();
  if (currentDate.getMonth() < 10) month = "0" + currentDate.getMonth();
  else month = currentDate.getMonth();
  $('#tDateBar tr:last td div')
    .empty()
    .append(`Сегодня: ${(""+currentDate).split(' ')[2]}.${month}.${currentDate.getYear()-100} г., ${
        dayNames.split('_')[currentDate.getDay()]}, ${(""+currentDate).split(' ')[4]}`);
  beginDate
    = new Date(beginDateParts[0], (beginDateParts[1] - 1), beginDateParts[2]);
  $('#tDateBar tr:first td div')
    .empty()
    .append(`Period development : ${((currentDate - beginDate) / (1000 * 3600 * 24)).toFixed()} days`);
  setTimeout("go()", 1000);
}

$(function() {
  $("#tDateBar")
    .width("100%")
    .css("border", "0");
  $("#tDateBar tr:first")
    .width("95%")
    .css("text-align", "left");
  $("#tDateBar tr:last")
    .css("background-color", "gray")
    .css("color", "white");
  beginDateParts = $("time").attr("datetime").split('-');
  go();
});
