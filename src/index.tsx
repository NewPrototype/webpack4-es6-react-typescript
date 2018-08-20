import * as React from 'react';
import * as ReactDom from 'react-dom';

import {HashRouter} from 'react-router-dom';




import Router from './router'
import LeftNav from 'pages/leftNav'

import './app.styl'

declare let module: any;

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  render() {
    return <div className='main'>
      <LeftNav></LeftNav>
       <Router />
    </div>
  }
}



ReactDom.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('example')
);
