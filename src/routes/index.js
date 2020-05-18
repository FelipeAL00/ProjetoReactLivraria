import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Home from '../pages/home';
import Lib from '../pages/library';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/lib" component={Lib} />
    </Switch>
  );
}

export default Routes;
