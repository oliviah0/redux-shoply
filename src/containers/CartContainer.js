import React, { Component } from "react";
import { connect } from "react-redux";
import { add, remove } from "../actions";
import Cart from "../components/Cart";


function mapStateToProps(state) {
  console.log("this state", state)
  return {
    items: state.items,
    cartItems: state.cartItems,
    cartTotal: state.cartTotal,
  };
}

export default connect(mapStateToProps)(Cart);
