import React, { Component } from "react";
import uuid from "uuid/v4";

class Item extends Component {

  render() {
    return (
      <li>{this.props.item.name}
        <button onClick={this.props.add}>Add</button>
        <button>Remove</button>
      </li>
    );
  }
}

export default Item;