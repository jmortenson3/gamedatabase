import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../components/Homepage';
import AddGameForm from '../components/AddGameForm';
import Header from '../components/Header';

const Main = (props) => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" render={ props => <Homepage {...props} /> } />
        <Route exact path="/games/add" render={ () => <AddGameForm /> } />
      </Switch>
    </div>
  );
};

export default Main;