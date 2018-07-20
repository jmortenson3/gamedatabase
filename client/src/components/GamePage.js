import React, { Component } from 'react';
import { apiCall } from '../services/games';

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { match } = this.props;
    this.getGameDetails(match.params.id);
  }

  getGameDetails = (id) => {
    apiCall('GET', `/api/games/${id}`)
        .then(data => {
          console.log(data);
          this.setState({ ...data });
        })
        .catch(err => {
          console.log(err)
        });
  }

  render() {
    let genres;
    if (this.state.genre) {
      genres = this.state.genre.map(g => <li key={g}>{g}</li>);
    }
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.developer}</p>
        <p>{this.state.publisher}</p>
        <ul>{genres}</ul>
      </div>
    );
  }
}

export default GamePage;