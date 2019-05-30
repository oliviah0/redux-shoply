import { connect } from "react-redux";
import Cart from "../components/Cart";

function mapStateToProps(state) {
  return {
    items: state.items,
    cartItems: state.cartItems,
    cartTotal: state.cartTotal,
  };
}

export default connect(mapStateToProps)(Cart);
