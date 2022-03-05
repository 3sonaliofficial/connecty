import { Button, Card, CardContent, Container, TextField } from "@mui/material";
import { Formik } from "formik";

const AddReview = () => {
  const fetchData = () => {};

  // 1. Form Object
  const reviewForm = {
    title: "",
    text: "",
    location: [],
    speed: [],
  };

  //   2. submit function
  const submitReview = (values) => {
    console.log(values);

    fetch();
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

export default AddReview;
