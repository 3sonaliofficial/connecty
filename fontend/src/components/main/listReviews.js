import React from "react";

const ListReviews = () => {
  return (
    <>
      <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link " aria-current="true" href="#">
                Active
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div className="container mt-5">
            <div className="row">
              <div className="col">
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <div class="card w-75">
                        <div class="card-body">
                          <div className="">
                            <h5 class="card-title float-start">Card title</h5>
                            <br />
                          </div>
                          <div className="mt-4 float-start">
                            <h5 class="card-title  ">Description</h5>
                          </div>

                          <div className="float-start">
                            <a href="#" class="btn btn-primary">
                              Button
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div class="card w-75">
                        <div class="card-body">
                          <div className="float-start float-center">
                            <a href="#" className="btn btn-primary ">
                              User
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="card w-75">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>ListReviews</div>;
    </>
  );
};

export default ListReviews;
