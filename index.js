// ./index.js

$(function() {
    $("#navbar-parent").load("/navbar.html");
    $("#footer-parent").load("/footer.html");
});

function setFavicon(img) {
    let head = document.querySelector('head');
    let favicon = document.createElement('link');
    favicon.rel = 'shortcut icon';
    favicon.href = img;

    head.appendChild(favicon);
}

function showNavButtons() {
    let buttons = document.getElementById("navbar-buttons");
    if (buttons.style.display == "none") buttons.style.display = "flex";
    else buttons.style.display = "none";
}

setFavicon('/favicon.png')

let title = document.getElementById('title').innerHTML
document.title = `Cheeseman Dev - ${title}`