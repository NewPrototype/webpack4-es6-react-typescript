import * as React from 'react';

import { Switch, Route } from 'react-router-dom';

import  Loadable  from 'react-loadable';






const Loading = (props: any) => {
  if (props.error) {
    return <div>Error! <button onClick={props.retry}>Retry</button></div>;
  } else if (props.timedOut) {
    return <div>Taking a long time... <button onClick={props.retry}>Retry</button></div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

const loadableOption = {
  delay: 300,
  timeout: 1000,
  loading: Loading,
}

const routers = [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/home/index'),
      loading: Loading,
    })
  }
]


const Routers = () => (
  <Switch>
    {
      routers.map(({ component, path, exact }, index) => {
        return <Route exact={exact} path={path} component={component} key={path} />
      })
    }
  </Switch>
);


export default Routers 