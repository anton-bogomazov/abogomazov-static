const CLASS_NAME = '.parallax-text'
const COUNT_ATTR_NAME = '--char-count'

function appendAttributes(element) {
    const text = element.textContent;

    element.dataset.text = text;
    element.style.setProperty(COUNT_ATTR_NAME, text.length);
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