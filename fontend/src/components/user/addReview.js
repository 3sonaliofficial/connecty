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
import { useEffect, useState } from "react";
import app_config from "../../config";
import { NetworkSpeed } from "network-speed";
const testNetworkSpeed = new NetworkSpeed();

const AddReview = () => {
  const url = app_config.api_url;
  const [location, setLocation] = useState({});
  const [speed, setSpeed] = useState({});

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

  const checkLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation(position.coords.latitude, position.coords.longitude);
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  };

  async function getNetworkDownloadSpeed() {
    const baseUrl = "https://eu.httpbin.org/stream-bytes/500000";
    const fileSizeInBytes = 500000;
    const speed = await testNetworkSpeed.checkDownloadSpeed(
      baseUrl,
      fileSizeInBytes
    );
    console.log(speed);
  }

  async function getNetworkUploadSpeed() {
    const options = {
      hostname: "www.google.com",
      port: 80,
      path: "/catchers/544b09b4599c1d0200000289",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const fileSizeInBytes = 2000000;
    const speed = await testNetworkSpeed.checkUploadSpeed(
      options,
      fileSizeInBytes
    );
    console.log(speed);
  }

  useEffect(() => {
    checkLocation();
    getNetworkDownloadSpeed();
    getNetworkUploadSpeed();
  }, []);

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
