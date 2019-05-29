import React, { Component } from "react";
import { connect } from "react-redux";
import { add, remove } from "../actions";
import ItemDetails from "../components/ItemDetails";


function mapStateToProps(state, ownProps) {

  let id = ownProps.match.params.id;
  return {
    id: id,
    item: state.items[id]
  };
}

export default connect(mapStateToProps)(ItemDetails);
