function myFunction() {
  var x = document.getElementById("myMenu");
  if (x.className === "menu") {
    x.className += " responsive";
    document.getElementById("mylogo").style.display = "none";
  } else {
    x.className = "menu";
    document.getElementById("mylogo").style.display = "block";
  }
}
