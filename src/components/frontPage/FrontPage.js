import React, { Component } from "react";
import SearchBar from "./SearchBar";
import CountryList from "./CountryList";
import Dropdown from "./Dropdown";

export default class FrontPage extends Component {
  render() {
    return (
      <div>
        <div className="app__bar">
          <SearchBar />
          <Dropdown />
        </div>

        <CountryList />
      </div>
    );
  }
}
