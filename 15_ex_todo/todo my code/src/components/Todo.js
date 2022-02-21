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

	handleTodoUpdate() {
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
		let toggleLineThrough = this.state.isDone ? 'line-through black' : 'none'
		return (
			<div className='Todo'>
				{!this.state.isEditing
					? <div className="Todo-container">
						<p
							style={{ textDecoration: toggleLineThrough }}
							onClick={this.handleIsdone}
						>
							{this.props.text}
						</p>
						<div className="Todo-buttons-container">
							<button onClick={this.handleEditClick}>
								<i className="far fa-edit"></i>
							</button>
							<button onClick={this.handleDelete}>
								<i className="fas fa-trash-alt"></i>
							</button>
						</div>
					</div>
					:
					<div className="Todo-container">
						<input
							placeholder='Edit Todo'
							value={this.state.editInputText}
							onChange={this.handleEditInput}
							name="inputText"
							id="inputText"
							type="text"
							required={true}
							maxLength={20}

						/>
						<button onClick={this.handleTodoUpdate}>Update</button>
					</div>
				}
			</div >
		)
	}
}
