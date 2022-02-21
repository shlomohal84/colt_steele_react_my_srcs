import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Navbar.css'
export default withRouter(class Navbar extends Component {
	constructor(props) {
		super(props)
		this.handleLogin = this.handleLogin.bind(this)
		this.handleBack = this.handleBack.bind(this)
	}

	handleLogin() {
		alert('LOGGED IN!')
		this.props.history.push('/food/salmon')
	}
	handleBack() {
		this.props.history.goBack()
	}
	render() {
		return (
			<div className='Navbar'>
				<button onClick={this.handleBack}>Go Back</button>

				<button onClick={this.handleLogin}>Login</button>
			</div>)
	}
})