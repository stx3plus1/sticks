var isMobile = window.orientation > -1;

if (isMobile) {
  window.onscroll = function() {scrollFunction()};
}

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 25) {
    document.getElementById("sidenav").style.left = "-61px";
    wait(500)
    document.getElementById("page").style.paddingLeft = "5px";
  } else {
    document.getElementById("sidenav").style.left = "0";
    wait(500)
    document.getElementById("page").style.paddingLeft = "75px";
  }
}