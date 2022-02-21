import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Dog.css'
import { v4 as uuidv4 } from 'uuid'


export default class Dog extends Component {
	render() {
		const { name, age, src, facts } = this.props.dog

		return (
			<div className='Dog row justify-content-center mt-5'>
				<div className='col-11 col-lg-5'>
					<div className="Dog-card card">
						<img src={src} className="card-img-top" alt={name} />
						<div className="card-body">
							<h2 className="card-title">{name}</h2>
							<h5 className="card-subtitle mb-2 text-muted">{age} years old</h5>
						</div>
						<ul className="list-group list-group-flush">
							{facts.map(fact => {
								return <li key={uuidv4()} className='list-group-item'>{fact}</li>
							})}
						</ul>
						<div className="card-body">
							<Link to="/dogs" className="btn btn-info">Go Back</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
}