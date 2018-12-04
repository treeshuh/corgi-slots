import React from "react";
import Reel from "./Reel";

// Home page component
export default class Slots extends React.Component {
  // render
  render() {
    return (
      <div className="slot">
        {this.props.reels.map((r, key) => (
        	<Reel symbols={r} key={key}/>
        ))}
      </div>
    );
  }
}
