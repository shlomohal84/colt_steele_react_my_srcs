import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Snack.css'
import imgUrl from './Chips.png'



export default class Snack extends Component {
	constructor(props) {
		super(props)
		this.state = {
			snackArr: []
		}
		this.handleClick = this.handleClick.bind(this)
	}

	componentDidMount() {
		const arr = []
		for (let i = 0; i < this.props.counter; i++) {
			const x = window.innerWidth * Math.random();
			const y = window.innerHeight * Math.random();
			arr.push(<img src={imgUrl} alt={imgUrl} style={{ top: `${y}px`, left: `${x}px` }} />)
		}
		console.log(arr)

		this.setState({ snackArr: arr })
	}

	handleClick() {
		this.props.handleClick()
	}

	render() {



		return (
			<div className="Snack">
				<div>
					<h3>No. of {this.props.name}: {this.props.counter}</h3>
					<button onClick={this.handleClick}>Add</button>
				</div>
				{this.state.snackArr.map(s => s)}
				<Link to="/">Go Back</Link>
			</div>
		);
	}
}
