import React, { Component } from "react"
import "./App.css"

import BoxList from "./components/BoxList"

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BoxList />
      </div>
    )
  }
}
