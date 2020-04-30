import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

describe('ListItem component', () => {
  it('renders ListItem', () => {
    const wrapper = shallow(<ListItem 
      _id="5da237699734fdcb7bef8f51"
      name="Arnold Shortman" />);
    expect(wrapper).toMatchSnapshot();
  });
});
