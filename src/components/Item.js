import React, { Component } from "react";
import {Link} from "react-router-dom"
import AddRemoveContainer from "../containers/AddRemoveContainer";

class Item extends Component {

  render() {

    return (
      <li>
        <Link to={`/items/${this.props.id}`}> {this.props.item.name} </Link>
        <AddRemoveContainer id={this.props.id}  />
      </li>
    
    );
  }
}

export default Item;