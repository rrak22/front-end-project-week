import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import noteData from './reducers';

import './index.css';
import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';
import Landing from './components/Landing';
import NoteViewPage from './components/NoteViewPage';
import NoteCreatePage from './components/NoteCreatePage';
import NoteEditPage from './components/NoteEditPage';

let store = createStore(noteData);

render(
  <Provider store={store}>
  <Router>
    <div>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/signup" component={ Signup } />
      <Route exact path="/" component={ Landing } />
      <Route exact path="/notes" component={ App } />
      <Route exact path="/create" component={ NoteCreatePage } />
      <Route path="/notes/:number" component={ NoteViewPage } />
      <Route path="/edit/:number" component={ NoteEditPage } />
    </div>
  </Router>
  </Provider>
  , document.getElementById('root'));
