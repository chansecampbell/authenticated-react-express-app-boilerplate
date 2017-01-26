'use strict';

import React from 'react';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Home from './views/home.jsx';
import Blog from './views/blog.jsx';
import Map from './views/map.jsx';

const Routes = () => {
    return (
        <Router history={hashHistory}>
            <Route path='/' component={Home} />
            <Route path='/map' component={Map} />
            <Route path='/blog' component={Blog} />
        </Router>
    ); 
}

export default Routes;