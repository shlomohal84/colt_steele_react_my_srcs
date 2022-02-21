import React, { Component } from 'react';
import './Joke.css'
export default class Joke extends Component {
	getColor() {
		if (this.props.rating >= 15) {
			return '#4CAF50'
		} else if (this.props.rating >= 12) {
			return '#8BC34A'
		} else if (this.props.rating >= 9) {
			return '#CDDC39'
		} else if (this.props.rating >= 6) {
			return '#FFEB3B'
		} else if (this.props.rating >= 3) {
			return '#FFC107'
		} else if (this.props.rating >= 0) {
			return '#FF9800'
		} else {
			return '#F44336'
		}
	}

	getEmoji() {
		if (this.props.rating >= 15) {
			return 'em em-rolling_on_the_floor_laughing '
		} else if (this.props.rating >= 12) {
			return 'em em-laughing'
		} else if (this.props.rating >= 9) {
			return 'em em-smiley'
		} else if (this.props.rating >= 6) {
			return 'em em-slightly_smiling_face'
		} else if (this.props.rating >= 3) {
			return 'em em-neutral_face'
		} else if (this.props.rating >= 0) {
			return 'em em-confused'
		} else {
			return 'em em-angry'
		}
	}


	render() {
		return (
			<div className='Joke'>
				<div className="Joke-buttons">
					<i className="fas fa-arrow-up" onClick={this.props.upvote}></i>
					<span style={{ borderColor: this.getColor() }} className='Jokes-rating'>{this.props.rating}</span>
					<i className="fas fa-arrow-down" onClick={this.props.downvote}></i>
				</div>
				<div className="Joke-text">{this.props.joke}</div>
				<div className="Joke-smiley">
					<i className={this.getEmoji()}></i>
				</div>

			</div>
		)
	}
}
