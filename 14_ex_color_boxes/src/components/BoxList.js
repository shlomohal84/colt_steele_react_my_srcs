import React, { Component } from "react"
import "./BoxList.css"

import Box from "./Box"
import NewBoxForm from "./NewBoxForm"

export default class BoxList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxList: []
    }
    this.addBox = this.addBox.bind(this)
    this.deleteBox = this.deleteBox.bind(this)
  }
  addBox(id, w, h, c) {
    this.setState(st => ({
      boxList: [...st.boxList, { id, width: w, height: h, color: c }]
    }))
  }
  deleteBox(id) {
    this.setState({ boxList: this.state.boxList.filter(box => id !== box.id) })
  }

  render() {
    return (
      <div className="BoxList">
        <h2>
          Color Box Maker Thingy Something Something Something Dark Side...
        </h2>
        <NewBoxForm addBox={this.addBox} />
        {this.state.boxList.map(box => (
          <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            color={box.color}
            deleteBox={this.deleteBox}
          />
        ))}
      </div>
    )
  }
}
