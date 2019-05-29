import { connect } from "react-redux";
import { add, remove } from "../actions";
import Item from "../components/Item";

function mapDispatchToProps(dispatch, ownProps) {
  
  console.log("HELLO", ownProps)
  return {
    add: () => dispatch(add(ownProps.item)),
    // remove: () => dispatch(remove(ownProps.item))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Item);
