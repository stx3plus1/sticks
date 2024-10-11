function scrolltop() {
    var objDiv = document.getElementById("html");
    objDiv.scrollTop = objDiv.scrollHeight;
}
function parse() {
    if(event.key === 'Enter') {
        newLineOfOutput()
    }
}
function newLineOfOutput() {
    if (document.getElementById("shell").value == "") {
        return;
    }
    if (document.getElementById("shell").value == "clear") {
        while (document.getElementById("text")) {
            document.getElementById("text").remove();
        }
        document.getElementById("shell").value = "";
        return;
    }
    const p = document.createElement("p");
    const parent = document.getElementById("prompt");
    p.id = "text";

    if (document.getElementById("shell").value == "help") {
        p.innerHTML = "$ " + document.getElementById("shell").value + "<br><h1>Help</h1>Let's get you some help.<br><br>ls - list all files (fake)<br>help - this command<br>about - about me!<br>projects - some of my projects<br>clear - works as in Linux<br><br>More will come eventually...";
        parent.appendChild(p);
        document.getElementById("shell").value = "";
        scrolltop();
        return;
    }
    if (document.getElementById("shell").value == "about") {
        let text = `
        <h1>About</h1>
        Hi, I'm cirkul/stx! Currently a terrible programmer living in Hell Censorship 2.0, legally the United Kingdom. 
        <br>I enjoy C, HTML + CSS, JavaScript and fucking around.
        <br>I don't have anything special to show off here, but I can say myself that I am quite the idiot.
        <br>I mean... I didn't hack an Amazon Fire at 4 years old... at all.
        `
        p.innerHTML = "$ " + document.getElementById("shell").value + "<br>" + text;
        parent.appendChild(p);
        document.getElementById("shell").value = "";
        scrolltop();
        return;
    }
    if (document.getElementById("shell").value == "projects") {
        let text = `
        <h1>Projects</h1>
        Currently, I'm working on a few, pretty good projects - including this website.
        <br>My best so far is strfetch, a system information tool - sort of like neofetch (RIP) that gives stats nicely.
        <br>However, it shows a stupid little string, so I'm special and I win of course.
        <br><small>I use arch btw (editors note (also me) i use debian lol)</small>
        <br>Some of my older projects include sillyfetch (not public yet) and Windows Limeover.
        <br>Limeover is a collection of Windows 7 modifications to make it a fresh lime theme... but it's a bit dead since M4 has been in development for literal years.
        <br>It's whatever, I prefer C over Resource Hacker now.
        <br>Anyways, enough of my random stuff. Go do something productive!
        `
        p.innerHTML = "$ " + document.getElementById("shell").value + "<br>" + text;
        parent.appendChild(p);
        document.getElementById("shell").value = "";
        scrolltop();
        return;
    }
    if (document.getElementById("shell").value == "strlx") {
        p.innerHTML = "$ " + document.getElementById("shell").value + "<br>You're funny.";
        parent.appendChild(p);
        document.getElementById("shell").value = "";
        scrolltop();
        return;
    }
    if (document.getElementById("shell").value == "ls") {
        p.innerHTML = "$ " + document.getElementById("shell").value + "<br>404.html &nbsp css &nbsp home.png &nbsp index.html &nbsp js &nbsp projects.html &nbsp README.md";
        parent.appendChild(p);
        document.getElementById("shell").value = "";
        scrolltop();
        return;
    }
    p.innerHTML = "$ " + document.getElementById("shell").value + "<br>Unknown command: " + document.getElementById("shell").value + ", try 'help'";
    parent.appendChild(p);
    document.getElementById("shell").value = "";
    scrolltop();
}