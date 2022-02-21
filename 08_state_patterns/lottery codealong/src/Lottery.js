import React, { Component } from 'react'
import Ball from './Ball'
import './Lottery.css'

export default class Lottery extends Component {
	static defaultProps = {
		title: 'Lotto',
		maxBalls: 6,
		maxNum: 40
	};
	constructor(props) {
		super(props)
		this.state = { nums: Array.from({ length: this.props.maxBalls }) }
		this.generate = this.generate.bind(this)
		this.handleClick = this.handleClick.bind(this)
	};
	generate() {
		this.setState(curState => ({
			nums: curState.nums.map(
				num => Math.floor(Math.random() * this.props.maxNum) + 1
			)
		}))
	};
	handleClick() {
		this.generate()

	};
	render() {
		return (
			<div className="Lottery">
				<h1>{this.props.title}</h1>
				<div>
					{this.state.nums.map((ball, idx) => {
						return <Ball key={idx} num={ball} />
					})}
				</div>
				<button onClick={this.handleClick}>Generate</button>
			</div>
		)
	}
}
