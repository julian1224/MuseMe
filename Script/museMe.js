for(i = 0; i < museArray.length; i++){
  var currentTitle = "mus" + i;

  // var title = document.createElement("TD");
  // var artist = document.createElement("TD");
  // var album = document.createElement("TD");
  // var release = document.createElement("TD");
  // var mood = document.createElement("TD");

  var titleAdd = window[currentTitle].title;
  var artistAdd = window[currentTitle].artist;
  var albumAdd = window[currentTitle].album;
  var releaseAdd = window[currentTitle].release;
  var moodAdd = window[currentTitle].mood;

  var tr=document.createElement("tr");
  var td=document.createElement("td");
  var text=document.createTextNode(titleAdd);
  td.innerHTML=titleAdd;
  tr.appendChild(td);
    var td=document.createElement("td");
    td.innerHTML=artistAdd;
    tr.appendChild(td);
      td=document.createElement("td");
      td.innerHTML=albumAdd;
      tr.appendChild(td);
        td=document.createElement("td");
        td.innerHTML=releaseAdd;
        tr.appendChild(td);
          td=document.createElement("td");
          td.innerHTML=moodAdd;
          tr.appendChild(td);
  //
  document.getElementById("tableId").appendChild(tr);
}
