import React, { Component } from 'react';
import $ from 'jquery';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      err: ''
    }
  }

  fetchGenres = () => {
    $.getJSON('/api/genres')
      .done(data => {
        const genres = data.map(el => {
          return (
            <li className="nav-item" key={ el._id }>
              <a className="nav-link" href="#">{ el.genre }</a>
            </li>
          );
        });
        this.setState({ genres });
      })
      .fail(err => {
        this.setState({ err });
      });
  }

  componentDidMount() {
    this.fetchGenres();
  }

  render() {
    const styles = {
      margin: '5px',
      backgroundColor: 'skyblue',
      color: 'white',
      fontWeight: 'bold'
    };

    return (
    <ul className="nav flex-column">
      { this.state.genres }
    </ul>
    );
  }
}

export default Nav;