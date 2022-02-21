import React, { Component } from "react"
import "./NewBoxForm.css"
import { v4 as uuid4v } from "uuid"

export default class NewBoxForm extends Component {
  constructor(props) {
    super(props)
    this.state = { width: "", height: "", color: "#ffffff" }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInputChange(evt) {
    this.setState(st => ({ [evt.target.name]: evt.target.value }))
  }
  handleSubmit(evt) {
    evt.preventDefault()
    if (this.state.color === "#ffffff" || this.state.color === "") {
      return alert("Please select a color")
    }
    if (!isNaN(this.state.width || !isNaN(this.state.height))) {
      this.props.addBox(
        uuid4v(),
        this.state.width,
        this.state.height,
        this.state.color
      )
      this.setState({
        width: "",
        height: "",
        color: "#ffffff"
      })
    } else {
      return alert("Invalid Values")
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="NewBoxForm">
        <h3>Add Box</h3>
        <div className="input-container">
          <label htmlFor="width">Width: </label>
          <input
            onChange={this.handleInputChange}
            value={this.state.width}
            id="width"
            name="width"
            type="text"
            required={true}
          />
        </div>
        <div className="input-container">
          <label htmlFor="height">Height: </label>
          <input
            onChange={this.handleInputChange}
            value={this.state.height}
            id="height"
            name="height"
            type="text"
            required={true}
          />
        </div>
        <div className="input-container">
          <label htmlFor="color">Color: </label>
          <input
            onChange={this.handleInputChange}
            value={this.state.color}
            id="color"
            name="color"
            type="color"
          />
        </div>
        <button>Add New Box: </button>
      </form>
    )
  }
}
