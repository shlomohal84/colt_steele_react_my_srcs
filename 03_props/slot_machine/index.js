class App extends React.Component{
	render() {
		return (
			<div>
				<h1>Slot Machines!</h1>
				<Machine
					s1="&#127825;" //🍑
					s2="&#127815;" //🍇
					s3="&#127826;" //🍒
				/>
				<Machine
					s1="&#127815;" //🍇
					s2="&#127815;" //🍇
					s3="&#127815;" //🍇
				/>
				<Machine
					s1="&#127825;" //🍑
					s2="&#127815;" //🍇
					s3="&#127825;" //🍑
				/>
			</div>
		)
	}
}


ReactDOM.render(<App/>, document.querySelector('#root'))
