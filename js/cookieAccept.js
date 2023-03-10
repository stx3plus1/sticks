// set cookie according to you
var cookieName= "CookiesAccepted";
var cookieValue="True";
var cookieExpireDays=1000000000000;
// when users click accept button
let acceptCookie= document.getElementById("acceptCookie");
acceptCookie.onclick= function(){
    createCookie(cookieName, cookieValue, cookieExpireDays);
    document.getElementById("cookiePopup").style.bottom = "-400px";
}
let denyCookie = document.getElementById("denyCookie");
denyCookie.onclick = function(){
    document.getElementById("cookiePopup").style.bottom = "-400px"
}

// function to set cookie in web browser
 let createCookie= function(cookieName, cookieValue, cookieExpireDays){
  let currentDate = new Date();
  currentDate.setTime(currentDate.getTime() + (cookieExpireDays*24*60*60*1000));
  let expires = "expires=" + currentDate.toGMTString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  if(document.cookie){
    document.getElementById("cookiePopup").style.bottom = "-190px";
  }else{
    alert("Please unblock cookies to accept them!");
  }
 }
// get cookie from the web browser
let getCookie= function(cookieName){
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
// check cookie is set or not
let checkCookie= function(){
    let check=getCookie(cookieName);
    if(check==""){
        document.getElementById("cookiePopup").style.bottom = "15px";
    }else{
        document.getElementById("cookiePopup").style.display = "none";
    }
}
checkCookie();