import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = (props: any) => {
  if (props.error) {
    return <div>加载失败! </div>;
  } else if (props.timedOut) {
    return <div>加载超时... </div>;
  } else if (props.pastDelay) {
    return <div>正在拼命加载...</div>;
  } else {
    return null;
  }
}

const loadableOption = (props: { loader: any }) => {
  const { loader } = props;
  return Loadable({
    loader,
    loading:Loading,
    delay: 300,
    timeout: 1000,
  })
}

const routers = [
  {
    path: '/',
    exact: true,
    component: loadableOption({loader:() => import(/* webpackChunkName:"crm" */ 'pages/home')})
  },
]


const Routers = () => (
  <Switch>
    {
      routers.map(({ component, path, exact }) => {
        return <Route exact={exact} path={path} component={component} key={path} />
      })
    }
  </Switch>
);


export default Routers 