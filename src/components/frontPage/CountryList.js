import React, { Component } from "react";
import { connect } from "react-redux";
import CountryCard from "./CountryCard";

class CountryList extends Component {
  render() {
    if (!this.props.countries || !this.props.countries[0])
      return (
        <div className="CountryList__error">We could not find that country</div>
      );
    return (
      <div className="CountryList">
        {this.props.countries.map(country => (
          <CountryCard key={country.numericCode} country={country} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: state.filteredCountries,
  };
};

export default connect(mapStateToProps)(CountryList);
