import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const countriesListReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_COUNTRIES":
      return action.payload.slice(0, 8);
    case "SEARCH_AND_FETCH_COUNTRIES":
      return action.payload;
    // case "FILTER_COUNTRIES":
    //   if (action.payload === "") return [...state];
    //   else {
    //     return state.filter(country => country.region === action.payload);
    //   }
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

export default combineReducers({
  countriesList: countriesListReducer,
  filteredCountries: filterCountriesReducer,
  selectValue: selectValueReducer,
  form: formReducer,
});
