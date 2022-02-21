class NumPicker extends React.Component {

	render() {
		function getNum() {
			return Math.floor(Math.random() * 10) + 1
		}
		const num = getNum()
		let msg
		if (num === 7) {
			msg =
				<div>
					<h2>Congrats! you win!</h2>
					<img src='https://c.tenor.com/7l1Fd3PTXZoAAAAM/yes-nerd.gif' />

				</div>
		} else {
			msg = <p>Sorry you lose!</p>
		}
		return (
			<div>
				<h1>Your random number is {num}</h1>
				{msg}
				{/* <p>{num === 7 ? 'congrats!' : 'Oh Nuts!'}</p>
				{
					num === 7 &&
					<img src='https://c.tenor.com/7l1Fd3PTXZoAAAAM/yes-nerd.gif' />
					
				} */}
			</div>
		)
	}
}