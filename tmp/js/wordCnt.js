var str = " Тестовая строка, содержащая пять слов";
var cnt = 0,
  startpos = 0;

while (str.indexOf(" ", startpos) >= 0) {
  cnt++;
  // переведем стартовую позицию для поиска на следующий символ
  startpos = str.indexOf(" ", startpos) + 1;
}
// увеличим счетчик, если последний пробел стоит не в конце строки
if (startpos < str.length) {
  cnt++;
}
document.write("В строке \"" + str.italics() + "\" содержится " + cnt + " слов.");
