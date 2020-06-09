import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__title">
          Where in the world? <br />{" "}
          <small className="attribution">by Prajwal Jadhav</small>{" "}
        </div>
        <div className="header__darkmode">
          <i className="far fa-moon"></i>
          {"  "} Dark Mode
        </div>
      </div>
    );
  }
}
