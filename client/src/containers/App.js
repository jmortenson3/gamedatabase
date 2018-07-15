import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';

const App = (props) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );

};

export default App;
