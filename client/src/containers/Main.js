import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import AddGameForm from '../components/AddGameForm';
import Header from '../components/Header';
import GamePage from '../components/GamePage';
import SearchResults from '../components/SearchResults';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
  }

  render () {
    return (
      <div className="container">
        <Header handleSubmit={} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/games/add" component={AddGameForm} />
          <Route path="/games/:id" component={GamePage} />
          <Route path="/search?" component={SearchResults} />
        </Switch>
      </div>
    );
  }
}

export default Main;