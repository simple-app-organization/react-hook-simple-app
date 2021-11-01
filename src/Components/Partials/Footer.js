import React from 'react';

/**
 * Functional Component for showing the footer of the site
 * @component
 * @example
 * return (
 *  <Footer />
 * )
 */
const Footer = () => {
    return (
        <footer className="partial footer" style={{ borderTop: "solid thin black" }}>
            <p>
                This is the footer
            </p>
            <p>
                This site is store in <a target="_blank" href="https://github.com/Magicianred/react-simple-app">GitHub Repository </a>.
            </p>
            <p>
                It is a test in <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React </a>
                and <a className="App-link" href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">Bootstrap-React </a>
                under <a href="https://github.com/Magicianred/react-simple-app/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT License</a>.
            </p>
            <p>
                For the images I have used many placeholder image service.
            </p>
        </footer>
    )
}

export default Footer;