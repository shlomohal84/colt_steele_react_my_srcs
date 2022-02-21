class Hello extends React.Component{
	static defaultProps = {
		from: 'Anonymous',
		bangs:20
	}
	render() {
		const { to, from } = this.props
		let bangs = '!'.repeat(this.props.bangs)

		return (
			<div>
				<p>Hi {to} from {from}{bangs}</p>
			</div>
		)
	}
}