import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormInput from './FormInput';
import { apiCall } from '../services/games';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: ""
    };
  }

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      searchVal: e.target.value
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`GET /api/games/search?title=${this.state.searchVal}`);
    apiCall('GET', `/api/games/search?title=${this.state.searchVal}`)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <nav className="navbar border-bottom">
        <Link to="/" className="navbar-brand">GameDB</Link>
        <form className="form-inline" onSubmit={ e => this.handleFormSubmit(e) }>
          <FormInput
            inputType="search"
            placeholderText="battle toads"
            autoComplete="off"
            changeHandler={ this.handleInputChange } />
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