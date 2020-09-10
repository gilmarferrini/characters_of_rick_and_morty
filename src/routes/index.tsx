import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Episodes from '../pages/Episodes';
import Characters from '../pages/Characters';
import Details from '../pages/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/episodes" exact component={Episodes} />
    <Route path="/characters" exact component={Characters} />
    <Route path="/characters/id" exact component={Details} />
  </Switch>
);

export default Routes;
