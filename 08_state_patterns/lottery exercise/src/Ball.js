import React, { Component } from 'react'
import './Ball.css'
export default class Ball extends Component {
	render() {
		return (
			<div className="Ball">
				<h1>{this.props.num}</h1>
			</div>
		)
	}
}
