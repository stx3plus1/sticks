function start() {
  document.getElementById('nav').style.left = "-45px";
  document.getElementById('container').style.marginLeft = "0";
  document.getElementById('newline').style.display = "none";
}

function showdiv1() {
  document.getElementById('hide1').style.visibility = "visible";
  document.getElementById('cursor1').style.display = "none";
  document.getElementById('cursor2').style.visibility = "visible";
}
function showdiv2() {
  document.getElementById('hide2').style.visibility = "visible";
  document.getElementById('cursor2').style.display = "none";
}

function initHide() {
  document.getElementById('main').style.opacity = "0";
  document.getElementById('nav').style.transition = "0.5s ease-in-out";
  document.getElementById('nav').style.left = "0px";
}

function showFinal() {
  // lengthy function
  var w = window.innerWidth;
  var h = window.innerHeight;

  document.getElementById('login').style.display = "none";
  document.getElementById('titletext').innerHTML = "Browser";
  if (w < 650) {
    document.getElementById('titlebar').style.width = "90vw";
    document.getElementById('titlebar').style.marginLeft = "40px";
  } else {
    document.getElementById('container').style.paddingLeft = "25px";
  }
  document.getElementById('main').style.opacity = "1";
  document.getElementById('postlog').style.visibility = "visible";
}

function newline() {
   document.getElementById('newline').style.display = "block";
}

var i = 0;
var txt = 'st1cks stuf'; 
var speed = 50; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout("start()", 1);
setTimeout("showdiv1()", 1000);
setTimeout("typeWriter()", 2000);
setTimeout("newline()", 2650);
setTimeout("showdiv2()", 3500);
setTimeout("initHide()", 6000);
setTimeout("showFinal()", 7000);