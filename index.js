

$(function() {
    $("#navbar-parent").load("/navbar.html");
    $("#footer-parent").load("/footer.html");
});

let title = document.getElementById('title').innerHTML
document.title = `Cheeseman Dev - ${title}`