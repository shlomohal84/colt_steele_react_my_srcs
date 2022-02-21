import React, { Component } from 'react'

export default class Demo extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}


	render() {
		return (
			// 	<div>
			<h1>{this.props.animal}</h1>
			// 	</div>
		)
	}
}
