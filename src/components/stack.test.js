import React from 'react';
import { shallow } from 'enzyme';

import { Stack } from './stack';
import { stack } from '../data/fixtures';

const props = { stack };

describe('Stack', () => {
  const stack = shallow(<Stack {...props}/>);

  it('renders title', () => {
    expect(stack.find('h3').text()).toEqual(props.stack.title);
  });

  it('renders home link', () => {
    expect(stack.find('Link h4').text()).toEqual('Home')
  });

  it('renders the correct number of cards', () => {
    expect(stack.find('Card').length).toEqual(props.stack.cards.length);
  })
});
