import { connect } from "react-redux";
import ItemDetails from "../components/ItemDetails";

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.id;
  return {
    id: id,
    item: state.items[id]
  };
}

export default connect(mapStateToProps)(ItemDetails);
