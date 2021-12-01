import React, { Component } from "react";

class RoughCounter extends React.Component {
  state = {
    tags: ["tag1", "tag2", "tag3", "tag4"],
  };

  styles = {
    fontSize: "15px",
    fontWeight: "bold",
  };
  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span style={this.styles} className={this.getClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        {/* {this.renderingTags()} */}
        <br />
      </React.Fragment>
    );
  }

  renderingTags() {
    if (this.state.tags.length === 0) return <h3>Soory there are no tags</h3>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default RoughCounter;
