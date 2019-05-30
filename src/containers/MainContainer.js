import { connect } from "react-redux";
import Main from "../components/Main";


function mapStateToProps(state) {
  return {
    items: state.items,
    cartItems: state.cartItems,
    cartTotal: state.cartTotal
  };
}

export default connect(mapStateToProps)(Main);
