import React, { Component } from 'react';

export default class Dogs extends Component {
	componentDidMount() {
		console.log('DOGS DID MOUNT!')
	}
	componentWillUnmount() {
		console.log('DOGS DID UNMOUNT!')
	}
	render() {
		console.log('DOGS DID RENDER!')

		return (
			<div>
				<h1>Dog</h1>
				<h3>These dogs are named: {this.props.name}</h3>
				<img
					src="https://res.cloudinary.com/snackeater/image/upload/v1639777789/YelpCamp/k0za6afqpu4ndut92hjc.jpg"
					alt="Dogs"
				/>
			</div>
		);
	}
}
