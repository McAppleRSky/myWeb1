var periodDateTextNode = document.getElementsByName('gobartable')[0].rows[0].cells[0].getElementsByTagName('font')[0];
var currentDateTextNode = document.getElementsByName('gobartable')[0].rows[1].cells[0].getElementsByTagName('font')[0];
var beginDateTextNode = document.getElementsByTagName('time')[0];
var beginDateParts = beginDateTextNode.dateTime.split(',');
var dayNames = "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота";
var month = "";

go();
function go() {
    var currentDate = new Date();
    if(currentDate.getMonth()<10)month="0"+currentDate.getMonth();
    else month=currentDate.getMonth();
    currentDateTextNode.textContent
        = `Сегодня: ${(""+currentDate).split(' ')[2]}.${month}.${currentDate.getYear()-100} г., ${
        dayNames.split('_')[currentDate.getDay()]}, ${(""+currentDate).split(' ')[4]}`;
    beginDate
        = new Date(beginDateParts[0], (beginDateParts[1] - 1), beginDateParts[2]);
    periodDateTextNode.textContent
        = `Period development : ${((currentDate - beginDate) / (1000 * 3600 * 24)).toFixed()} days`;
    setTimeout("go()",1000);
}
