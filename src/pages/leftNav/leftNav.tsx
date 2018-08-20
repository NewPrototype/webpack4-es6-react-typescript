import * as React from 'react';
import './leftNav.styl';

import { Menu, Icon } from 'antd';

import { withRouter } from 'react-router-dom';

interface LeftNavProps {
  history: any,
}


let router: object[] = [
  { key: '/', text: '首页1', icon: 'pie-chart' },
  { key: '/home2', text: '首页2', icon: 'mail' },
]

export default withRouter<any>(
  class LeftNav extends React.Component<LeftNavProps, { openKeys: string[] }> {
    constructor(props: LeftNavProps) {
      super(props)
      this.state = {
        openKeys: ['sub1'],
      };
    }
    onSelect = (e: {key:string}) => {
      this.props.history.push(e.key)
    };
    render() {
      return (
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          style={{ width: 200 }}
          onSelect={this.onSelect}
        >
          {
            router.map((value: { key: string, icon: string, text: string }, index) => {
              return <Menu.Item key={value.key} >
                <Icon type={value.icon} />
                <span>{value.text}</span>
              </Menu.Item>
            })
          }
         
        </Menu>
      );
    }
  }
)





