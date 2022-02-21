import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class FoodCan extends Component {
	render() {
		return (
			<div>
				<h2>{this.props.name}</h2>
				<Link exact to="/">Go Back</Link>
			</div>
		);
	}
}
