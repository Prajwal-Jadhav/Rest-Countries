import React, { Component } from "react";
import { selectValueChange, filterCountries } from "../../actions/index";
import { connect } from "react-redux";

class Dropdown extends Component {
  onSelectChange = e => {
    this.props.selectValueChange(e.target.value);
    this.props.filterCountries(e.target.value);
  };

  render() {
    return (
      <div>
        <select
          value={this.props.selectValue}
          onChange={this.onSelectChange}
          className="app__bar--select"
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectValue: state.selectValue,
  };
};

export default connect(mapStateToProps, { selectValueChange, filterCountries })(
  Dropdown
);
