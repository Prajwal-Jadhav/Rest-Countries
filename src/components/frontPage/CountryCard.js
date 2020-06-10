import React from "react";
import { Link } from "react-router-dom";
import { fetchCountryDetails } from "../../actions/index";
import { connect } from "react-redux";

function CountryCard({ country, fetchCountryDetails }) {
  return (
    <Link
      to={`/countrydetail/${country.alpha3Code}`}
      onClick={() => fetchCountryDetails(country)}
    >
      <div className="CountryCard">
        <div className="flag__image__container">
          <img
            src={country.flag}
            alt={`${country.alpha3Code} flag`}
            className="card__flag"
          />
        </div>
        <div className="Card__content">
          <div className="Card__heading">{country.name}</div>
          <div>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </div>
          <div>
            <strong>Region:</strong> {country.region}
          </div>
          <div>
            <strong>Capital:</strong> {country.capital}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default connect(null, { fetchCountryDetails })(CountryCard);
