import * as React from 'react';
import './leftNav.less';

import { Menu, Icon } from 'antd';

import { withRouter } from 'react-router-dom';

interface LeftNavProps {
  history: any,
}


let router: object[] = [
  { key: '/', text: '首页', icon: 'pie-chart' },
  { key: '/set', text: '设置', icon: 'mail' },
]


export default class LeftNav extends React.Component<LeftNavProps, { openKeys: string[] }> {
    constructor(props: LeftNavProps) {
      super(props)
      this.state = {
        openKeys: ['sub1'],
      };
    }
    onSelect = (e: {key:string}) => {
      if(this.props.history.location.pathname==e.key){
        return 
      }
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






