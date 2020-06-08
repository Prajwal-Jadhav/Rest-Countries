import React, { Component } from "react";
import { connect } from "react-redux";

class CountryDetail extends Component {
  renderCountryDetail = () => {
    if (
      this.props.country === {} ||
      this.props.country.topLevelDomain === undefined
    ) {
      return null;
    }

    return (
      <div className="CountryDetail">
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
                {this.props.country.population}
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

const mapStateToProps = state => {
  return {
    country: state.singleCountryDetails,
  };
};

export default connect(mapStateToProps)(CountryDetail);
