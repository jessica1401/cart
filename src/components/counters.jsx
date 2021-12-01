import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {

  render() {
    console.log("Counters renderd");
    const {onReset, onDelete, onIncrement, counters, onDecrement} = this.props;
    return (
      <React.Fragment>
        <button onClick={() => onReset()} className="btn btn-primary btn-sm m-2">Reset</button>
        <div>
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              counter={counter}
              onDecrement={onDecrement}
              // key={counter.id}
              // onDelete={this.props.onDelete}
              // onIncrement={this.props.onIncrement}
              // counter={counter}
            ></Counter>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
