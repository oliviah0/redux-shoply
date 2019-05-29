import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddRemoveContainer from "../containers/AddRemoveContainer";

class Cart extends Component {

  render() {
    const { cartItems, items } = this.props;
    let counter = 0;
    let rows = Object.entries(cartItems).map((item) => {
      let [id, qty] = item;
      counter++;
      return (
        <tr>
          <th scope="row">{counter}</th>
          <td>{items[id].name}</td>
          <td>{items[id].price}</td>
          <td>{qty}</td>
          <td>{qty * items[id].price}</td>
          <td><AddRemoveContainer id={id} /></td>
        </tr>
      );
    });

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Add/Remove</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>

    );
  }
}

export default Cart;