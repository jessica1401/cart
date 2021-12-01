import React, { Component } from "react";

class Counter extends React.Component {
  // state = {
  //   tags: ["tag1", "tag2", "tag3", "tag4"],
  // };

  styles = {
    fontSize: "15px",
    fontweight: "bold",
  };

  componentDidUpdate(preProps, preState) {
    // If there is a change we can make ajax call ti make changed
    console.log(preProps);
    console.log(preState);
  }

  componentWillUnmount() {
    console.log("Deleted");
  
  }

  renderTags() {
    if (this.state.tags.length === 0) return <h1>There are no tags</h1>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    console.log("counter-renderd");
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()} style={this.styles}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button disabled={this.props.counter.value === 0 ? true : false} onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm">
          -
          </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          X
        </button>
        <br />
        {/* {this.renderTags()} */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
