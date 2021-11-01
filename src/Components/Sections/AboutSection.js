import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import About from '../Pages/About';
import WhoAre from '../Pages/WhoAre';
import WhereAre from '../Pages/WhereAre';

/**
 * Functional Component for handle routes to About Section.
 * 
 * @component
 * @example
 * return (
 *   <AboutSection />
 * )
 */
const AboutSection = () => {
    const match = useRouteMatch();

    return (<>
            <Route exact path={`${match.url}`} component={About} />
            <Route exact path={`${match.url}/whoare`} component={WhoAre} />
            <Route exact path={`${match.url}/whereare`} component={WhereAre} />
        </>);
    };

export default AboutSection;