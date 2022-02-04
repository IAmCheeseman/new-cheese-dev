

// `points` is an array:
// [
//  ["<name>", "<elementID>"],
//  ...
// ]
function addSkipper(points)
{
    fetch('/skipper.html')
    .then(request => request.text())
    .then(skipper => {
        document.body.insertAdjacentHTML('beforeend', skipper)
        let s = document.getElementById('skipper')
        points.forEach(point => {
            let name = point[0]
            let element = point[1]
            let html = `<a onclick="gotoElement('${element}')">${name}</a><br>`
            s.insertAdjacentHTML('beforeend', html)
        });
    })
}

function gotoElement(element)
{
    location.href = location.href.replace(/#[a-zA-Z0-9]*/, '') + `#${element}`
}