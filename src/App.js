import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
//import Values from './components/Values';
//import Map from './components/Map'
import SignUpForm from './components/SignUpForm'
import SignInForm from './components/SignInForm'



class App extends Component {
  render() {
    return (
      /*<div className="App">
        <header className="App-header">

          <div>
            
            <Values />
          </div>
        </header>
        <Map />
        <div>
        <Signup />
        </div>
      </div>
    );
  }
}*/
  <Router basename="/react-auth-ui/">
    <div className="App">
      <div className="App__Aside">
        <h1 className="App_Name">_Green</h1>
        <h1 className="App_Name">Steak_</h1> 
      </div>
        <div className="App__Form">
          <div className="PageSwitcher">
            <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
            <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>          
          </div>

          <div className="FormTitle">
              <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
          </div>

          <Route exact path="/" component={SignUpForm}>
          </Route>
          <Route path="/sign-in" component={SignInForm}>
          </Route>
        </div>
    </div>
  </Router>
);
}
}

export default App;
