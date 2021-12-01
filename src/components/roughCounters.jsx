import React, { Component } from "react";
import RoughCounter from "./roughCounter";

class RoughCounters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 8 },
      { id: 3, value: 0 },
      { id: 4, value: 6 },
      { id: 5, value: 55 },
      { id: 6, value: 3 },
    ],
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((m) => m.id !== id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((m) => {
      m.value = 0;
      return m;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = this.state.counters.map(m => {
      if(m.id == counter.id) {
        m.value++;
        return m;
      } else {
        return m;
      }
    });
    this.setState({counters})
  }
  
  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.handleReset()}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <br />
        {this.state.counters.map((counter) => (
          <RoughCounter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          ></RoughCounter>
        ))}
      </React.Fragment>
    );
  }
}

export default RoughCounters;
