import React, { Component } from "react";
import { connect } from "react-redux";
import { add, remove } from "../actions";
import Main from "../components/Main";

// class MainContainer extends Component {
//   render() {
 
//     return (
//       <Main {...this.props} />
//     );
//   }
// }

function mapStateToProps(state) {
  return {
    items: state.items,
    cartItems: state.cartItems
  };
}

// const connectedComponent = connect(
//   mapStateToProps,
//   { add, remove }
// );

export default connect(mapStateToProps)(Main);
