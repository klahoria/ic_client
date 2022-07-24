import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet} from "react-router-dom";

class PrivateRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  handleChange() {
    this.setState({});
  }

  render() {
    // const { Component: Component } = this.props;
    return this.props.token !== null ? (
        <Outlet />
    ) : (
      <Navigate to="/login" />
    );
  }
}

const mapStateToProps = (state) => ({
  token: null,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes);
