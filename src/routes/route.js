import React from 'react';
import { Route as ReactRoute } from 'react-router-dom';
import Compose from 'reactjs-compose';

const Route = routeProps => {
  return <ReactRoute render={createRender(routeProps)} />;
};

function createRender(routeProps) {
  return function render(props) {
    const componentProps = { ...props, match: routeProps.computedMatch };

    if (routeProps.providers) {
      return (
        <Compose components={routeProps.providers}>
          {React.cloneElement(routeProps.children, componentProps)}
        </Compose>
      );
    }

    return React.cloneElement(routeProps.children, componentProps);
  };
}

export default Route;
