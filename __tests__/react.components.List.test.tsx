import * as React from 'react';
import List from './../src/components/List';


import { create } from 'react-test-renderer';


describe('React Components', () => {
  const component = create(
    <List />
  );
  let tree = component.toJSON();
  it('List init render ', () => {
    expect(tree).toMatchSnapshot()
  })
  it('List onClick render 第一次点击', () => {
    tree.props.onClick();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('List onClick render 第二次点击', () => {
    tree.props.onClick();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
