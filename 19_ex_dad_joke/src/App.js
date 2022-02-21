import React, { Component } from "react"
import "./App.css"
import JokeList from "./components/JokeList"

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <JokeList />
      </div>
    )
  }
}
