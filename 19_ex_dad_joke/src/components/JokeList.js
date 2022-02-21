import React, { Component } from 'react';
import './JokeList.css'
import axios from 'axios';
import { v4 as uuid4 } from 'uuid'

import Joke from './Joke';
// const API_BASE_URL = 'https://icanhazdadjoke.com/'

export default class JokeList extends Component {
	static defaultProps = {
		numJokesToGet: 10
	}
	constructor(props) {
		super(props)
		this.state = {
			jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
			lading: false
		};
		this.seenJokes = new Set(this.state.jokes.map(joke => joke.text))
		this.vote = this.vote.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	async componentDidMount() {
		if (this.state.jokes.length === 0) this.getJokes()
	}
	async getJokes() {
		try {
			let jokes = []
			while (jokes.length < this.props.numJokesToGet) {
				let res = await axios.get('https://icanhazdadjoke.com/', {
					headers: { Accept: "application/json" }
				});
				let newJoke = res.data.joke
				if (!this.seenJokes.has(newJoke)) {
					jokes.push({ id: res.data.id, text: newJoke, rating: 0 })
				} else {
					console.log('found a duplicate!')
					console.log(newJoke)
				}
			}
			this.setState(st => ({
				lading: false,
				jokes: [...st.jokes, ...jokes]
			}),
				() =>
					window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
			);
		} catch (err) {
			alert(err)
			this.setState({ lading: false })
		}
	}

	handleClick() {
		this.setState({ lading: true }, this.getJokes)
	}


	vote(id, voteModifier) {
		this.setState(st => ({
			jokes: st.jokes.map(joke =>
				joke.id === id ? { ...joke, rating: joke.rating + voteModifier } : joke
			)
		}),
			() =>
				window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
		);
	}

	render() {
		if (this.state.lading) {
			return (
				<div className="JokeList-spinner">
					<i className='fa fa-8x fa-laugh fa-spin' />
					<h1 className='JokeList-title'>Loading...</h1>
				</div>
			)
		}

		let jokes = this.state.jokes.sort((a, b) => b.rating - a.rating);

		return (
			<div className='JokeList'>
				<div className="JokeList-sidebar">
					<h1 className="JokeList-title"> <span>Dad</span> Jokes</h1>
					<img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt="LOL" />
					<button className="JokeList-getmore" onClick={this.handleClick}>Fetch Jokes</button>
				</div>
				<div className='JokeList-jokes'>
					{jokes.map(joke =>
						<Joke joke={joke.text}
							key={uuid4()}
							// id={joke.id}
							rating={joke.rating}
							upvote={() => this.vote(joke.id, 1)}
							downvote={() => this.vote(joke.id, -1)}
						/>
					)}
				</div>

			</div>
		);
	}
}