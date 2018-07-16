import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar border-bottom">
        <Link to="/" className="navbar-brand">GameDB</Link>
        <form className="form-inline">
          <input className="form-control" type="search" placeholder="battle toads" aria-label="Search" />
          <button className="btn" type="submit">Search</button>
        </form>
        <ul className="navbar-nav">
          <Link to="/games/add">Add a game</Link>
        </ul>
      </nav>
    );
  }
}

export default Header;