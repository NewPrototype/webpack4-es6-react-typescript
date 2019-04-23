import * as React from 'react';
import { connect } from 'react-redux';
import Act from 'store/actions';
import { List } from 'react-virtualized';

const list = [
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',

  // And so on...
];

function rowRenderer ({
  key,         // Unique key within array of rows
  index,       // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible,   // This row is visible within the List (eg it is not an overscanned row)
  style        // Style object to be applied to row (to position it)
}) {
  console.log(style,'---')
  return (
    <div
      key={key}
      style={style}
    >
      {list[index]}
    </div>
  )
}


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
      <List
      width={500}
      height={300}
      rowCount={list.length}
      rowHeight={50}
      rowRenderer={rowRenderer}
    />
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