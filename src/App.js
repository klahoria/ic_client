import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <form
            className="col-md-4"
            name="login_form"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e);
            }}
          >
            <div className="form-group mb-3 w-100">
              <input type="text" className="form-control" placeholder="Login" />
            </div>
            <div className="form-group mb-3 w-100">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group mb-3">
              <button type="submit">login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
