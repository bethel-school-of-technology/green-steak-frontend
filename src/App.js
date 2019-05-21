import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import Header from "./components/Header";
import SteakhouseInfo from "./components/SteakhouseInfo";
import ReviewForm from "./components/ReviewForm";
import AboutSite from "./components/About";
import NotFound from "./components/NotFound";
import DefaultInfo from "./components/DefaultInfo";
import SteakhouseList from "./components/SteakhouseList";
import OurTeam from "./components/OurTeam";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import ErrorHandler from "./components/ErrorHandler";

library.add(fab);

class App extends Component {
  render() {
    return (
      <Router>
        <ErrorHandler>
          <div className="App">
            <div className="App__Aside">
              <Route path="/" component={Header} />
              <Switch>
                <Route exact path="/" component={AboutSite} />
                <Route path="/sign-in" component={AboutSite} />
                <Route exact path="/about" component={AboutSite} />
                <Route path="/steakhouses/" component={SteakhouseList} />
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
            <Route path="/sign-in" component={SignInForm} />
            <Route exact path="/about" component={OurTeam} />
          </div>
        </ErrorHandler>
      </Router>
    );
  }
}

export default App;
