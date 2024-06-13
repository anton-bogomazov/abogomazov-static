import { createWebComponent } from './web-component.js';

createWebComponent(
    'content-component',
    `
    <head>
        <link rel="stylesheet" href="commons/styles/global.css"/>
    </head>

    <main class="main-content">
        <slot name="page-header"></slot>
        <slot name="page-content"></slot>
    </main>
    `
);