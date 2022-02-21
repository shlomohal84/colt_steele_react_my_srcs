import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js';
import './styles.css'
import Dog from './Dog'

export default class App extends Component{
	render() {
		return (
			<div className="App">
				<Dog />
				<div>I'M IN ANOTHER DIV, NOT IN DOG COMPONENT!</div>
			</div>
		)
	 }
}

