function _injectHead(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.head.insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.error('Error loading head content:', error));
}

function _injectHtml(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

function _injectCommonsOnLoad(path) {
    document.addEventListener("DOMContentLoaded", function() {
        _injectHead(path + '/head.html');
        _injectHtml(path + '/header.html', 'header');
        _injectHtml(path + '/footer.html', 'footer');
    });
}

_injectCommonsOnLoad('commons');
