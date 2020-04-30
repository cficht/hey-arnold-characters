import React from 'react';
import { shallow } from 'enzyme';
import Details from './Details';

describe('Details component', () => {
  it('renders Details', () => {
    const wrapper = shallow(<Details 
      name="Arnold Shortman" 
      image="https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
