import React, { Component } from "react"
import "./App.css"

import Deck from "./components/Deck"

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Deck />
      </div>
    )
  }
}
