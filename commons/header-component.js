import { createWebComponent } from './web-component.js';

createWebComponent(
    'header-component',
    `
    <head>
        <link rel="stylesheet" href="commons/styles/global.css"/>
    </head>

    <style>
        header {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            padding-bottom: 1.5rem;

            p {
                margin: 0;
                font-weight: 700;
                line-height: 2rem;
            }

            nav {
                display: flex;
                align-items: center;
                gap: 1.5rem;
                top: 3.5rem;
            }
        }

        #header-title {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    </style>

    <header>
        <div id="header-title">
            <p class="text-larger">Anton Bogomazov</p>
            <p class="text-large" style="font-weight: 500">Software Engineer</p>
        </div>
        <nav id="navigation-menu" aria-label="Main menu">
            <a class="header-menu-entity" href="index.html" rel="prefetch">Home</a>
            <a class="header-menu-entity" href="experience.html" rel="prefetch">Experience</a>
            <a class="header-menu-entity" href="posts.html" rel="prefetch">Blog</a>
            <a class="header-menu-entity" href="assets/cv.pdf" download="Software Engineer - Anton Bogomazov.pdf">CV</a>
        </nav>
    </header>
    `
);