function loadHeadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.head.insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.error('Error loading head content:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadHeadContent('components/head.html');
});