import { createWebComponent } from './web-component.js';

createWebComponent(
    'header-component',
    `
    <head>
        <link rel="stylesheet" href="commons/styles/global.css"/>
        <link rel="stylesheet" href="commons/styles/typographic.css"/>
        <link rel="stylesheet" href="commons/styles/header.css"/>
    </head>

    <header class="header">
        <div class="header-title">
            <p class="text-larger">Anton Bogomazov</p>
            <p class="text-large">Software Engineer</p>
        </div>
        <nav id="navigation-menu" class="header-menu" aria-label="Main menu">
            <a class="header-menu-entity" href="index.html" rel="prefetch">Home</a>
            <a class="header-menu-entity" href="experience.html" rel="prefetch">Experience</a>
            <a class="header-menu-entity" href="posts.html" rel="prefetch">Blog</a>
            <a class="header-menu-entity" href="assets/cv.pdf" download="Software Engineer - Anton Bogomazov.pdf">CV</a>
        </nav>
    </header>
    `
);