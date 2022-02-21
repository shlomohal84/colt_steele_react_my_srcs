import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import './styles.css'

import Pokedex from './Pokedex';
import { player1, player2 } from './helpers'

export default class App extends Component {
	render() {
		const player1Exp = () => {
			let totalExp = 0;
			player1.deck.forEach(p => { return totalExp += p.experience })
			return totalExp;
		}
		const player2Exp = () => {
			let totalExp = 0;
			player2.deck.forEach(p => { return totalExp += p.experience })
			return totalExp;
		}

		(function winner() {
			if (player1Exp() > player2Exp()) {
				return player1.isWinner = true;
			}
			return player2.isWinner = true
		})()

		console.log(player1)
		console.log(player2)
		return (
			<div className="App">
				<h1>Pokegame</h1>
				<Pokedex player={player1} pNo={1} expSum={player1Exp} />
				<Pokedex player={player2} pNo={2} expSum={player2Exp} />
			</div>
		)
	}
}