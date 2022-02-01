

$(function() {
    $("#navbar-parent").load("/navbar.html");
    $("#footer-parent").load("/footer.html");
});


function createEmbed(desc, img)
{
    let html = `<meta property="og:title" content="title-here" /><meta property="og:description" content="desc-here" /><meta name="theme-color" content="#303434" /><meta name="author" content="Cheeseman" /><meta property="og:image" content="img-here"></meta>`
    html.replace('title-here', document.title)
    html.replace('desc-here', desc)
    html.replace('img-here', img)
    let head = document.head
    head.insertAdjacentHTML('beforeend', html)
}


let title = document.getElementById('title').innerHTML
document.title = `Cheeseman Dev - ${title}`