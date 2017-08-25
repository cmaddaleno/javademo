

function readOS() {
  var txt = "";
  
  txt += "<p>User-agent header: " + navigator.userAgent + "</p>";
  
  console.log(txt);
  document.getElementById("result2").innerHTML = txt;
}