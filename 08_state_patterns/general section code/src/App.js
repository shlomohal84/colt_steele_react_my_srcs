import React, { Component } from 'react';
import './App.css'
// import ScoreKeeper from './ScoreKeeper';
import Icons from './Icons';
export default class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <ScoreKeeper /> */}
				<Icons />
			</div>
		)
	}
}