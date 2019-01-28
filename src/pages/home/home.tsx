import * as React from 'react';
import { connect } from 'react-redux';
import Act from 'store/actions'

import { dispatchFun } from 'util/callTake';


import './home.less'

class Home extends React.Component<any, {}> {
  componentDidMount = () => {
    
  }
  init = async () => {
    const init = await this.props.init({ a: 1 });
    console.log(init, '-----123')
  }
  render() {
    return (
      <div className="home">
        1234
        test 2222
        <span onClick={this.init}>--------12</span>\
      </div>
    );
  }
}

const mapStateToProps = (state: {}) => {
  return {}
}
const mapDispatchToProps = (dispatch:Function) => {
  return {
    init: (params: {}) => {
      return dispatchFun(dispatch,Act.INIT,params)
    }
  }
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Home)