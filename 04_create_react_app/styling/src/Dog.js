import React, { Component } from 'react'
import puppy from './imgs/puppy.jpg'
import './Dog.css'

export default class Dog extends Component{
	render() {
		return (
			<div className="Dog">
				<div className="Dog-div">
					<h1>DOGE!</h1>
				</div>
				<img className="Dog-img" src={puppy} alt="puppy"/>
			</div>
		)
	}
}
