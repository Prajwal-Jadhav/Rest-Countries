import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleDarkMode } from "./actions/index";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__title">
          Where in the world? <br />{" "}
          <small className="attribution">by Prajwal Jadhav</small>{" "}
        </div>
        <div className="header__darkmode" onClick={this.props.toggleDarkMode}>
          <i className="far fa-moon"></i>
          {"  "} Dark Mode
        </div>
      </div>
    );
  }
}

export default connect(null, { toggleDarkMode })(Header);
