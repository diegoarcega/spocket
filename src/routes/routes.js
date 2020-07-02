import React from 'react';
import { Switch } from 'react-router-dom';
import { Page } from 'components/page';
import { ProductSearch } from 'pages/product-search';
import Route from './route';

const Routes = () => {
  return (
    <Switch>
      <Route providers={[Page]}>
        <ProductSearch />
      </Route>
    </Switch>
  );
};

export default Routes;
