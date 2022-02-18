

function loadBlogs(path, dst='content')
{
    // Fetching the devlog button
    fetch('/blogButton.html')
    .then(request => request.text())
    .then(blogButton => {
        // Fetching the devlogs json
        fetch(path)
        .then(request => request.json())
        .then(data => {
            // Creating the devlogs
            data.blogs.forEach(element => {
                let devButtonStr = blogButton
                .replace(">name", `>${element.name}`)
                .replace(">desc", `>${element.description}`)
                .replace("path", element.path)
                .replace("thumbnail-path", element.thumbnail)

                if (element.pinned) {
                    document.getElementById('pinned').insertAdjacentHTML('beforeend', devButtonStr)
                } else {
                    document.getElementById(dst).insertAdjacentHTML('beforeend', devButtonStr)
                }
            })
        })
    })
}
