import React, { Component } from 'react'
import './TodoList.css'

import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

export default class TodoList extends Component {

	constructor(props) {
		super(props)
		this.state = {
			list: []

		}
		this.addTodo = this.addTodo.bind(this)
		this.clickupdateTodo = this.clickupdateTodo.bind(this)
		this.deleteTodo = this.deleteTodo.bind(this)
		this.toggleIsDone = this.toggleIsDone.bind(this)
	}
	addTodo(id, input) {
		this.setState({
			list: [...this.state.list, { id, text: input, isDone: false }]
		})
	}

	clickupdateTodo(id, input) {
		this.setState(st => ({
			list: st.list.map(elm => elm.id === id ? { ...elm, text: input } : { ...elm })
		}))
	}

	deleteTodo(id) {
		this.setState(st => ({
			list: st.list.filter(elm => elm.id !== id)
		}))
	}

	// componentDidUpdate(prevProps, prevState) {
	// 	console.log("IN COMPONENT DID UPDATE");
	// 	console.log(prevState.list);
	// 	console.log(this.state.list);
	// }

	toggleIsDone(id) {
		const updateTodos = this.state.list.map(todo => {
			if (todo.id === id) {
				return { ...todo, isDone: !todo.isDone }
			}
			return todo
		})
		this.setState({ list: updateTodos })
	}

	render() {
		const todos = this.state.list.map(elm => {
			return (
				<Todo
					key={elm.id}
					{...elm}
					deleteTodo={this.deleteTodo}
					clickupdateTodo={this.clickupdateTodo}
					toggleIsDone={this.toggleIsDone}
				/>
			)
		})

		return (
			<div className="TodoList" name="todolist" tag="ul">
				<h1>Todo List <span>A Simple React Todo App.</span></h1>
				<ul>
					{todos}
				</ul>
				<NewTodoForm addTodo={this.addTodo} />
			</div>
		)
	}
}

