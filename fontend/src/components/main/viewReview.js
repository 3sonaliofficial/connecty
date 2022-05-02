import React, { useEffect, useState } from "react";
import app_config from "../../config";

const ViewReviews = () => {
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

  return (
    <>
      <header className="bg-dark" style={{ height: "10rem" }}></header>
      <div className="row">
        <div className="col-md-3 bg-primary">
          <h3>Sidebar here</h3>
        </div>
        <div className="col-md-9">
          {/* <div className="col-md-10 mx-auto">{displayData()}</div> */}
        </div>
      </div>
    </>
  );
};

export default ViewReviews;
