import React, { Component } from "react";
import "./Dogs.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'


export default class Dogs extends Component {
	render() {
		const { dogs } = this.props
		return (
			<div className="Dogs">
				<h1 className="display-1 text-center my-5">Dogs List!</h1>
				<div className="row">
					{dogs.map((dog) => {
						return (
							<div
								key={uuidv4()}
								className="Dogs-dog col-md-4 text-center"								>
								<Link to={`/dogs/${dog.name}`}>
									<img
										src={dog.src}
										alt={dog.src}
									/>
								</Link>
								<h3 className="mt-3">
									<Link className="Dogs-dog-underline" to={`/dogs/${dog.name}`}>
										{dog.name}
									</Link>
								</h3>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
