import React, { Component } from 'react'

export default class Icons extends Component {
	static defaultProps = {
		options: [
			"angry",
			"anchor",
			"archive",
			"at",
			"archway",
			"baby",
			"bell",
			"bolt",
			"bone",
			"car",
			"city",
			"cloud",
			"couch"
		]
	}
	constructor(props) {
		super(props)
		this.state = {
			icons: []
		}
		// this.showIcons = this.showIcons.bind(this)
		this.addIcon = this.addIcon.bind(this)
	}

	addIcon() {
		let rand = Math.floor(Math.random() * this.props.options.length);
		let newIcon = this.props.options[rand]
		// let temp = [...this.state.icons, newIcon]
		this.setState({ icons: [...this.state.icons, newIcon] })
	}
	render() {
		const icons = this.state.icons.map((elm, idx) =>
			<i
				style={{ fontSize: '5em' }}
				key={idx}
				className={`fas fa-${elm}`}
			/>
		)

		return (
			<div className="Icons">
				<h1>Icons</h1>
				<div>
					{icons}
				</div>
				<button onClick={this.addIcon}>Add Icon</button>
			</div>
		)
	}
}
