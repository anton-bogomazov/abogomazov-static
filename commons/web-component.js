class WebComponent extends HTMLElement {
    constructor(content) {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = content;
    }
}

export function createWebComponent(name, content) {
    customElements.define(name, class extends WebComponent {
        constructor() {
            super(content);
        }
    });
}
