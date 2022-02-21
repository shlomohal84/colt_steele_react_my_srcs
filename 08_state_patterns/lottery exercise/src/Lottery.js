import React, { Component } from 'react';
import Ball from './Ball'
import './Lottery.css'
export default class Lottery extends Component {

	constructor(props) {
		super(props)
		this.state = {
			initialArr: this.props.populateBalls(this.props.maxNum),
			pool: this.assignEmptyBalls()
		}

		this.randomNum = this.randomNum.bind(this)
		this.startLotteryRoll = this.startLotteryRoll.bind(this)
		this.assignEmptyBalls = this.assignEmptyBalls.bind(this)
	}

	assignEmptyBalls() {
		let tempArr = []
		for (let i = 1; i <= this.props.maxBalls; i++) {
			tempArr.push(0);
		}
		return tempArr
	}

	randomNum(arr) {
		return Math.floor(Math.random() * arr.length)
	}

	startLotteryRoll(arr) {
		let initialArrTMP = [...arr]
		let lotteryArr = [];
		if (this.props.maxBalls === 1) {
			let rand = this.randomNum(initialArrTMP);
			lotteryArr.push(initialArrTMP[rand])
		}
		else {
			for (let i = 1; i <= this.props.maxBalls; i++) {
				let rand = this.randomNum(initialArrTMP);
				lotteryArr.push(initialArrTMP[rand])
				initialArrTMP.splice(rand, 1)
			}
		}
		this.setState({ pool: lotteryArr })
	}

	render() {

		return (
			<div className="Lottery">
				<h2>{this.props.title}</h2>
				<div className="Lottery-balls-container">
					{this.state.pool.map((elm, idx) => <Ball num={elm} key={idx} />)}
				</div>
				<button className='Lottery-generate-button' onClick={() => this.startLotteryRoll(this.state.initialArr)}>Generate</button>
			</div>
		)
	}
}