import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Map from './components/Map';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import Header from './components/Header';
import SteakhouseInfo from './components/SteakhouseInfo'
import ReviewForm from './components/ReviewForm';
import AboutSite from './components/About';
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
  <Router >
    <div className="App">
      <div className="App__Aside" >
          <Route path="/" component={Header}>
          </Route>
          <Switch>
          <Route exact path="/" component={AboutSite}>
          </Route>
          <Route path="/users/" component={AboutSite}>
          </Route>
          <Route path="/steakhouses/" component={Map}>
          </Route>
          <Route path="*" component={NotFound}>
          </Route>
          </Switch>
          
      </div>
          <Route path="/steakhouses/info" component={SteakhouseInfo}>
          </Route>
          <Route path="/steakhouses/review" component={ReviewForm}>
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
