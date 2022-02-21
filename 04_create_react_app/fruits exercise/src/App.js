import React, { Component } from 'react';
import { createArr } from './foods';
import { choice, remove } from './helpers';


class App extends Component {
	render() {
		const arr = [];
		createArr(arr)
		let item = choice(arr)
		remove(arr,item)

		return (
			<div>
				<h1>Market Exercise!</h1>
				<div>
					<h3>I'd like one, please {item}</h3>
					<h3>Here you go: {item}</h3>
					<h3>Delicious! May i have another one?</h3>
					<h3>I'm sorry we're all out of {item}. </h3>
					<h3>We have those {arr.length} fruits left:{arr.map(item => item)}</h3>
				</div>
			</div>
		)
	}
}

export default App;