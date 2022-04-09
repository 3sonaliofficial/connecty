import { Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import app_config from "../../config";

const ListReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = app_config.api_url;

  const fetchReviews = () => {
    fetch(url + "/review/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const displayReviews = () => {
    if (!loading) {
      return reviews.map(({ title, description, vendor, location, speed }) => (
        <Card>
          <CardContent></CardContent>
        </Card>
      ));
    }
  };

  const reviewCard = () => {
    return (
      <div className="card">
        <div className="row">
          <div className="col-md-9">
            <div className="card-body">
              <h3>Title</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
              <button className="btn btn-primary">Comment</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <img
                  className="img-fluid"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                />
                <p className="text-center">User Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className="bg-dark" style={{ height: "10rem" }}></header>
      <div className="row">
        <div className="col-md-3 bg-primary">
          <h3>Sidebar here</h3>
        </div>
        <div className="col-md-9">
          <div className="col-md-10 mx-auto">{reviewCard()}</div>
        </div>
      </div>
    </>
  );
};

export default ListReviews;
