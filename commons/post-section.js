import { createWebComponent } from './web-component.js';

createWebComponent(
    'post-section',
    `
    <head>
        <link rel="stylesheet" href="commons/styles/global.css"/>
    </head>

    <li>
        <h2><slot name="post-title"></slot></h1>
        <time class="text-light">
            <slot name="post-date"></slot>
        </time>
        <q class="posts-description">
            <slot name="post-description"></slot>
        </q>
    </li>`
);