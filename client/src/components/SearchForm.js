import React, { Component } from 'react';
import Button from './Button';

class SearchForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const className = "form-control form-control-lg " + this.props.className;
    return (
      <form>
        <input className={ className } type="text" placeholder="battle toads"/>
        <Button btnText="Find your game" classNames={["btn-primary"]} />
      </form>
    )
  }
}

export default SearchForm;