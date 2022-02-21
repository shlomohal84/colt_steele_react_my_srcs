import React, { Component } from 'react';
import Pokecard from './Pokecard';

export default class Pokedex extends Component {
	render(props) {
		const { deck, id, isWinner } = this.props.player
		const { expSum } = this.props
		return (

			<div className="Pokedex row">

				<h4>Player{id} - Total exp:
					<span style={{ color: isWinner ? "blue" : "red", fontWeight: isWinner && 'bold' }}>
						{` ${expSum()}`}
					</span>
				</h4>
				<h5 style={{ color: isWinner ? "blue" : "red", fontWeight: isWinner && 'bold' }}>
					{isWinner ? "Winning Hand!" : "Losing Hand!"}
				</h5>
				<div className='row w-70 mx-auto'>
					{deck.map((pokemon, idx) => {
						return <Pokecard key={idx} pokemon={pokemon} />
					})}
				</div>
			</div>
		)
	}
}