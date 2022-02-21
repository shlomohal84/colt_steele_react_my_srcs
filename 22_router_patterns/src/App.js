import React, { Component } from "react"
import { Route, Switch, Link } from 'react-router-dom'
import "./App.css"

import FoodSearch from "./component/FoodSearch"
import Food from "./component/Food"
import Meal from "./component/Meal"
import Navbar from "./component/Navbar"

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact path="/food/:name"
            render={(routeProps => <Food {...routeProps} />)}
          />
          <Route
            exact path="/food/:foodName/drink/:drinkName"
            render={(routeProps => <Meal {...routeProps} />)}
          />
          <Route exact path="/" render={(routeProps => <FoodSearch {...routeProps} />)} />
          <Route render={() => <h1>Error 404</h1>} />
        </Switch>
      </div>
    )
  }
}
