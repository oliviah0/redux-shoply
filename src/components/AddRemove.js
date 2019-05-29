import React, { Component } from "react";
import uuid from "uuid/v4";

class AddRemove extends Component {

  render() {
    return (
      <div>
        <button onClick={() => this.props.add(this.props.id)}>Add</button>
        <button onClick={() => this.props.remove(this.props.id)}>Remove</button>
      </div>
    );
  }
}

export default AddRemove;