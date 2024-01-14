function start() {
  document.getElementById('postlog').style.display = "none";
  document.getElementById('nav').style.left = "-45px";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
    document.getElementById('login').style.display = "none";
    document.getElementById('postlog').style.display = "block";
    document.getElementById('nav').style.transition = "0.5s ease-in-out";
    document.getElementById('nav').style.left = "0px";
}

var i = 0;
var txt = './st1cks.sh'; 
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
setTimeout("showdiv2()", 3500);
setTimeout("initHide()", 5000);