import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const countriesListReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_COUNTRIES":
      return action.payload.slice(0, 8);
    case "SEARCH_AND_FETCH_COUNTRIES":
      return action.payload;
    default:
      return state;
  }
};

const allCountriesListReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_COUNTRIES":
      return action.payload;
    default:
      return state;
  }
};

const selectValueReducer = (oldValue = "", action) => {
  switch (action.type) {
    case "SELECT_VALUE_CHANGE":
      return action.payload;
    default:
      return oldValue;
  }
};

const filterCountriesReducer = (state = [], action) => {
  switch (action.type) {
    case "FILTER_COUNTRIES":
      return action.payload;
    default:
      return state;
  }
};

const singleCountryDetailsReducer = (oldCountry = {}, action) => {
  switch (action.type) {
    case "SINGLE_COUNTRY_DETAILS":
      return action.payload;
    default:
      return oldCountry;
  }
};

const darkModeReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  countriesList: countriesListReducer,
  allCountriesList: allCountriesListReducer,
  filteredCountries: filterCountriesReducer,
  selectValue: selectValueReducer,
  singleCountryDetails: singleCountryDetailsReducer,
  darkMode: darkModeReducer,
  form: formReducer,
});
