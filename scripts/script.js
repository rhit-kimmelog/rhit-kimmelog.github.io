let navbar = "<a href='index.html' id='main' class='link selected'>Main Page</a> <a href='resume.html' id='resume' class='link blue'>Resume</a> <a href='portfolio.html' id='portfolio' class='link blue'>Portfolio</a>";

let footer = "<a href='https://app.joinhandshake.com/profiles/owenkimmel'>Handshake Profile</a>";

document.addEventListener("DOMContentLoaded", function() {

    // https://befused.com/javascript/get-filename-url/
    let name = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1);

    document.getElementById("navbar").innerHTML = navbar;

    if (name == "resume.html") {
        document.getElementById("main").classList.remove("selected")

        document.getElementById("resume").classList.add("selected")

    }

    if (name == "portfolio.html") {
        document.getElementById("main").classList.remove("selected")

        document.getElementById("portfolio").classList.add("selected")
    }

    document.getElementById("footer").innerHTML = footer;
})