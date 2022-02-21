import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./FoodSearch.css"

export default class FoodSearch extends Component {
	constructor(props) {
		super(props)
		this.state = {
			query: ""
		}
		this.handlechange = this.handlechange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	handlechange(evt) {
		this.setState({ query: evt.target.value })
	}

	handleClick() {
		// Do something
		alert('SAVED YOUR FOOD TO DB')
		//redirect somewhere else
		this.props.history.push(`/food/${this.state.query}`)
	}

	render() {
		return (
			<div>
				<h1>Search for food:</h1>
				<input
					value={this.state.query}
					onChange={this.handlechange}
					type="text"
					placeholder="Search for food"
				/>
				<Link to={`/food/${this.state.query}`}>Go!</Link>
				<button onClick={this.handleClick}>Save New Food!</button>
			</div>
		)
	}
}
