import React, { Component } from "react";
import './App.css'
// import '@fortawesome/fontawesome-free/css/all.css'


// import Timer from './components/Timer'
import ZenQuote from "./components/ZenQuote";
import GithubUserInfo from "./components/GithubUserInfo";
export default class App extends Component {

	render() {

		return (
			<div className="App">
				{/* <Timer />*/}
				<ZenQuote />
				{/* <GithubUserInfo username="facebook" />
				<GithubUserInfo username="shlomohal84" /> */}
			</div>
		)
	}
}