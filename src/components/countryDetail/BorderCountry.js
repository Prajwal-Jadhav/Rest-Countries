import React, { Component } from "react";
import { connect } from "react-redux";

class BorderCountry extends Component {
  renderBorderCountry = () => {
    if (!this.props.allCountries) {
      return null;
    }

    const borderCountry = this.props.allCountries.find(
      country => country.alpha3Code === this.props.borderCountry
    ).name;

    return borderCountry;
  };

  render() {
    return (
      <span className="border__country">{this.renderBorderCountry()}</span>
    );
  }
}

const mapStateToProps = state => {
  return {
    allCountries: state.allCountriesList,
  };
};

export default connect(mapStateToProps)(BorderCountry);
