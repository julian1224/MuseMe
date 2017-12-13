var museArray = [
  mus0 = {title: "Re-Hash", artist: "Gorillaz", album: "Gorillaz", release: "2001"},
  mus1 = {title: "5/4", artist: "Gorillaz", album: "Gorillaz", release: "2001"},
  mus2 = {title: "Tomorrow Comes Today", artist: "Gorillaz", album: "Gorillaz", release: "2001"},
  mus3 = {title: "New Genious (Brother)", artist: "Gorillaz", album: "Gorillaz", release: "2001"},
  mus4 = {title: "Clint Eastwood", artist: "Gorillaz", album: "Gorillaz", release: "2001"},
  mus5 = {title: "Man Research (Clapper)", artist: "Gorillaz", album: "Gorillaz", release: "2001"},
  mus6 = {title: "Punk", artist: "Gorillaz", album: "Gorillaz", release: "2001"},
  mus7 = {title: "Sound Check (Gravity)", artist: "Gorillaz", album: "Gorillaz", release: "2001"},
  mus8 = {title: "Double Bass", artist: "Gorillaz", album: "Gorillaz", release: "2001"},
  mus9 = {title: "Rock the House", artist: "Gorillaz", album: "Gorillaz", release: "2001"},
  mus10 = {title: "19-2000", artist: "Gorillaz", album: "Gorillaz", release: "2001"},
  mus11 = {title: "Latin Simone (¿Qué Pasa Contigo?)", artist: "Gorillaz", album: "Gorillaz", release: "2001"},
  mus12 = {title: "Starshine", artist: "Gorillaz", album: "Gorillaz", release: "2001"},
  mus13 = {title: "Slow Country", artist: "Gorillaz", album: "Gorillaz", release: "2001"},
  mus14 = {title: "M1 A1", artist: "Gorillaz", album: "Gorillaz", release: "2001"},

  mus15 = {title: "", artist: "", album: "NA", release: ""},
  mus16 = {title: "", artist: "", album: "NA", release: ""}
];

function writeToFile()
{
var fso = new ActiveXObject("Scripting.FileSystemObject");

var s = fso.CreateTextFile( .text, true);

for(i = 0; i < museArray.length; i++) {
  s.WriteLine(museArray[i].title + museArray[i].artist + museArray[i].album + museArray[i].release );
}
// <%String s1="Hai";%>
//
// s.WriteLine('<%=s1%>');
// s.WriteLine('***********************');
// s.WriteLine('<%=s1%>');
// s.WriteLine('<%=s1%>');

s.Close();
}
