import React from "react";
import SlotsContainer from "../containers/SlotsContainer";

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <h4>Hello world!</h4>
        <SlotsContainer id="default"/>
      </div>
    );
  }
}
