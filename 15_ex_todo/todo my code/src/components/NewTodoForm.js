import React, { Component } from 'react'
import './NewTodoForm.css'
import { v4 as uuidv4 } from 'uuid'

export default class NewTodoForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			newInput: '',
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleInputChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value })
	}

	handleSubmit(evt) {
		evt.preventDefault()
		this.props.addTodo(uuidv4(), this.state.newInput)
		this.setState({ newInput: '' })
	}
	render() {
		return (

			<form className='NewTodoForm' onSubmit={this.handleSubmit}>
				<label htmlFor='newInput'>New Todo: </label>
				<input
					onChange={this.handleInputChange}
					value={this.state.newInput}
					type="text"
					name="newInput"
					id="newInput"
					placeholder='Type New Todo Here'
					required={true}
					maxLength={20}
				/>
				<button>Add Todo</button>
			</form>
		)
	}
}
