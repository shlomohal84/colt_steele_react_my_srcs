import React, { Component } from 'react'

export default class form extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: ''
		}
		this.handleInpChange = this.handleInpChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}


	handleInpChange(evt) {
		this.setState({ username: evt.target.value })
	}
	handleSubmit(evt) {
		evt.preventDefault()
		alert(`You typed: ${this.state.username}`)
		this.setState({ username: '' })

	}

	render() {

		return (
			<div className="Form">
				<h1>Form Demo</h1>
				<form onSubmit={this.handleSubmit}>
					<input
						value={this.state.username}
						onChange={this.handleInpChange}
						type="text"
						placeholder="username"
					/>
					<button>Submit</button>
				</form>
			</div>
		)
	}
}
