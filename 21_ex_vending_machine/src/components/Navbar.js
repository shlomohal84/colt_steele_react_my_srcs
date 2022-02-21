import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css'

export default class Navbar extends Component {
	render() {
		return (
			<div className='Navbar'>
				<NavLink activeClassName='Navbar-active-link' exact to="/">Homepage</NavLink>
				<NavLink activeClassName='Navbar-active-link' to="/beverage">{this.props.beverageName}</NavLink>
				<NavLink activeClassName='Navbar-active-link' to="/snack">{this.props.snackName}</NavLink>
				<NavLink activeClassName='Navbar-active-link' to="/foodcan">{this.props.foodCanName}</NavLink>
			</div>
		)
	}
}
