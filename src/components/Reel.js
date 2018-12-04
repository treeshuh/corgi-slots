import React from "react";

// Home page component
export default class Reel extends React.Component {
  // render
  render() {
    return (
      <div className="reel">
        <h4>This is a reel!</h4>
        {this.props.symbols.map((s) => (
        	<h3>{s.type}: {s.count}</h3>
        ))}
      </div>
    );
  }
}
