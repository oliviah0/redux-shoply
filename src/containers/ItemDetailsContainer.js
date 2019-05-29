import React, { Component } from "react";
import { connect } from "react-redux";
import { add, remove } from "../actions";
import ItemDetails from "../components/ItemDetails";


function mapStateToProps(state, ownProps) {
  console.log("ZZZZ", ownProps);

  let id = ownProps.match.params.id;
  return {
    item: state.items[id],
  };
}

export default connect(mapStateToProps)(ItemDetails);
