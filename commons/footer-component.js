import { createWebComponent } from './web-component.js';

createWebComponent(
    'footer-component',
    `
    <head>
        <link rel="stylesheet" href="commons/styles/global.css"/>
    </head>

    <style>
        footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: var(--text-small-size);
            padding-top: 1.5rem;
            gap: 1rem;

            @media (max-width: 640px) {
                flex-direction: column-reverse;
            }

            nav {
                display: flex;
                gap: 1.5rem;
                justify-content: center;
            }

            ul {
                display: flex;
                gap: 1.5rem;
                padding: 0;
                margin: 0;
                list-style-type: none;
            }

            li {
                padding: 0;
                margin: 0;
            }

            svg {
                width: 1rem;
                height: 1rem;
            }

            a {
                color: var(--text-color);
                text-decoration-line: underline;
                &:hover {
                    color: var(--text-accent-color);
                }
            }
        }
    </style>

    <footer>
        <div>Copyright &copy; 2024</div>

        <div id="footer-contacts">
            <ul>
                <li>
                    <a href="https://www.github.com/anton-bogomazov"
                       target="_blank"
                       rel="noopener noreferrer">
                        <svg aria-hidden="true" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M0 0h24v24H0z" stroke="none"/>
                            <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/abogomazov"
                       target="_blank"
                       rel="noopener noreferrer">
                        <svg aria-hidden="true" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M0 0h24v24H0z" stroke="none"/>
                            <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM8 11v5M8 8v.01M12 16v-5"/>
                            <path d="M16 16v-3a2 2 0 0 0-4 0"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.t.me/antonbogomazov"
                       target="_blank"
                       rel="noopener noreferrer">
                        <svg aria-hidden="true" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M0 0h24v24H0z" stroke="none"/>
                            <path d="m15 10-4 4 6 6 4-16-18 7 4 2 2 6 3-4"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="mailto:abogomazov.dev@gmail.com">
                        <svg aria-hidden="true" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M0 0h24v24H0z" stroke="none"/><rect x="3" y="5" width="18" height="14" rx="2"/>
                            <path d="m3 7 9 6 9-6"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>

        <nav aria-label="More on this site">
            <a href="index.html">Home</a>
            <a href="experience.html">Experience</a>
        </nav>

    </footer>
    `
);