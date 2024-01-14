function start() {
  document.getElementById('main').style.display = "none";
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
function showtimebomb() {
    document.getElementById('image').style.display = "block";
}
function initHide() {
    document.getElementById('login').style.display = "none";
    document.getElementById('main').style.display = "block";
}

var i = 0;
var txt = 'curl st1ckz.dev'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout("start()", 1);
setTimeout("showtimebomb()", 120000);
setTimeout("showdiv1()", 1000);
setTimeout("typeWriter()", 2000);
setTimeout("showdiv2()", 4000);
setTimeout("initHide()", 6000);