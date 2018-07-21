import React, { Component } from 'react';
import { apiCall } from '../services/games';

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Loading game title...'
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
    let tags;
    if (this.state.genre) {
      genres = this.state.genre.map(g => <li key={g}>{g}</li>);
    }
    if (this.state.tag) {
      tags = this.state.tag.map(t => <li key={t}>{t}</li>);
    }
    return (
      <div>
        <h1>{this.state.title}</h1>
        { this.state.developer && <p>Developer: {this.state.developer}</p> }
        { this.state.publisher && <p>Publisher: {this.state.publisher}</p> }
        { genres && <div><p>Genres:</p><ul> {genres}</ul></div> }
        { tags && <div><p>Tags:</p><ul> {tags}</ul></div> }
      </div>
    );
  }
}

export default GamePage;