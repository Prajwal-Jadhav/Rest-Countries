import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {
  searchAndFetchCountries,
  filterCountries,
  selectValueChange,
} from "../../actions/index";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

class SearchBar extends Component {
  state = { inputValue: "" };

  renderInput = formProps => {
    return (
      <TextField
        id="outlined-search"
        label="Search for a country"
        type="search"
        variant="outlined"
        className="app__bar--input"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        {...formProps.input}
      />
    );
  };

  onFormSubmit = async formValue => {
    await this.props.searchAndFetchCountries(formValue.countryName);
    this.props.selectValueChange("");
    this.props.filterCountries("");
  };

  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
          <Field name="countryName" component={this.renderInput} />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "SearchBar",
})(
  connect(null, {
    searchAndFetchCountries,
    filterCountries,
    selectValueChange,
  })(SearchBar)
);
