import React, { Component } from "react";
import { Link } from "react-router-dom";
import Item from "../components/Item";

class Main extends Component {
  render() {
    const { items } = this.props;

    let itemsCards = Object.keys(items).map(id => {
      const item = items[id];
      return (
        // this is ownProps on ItemContainer
        <Item item={item} id={id} key={id} />
      );
    });

    return (
      <div>
        <ul>
          {itemsCards}
        </ul>
        <Link to="/cart" >go to cart</Link>
      </div>
    );
  }
}

export default Main;