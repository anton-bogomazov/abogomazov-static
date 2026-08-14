const CLASS_NAME = '.parallax-text'

function appendAttributes(element) {
    const text = element.textContent;

    element.dataset.text = text;
}

function appendAttributesToEveryEligibleElement(selector) {
    document
        .querySelectorAll(selector)
        .forEach(el => { appendAttributes(el) });
}

document.addEventListener(
    'DOMContentLoaded',
    () => { appendAttributesToEveryEligibleElement(CLASS_NAME) }
);