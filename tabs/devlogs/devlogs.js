

function loadDevlogs()
{
    // Fetching the devlog button
    fetch('./devlogButton.html')
    .then(request => request.text())
    .then(devlogButton => {
        // Fetching the devlogs json
        fetch('./devlogs.json')
        .then(request => request.json())
        .then(data => {
            // Creating the devlogs
            data.devlogs.forEach(element => {
                let devButtonStr = devlogButton.replace(">name", `>${element.name}`)
                                                .replace(">desc", `>${element.description}`)
                                                .replace("path", element.path)
                                                .replace("thumbnail-path", element.thumbnail)
                document.getElementById('content').insertAdjacentHTML('beforeend', devButtonStr)
            })
        })
    })
}

loadDevlogs();