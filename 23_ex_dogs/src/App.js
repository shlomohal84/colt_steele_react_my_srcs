import React, { Component } from "react";
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import data from "./apiData";

import Navbar from "./components/Navbar";
import Routes from "./components/Rotues";

export default class App extends Component {
  static defaultProps = {
    dogs: data.dogs,
  };

  render() {

    return (
      <div className="App">
        <Navbar dogs={this.props.dogs} />
        <div className="container">
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}
