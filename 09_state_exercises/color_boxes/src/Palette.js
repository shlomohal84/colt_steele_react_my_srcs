import React, { Component } from 'react'
import Color from './Color'
import './Palette.css'


export default class Pallete extends Component {
	static defaultProps = {
		colorsQty: 18,
	}
	constructor(props) {
		super(props)
		this.colorComp = this.colorComp.bind(this)
	}
	colorComp() {
		let arr = []
		for (let i = 1; i <= this.props.colorsQty; i++) {
			arr.push(<Color key={i} />)
		}
		return arr
	}
	x = this.colorComp()
	render() {
		const colorBoxes = Array.from({ length: this.props.colorsQty }).map((color, idx) => {
			return <Color key={idx} />
		})
		return (
			<div className="Palette">
				{colorBoxes}
			</div>
		)
	}
}

