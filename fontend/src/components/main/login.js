import { Formik } from "formik";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import app_config from "../config";
import { ProductContext } from "../productContext";
import "./login.css";

const Login = () => {
  const url = app_config.api_url;

  const { setLoggedin } = useContext(ProductContext);

  const loginForm = {
    email: "",
    password: "",
  };

  const loginSubmit = (values) => {
    console.log(values);

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/user/backendlogin", reqOpt).then((res) => {
      if (res.status == 200) {
        console.log("login success");
        res.json().then((data) => {
          sessionStorage.setItem("user", JSON.stringify(data));
          setLoggedin(true);
        });
        // toast.success("Loggedin Successfully");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "login success",
        });
      } else if (res.status == 300) {
        console.log("login failed");
        // toast.error("Loggin Failed");
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "login failed",
        });
      }
    });
  };

  return (
    <div className="login-container container-fluid">
      <div className="col-10 col-md-4 col-sm-5 col-lg-3 col-xl-2 mx-auto ">
        <div className="my-card">
          <img className="form-logo" src="logo.png" alt="" />

          {/* <h1>Login Here</h1> */}
          <div className="subheader">
            <span id="active">SIGN IN</span>
            <span>SIGN UP</span>
          </div>

          <Formik initialValues={loginForm} onSubmit={loginSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Email"
                  className="my-input"
                  type="text"
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                />
                <input
                  placeholder="Password"
                  className="my-input"
                  type="text"
                  id="password"
                  onChange={handleChange}
                  value={values.password}
                />

                <div className="remember">
                  <input type="checkbox" />
                  <span>Remember Me!</span>
                </div>

                <button type="submit" className="my-btn">
                  Submit
                </button>
              </form>
            )}
          </Formik>

          <a href="/" className="link">
            Forgot Password
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;