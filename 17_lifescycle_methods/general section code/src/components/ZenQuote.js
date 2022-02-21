import React, { Component } from 'react';
import './ZenQuote.css'

import axios from 'axios';

export default class ZenQuote extends Component {
	constructor(props) {
		super(props)
		this.state = {
			quote: '',
			isLoaded: false
		}
		console.log('IN CONSTRUCTOR')

	}
	componentDidMount() {
		console.log('IN COMPONENT DID MOUNT')

		//load data
		axios.get('https://api.github.com/zen').then(response => {
			setTimeout(
				function () {
					this.setState({ quote: response.data, isLoaded: true })
				}.bind(this),
				3000
			);
		});
	}
	componentDidUpdate() {
		console.log("IN COMPONENT DID UPDATE")
	}
	render() {
		console.log('IN RENDER')

		return (

			<div>
				{this.state.isLoaded
					? <div>
						<h1>Always remember...</h1>
						<p>{this.state.quote}</p>
					</div>
					: <div className={'loader'}></div>
				}
			</div>
		)
	}
}
