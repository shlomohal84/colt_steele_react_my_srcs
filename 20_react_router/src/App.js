import React, { Component } from "react"
import "./App.css"
import { Route, Switch, NavLink } from 'react-router-dom'
import About from "./About"
import Dogs from "./Dogs"
import Contact from "./Contact"


const Cat = () => <h1>Meow I Like Pussies</h1>

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <NavLink exact activeClassName="nav-active" to="/">About</NavLink>
          <NavLink exact activeClassName="nav-active" to="/dogs">Dogs</NavLink>
          <NavLink exact activeClassName="nav-active" to="/dogs/r">Dogs(r)</NavLink>
          <NavLink exact activeClassName="nav-active" to="/dogs/c">Dogs(c)</NavLink>
          <NavLink activeClassName="nav-active" to="/contact">Contact</NavLink>
        </nav>
        <Switch>
          <Route exact path='/' component={() => <About />} />
          <Route exact path='/dogs' component={() => <Dogs name={`Belle and Soul`} />} />
          <Route exact path='/dogs/c' component={() => <Dogs name={`Two-Headed Monster`} />} />
          <Route exact path='/dogs/r' render={() => <Dogs name={`Bellechick and Soulchick`} />} />
          {/* <Route path='/dogs/cat' component={Cat} /> */}
          <Route path='/contact' component={() => <Contact />} />
        </Switch>
      </div>
    )
  }
}
