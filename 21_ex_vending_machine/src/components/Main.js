import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './Main.css'
import Navbar from './Navbar';
import Homepage from './Homepage';
import Beverage from './Beverage';
import Snack from './Snack';
import FoodCan from './FoodCan';

export default class Main extends Component {
	static defaultProps = {
		beverageName: "Soda",
		snackName: "Chips",
		foodCanName: "Sardines",
	}

	constructor(props) {
		super(props)
		this.state = {
			snackCounter: JSON.parse(window.localStorage.getItem("snackCounter") || "0")
		}
		this.handleBtnClick = this.handleBtnClick.bind(this)
	}

	componentDidMount() {
		JSON.stringify(window.localStorage.setItem("snackCounter", this.state.snackCounter))
	}

	handleBtnClick(modifier) {
		this.setState(st => ({ snackCounter: st.snackCounter + modifier }), () => {
			JSON.stringify(window.localStorage.setItem("snackCounter", this.state.snackCounter))
		})

	}
	render() {
		return (
			<div className='Main'>
				<Navbar {...this.props} />
				<Switch>
					<Route exact path="/" render={(() => <Homepage {...this.props} />)} />
					<Route path="/beverage" render={() => <Beverage name={this.props.beverageName} />} />
					<Route path="/snack" render={() =>
						<Snack name={this.props.snackName} counter={this.state.snackCounter}
							handleClick={() => this.handleBtnClick(1)} />} />
					<Route path="/foodcan" render={() => <FoodCan name={this.props.foodCanName} />} />
				</Switch>
			</div>
		)
	}
}
