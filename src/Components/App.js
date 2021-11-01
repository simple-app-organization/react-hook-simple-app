import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SiteRoutes from './Sections/SiteRoutes';
import Header from './Partials/Header';
import Footer from './Partials/Footer';
import Container from 'react-bootstrap/Container';
import './App.css';

/**
 * Title of the site
 */
const siteName = 'Simple App React';

/**
 * This fuction startup the application
 * @function App
 */
function App() {
  return (
    <Container className="App">
      <Header title={siteName} />
      <Router>
          <SiteRoutes />
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
