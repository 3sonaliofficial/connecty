import { Button, Card, CardContent, Container, TextField } from "@mui/material";
import { Formik } from "formik";
import app_config from "../../config";

const AddVendor = () => {
  const url = app_config.api_url;

  // 1. Form Object
  const vendorForm = {
    title: "",
    description: "",
    tag: [],
  };

  //   2. submit function
  const submitVendor = (values) => {
    console.log(values);

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/vendor/add", reqOpt)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h1>AddVendor Component</h1>

      <Container>
        <Card>
          <CardContent>
            <h1 className="display-4 text-center">Add New Vendor</h1>
            <hr />
            <Formik initialValues={vendorForm} onSubmit={submitVendor}>
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

                  <TextField
                    id="tag"
                    onChange={handleChange}
                    value={values.tag}
                    label="Tag"
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

export default AddVendor;
