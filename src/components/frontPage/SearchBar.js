import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { searchAndFetchCountries, filterCountries } from "../../actions/index";
import { connect } from "react-redux";

class SearchBar extends Component {
  state = { inputValue: "" };

  renderInput = formProps => {
    return <input className="app__bar--input" {...formProps.input} />;
  };

  onFormSubmit = async formValue => {
    await this.props.searchAndFetchCountries(formValue.countryName);
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
})(connect(null, { searchAndFetchCountries, filterCountries })(SearchBar));
