import "./signup.css";
import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import app_config from "../config";

const SignUp = () => {
  const signupform = {
    username: "",
    email: "",
    password: "",
  };

  const url = app_config.api_url;

  const signupSubmit = (values) => {
    console.log(values);

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/user/add", reqOpt)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div class="container mt-5">
      <div class="card">
        <div class="row">
          <div class="col-md">
            <div class="img-back"></div>
          </div>

          <div class="col-md">
            <div class="card-body my-card-body">
              <p class="h3">Start Building your Future</p>
              <p class="text-muted">Sign Up to Continue</p>

              <hr />

              <Formik initialValues={signupform} onSubmit={signupSubmit}>
                {({ values, handleSubmit, handleChange }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      className="w-100 mt-5"
                      variant="filled"
                      id="email"
                      type="email"
                      label="Email Address"
                      onChange={handleChange}
                      value={values.email}
                    />

                    <TextField
                      className="w-100 mt-5"
                      variant="filled"
                      id="username"
                      type="text"
                      label="Username"
                      onChange={handleChange}
                      value={values.username}
                    />

                    <TextField
                      className="w-100 mt-5"
                      variant="filled"
                      id="password"
                      type="password"
                      label="Password"
                      onChange={handleChange}
                      value={values.password}
                    />

                    <Button
                      color="primary"
                      variant="contained"
                      className="mt-5 w-100"
                      type="submit"
                    >
                      Sign Up
                    </Button>

                    <a
                      href="/"
                      class="text-muted mt-5"
                      style={{ display: "block" }}
                    >
                      Already Have an account?
                    </a>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;