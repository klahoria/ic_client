import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.inputRef = {};
    this.state = {
      formData: {
        profile_image: null,
        email: "",
        first_name: "",
        last_name: "",
        rank: "",
        dob: "",
        password: "",
        username: "",
        current_address: {
          address: "",
          city: "",
          zip: "",
          state: "",
        },
        practice_address: {
          address: "",
          practice_city: "",
          practice_state: "",
          practice_zip: "",
        },
      },
    };
  }
  formatDate(i) {
    let date = new Date(i);
    let year;
    let day;
    let month;
    if (i) {
      year = date.getFullYear().toString();
      month = (date.getMonth() + 1).toString();
      day = date.getDay().toString();
      //   adding zero in front
      month = month.length > 2 ? month : month;
      day = day.length > 2 ? day : "0" + day;
    }
    console.log((month + "/" + day + "/" + year).toString());
    month = month.length > 2 ? month : "0" + month;
    // return (year + "/" + day + "/" + month).toString();
    return (month + "/" + day + "/" + year).toString();
  }

  componentDidMount() {
    // Object.keys(this.state).forEach((item) => {
    //   this.inputRef[item] = React.createRef();
    // });
    setTimeout(() => {
      let keys = {
        profile_image: null,
        first_name: "lalit",
        last_name: "kumar",
        rank: "Other",
        department: "RTO",
        email: "lalit.kumar@gmail.com",
        username: "",
        password:
          "$2b$10$Vsm91d3quC20YJ2Org0zHuUKONXfIGbZShyUfPoD8VWtlgwEAqdoG",
        dob: this.formatDate(1656174535000),
        current_address: {
          address: "Pathankot",
          city: "Pathankot",
          state: "Punjab",
          zip: 145023,
        },
        corrospondence_address: [
          {
            address: "Pathankot",
            city: "Pathankot",
            state: "Punjab",
            zip: 145023,
          },
        ],
        practice_address: {
          practice_address: "Pathankot",
          practice_zip: "145001",
          practice_city: "Pathankot",
          practice_state: "Punjab",
        },
      };
      this.setState((prev) => (prev.formData = keys));
    }, 0);
    setTimeout(() => {
      this.setState(
        (prev) => (prev.formData.username = "fnaskfjsfdnkjsnfdkjs")
      );
    }, 10000);
  }

  render() {
    return (
      <div className="row justify-content-center align-items-center py-3">
        <div className="col-6 py-2 border rounded-4 shadow">
          <div className="heading text-center">
            <h1>Register</h1>
          </div>
          <Formik
            initialValues={this.state.formData}
            enableReinitialize={true}
            validationSchema={Yup.object({
              first_name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Please enter a valid First Name."),
              last_name: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Please enter a valid Last Name."),
              email: Yup.string()
                .email("Invalid email adress.")
                .required("Please enter a valid address."),
              dob: Yup.string().required("Please enter a valid Date of Birth."),
              password: Yup.string()
                .min(6, "Password must be greater than 6 words.")
                .required("Please enter a valid Password."),
              rank: Yup.string().required("Please enter a valid Rank."),
              username: Yup.string().required("Please enter a valid username."),
            })}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ values, isSubmitting, setFieldValue }) => (
              <Form className="row h-100 py-3 px-4">
                {/* profile Image */}
                <div className="col-12 mb-3">
                  <label htmlFor="profile_image" className="w-100">
                    <img
                      width={"200px"}
                      height={"200px"}
                      className="rounded-pill border"
                      src={values.profile_image && typeof values.profile_image == 'object' && URL.createObjectURL(values.profile_image)}
                      alt=""
                    />
                    <input
                      type="file"
                      className="form-control form-control-lg mt-2 visually-hidden"
                      id="profile_image"
                      name="profile_image"
                      accept="image/*"
                      onChange={(e) => {
                        setFieldValue("profile_image", e.target.files[0]);
                      }}
                      placeholder="First Name"
                    />
                  </label>
                  <span className="text-danger">
                    <ErrorMessage name="profile_image" />
                  </span>
                </div>
                {/* first name */}
                <div className="col-6 mb-3">
                  <label htmlFor="first_name" className="w-100">
                    First Name
                    <Field
                      type="text"
                      className="form-control form-control-lg mt-2"
                      id="first_name"
                      name="first_name"
                      placeholder="First Name"
                    />
                  </label>
                  <span className="text-danger">
                    <ErrorMessage name="first_name" />
                  </span>
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="last_name" className="w-100">
                    Last Name
                    <Field
                      type="text"
                      className="form-control form-control-lg mt-2"
                      id="last_name"
                      name="last_name"
                      placeholder="Last Name"
                    />
                  </label>
                  <span className="text-danger">
                    <ErrorMessage name="last_name" />
                  </span>
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="staticEmail2" className="w-100">
                    Email
                    <Field
                      type="text"
                      className="form-control form-control-lg mt-2"
                      id="staticEmail2"
                      placeholder="Email"
                      name="email"
                    />
                  </label>
                  <span className="text-danger">
                    <ErrorMessage name="email" />
                  </span>
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="password" className="w-100">
                    Password
                    <Field
                      type="text"
                      className="form-control-lg form-control mt-2"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                  </label>
                  <span className="text-danger">
                    <ErrorMessage name="password" />
                  </span>
                </div>

                <div className="col-6 mb-3">
                  <label htmlFor="Rank" className="w-100">
                    Rank
                    <Field
                      type="text"
                      className="form-control-lg form-control mt-2"
                      id="rank"
                      name="rank"
                      placeholder="Rank"
                    />
                  </label>
                  <span className="text-danger">
                    <ErrorMessage name="rank" />
                  </span>
                </div>

                {/* username */}
                <div className="col-6 mb-3">
                  <label htmlFor="username" className="w-100">
                    username
                    <Field
                      type="text"
                      className="form-control-lg form-control mt-2"
                      id="username"
                      name="username"
                      placeholder="username"
                    />
                  </label>
                  <span className="text-danger">
                    <ErrorMessage name="username" />
                  </span>
                </div>
                {/* date of birth */}
                <div className="col-6 mb-3">
                  <label htmlFor="dob" className="w-100">
                    Date of Birth
                    <Field
                      type="text"
                      readOnly
                      className="form-control-lg form-control mt-2"
                      id="dob"
                      name="dob"
                      placeholder="dob"
                    />
                  </label>
                  <span className="text-danger">
                    <ErrorMessage name="dob" />
                  </span>
                </div>

                {/* address current */}
                <div className="col-6 mb-3">
                  <label htmlFor="current_address.address" className="w-100">
                    Address
                    <Field
                      type="text"
                      className="form-control-lg form-control mt-2"
                      id="current_address.address"
                      name="current_address.address"
                      placeholder="Address"
                    />
                  </label>
                  <span className="text-danger">
                    <ErrorMessage name="address" />
                  </span>
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="state" className="w-100">
                    State
                    <Field
                      type="text"
                      className="form-control-lg form-control mt-2"
                      id="current_address.state"
                      name="current_address.state"
                      placeholder="State"
                    />
                  </label>
                  <span className="text-danger">
                    <ErrorMessage name="current_address.state" />
                  </span>
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="city" className="w-100">
                    City
                    <Field
                      type="text"
                      className="form-control-lg form-control mt-2"
                      id="city"
                      name="current_address.city"
                      placeholder="dob"
                    />
                  </label>
                  <span className="text-danger">
                    <ErrorMessage name="current_address.city" />
                  </span>
                </div>

                <FieldArray
                  name="corrospondence_address"
                  render={(helpers) => {
                    return (
                      <>
                        <div className="d-flex justify-content-between align-items-center py-3">
                          <span className="h2">Corrospondence Address</span>
                          {values?.corrospondence_address &&
                            values?.corrospondence_address.length < 2 && (
                              <span>
                                <button
                                  className="btn btn-primary rounded-pill fw-bolder"
                                  type="button"
                                  onClick={() =>
                                    helpers.push({
                                      address: "",
                                      city: "",
                                      zip: "",
                                      state: "",
                                    })
                                  }
                                >
                                  <span className="fs-5">+</span>
                                </button>
                              </span>
                            )}
                        </div>

                        {values?.corrospondence_address &&
                          values?.corrospondence_address.map((item, index) => {
                            return (
                              <div className="row pe-0" key={index}>
                                <div className="col-4 mb-3">
                                  <label
                                    htmlFor="corrospondence_address.address"
                                    className="w-100"
                                  >
                                    Address
                                    <Field
                                      type="text"
                                      className="form-control-lg form-control mt-2"
                                      id="corrospondence_address.address"
                                      name={
                                        "corrospondence_address.[" +
                                        index +
                                        "].address"
                                      }
                                      placeholder="Address"
                                    />
                                  </label>
                                  <span className="text-danger">
                                    <ErrorMessage
                                      name={
                                        "corrospondence_address.[" +
                                        index +
                                        "].address"
                                      }
                                    />
                                  </span>
                                </div>
                                <div className="col-4 mb-3">
                                  <label htmlFor="state" className="w-100">
                                    State
                                    <Field
                                      type="text"
                                      className="form-control-lg form-control mt-2"
                                      id="corrospondence_address.state"
                                      name={
                                        "corrospondence_address.[" +
                                        index +
                                        "].state"
                                      }
                                      placeholder="State"
                                    />
                                  </label>
                                  <span className="text-danger">
                                    <ErrorMessage
                                      name={
                                        "corrospondence_address.[" +
                                        index +
                                        "].state"
                                      }
                                    />
                                  </span>
                                </div>
                                <div className="col-4 mb-3">
                                  <div className="row">
                                    <div
                                      className={
                                        values?.corrospondence_address &&
                                        values?.corrospondence_address.length >
                                          1
                                          ? "col-10"
                                          : "col-auto pe-0"
                                      }
                                    >
                                      <label htmlFor="city" className="w-100">
                                        City
                                        <Field
                                          type="text"
                                          className="form-control-lg form-control mt-2"
                                          id="city"
                                          name={
                                            "corrospondence_address.[" +
                                            index +
                                            "].city"
                                          }
                                          placeholder="dob"
                                        />
                                      </label>
                                      <span className="text-danger">
                                        <ErrorMessage
                                          name={
                                            "corrospondence_address.[" +
                                            index +
                                            "].city"
                                          }
                                        />
                                      </span>
                                    </div>
                                    {values?.corrospondence_address &&
                                      values?.corrospondence_address.length >
                                        1 && (
                                        <span className="delete col-2 mt-3 d-flex align-items-center">
                                          <span>
                                            <button
                                              className="btn btn-primary rounded-pill fw-bolder"
                                              type="button"
                                              onClick={() =>
                                                helpers.remove(index)
                                              }
                                            >
                                              <span className="fs-5">-</span>
                                            </button>
                                          </span>
                                        </span>
                                      )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </>
                    );
                  }}
                />

                <div className="col-auto w-100 my-3">
                  <div className="row justify-content-center">
                    <button
                      className="btn btn-primary px-4 py-2 col-6"
                      disabled={isSubmitting}
                    >
                      Register
                    </button>
                  </div>
                </div>

                <div className="col-12 text-center">
                  <span className="fs-6">
                    <Link to="/login">Login</Link>
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
