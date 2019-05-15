import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Map from "./components/Map";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import Header from "./components/Header";
import SteakhouseInfo from "./components/SteakhouseInfo";
import ReviewForm from "./components/ReviewForm";
import AboutSite from "./components/About";
import NotFound from "./components/NotFound";
import DefaultInfo from "./components/DefaultInfo";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside">
            <Route path="/" component={Header} />
            <Switch>
              <Route exact path="/" component={AboutSite} />
              <Route path="/users/sign-in" component={AboutSite} />
              <Route path="/steakhouses/" component={Map} />
              <Route component={NotFound} />
            </Switch>
          </div>

          <Switch>
            <Route exact path="/steakhouses/info" component={DefaultInfo} />
            <Route
              path="/steakhouses/info/:steakhouse?"
              component={SteakhouseInfo}
            />
          </Switch>
          <Route
            path="/steakhouses/review/:steakhouse?"
            component={ReviewForm}
          />
          <Route exact path="/" component={SignUpForm} />
          <Route path="/users/sign-in" component={SignInForm} />
        </div>
      </Router>
    );
  }
}

export default App;
