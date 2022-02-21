import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./Navbar.css";
export default class Navbar extends Component {
	render() {
		return (
			<nav
				className="navbar navbar-expand-md navbar-dark"
				style={{ background: "indigo" }}
			>
				<div className="container-fluid">
					<Link className="navbar-brand" to="/dogs">
						Dog App
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<NavLink
								className="nav-link"
								aria-current="page"
								exact
								to="/dogs"
							>
								All Dogs
							</NavLink>
							{this.props.dogs.map((dog) => {
								return (
									<NavLink
										className="nav-link "
										key={uuidv4()}
										to={`/dogs/${dog.name}`}
									>
										{dog.name}
									</NavLink>
								);
							})}
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
