import React, { Component } from "react";
import steak from "../img/steak.svg";
import Header from "./Header";

class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = { errorOccured: false, errorDetails: "", errorInfo: "" };
  }

  componentDidCatch(error, info) {
    this.setState({ errorOccured: true, errorDetails: error, errorInfo: info });
  }

  render() {
    return this.state.errorOccured ? (
      <div className="error">
        <Header />
        <h4 className="App_Name" id="notFound">
          Something went wrong!
        </h4>
        <h3 className="Error_Message">{this.state.errorDetails}</h3>
        <img src={steak} alt=""/>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorHandler;
