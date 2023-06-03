import React, { Component } from "react";
import { connect } from "react-redux";
import { SET_SORT_TYPE, SET_SEARCH_NAME } from "../redux/types";

class Controls extends Component {
  state = {};
  render() {
    const { dispatch } = this.props;
    return (
      <>
        <select
          onChange={(e) => {
            dispatch({
              type: SET_SORT_TYPE,
              payload: e.target.value,
            });
          }}
        >
          <option value=""></option>
          <option value="alphaAZ">alphaA-Z</option>
          <option value="alphaZA">alphaZ-A</option>
          <option value="quoteAZ">quoteA-Z</option>
          <option value="quoteZA">quoteZ-A</option>
        </select>
        <input
          onInput={(e) => {
            dispatch({
              type: SET_SEARCH_NAME,
              payload: e.target.value,
            });
          }}
        />
      </>
    );
  }
}

export default connect()(Controls);
