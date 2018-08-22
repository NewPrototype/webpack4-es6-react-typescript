import * as React from 'react';
import './List.less';

import { Timeline,Alert} from 'antd';




// import { withRouter } from 'react-router-dom'


interface Props {

}


const status = {
  "start": '开始1',
  "end": '结束'
}

class List extends React.Component<Props, { text: string }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: status.start
    };
  }
  onClick = () => {
    this.setState({
      text: this.state.text == status.start ? status.end : status.start
    })
  }

  componentWillMount() {

  }

  componentDidMount() { }

  componentWillUnmount() { }


  render() {
    return (
      <div className="List" onClick={this.onClick} >
        <div >
                {this.state.text}
        </div>  
        <Alert message="Success Text" type="success" />,
        <Timeline>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>,
      </div>
    );
  }
}

export default List