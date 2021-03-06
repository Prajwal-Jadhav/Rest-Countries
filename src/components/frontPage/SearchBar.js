import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {
  searchAndFetchCountries,
  filterCountries,
  selectValueChange,
} from "../../actions/index";
import { connect } from "react-redux";

class SearchBar extends Component {
  state = { inputValue: "" };

  renderInput = formProps => {
    return (
      <input
        placeholder="Search for a country..."
        className="app__bar--input"
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
        <i className="fas fa-search"></i>
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
