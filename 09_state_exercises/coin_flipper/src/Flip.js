import React, { Component } from 'react'
import Coin from "./Coin";
import heads from './dime_heads.jpg'
import tails from './dime_tails.png'
import './Flip.css'

export default class Flip extends Component {
	static defaultProps = {
		options: [heads, tails],
	}
	constructor(props) {
		super(props)
		this.state = {
			side: null,
			headsCounter: 0,
			tailsCounter: 0,
			totalCounter: 0,
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		let headsCounter = this.state.headsCounter;
		let tailsCounter = this.state.tailsCounter;
		let totalCounter = this.state.totalCounter;

		let randTemp = Math.floor(Math.random() * this.props.options.length)


		this.setState({ side: this.props.options[randTemp] })

		this.setState({ totalCounter: totalCounter + 1 })

		randTemp === 0
			? this.setState({ headsCounter: headsCounter + 1 })
			: this.setState({ tailsCounter: tailsCounter + 1 })
		// if (randTemp === 0) {
		// 	return this.setState({ headsCounter: headsCounter + 1 })

		// } else {
		// 	return this.setState({ tailsCounter: tailsCounter + 1 })
		// }

	}
	render() {
		return (
			<div className="Flip">
				<h2>Let's Flip A Coin!</h2>
				<Coin side={this.state.side} handleClick={this.handleClick} />
				<button onClick={this.handleClick}>Flip!</button>

				<p>{`Out of ${this.state.totalCounter} 
					flips, there have been ${this.state.headsCounter} heads
					and ${this.state.tailsCounter} tails.`}</p>
			</div>
		)
	}
}
