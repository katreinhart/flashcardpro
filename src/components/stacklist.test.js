import React from 'react';
import { shallow } from 'enzyme';

import { StackList } from './stacklist';
import { stacks } from '../data/fixtures';

const props = { stacks }

describe('Stacklist', () => {
  const stacklist = shallow(<StackList {...props}/>);

  it('renders the correct number of links', () => {
    expect(stacklist.find('Link h4').length).toEqual(stacks.length);
  });

  it('should display stack name in link text', () => {
    expect(stacklist.find('Link h4').at(0).text()).toEqual(stacks[0].title);
  });
});
