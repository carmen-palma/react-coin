import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Root from './Root';
import Home from './Home';
import Coin from './Coin';
import Favorites from './Favorites';

function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<Coin />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </RouterRoutes>
  );
}

export default Routes;