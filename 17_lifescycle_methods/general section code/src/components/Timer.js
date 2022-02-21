import React, { Component } from 'react';

export default class Timer extends Component {
	//eslint-disable-next-line
	constructor(props) {
		super(props)
		this.state = {
			time: new Date()
		}
		console.log('IN CONSTRUCTOR')
	}
	componentDidMount() {
		console.log("IN COMPONENT DID MOUNT");
		this.timerID = setInterval(() => {
			this.setState({ time: new Date() })
		}, 1000)
	}
	render() {
		// console.log("IN RENDER")
		return (
			<div>
				<h1>{this.state.time.toLocaleTimeString('en-gb')}</h1>
			</div>
		)

	}
}
