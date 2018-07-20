import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import AddGameForm from '../components/AddGameForm';
import Header from '../components/Header';
import GamePage from '../components/GamePage';

const Main = (props) => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/games/add" component={AddGameForm} />
        <Route path="/games/:id" component={GamePage} />
      </Switch>
    </div>
  );
};

export default Main;