import React, { Component } from "react";

export default class MultipleForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleInptChange = this.handleInptChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInptChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    alert(`You typed: ${this.state.username}`);
    this.setState({ username: "" });
  }

  render() {
    return (
      <div className="MultipleForms">
        <h1>Form w/ Multiple Inputs</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.handleInptChange}
            type="text"
            placeholder="username"
          />
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleInptChange}
            type="email"
            placeholder="email"
          />
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleInptChange}
            type="password"
            placeholder="password"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
