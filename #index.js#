

$(function() {
    $("#navbar-parent").load("/navbar.html");
    $("#footer-parent").load("/footer.html");
});

function setFavicon(img){
    let head = document.querySelector('head');
    let favicon = document.createElement('link');
    favicon.rel = 'shortcut icon'
    favicon.href = img

    head.appendChild(favicon);
}

setFavicon('/favicon.png')

let title = document.getElementById('title').innerHTML
document.title = `Cheeseman Dev - ${title}`
