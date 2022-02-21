import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    dieIconsArr: ['one', 'two', 'three', 'four', 'five', 'six'],
  }
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    if (this.props.val)
      this.props.handleClick(this.props.idx)
  }
  render() {
    let classes = `Die fas fa-dice-${this.props.dieIconsArr[this.props.val - 1]} fa-3x `
    if (this.props.locked) classes += "Die-locked "
    if (this.props.rolling) classes += "Die-rolling"
    return (
      <i className={classes} onClick={this.handleClick} disabled={this.props.disabled} > </i>
    );
  }
}

export default Die;
