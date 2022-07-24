import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import ListRoutes from "./ListRoutes";
import { Routes as NavRoutes } from "react-router-dom";
import PrivateRoutes from "../Components/helpers/PrivateRoutes";
import { Dashboard } from "../Components/Dashboard/Dashboard";

export class Routes extends Component {
  componentDidMount() {
    console.log(ListRoutes);
  }
  render() {
    return (
      <>
        <NavRoutes>
          {ListRoutes.map(
            (item, index) =>
              item.type !== "private" && (
                <Route
                  key={item.path}
                  exact={true}
                  path={item.path}
                  element={<item.element></item.element>}
                ></Route>
              )
          )}

          {this.props.user === "logged" && this.props.type === "rto" && (
            <Route element={<PrivateRoutes />}>
              {/* <Route path={"/dashboard"} element={Dashboard} exact /> */}
              {ListRoutes.map(
                (item, index) =>
                  item.type == "private" && (
                    <Route
                      key={item.path}
                      exact={true}
                      path={item.path}
                      element={<item.element></item.element>}
                    ></Route>
                  )
              )}
            </Route>
          )}
          {this.props.user == "logged" && this.props.type !== "rto" && (
            <Route path={"/dashboard"} element={<Dashboard />} exact />
          )}
          <Route path="*" element={"404 Not Found"} />
        </NavRoutes>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: "logged",
  type: "rto",
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
