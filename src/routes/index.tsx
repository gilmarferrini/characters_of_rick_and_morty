import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Characters from '../pages/Characters';
import Details from '../pages/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/characters" exact component={Characters} />
    <Route path="/characters/id" exact component={Details} />
  </Switch>
);

export default Routes;
