import React, { Component } from 'react'
import './Die.css'
export default class Die extends Component {

	render(props) {
		return (
			<div className="Die">
				<i className={`fas fa-dice-${this.props.die} ${this.props.isRolling && 'Die-wobble'}`}></i>
			</div>
		)
	}
}