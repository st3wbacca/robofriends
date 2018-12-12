import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots'

class App extends Component {
  render() {
    return (
      <CardList robots={robots} />
    );
  }
}

export default App;
