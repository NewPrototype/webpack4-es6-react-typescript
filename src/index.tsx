import * as React from 'react';
import * as ReactDom from 'react-dom';

import { HashRouter } from 'react-router-dom';

import Router from './router';
import LeftNav from 'pages/leftNav';

import './app.styl';

declare let module: any;

if (module.hot) {
  module.hot.accept();
}

ReactDom.render(
  <HashRouter>
    <div className="main">
      <LeftNav />
      <div className="content">
        <Router />
      </div>
    </div>
  </HashRouter>,
  document.getElementById('example')
);
