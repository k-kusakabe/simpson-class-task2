import React, { Component } from "react";
import axios from "axios";
import Interface from "./components/Interface";
import "./App.css";
import { connect } from "react-redux";
import { SET_API_DATA } from "./redux/types";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );

    //fixed the api data to have unique id
    data.forEach((element, index) => {
      element.id = index + Math.random();
    });

    this.props.dispatch({ type: SET_API_DATA, payload: data });
  }

  render() {
    return <Interface />;
  }
}

export default connect()(App);
