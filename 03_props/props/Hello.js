class Hello extends React.Component {
	render() {
		let bangs = "!".repeat(this.props.bangs)

		// console.log(this.props)

		return (
			<div>
				<p>Hi {this.props.to} from {this.props.from}{bangs}</p>	
				<img src={this.props.img} />
			</div>
		)

	}
}

// class Hello extends React.Component {

// 	render() {
// 		console.log(this.props)
// 		const { to, from } = this.props

// 		return (
// 			<div>
// 				<p>Hello {to} from {from}</p>
// 			</div>
// 		)

// 	}
// }

