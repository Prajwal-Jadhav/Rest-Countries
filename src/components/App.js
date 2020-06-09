import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CountryDetail from "./countryDetail/CountryDetail";
import FrontPage from "./frontPage/FrontPage";
import { connect } from "react-redux";
import { fetchAllCountries, filterCountries } from "../actions/index";
import "./App.css";
import Header from "../Header";

class App extends Component {
  async componentDidMount() {
    await this.props.fetchAllCountries();
    this.props.filterCountries("");
  }

  render() {
    return (
      <div className={this.props.darkMode ? "dark" : "App"}>
        <Header />
        <BrowserRouter>
          <Route path="/" exact component={FrontPage} />
          <Route path="/countrydetail" exact component={CountryDetail} />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps, { fetchAllCountries, filterCountries })(
  App
);
