import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import app_config from "../../config";

const AddReview = () => {
  const url = app_config.api_url;

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const fetchData = () => {};

  // 1. Form Object
  const reviewForm = {
    title: "",
    description: "",
    user: currentUser._id,
    location: [],
    speed: [],
  };

  //   2. submit function
  const submitReview = (values) => {
    console.log(values);

    fetch(url + "/review/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h1>AddReview Component</h1>

      <Container>
        <Card>
          <CardContent>
            <h1 className="display-4 text-center">Add New Review</h1>
            <hr />
            <Formik initialValues={reviewForm} onSubmit={submitReview}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <TextField
                    id="title"
                    onChange={handleChange}
                    value={values.title}
                    label="Title"
                    className="w-100 mt-5"
                  />

                  <TextField
                    multiline
                    rows={4}
                    id="description"
                    onChange={handleChange}
                    value={values.description}
                    label="Description"
                    className="w-100 mt-3"
                  />

                  <Button type="submit" variant="contained" className="mt-5">
                    Submit
                  </Button>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default AddReview;
