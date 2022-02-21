import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Homepage.css'
import vendingImg from './VendingMachine.png'
import Message from './Message';
export default class Homepage extends Component {
	render() {
		return (
			<div className='Homepage' style={{ backgroundImage: `url(${vendingImg})` }}>
				<h2>Vending Machine</h2>
				<div className="Homepage-products">
					<Message>
						<Link className='Homepage-link' to="/beverage">{this.props.beverageName}</Link>
					</Message>

					<Message>
						<Link className='Homepage-link' to="/snack">{this.props.snackName}</Link>
					</Message>
					<Link className='Homepage-link' to="/foodcan">{this.props.foodCanName}</Link>
				</div>
			</div>
		);
	}
}
