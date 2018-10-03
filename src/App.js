import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Categories from './Categories/Categories';
import Header from './Header/Header';
import Home from './Home';
import Locations from './Locations';
import Login from './Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/categories" component={Categories} />
              <Route path="/stores" component={Locations} />
              <Route path="/login" component={Login} />
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
