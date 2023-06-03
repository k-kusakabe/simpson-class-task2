import React, { Component } from "react";
import { connect } from "react-redux";
import { TOGGLE_LIKED } from "../redux/types";

class Name extends Component {
  render() {
    const { liked, character, id, dispatch } = this.props;

    return (
      <div>
        <h1>{character}</h1>
        <button
          onClick={() => {
            dispatch({ type: TOGGLE_LIKED, payload: id });
          }}
        >
          {liked ? "Liked" : "Not liked"}
        </button>
      </div>
    );
  }
}

export default connect()(Name);
