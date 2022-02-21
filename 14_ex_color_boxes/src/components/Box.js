import React, { Component } from "react"
import "./Box.css"
export default class Box extends Component {
  // static defaultProps = {
  //   width: 150,
  //   height: 150,
  //   color: "#afcafc"
  // }
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete() {
    this.props.deleteBox(this.props.id)
  }
  render() {
    return (
      <div className="Box">
        <div
          className="box-container"
          style={{
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
            backgroundColor: this.props.color
          }}
        >
          <div className="box-delete-container">
            <button onClick={this.handleDelete}>X</button>
          </div>
        </div>
      </div>
    )
  }
}
