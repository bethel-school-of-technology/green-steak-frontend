import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Map from './components/Map';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import LandingPageHeader from './components/LandingPageHeader';
import SteakhouseInfo from './components/SteakhouseInfo'
import ReviewForm from './components/ReviewForm';

class App extends Component {
  render() {
    return (
  <Router >
    <div className="App">
      <div className="App__Aside" >
        <Route path="/users/example" component={Map}>
        </Route>
        <Route path="/users/review" component={Map}>
        </Route>
        <Route exact path="/" component={LandingPageHeader}>
        </Route>
        <Route exact path="/users/sign-in" component={LandingPageHeader}>
        </Route>
      </div>
          <Route path="/users/example" component={SteakhouseInfo}>
          </Route>
          <Route path="/users/review" component={ReviewForm}>
          </Route>
          <Route exact path="/" component={SignUpForm}>
          </Route>
          <Route path="/users/sign-in" component={SignInForm}>
          </Route>
      </div>
  </Router>
);
}
}

export default App;
