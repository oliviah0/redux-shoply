import React, { Component } from "react";
import AddRemoveContainer from "../containers/AddRemoveContainer";

class ItemDetails extends Component {
  render() {

    return (
      <div>
        {this.props.item.name} <br/>
        {this.props.item.price} <br/>
        {this.props.item.description} <br/>
        <AddRemoveContainer id={this.props.id}  />
        <img src={this.props.item.image_url} alt=""/>
      </div>
    );
  }
}

export default ItemDetails;