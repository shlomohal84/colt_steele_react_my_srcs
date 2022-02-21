class App extends React.Component {
	render() {


		return (
			<div>
				<Hello
					to="George"
					from="John"
					bangs={4}
					img="https://images.unsplash.com/photo-1641159970260-5403a75ca711"
					// data={[1, 2, 3, 4, 5]}
					// isFunny={true}
					// isFunny
				/>
				{/* <Hello
					to="Ragnar"
					from="Lagertha"
					bangs={10}
					img=""
				/> */}
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector("#root"))