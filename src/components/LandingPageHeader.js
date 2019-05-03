import React, { Component } from 'react';
import logo from '../img/logo.svg';

class LandingPageHeader extends Component {
    render () {
        return (
            <h1 className="App_Signup_Name">Green<br />
                <img className="Logo_Img" src={logo}></img><br />
                Steak
            </h1>
        )
    }
}

export default LandingPageHeader;