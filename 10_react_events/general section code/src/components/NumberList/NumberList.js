import React, { Component } from 'react'
import './NumberList.css'
import NumberItem from './NumberItem'
export default class NumberList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			nums: [1, 2, 3, 4, 5],
			id: 0
		}
		this.remove = this.remove.bind(this)
	}
	remove(num) {
		this.setState(st => ({
			nums: st.nums.filter(n => n !== num),
		}));
	}


	render() {
		let nums = this.state.nums.map((n, idx) =>
			<NumberItem value={n} key={idx} remove={this.remove} />)
		return (
			<div className="NumberList">
				<h1>First Number List</h1>
				<ul>{nums}</ul>
			</div>
		)
	}
}
