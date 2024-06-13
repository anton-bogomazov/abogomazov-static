import { createWebComponent } from './web-component.js';

createWebComponent(
    'footer-component',
    `
    <head>
        <link rel="stylesheet" href="commons/styles/global.css"/>
        <link rel="stylesheet" href="commons/styles/typographic.css"/>
        <link rel="stylesheet" href="commons/styles/footer.css"/>
    </head>

    <footer class="footer">
        <div class="footer-copyright">Copyright &copy; 2024</div>

        <div class="footer-contacts">
            <ul class="footer-contacts-list">
                <li class="footer-contacts-entity">
                    <a href="https://www.github.com/anton-bogomazov"
                       target="_blank"
                       rel="noopener noreferrer">
                        <svg class="footer-contacts-icon"
                             aria-hidden="true"
                             focusable="false"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor"
                             fill="none"
                             stroke-linecap="round"
                             stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                        </svg>
                    </a>
                </li>
                <li class="footer-contacts-entity">
                    <a href="https://www.linkedin.com/in/abogomazov"
                       target="_blank"
                       rel="noopener noreferrer">
                        <svg class="footer-contacts-icon"
                             aria-hidden="true"
                             focusable="false"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24"
                             stroke-width="1.5"
                             stroke="currentColor"
                             fill="none"
                             stroke-linecap="round"
                             stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                            <path d="M8 11l0 5"></path>
                            <path d="M8 8l0 .01"></path>
                            <path d="M12 16l0 -5"></path>
                            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                        </svg>
                    </a>
                </li>
                <li class="footer-contacts-entity">
                    <a href="https://www.t.me/antonbogomazov"
                       target="_blank"
                       rel="noopener noreferrer">
                        <svg class="footer-contacts-icon"
                             aria-hidden="true"
                             focusable="false"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24"
                             stroke-width="1.5"
                             stroke="currentColor"
                             fill="none"
                             stroke-linecap="round"
                             stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
                        </svg>
                    </a>
                </li>
                <li class="footer-contacts-entity">
                    <a href="mailto:abogomazov.dev@gmail.com">
                        <svg class="footer-contacts-icon"
                             aria-hidden="true"
                             focusable="false"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24"
                             stroke-width="1.5"
                             stroke="currentColor"
                             fill="none"
                             stroke-linecap="round"
                             stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                            <polyline points="3 7 12 13 21 7"></polyline>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>

        <nav class="footer-menu" aria-label="More on this site">
            <a href="index.html" class="footer-menu-entity">Home</a>
            <a href="experience.html" class="footer-menu-entity">Experience</a>
            <a href="posts.html" class="footer-menu-entity">Blog</a>
        </nav>

    </footer>
    `
);