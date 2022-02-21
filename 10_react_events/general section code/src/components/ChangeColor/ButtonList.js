import React, { Component } from 'react'
import './ButtonList.css'
export default class ButtonList extends Component {
	static defaultProps = {
		colors: ['#e056fd', '#eb4d4b', '#badc58', '#f0932b']
	}
	constructor(props) {
		super(props)
		this.changeColor = this.changeColor.bind(this)
		this.state = {
			color: "cyan"
		}
	}
	changeColor(newColor) {
		this.setState({ color: newColor })
	}


	render() {
		return (
			<div className='ButtonList' style={{ backgroundColor: this.state.color }}>
				{this.props.colors.map((color, idx) => {
					const colorObj = { backgroundColor: color }
					return <button style={colorObj} key={idx} onClick={this.changeColor.bind(this, color)}>Click on me!</button>
				})}
			</div>
		)
	}
}
