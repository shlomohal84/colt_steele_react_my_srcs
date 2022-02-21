import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dogs from './Dogs'
import Dog from './Dog'
export default class Routes extends Component {

	render() {
		const getDog = props => {
			let name = props.match.params.name
			let currentDog = this.props.dogs.find(
				dog => dog.name.toLowerCase() === name.toLowerCase()
			)
			return <Dog {...props} dog={currentDog} />
		}
		return (
			<Switch className="Routes">
				<Route
					exact path="/dogs"
					render={(routeProps) => <Dogs {...routeProps} dogs={this.props.dogs} />}
				/>
				<Route exact path={'/dogs/:name'} render={getDog} />
				<Redirect to="/dogs" />
			</Switch>
		)
	}
}