import React, { Component } from "react";
import Loading from "./Loading";
import Simpsons from "./Simpsons";
import { connect } from "react-redux";

class Interface extends Component {
  render() {
    const { simpsons } = this.props;

    if (!simpsons) return <Loading />;

    if (simpsons.length === 0) return <p>You deleted everything!</p>;

    //calculate the total
    let total = 0;
    simpsons.forEach((char) => {
      if (char.liked) total++;
    });

    return (
      <>
        <h1>Total no of liked chars #{total}</h1>
        <Simpsons />
      </>
    );
  }
}

function mapStateToProps(state) {
  return { simpsons: state.simpsons };
}

export default connect(mapStateToProps)(Interface);
