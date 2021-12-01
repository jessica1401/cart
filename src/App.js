import react from "react";
import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends React.Component {
  constructor(props) { // So yha props pass karna zaroori hai
    super(props); // agar 
    console.log("Inside Constructor ", this.props);
  }

  componentDidMount() {
    // Perfect to make Ajax call
    console.log("App mounted");
  }
  state = {
    counters: [
      { id: 1, value: 10 },
      { id: 2, value: 0 },
      { id: 3, value: 10 },
      { id: 4, value: 7 },
      { id: 5, value: 10 },
      { id: 6, value: 8 },
    ],
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((m) => m.id !== id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = this.state.counters.map((m) => {
      if (m.id == counter.id) {
        m.value++;
        return m;
      } else {
        return m;
      }
    });
    this.setState({ counters });
  };

  handleDecrment = (counter) => {
    const counters = this.state.counters.map((m) => {
      if (m.id == counter.id) {
        m.value--;
        if(m.value < 0) {
          m.value = 0;
        }
        return m;
      } else {
        return m;
      }
    });
    this.setState({ counters });
  }
  render() {
    console.log("App-renderd")
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.length}></NavBar>
        <Counters 
        onReset={this.handleReset}
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrment}
        counters={this.state.counters}>
        </Counters>
      </React.Fragment>
    );
  }
}
export default App;
