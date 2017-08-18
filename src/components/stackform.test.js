import React from 'react';
import { shallow } from 'enzyme';

import { StackForm } from './stackform';

const changeTitle = 'change title';
const changePrompt = 'change prompt';
const changeAnswer = 'change answer';

describe('StackForm', () => {
  const stackform = shallow(<StackForm />);

  describe('renders', () => {
    it('the title', () => {
      expect(stackform.find('h4').at(1).text()).toEqual('Create a New Stack');
    });

    it('the home link)', () => {
      expect(stackform.find('Link h4').text()).toEqual('Home');
    });

    it('a form component', () => {
      expect(stackform.find('Form').exists()).toBe(true);
    });

    it('Add Card button', () => {
      expect(stackform.find('Button').at(0).props().children).toEqual('Add Card');
    });

    it('Submit button', () => {
      expect(stackform.find('Button').at(1).props().children).toEqual('Save and Add Stack');
    });
  });

  describe('behaves properly', () => {
    describe('and updates the title', () => {
      beforeEach(() => {
        stackform.find('FormControl').simulate('change', {
          target: { value: changeTitle}
        });
      });

      it('updates the title in state', () => {
        expect(stackform.state().title).toEqual(changeTitle);
      });
    });

    describe('when adding a new card', () => {
      beforeEach(() => {
        stackform.find('Button').at(0).simulate('click');
      });

      afterEach(() => {
        stackform.setState({ cards: [] });
      });

      it('adds a new card to the state', () => {
        expect(stackform.state().cards.length).toEqual(1);
      });

      it('renders the prompt section', () => {
        expect(stackform.find('ControlLabel').at(1).props().children).toEqual('Prompt:');
      });

      it('renders the answer section', () => {
        expect(stackform.find('ControlLabel').at(2).props().children).toEqual('Answer:');
      });

      describe('and updating the card prompt', () => {
        beforeEach(() => {
          stackform.find('FormControl').at(1).simulate('change', {
            target: {
              value: changePrompt
            }
          });
        });
        it('updates prompt in state', () => {
          expect(stackform.state().cards[0].prompt).toEqual(changePrompt);
        });
      });

      describe('and updating the card answer', () => {
        beforeEach(() => {
          stackform.find('FormControl').at(2).simulate('change', {
            target: {
              value: changeAnswer
            }
          });
        });

        it('updates the answer in state', () => {
          expect(stackform.state().cards[0].answer).toEqual(changeAnswer);
        });
      });
    });
  });
});
