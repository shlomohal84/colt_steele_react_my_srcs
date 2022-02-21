import React, { Component } from 'react';
import './App.css'
import Lottery from './Lottery';

export default class App extends Component {

	populateBalls(maxNum, arr = []) {
		let tempArr = [...arr]
		for (let i = 1; i <= maxNum; i++) {
			tempArr.push(i)
		}
		return tempArr
	}


	render() {
		return (
			<div className="App">
				<Lottery title="Normal Roll" maxBalls={6} maxNum={37} populateBalls={this.populateBalls} />
				<Lottery title="Lucky Roll" maxBalls={1} maxNum={7} populateBalls={this.populateBalls} />
			</div>
		)
	}
}