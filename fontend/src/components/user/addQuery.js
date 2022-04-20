import React from "react";
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
import app_config from "../../config";
const AddQuery = () => {
  const url = app_config.api_url;

  const fetchData = () => {};

  // 1. Form Object
  const queryForm = {
    title: "",
    description: "",
    vendor: "",
    location: [],
    speed: [],
  };

  //   2. submit function
  const submitQuery = (values) => {
    console.log(values);

    fetch(url + "/query/add", {
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
      <h1>AddQuery Component</h1>

      <Container>
        <Card>
          <CardContent>
            <h1 className="display-4 text-center">Add NewQuery </h1>
            <hr />
            <Formik initialValues={queryForm} onSubmit={submitQuery}>
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
export default AddQuery;
