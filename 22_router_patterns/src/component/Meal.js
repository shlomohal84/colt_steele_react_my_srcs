import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Meal.css'

export default class Meal extends Component {
	render() {
		const foodName = this.props.match.params.foodName
		const drinkName = this.props.match.params.drinkName
		const foodUrl = `https://source.unsplash.com/800x450/?${foodName}`
		const drinkUrl = `https://source.unsplash.com/800x450/?${drinkName}`

		return (
			<div className='Meal'>
				<h1>THIS IS A MEAL OF {foodName.toUpperCase()} + {drinkName.toUpperCase()}</h1>
				<img src={foodUrl} alt={foodName} />
				<img src={drinkUrl} alt={drinkName} />
				<div>
					<Link to="/">Homepage</Link>
				</div>
			</div>
		)
	}
}
