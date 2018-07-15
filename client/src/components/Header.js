import React, { Component } from 'react';
import SearchForm from './SearchForm';

class Header extends Component {
  render() {
    return (
      <div className="jumbotron header">
        <h1>GameDB</h1>
        <SearchForm className="header-search"/>
      </div>
    );
  }
}

export default Header;