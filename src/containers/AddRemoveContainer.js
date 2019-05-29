import { connect } from "react-redux";
import { add, remove } from "../actions";
import AddRemove from "../components/AddRemove";

// when you use the object curlies, it implies to dispatch the action
export default connect(
  null,
  {add, remove}
)(AddRemove);
