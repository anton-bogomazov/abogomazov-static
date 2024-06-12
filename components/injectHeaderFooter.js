function injectHtml(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    injectHtml('components/header.html', 'header');
    injectHtml('components/footer.html', 'footer');
});