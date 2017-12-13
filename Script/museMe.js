for(i = 0; i < museArray.length; i++){
  displayTable(i);
  console.log("loop not broken");
}
function displayTable() {
var currentTitle = "mus" + i;
var newTable = document.createElement("TR");
var tableRow = "<td>" + currentTitle.title + "</td> " +
"<td>" + currentTitle.artist + "</td> " +
"<td>" + currentTitle.album + "</td> " +
"<td>" + currentTitle.release + "</td> " +
"<td>" + currentTitle.mood + "</td>";
newTable.appendChild(tableRow);
document.getElementById("tableId").appendChild(newTable);
}
