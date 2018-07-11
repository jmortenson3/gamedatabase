import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import ButtonGroup from './ButtonGroup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav className=""/>
        <div className="container">
          <ButtonGroup />
        </div>
      </div>
    );
  }
}

export default App;
