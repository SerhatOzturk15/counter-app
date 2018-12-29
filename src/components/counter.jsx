import React, { Component } from "react";
//import Counters from "./counters";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  //   //imageUrl: "https://picsum.photos/200",
  //   //tags: []
  // };

  styles = {
    fontSize: 30,
    fontWeight: "bold"
  };

  constructor(props) {
    super(props);
    //this.handleIncrement = this.handleIncrement.bind(this);
    //this.handleIncrement = this.handleIncrement.bind(this);
  }
  // handleIncrement() {
  //   this.setState({ value: this.state.value + 1 });
  // }

  renderTags() {
    if (this.state.tags.length == 0) return <p>There are not tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    console.log("props", this.props);
    //let classes = this.getBadgeClasses();
    return (
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value == 0 ? "Zero" : value;
  }
}

export default Counter;
