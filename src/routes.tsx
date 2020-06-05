import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import Finish from './pages/Finish';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path='/' exact />
      <Route component={CreatePoint} path='/create-point' exact />
      <Route component={Finish} path='/create-point/finish' />
    </BrowserRouter>
  );
};

export default Routes;
