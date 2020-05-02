let htmPages = "index_page1_page2_page3_page4_page5_page6_page7";
let theader = "Page_Count_Timestamp";

let pageMain = document.querySelector("main");
let table = document.createElement("table");
let tbody = document.createElement("tbody");

let th2 = document.createElement("h2");
let th2text = document.createTextNode("История за все время");
th2.appendChild(th2text);
pageMain.appendChild(th2);

createTable();
fillTable();

table.appendChild(tbody);
pageMain.appendChild(table);

function createTable(){
  let j;
  // creates a table row
  let row = document.createElement("tr");
  let cell, cellText;

  for (j = 0; j < theader.split('_').length; j++) {
    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    cell = document.createElement("th");
    cellText = document.createTextNode(theader.split('_')[j]);
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  // add the row to the end of the table body
  tbody.appendChild(row);
}

function fillTable(){
  let i;
  let cell0, cellText0, cell1, cellText1, cell2, cellText2;

  // creating all cells
  for (i = 0; i < htmPages.split('_').length; i++) {
    // creates a table row
    let row = document.createElement("tr");
    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    cell0 = document.createElement("td");
    //console.log(htmPages.split('_')[i]+".htm");
    cellText0
     = document.createTextNode(htmPages.split('_')[i]+".htm");
    cell0.appendChild(cellText0);
    row.appendChild(cell0);

    cell1 = document.createElement("td");
    cellText1
     = document.createTextNode(getCookie(htmPages.split('_')[i]));
    cell1.appendChild(cellText1);
    row.appendChild(cell1);

    cell2 = document.createElement("td");
    cellText2
     = document.createTextNode(getCookie(htmPages.split('_')[i] + "TimeStamp"));
    cell2.appendChild(cellText2);
    row.appendChild(cell2);
    // add the row to the end of the table body
    tbody.appendChild(row);
  }
}
