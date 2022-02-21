import React, { Component } from 'react'
import './TodoList.css'

import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

export default class TodoList extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: [],

		}
		this.addTodo = this.addTodo.bind(this)
		this.clickupdateTodo = this.clickupdateTodo.bind(this)
		this.deleteTodo = this.deleteTodo.bind(this)
		this.toggleIsDone = this.toggleIsDone.bind(this)
	}
	addTodo(id, input) {
		this.setState(st => ({
			data: [...st.data, { id, text: input, isDone: false }]
		}))
	}

	clickupdateTodo(id, input) {
		console.log('clicked update!')
		this.setState(st => ({
			data: st.data.map(elm => elm.id === id ? { ...elm, text: input } : { ...elm })
		}))
	}

	deleteTodo(id) {
		this.setState(st => ({
			data: st.data.filter(elm => elm.id !== id)
		}))
	}
	toggleIsDone(id, isDone) {
		this.setState(st => ({
			data: st.data.map(elm => elm.id === id ? { ...elm, isDone: isDone } : { ...elm })
		}))
	}

	render() {
		return (
			<div className="TodoList">
				<div className="TodoList-container">
					<div className="TodoList-item-container">
						<h3>Todo List</h3>
						{this.state.data.map(elm => {
							return (
								<Todo
									key={elm.id}
									{...elm}
									deleteTodo={this.deleteTodo}
									clickupdateTodo={this.clickupdateTodo}
									toggleIsDone={this.toggleIsDone}
								/>
							)
						})}
					</div>
					<NewTodoForm addTodo={this.addTodo} />
				</div>

			</div>
		)
	}
}

