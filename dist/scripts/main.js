// Sticky top navigation / Hide on scroll down

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("main-nav-container").style.top = "0";
  } else {
    document.getElementById("main-nav-container").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}