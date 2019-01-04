import * as React from 'react';

import Router from 'router';
import LeftNav from 'pages/leftNav';

import 'lib/less/index.less'
import 'normalize.css/normalize.css';


declare const module: any;
if (module.hot) {
    module.hot.accept();
}

class App extends React.PureComponent {
    render() {
        return (<div className="main">
            <LeftNav />
            <div className="content">
                <Router />
            </div>
        </div>)
    }
}
export default App  