import React, { Component } from "react";
import uuid from "uuid/v4";
import ItemContainer from "../containers/ItemContainer"

class Main extends Component {
  render() {
    console.log("HERE:",this.props.items)

    const {items} = this.props;

    let itemsCards = Object.keys(this.props.items).map(id => {
      const item = items[id]
      return (
        // this is ownProps on ItemContainer
        <ItemContainer item={item} id={id} key={id}/>
      )
    });

    console.log(itemsCards)

    

    return (
      <div>
        <ul>
          {itemsCards}
        </ul>
      </div>
    );
  }
}

export default Main;