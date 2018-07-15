import React, { Component } from 'react';
import $ from 'jquery';

// WILL NOT USE
class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      genres: [],
      err: ''
    }
  }

  fetchGames = () => {
    $.getJSON('/api/games')
      .done(data => {
        const games = data.map(el => <li key={ el._id }>{ el.title }</li>);
        this.setState({ games });
      })
      .fail(err => {
        this.setState({ err });
      });
  }

  componentDidMount() {
    this.fetchGames();
  }

  render() {
    const styles = {
      margin: '5px',
      backgroundColor: 'skyblue',
      color: 'white',
      fontWeight: 'bold'
    };

    return (
      <div className="container">
        <div className="games-container">
          <p>Games</p>
          <ul>
            { this.state.games }
          </ul>
        </div>
        <p></p>
      </div>
    );
  }
}

export default ButtonGroup;