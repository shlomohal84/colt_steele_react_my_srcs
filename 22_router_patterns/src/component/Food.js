import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Food.css'
export default class Food extends Component {

	render() {
		const name = this.props.match.params.name
		if (/\d/.test(name)) this.props.history.push('/notfound')

		const url = `https://source.unsplash.com/800x450/?${name}`
		return (
			<div className='Food'>
				{/\d/.test(name)
					? <Redirect to="/notfound" />
					: <div>
						<h1>I love to eat {name}</h1>
						<img src={url} alt={name} />
					</div>
				}
				<div>
					<Link to="/">Homepage</Link>
				</div>
			</div>

		);
	}
}
