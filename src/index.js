import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import Stack from './components/stack';
import StackForm from './components/stackform';
import { setStack } from './actions';
import rootReducer from './reducers';

const store = createStore(rootReducer);
store.subscribe(()=> {
  // console.log('store', store.getState());
});

store.dispatch(setStack({ id: 0, title: 'example', cards: []}));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/stack' component={Stack} />
        <Route path='/new' component={StackForm} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
