export const fetchAllCountries = () => {
  return async dispatch => {
    let response = await fetch("https://restcountries.eu/rest/v2/all");
    let data = await response.json();

    dispatch({ type: "FETCH_ALL_COUNTRIES", payload: data });
  };
};

export const searchAndFetchCountries = countryname => {
  return async dispatch => {
    let response = await fetch(
      `https://restcountries.eu/rest/v2/name/${countryname}`
    );
    let data = await response.json();

    dispatch({ type: "SEARCH_AND_FETCH_COUNTRIES", payload: data });
  };
};

export const selectValueChange = value => {
  return {
    type: "SELECT_VALUE_CHANGE",
    payload: value,
  };
};

export const filterCountries = region => {
  return async (dispatch, getState) => {
    let countries = await getState().countriesList;

    if (region === "") {
      dispatch({ type: "FILTER_COUNTRIES", payload: countries });
    } else {
      let filteredCountries = countries.filter(
        country => country.region === region
      );
      dispatch({ type: "FILTER_COUNTRIES", payload: filteredCountries });
    }
  };
};

export const fetchCountryDetails = countryObj => {
  return {
    type: "SINGLE_COUNTRY_DETAILS",
    payload: countryObj,
  };
};

export const toggleDarkMode = () => {
  return {
    type: "TOGGLE_DARK_MODE",
  };
};
