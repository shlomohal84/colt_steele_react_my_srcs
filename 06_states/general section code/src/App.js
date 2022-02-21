import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js';
// import Game from './Game';
// import Demo from './Demo';
// import Button from './Button';
// import BrokenClick from './BrokenClick';
import Rando from './Rando';

export default class App extends Component {

	render() {
		return (
			<div className="App">
				{/* <Button /> */}
				{/* <BrokenClick /> */}
				{/* <Game color="purple" />
				<Demo animal="Bobcat" food="Pineapple" /> */}
				<Rando maxNum={7} />
			</div>
		)
	}
}