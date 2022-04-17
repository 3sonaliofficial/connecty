import React, { useEffect, useState } from "react";
import app_config from "../../config";

const viewReviews = () => {
  const url = app_config.api_url;
  const [viewList, setReviewList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(url + "/review/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviewList(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayData = () => {
    return reviewList.map(({ title, description, user, location, speed }) => {
      return (
        <div className="card">
          <div className="row">
            <div className="col-md-9">
              <div className="card-body">
                <h3>{title}</h3>
                <p>{description}</p>
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
                  <p className="text-center">{user.username}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <header className="bg-dark" style={{ height: "10rem" }}></header>
      <div className="row">
        <div className="col-md-3 bg-primary">
          <h3>Sidebar here</h3>
        </div>
        <div className="col-md-9">
          <div className="col-md-10 mx-auto">{displayData()}</div>
        </div>
      </div>
    </>
  );
};

export default ViewReviews;
