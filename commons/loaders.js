function _injectHtml(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

function injectCommonsOnLoad(path) {
    document.addEventListener("DOMContentLoaded", function() {
        _injectHtml(path + '/header.html', 'header');
        _injectHtml(path + '/footer.html', 'footer');
    });
}

injectCommonsOnLoad('commons');
