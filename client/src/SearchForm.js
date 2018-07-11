import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const className = "form-control form-control-lg " + this.props.className;
    return (
      <form>
        <input className={ className } type="text" placeholder="battle toads"/>
        <button type="submit">Find your game</button>
      </form>
    )
  }
}

export default SearchForm;