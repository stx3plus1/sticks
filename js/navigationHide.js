var isMobile = window.orientation > -1;

if (isMobile) {
  window.onscroll = function() {scrollFunction()};
}

window.onscroll = function() {scrollFunctionP2()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 25) {
    document.getElementById("sidenav").style.left = "-61px";
    document.getElementById("page").style.paddingLeft = "5px";
  } else {
    document.getElementById("sidenav").style.left = "0";
    document.getElementById("page").style.paddingLeft = "75px";
  }
}

function scrollFunctionP2() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 25) {
    document.getElementById("sidenav").style.backgroundColor = "rgba(33, 33, 40, 0.7)";
  } else {
    document.getElementById("sidenav").style.backgroundColor = "rgba(33, 33, 40, 0)";
  }
}