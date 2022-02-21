import React, { Component } from 'react'
import './Color.css'
import { colors, assignColor } from './helpers'
export default class Color extends Component {
	static defaultProps = {
		colors: colors
	}
	constructor(props) {
		super(props)
		this.state = {
			color: assignColor(this.props.colors)
		}
		this.handleClick = this.handleClick.bind(this)
	}


	handleClick() {
		let newColor
		do {
			newColor = assignColor(this.props.colors);
		} while (newColor === this.state.color)
		this.setState({ color: newColor })
	}



	render() {
		return (
			<div onClick={this.handleClick} draggable={false}
				className="Color" style={{ backgroundColor: this.state.color }}>

			</div>
		)
	}
}
