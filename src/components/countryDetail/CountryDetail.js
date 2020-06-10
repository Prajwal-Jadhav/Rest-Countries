import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllCountries } from "../../actions/index";

class CountryDetail extends Component {
  componentDidMount() {
    this.props.fetchAllCountries();
  }

  renderCountryDetail = () => {
    if (
      this.props.country === undefined ||
      this.props.country.topLevelDomain === undefined
    ) {
      return null;
    }

    return (
      <div className="CountryDetail">
        <div className="backbutton__container">
          <Link to="/">
            <div className="backbutton">
              <i className="fas fa-long-arrow-alt-left"></i> {"  "} Back
            </div>
          </Link>
        </div>
        <div className="CountryDetail__grid">
          <img
            className="CountryDetail__image"
            src={this.props.country.flag}
            alt={this.props.country.name}
          />
          <div className="CountryDetail__content">
            <div className="CountryDetail__name">{this.props.country.name}</div>

            <div className="CountryDetail__info--left">
              <p className="CountryDetail__info--item">
                <strong>Native Name: </strong>
                {this.props.country.nativeName}
              </p>
              <p className="CountryDetail__info--item">
                <strong>Population: </strong>
                {this.props.country.population.toLocaleString()}
              </p>
              <p className="CountryDetail__info--item">
                <strong>Region: </strong>
                {this.props.country.region}
              </p>
              <p className="CountryDetail__info--item">
                <strong>Sub Region: </strong>
                {this.props.country.subregion}
              </p>
              <p className="CountryDetail__info--item">
                <strong>Capital: </strong>
                {this.props.country.capital}
              </p>
            </div>
            <div className="CountryDetail__info--right">
              <p className="CountryDetail__info--item">
                <strong>Top Level Domain: </strong>
                {this.props.country.topLevelDomain.join(", ")}
              </p>
              <p className="CountryDetail__info--item">
                <strong>Currencies: </strong>
                {this.props.country.currencies
                  .map(currency => currency.name)
                  .join(", ")}
              </p>
              <p className="CountryDetail__info--item">
                <strong>Languages: </strong>
                {this.props.country.languages.map(lan => lan.name).join(", ")}
              </p>
            </div>

            <div className="border__countries">
              <strong>Border Countries: </strong>
              {"  "}
              {this.props.country.borders.map((border, index) => (
                <span className="border__country" key={index}>
                  {border}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return this.renderCountryDetail();
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    country: state.allCountriesList.find(
      country => country.alpha3Code === ownProps.match.params.alpha3Code
    ),
  };
};

export default connect(mapStateToProps, { fetchAllCountries })(CountryDetail);
