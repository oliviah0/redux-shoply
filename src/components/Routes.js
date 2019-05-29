import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import MainContainer from "../containers/MainContainer";
import ItemDetailsContainer from "../containers/ItemDetailsContainer";


class Routes extends Component {
  render() {

    return (
      <Switch>
        <Route exact path="/" render={() => <MainContainer />} />
        <Route exact path="/items/:id" render={(props) => <ItemDetailsContainer {...props}/>} />
        <Redirect to="/" />
      </Switch>
    );
  }

}

export default Routes;