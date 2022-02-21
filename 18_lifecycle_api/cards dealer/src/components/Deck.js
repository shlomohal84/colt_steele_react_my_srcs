import React, { Component } from 'react';
import './Deck.css'
import axios from 'axios'

import Card from './Card';

const API_BASE_URL = `https://deckofcardsapi.com/api/deck`
const diamondASCII = <span>&#9670;</span>
export default class Deck extends Component {

	constructor(props) {
		super(props)
		this.state = {
			deck: null,
			drawn: [],
			isEmpty: false
		}
		this.drawCard = this.drawCard.bind(this)
	}

	async componentDidMount() {
		let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
		this.setState({ deck: deck.data })

	}

	async drawCard() {
		try {
			let id = this.state.deck.deck_id
			let cardUrl = `${API_BASE_URL}/${id}/draw`
			let cardRes = await axios.get(cardUrl)

			if (!cardRes.data.success) {
				throw new Error("No card remaining!")
			}
			let card = cardRes.data.cards[0]
			this.setState(st => ({
				drawn: [
					...st.drawn,
					{
						id: card.code,
						image: card.image,
						name: `${card.value} of ${card.suit}`
					}
				]
			}))
		} catch (err) {
			alert(err)
		}
	}

	render() {

		const cards = this.state.drawn.map(c => {
			return <Card key={c.id} name={c.name} image={c.image} />
		})
		return (
			<div className="Deck">
				<h1 className="Deck-title">{diamondASCII} Card Dealer {diamondASCII}</h1>
				<h2 className='Deck-title subtitle'>{diamondASCII} A little demo made with React {diamondASCII}</h2>
				<button className="Deck-btn" disabled={this.state.isEmpty} onClick={this.drawCard}>Draw Card!</button>
				<div className='Deck-card-area'>{cards}</div>
			</div>
		);
	}
}
