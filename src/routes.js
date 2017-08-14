import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';

const Routes = (props) => (
  <BrowserRouter {...props}>
    <div>
      <Route path="/" component={App} />
    </div>
  </BrowserRouter>
);

export default Routes;
