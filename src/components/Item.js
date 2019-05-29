import React, { Component } from "react";
import uuid from "uuid/v4";
import AddRemoveContainer from "../containers/AddRemoveContainer";

class Item extends Component {

  render() {

    return (
      <li>
        {this.props.item.name}
        <AddRemoveContainer id={this.props.id}  />
      </li>
    
    );
  }
}

export default Item;