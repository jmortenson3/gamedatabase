import React, { Component } from 'react';
import FormInput from './FormInput';
import Button from './Button';
import { createGame } from '../services/games';

class AddGameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInputChange = (e) => {
    e.preventDefault();
    console.log("hello there");
    this.setState({ [e.target.dataset.statename]: e.target.value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const data = {
      title: this.state.title,
      developer: this.state.developer,
      publisher: this.state.publisher
    }

    const res = createGame('/api/games', data);
    console.log(res);
  }

  render () {
    return (
      <div className="container">
        <h3>Add a game.</h3>
        <small>Contribute to GameDB by adding a game that we don't have yet.</small>
        <form onSubmit={ e => this.handleFormSubmit(e) } >
          <div className="form-group">
            <FormInput
              labelText="Game Title"
              inputId="inputGameTitle"
              inputType="text"
              placeholderText="Enter game title"
              stateName="title"
              changeHandler={ this.handleInputChange } />
            <FormInput
              labelText="Publisher"
              inputId="inputPublisher"
              inputType="text"
              placeholderText="Enter publisher"
              stateName="publisher"
              changeHandler={ this.handleInputChange } />
            <FormInput
              labelText="Developer"
              inputId="inputDeveloper"
              inputType="text"
              placeholderText="Enter developer"
              stateName="developer"
              changeHandler={ this.handleInputChange } />
            <Button btnText="Add game!" />
          </div>
        </form>
      </div>
    );
  }
};

export default AddGameForm;