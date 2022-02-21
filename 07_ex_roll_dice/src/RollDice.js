import React, { Component } from 'react'
import Die from './Die';
import './RollDice.css'

export default class RollDice extends Component {
	static defaultProps = {
		data: ['one', 'two', 'three', 'four', 'five', 'six'],
		random() {
			return Math.floor(Math.random() * this.data.length);
		}
	}
	constructor(props) {
		super(props);
		this.state = {
			dice1: this.props.data[0],
			dice2: this.props.data[0],
			isRolling: false
		}
		this.rollDice = this.rollDice.bind(this)
	}
	rollDice() {
		let roll1 = this.props.data[this.props.random()]
		let roll2 = this.props.data[this.props.random()]
		this.setState({ dice1: roll1, dice2: roll2, isRolling: true })

		setTimeout(() => {
			this.setState({ isRolling: false })
		}, 1000)
	}
	render() {
		return (
			<div className="RollDice">
				<div className="RollDice-container">
					<Die die={this.state.dice1} isRolling={this.state.isRolling} />
					<Die die={this.state.dice2} isRolling={this.state.isRolling} />
				</div>
				<button className="RollDice-button" onClick={this.rollDice} disabled={this.state.isRolling}>
					{this.state.isRolling ? 'Rolling!' : 'Roll Dice!'}
				</button>
			</div>
		)
	}
}
// import React, { Component } from 'react'
// import Die from './Die';
// import './RollDice.css'

// export default class RollDice extends Component {
// 	static defaultProps = {
// 		data: ['one', 'two', 'three', 'four', 'five', 'six'],
// 	}
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			dice1: this.props.data[0],
// 			dice2: this.props.data[0],
// 			isRolling: false
// 		}
// 		this.rollDice = this.rollDice.bind(this)
// 	}
// 	random() {
// 		return Math.floor(Math.random() * this.props.data.length);
// 	}
// 	rollDice() {
// 		let roll1 = this.random()
// 		let roll2 = this.random()
// 		this.setState({ dice1: this.props.data[roll1], dice2: this.props.data[roll2], isRolling: true })
// 	}

// render() {
// 	return (
// 		<div className="RollDice">
// 			<div className="RollDice-dice">
// 				<Die die={this.state.dice1} />
// 				<Die die={this.state.dice2} />
// 			</div>
// 			<button className="RollDice-button" onClick={this.rollDice}>
// 				{this.state.isRolling ? 'Rolling!' : 'Roll Dice!'}
// 			</button>
// 		</div>
// 	)
// }