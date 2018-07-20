import React, { Component } from 'react';
import FormInput from './FormInput';
import Button from './Button';
import { apiCall } from '../services/games';
import { withRouter } from 'react-router-dom';

class AddGameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: {}
    };
  }

  handleInputChange = (e) => {
    e.preventDefault();
    console.log("hello there");
    if (e.target.dataset.statename === "genre") {
      this.setState({
        body: { ...this.state.body, [e.target.dataset.statename]: e.target.value.split(',') }
      });
    } else {
      this.setState({
        body: { ...this.state.body, [e.target.dataset.statename]: e.target.value }
      });
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    apiCall('POST', '/api/games', this.state.body)
        .then(data => {
          // toast it worked
          console.log(data);
          this.props.history.push(`/games/${data._id}`)
        })
        .catch(err => {
          // toast it didn't work
          console.log(err);
        });
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
            <FormInput
              labelText="Genres"
              inputId="inputGenre"
              inputType="text"
              placeholderText="Enter genres"
              stateName="genre"
              changeHandler={ this.handleInputChange } />
            <Button btnText="Add game!" />
          </div>
        </form>
      </div>
    );
  }
};

export default withRouter(AddGameForm);