class App extends React.Component {
	render() {
		return (
			<div>
				<Friend
					name="Twat"
					hobbies={['Wanking', 'Fapping', 'Shlicking']}
				/>
				<Friend
					name="Incontinentia"
					hobbies={['Talking', 'Yelling', 'Shlicking']}
				/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector("#root"))