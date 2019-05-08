import React, { Component } from 'react';
import logo from '../img/logo.svg';

class Header extends Component {
    render () {
        return (
            <h1 className="App_Name">Green
                <img className="Logo_Img" src={logo}></img>
                Steak
            </h1>
        )
    }
}

export default Header;