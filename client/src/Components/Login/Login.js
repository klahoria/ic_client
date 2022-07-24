import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { loginaction } from "../../Store/Actions/Actions";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleLogin() {}

  render() {
    const { token } = this.props;
    return (
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-4 pb-5 border rounded-4 shadow">
          <h2 className="py-3 text-center px-3">Login</h2>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Please enter a valid email address")
                .required("Please enter a valid email address."),
              password: Yup.string()
                .required("Please enter a password.")
                .min(6, "Password must be atleast 6 characters."),
            })}
            onSubmit={async (value) => {
              // alert(value);
              this.props.login(value);
            }}
          >
            {({ value, isSubmitting }) => (
              <Form className=" h-100 p-4">
                <div className="col-auto mb-3">
                  <label htmlFor="staticEmail2" className="visually-hidden">
                    Email
                  </label>
                  <Field
                    type="text"
                    name="email"
                    className="form-control form-control-lg"
                    id="staticEmail2"
                    placeholder="Email"
                  />
                  <span className="text-danger">
                    <ErrorMessage name="email" />
                  </span>
                </div>
                <div className="col-auto">
                  <label htmlFor="staticEmail2" className="visually-hidden">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="text"
                    className="form-control-lg form-control"
                    id="staticEmail2"
                    placeholder="Password"
                  />
                  <span className="text-danger">
                    <ErrorMessage name="password" />
                  </span>
                </div>

                <div className="col-auto w-100 my-3">
                  <div className="row justify-content-center">
                    <button className="btn btn-primary px-4 py-2 col-6">
                      Login
                    </button>
                  </div>
                </div>

                <div className="col-auto text-center">
                  <span>
                    <Link to="/register">Register</Link>
                  </span>

                  {/* <div className="row justify-content-center"> */}
                  {/* </div> */}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (console.log(state), {
  token:''
});

const mapDispatchToProps = {
  login: (data) => loginaction(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
