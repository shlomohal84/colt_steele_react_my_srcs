import React, { Component } from 'react'

export default class Pokecard extends Component {
	render(props) {
		const { id, name, type, experience } = this.props.pokemon
		let urlTemplate = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

		return (
			<div className="Pokecard col-3 border">
				<h4>{name}</h4>
				<img src={urlTemplate} alt={id} />
				<p>Type: {type}</p>
				<p>Exp: {experience}</p>
			</div>
		)
	}
}