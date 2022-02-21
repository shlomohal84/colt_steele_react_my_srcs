import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import MultipleForms from "./components/MultipleForms";
import ShoppingList from "./components/ShoppingList/ShoppingList";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Form />
				<MultipleForms /> */}
        <ShoppingList />
      </div>
    );
  }
}
