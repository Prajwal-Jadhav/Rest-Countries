import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
      <Link to={`/countrydetail/${this.props.borderCountry}`}>
        <span className="border__country">{this.renderBorderCountry()}</span>
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return {
    allCountries: state.allCountriesList,
  };
};

export default connect(mapStateToProps)(BorderCountry);
