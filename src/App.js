import React from 'react';
import Navigation from './components/Navigation';
import ListView from './components/ListView';
import './App.css';

const App = ({ history }) => {

  if (!localStorage.accessToken) {
    history.push('/login');
  }

    return (
      <div className="App">
        <Navigation />
        <ListView />
      </div>
    );
};

export default App;
