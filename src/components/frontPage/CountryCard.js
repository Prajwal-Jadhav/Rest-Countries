import React from "react";

export default function CountryCard({ country }) {
  return (
    <div className="CountryCard">
      <div className="flag__image__container">
        <img src={country.flag} alt="i" className="card__flag" />
      </div>
      <div className="Card__content">
        <div className="Card__heading">{country.name}</div>
        <div>
          <strong>Population:</strong> {country.population}
        </div>
        <div>
          <strong>Region:</strong> {country.region}
        </div>
        <div>
          <strong>Capital:</strong> {country.capital}
        </div>
      </div>
    </div>
  );
}
