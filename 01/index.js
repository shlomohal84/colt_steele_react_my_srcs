// const getMood = () => {
// 	const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
// 	return moods[Math.floor(Math.random() * moods.length)]
// }


class NumPicker extends React.Component {
	render() {
		const getNum = () => {
			return Math.floor(Math.random() * 10) + 1
		}
		const num = getNum()

		let msg;
		if (num === 7) {
			msg =
				<div>
					<h2>Congrats!</h2>
					<img src="https://media.giphy.com/media/a0h7sAqON67nO/giphy.gif" />
				</div>
		} else {
			msg = <p>Sorry you lose</p>
		}
		return (
			<div>
				<h1>Your lucky number is: {num}</h1>
				{msg}
			</div>
		)
	}
}

ReactDOM.render(<NumPicker />, document.getElementById('root'))