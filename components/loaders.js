function injectHead(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.head.insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.error('Error loading head content:', error));
}

function injectHtml(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

function injectCommonsOnLoad(path) {
    document.addEventListener("DOMContentLoaded", function() {
        injectHead(path + '/head.html');
        injectHtml(path + '/header.html', 'header');
        injectHtml(path + '/footer.html', 'footer');
    });
}

injectCommonsOnLoad('components');
