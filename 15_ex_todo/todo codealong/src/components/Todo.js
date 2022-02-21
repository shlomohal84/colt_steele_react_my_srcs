import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {

	constructor(props) {
		super(props)
		this.state = {
			editInputText: this.props.text,
			isEditing: false,
			isEmpty: false,
			isDone: false
		}
		this.handleEditClick = this.handleEditClick.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.handleEditInput = this.handleEditInput.bind(this)
		this.handleTodoUpdate = this.handleTodoUpdate.bind(this)
		this.handleIsdone = this.handleIsdone.bind(this)
	}

	handleEditClick() {
		this.setState({ isEditing: !this.state.isEditing })
	}
	handleEditInput(evt) {
		this.setState(st => ({ editInputText: evt.target.value }))
		!evt.target.value.length ? this.setState({ isEmpty: true }) : this.setState({ isEmpty: false })
	}
	handleTodoUpdate(evt) {
		evt.preventDefault()
		if (this.state.isEmpty) {
			alert('Input can\'t be empty')
		} else {
			this.setState({ isEditing: !this.state.isEditing, isDone: false });
			this.props.clickupdateTodo(this.props.id, this.state.editInputText,)
		}
	}
	handleDelete() {
		this.props.deleteTodo(this.props.id)
	}

	handleIsdone() {
		this.props.toggleIsDone(this.props.id, this.setState(st => ({ isDone: !this.state.isDone })))
	}

	render() {
		let result;
		if (this.state.isEditing) {
			result = (
				<form className='Todo-edit-form' onSubmit={this.handleTodoUpdate}>
					<input
						value={this.state.editInputText} onChange={this.handleEditInput}
						name="text" id="text" type="text" placeholder='Edit Todo'
						required={true} maxLength={40}
					/>
					<button>Update</button>
				</form>
			)
		} else {
			result = (
				<div className='Todo'>
					<li
						// style={{ textDecoration: this.state.isDone && "line-through" }}
						className={this.state.isDone ? "Todo-text done" : "Todo-text"}
						onClick={this.handleIsdone}>
						{this.props.text}
					</li>
					<div className='Todo-buttons'>
						<button onClick={this.handleEditClick}>
							<i className="far fa-edit"></i>
						</button>
						<button onClick={this.handleDelete}>
							<i className="fas fa-trash-alt"></i>
						</button>
					</div >
				</div>
			)
		}
		return (result);
	}
}
