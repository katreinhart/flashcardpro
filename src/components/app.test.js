import React from 'react';
import { shallow } from 'enzyme';

import App from './app';

describe('App component', () => {
  const app = shallow(<App />);

  it('renders `Flashcard Pro` title', () => {
    expect(app.find('h2').text()).toEqual('Flashcard Pro');
  });

  it('renders the Stack List', () => {
    expect(app.find('Connect(StackList)').exists()).toBe(true);
  })

  it('renders a link to creat a new stack', () => {
    expect(app.find('Link h4').text()).toEqual('Create a New Stack');
  })

});
