import React, { Component } from "react";
import { connect } from "react-redux";
import Routes from "./Routes/Routes";
// import Login from "./Store/Reducer/Auth/Login";

export class App extends Component {
  componentDidMount() { 
    // console.log(Login);
   }
  render() {
    return (
      <div className="container-fluid" style={{ height: window.innerHeight }}>
        <Routes />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
