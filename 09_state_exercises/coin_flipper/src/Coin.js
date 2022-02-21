import React, { Component } from 'react'
import './Coin.css'

export default class Coin extends Component {

	render() {
		return (
			<div className='Coin' onClick={this.props.handleClick}>
				<img
					src={this.props.side} alt={this.props.side} />
			</div>
		)
	}
}
