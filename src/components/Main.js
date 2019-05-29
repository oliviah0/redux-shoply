import React, { Component } from "react";
import {Link} from "react-router-dom"
import uuid from "uuid/v4";
import Item from "../components/Item"

class Main extends Component {
  render() {
    console.log("HERE:",this.props.items)

    const {items} = this.props;

    let itemsCards = Object.keys(this.props.items).map(id => {
      const item = items[id]
      return (
        // this is ownProps on ItemContainer
        <Item item={item} id={id} key={id}/>
      )
    });

    console.log(itemsCards)

    

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