var h = document.getElementById("home-content");
var a = document.getElementById("about-me-content");
h.style.display = "block";
a.style.display = "none";


function hideHome() {
  var x = document.getElementById("home-content");
    x.style.display = "none";
}

function hideAboutMe() {
  var x = document.getElementById("about-me-content");
    x.style.display = "none";
}
function homeClicked() {
  var x = document.getElementById("home-content");
  hideAboutMe();
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}

function aboutMeClicked() {
  var x = document.getElementById("about-me-content");
  hideHome();
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}
