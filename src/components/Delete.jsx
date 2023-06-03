import React, { Component } from "react";
import { connect } from "react-redux";
import { DELETE_CHARACTER } from "../redux/types";

class Delete extends Component {
  render() {
    const { id, dispatch } = this.props;

    return (
      <div>
        <button
          onClick={() => dispatch({ type: DELETE_CHARACTER, payload: id })}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default connect()(Delete);
