import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ],
    hits: []
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    //ajax call
    console.log("App - Mounted");
    //this.setState({ movies });
    const temp = [];
    const url = "https://hn.algolia.com/api/v1/search?query=redux";
    fetch(url)
      .then(response => response.json())
      .then(data => (this.state.hits = data.hits));
    const temp2 = [];
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("event handler running", counterId);
    const counters = this.state.counters.filter(c => c.id != counterId);

    this.setState({ counters: counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
