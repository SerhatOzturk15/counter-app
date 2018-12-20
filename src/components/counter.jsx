import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    imageUrl: "https://picsum.photos/200",
    tags: []
  };

  styles = {
    fontSize: 30,
    fontWeight: "bold"
  };

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
    //let classes = this.getBadgeClasses();
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/*         <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button> */}

        {this.state.tags.length == 0 && "Please create new tag"}
        <div>{this.renderTags()}</div>
      </React.Fragment>
    );
  }
  /*
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
  */
}

export default Counter;
