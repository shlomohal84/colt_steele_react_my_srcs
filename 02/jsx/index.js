class App extends React.Component {

	render() {
		return (
		<div>
				<Hello />
				<Hello />
				<Hello />
				<NumPicker />
			</div>
		)
	}
}

ReactDOM.render(<App />,document.getElementById('root'))

// function getNum() {
// 	return Math.floor(Math.random() * 10) +1
// }
// class NumPicker extends React.Component {
// 	render() {
// 		const num = getNum()
// 		let msg
// 		if (num === 7) {
// 			msg = 
// 				<div>
// 					<h2>Congrats! you win!</h2>
// 					<img src='https://c.tenor.com/7l1Fd3PTXZoAAAAM/yes-nerd.gif' />

// 				</div>
// 		} else {
// 			msg = <p>Sorry you lose!</p>
// 		}
// 		return (
// 			<div>
// 				<h1>Your random number is {num}</h1>
// 				{msg}
// 				{/* <p>{num === 7 ? 'congrats!' : 'Oh Nuts!'}</p>
// 				{
// 					num === 7 &&
// 					<img src='https://c.tenor.com/7l1Fd3PTXZoAAAAM/yes-nerd.gif' />
					
// 				} */}
// 			</div>
// 		) 
// 	}
// }
// ReactDOM.render(<NumPicker />, document.getElementById('root'))



// function getMood() {
// 	const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
// 	return moods[Math.floor(Math.random() * moods.length)]
// }

// class JSXDemo extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>My current mood is: {getMood()}</h1>
// 			</div>

// 		);
// 	}
// }
//ReactDOM.render(<JSXDemo />, document.getElementById('root'))

// class JSXDemo extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>My Image!</h1>
// 				<img src={"https://images.unsplash.com/photo-1641159970260-5403a75ca711?h=540"} />
// 			</div>

// 		);
// 	}
// }
//ReactDOM.render(<JSXDemo />, document.getElementById('root'))



