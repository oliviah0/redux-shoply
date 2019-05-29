import React, { Component } from "react";
import { connect } from "react-redux";
import { add, remove } from "../actions";
import Main from "../components/Main";


function mapStateToProps(state) {
  return {
    items: state.items,
    cartItems: state.cartItems
  };
}

export default connect(mapStateToProps)(Main);
