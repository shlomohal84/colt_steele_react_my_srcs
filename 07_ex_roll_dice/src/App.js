import React, { Component } from 'react';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
// import './App.css'
import RollDice from './RollDice';
export default class App extends Component {
	render() {
		return (
			<div className="App">
				<RollDice random={this.random} data={this.data} />
			</div>
		)
	}
}