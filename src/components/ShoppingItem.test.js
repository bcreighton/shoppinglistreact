import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ShoppingItem from './ShoppingItem';
import ShoppingList from './ShoppingList';

describe('ShoppingItem component', () => {
  it('renders empty given no item', () => {
    const wrapper = shallow(<ShoppingItem />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the item when supplied', () => {
    // We're adding props to the ShoppingItem from different test cases
    const testItem = { name: 'test-item', checked: false }
    const wrapper = shallow(<ShoppingItem item={testItem} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('strikes through check items', () => {
    const testItem = { name: 'checked-item', checked: true }
    const wrapper = shallow(<ShoppingItem item={testItem} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})