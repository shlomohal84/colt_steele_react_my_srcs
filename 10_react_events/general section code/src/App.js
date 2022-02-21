import React, { Component } from "react";
import './App.css'
// import ButtonList from './components/ChangeColor/ButtonList'
import NumberList from "./components/NumberList/NumberList";
export default class App extends Component {

	render() {

		return (
			<div className="App">
				{/* <ButtonList /> */}
				<NumberList />
			</div>
		)
	}
}