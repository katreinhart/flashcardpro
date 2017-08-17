import React, { Component } from 'react';
import StackList from './stacklist';
import { Link } from 'react-router-dom';

import '../styles/index.css'


class App extends Component {
  render() {
    return(
      <div>
        <h2>Flashcard Pro</h2>
        <hr/>
        <StackList />
        <hr />
        <Link to='new'><h4>Create a New Stack</h4></Link>
      </div>
    )
  }
}

export default App;
