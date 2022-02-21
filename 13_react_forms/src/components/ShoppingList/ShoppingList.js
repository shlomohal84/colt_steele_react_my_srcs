import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuidv4 } from "uuid";
export default class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Milk", qty: "2 gallons", id: uuidv4() },
        { name: "Bread", qty: "2 loaves", id: uuidv4() },
      ],
    };
    this.renderItems = this.renderItems.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    let newItem = { ...item, id: uuidv4() };
    console.log(newItem);
    this.setState((st) => ({ items: [...st.items, newItem] }));
  }
  renderItems() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item.id}>
            {item.name}:{item.qty}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="ShoppingList">
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem} />
      </div>
    );
  }
}
