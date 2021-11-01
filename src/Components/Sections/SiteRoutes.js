import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutSection from './AboutSection';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import ContactConfirm from '../Pages/ContactConfirm';
import NotFound from '../Pages/NotFound';
import Error from '../Pages/Error';

/**
 * Functional Component for handle routes of sites.
 * 
 * @component
 * @example
 * return (
 *   <SiteRoutes />
 * )
 */
const SiteRoutes = () =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutSection} />
        <Route exact path="/contact/confirm" component={ContactConfirm} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/error" component={Error} />
        
        <Route  path="*" component={NotFound} />
    </Switch>

export default SiteRoutes;