import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Hello } from './components/Hello';

import { aa } from './util/index'

console.log(aa)

console.log(module,'--')
if (module.hot) {
  module.hot.accept();
}


ReactDom.render(
  <Hello compiler={"string123"} framework="hi" />,
  document.getElementById('example')
);
