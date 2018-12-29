import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //object destructoring
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            //value={counter.value}
            //id={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            //selected={true}
            //counter={counter}
          >
            {/* <h4>Counter {this.props.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
