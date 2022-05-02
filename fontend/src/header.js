import { NavLink, useNavigate } from "react-router-dom";

const Header = ({}) => {
  const navigate = useNavigate();
  return (
    <div id="preview" className="preview">
      <div style={{ display: "none" }}></div>
      <div>
        <div
          data-draggable="true"
          className=""
          style={{ position: "relative" }}
        >
          <section
            draggable="false"
            className="overflow-hidden pt-0"
            data-v-271253ee=""
          >
            <section className="" style={{ paddingBottom: "1px" }}>
              {" "}
              <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-2">
                {" "}
                <div className="container-fluid">
                  {" "}
                  <div className="d-flex">
                    {" "}
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-mdb-toggle="collapse"
                      data-mdb-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      {" "}
                      <i className="fas fa-bars"></i>{" "}
                    </button>{" "}
                    <NavLink
                      className="navbar-brand ms-3 text-primary"
                      to="/main/home"
                    >
                      <b>CONNECTY</b>
                    </NavLink>{" "}
                  </div>{" "}
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    {" "}
                    <ul className="navbar-nav me-auto mb-2 ms-2 ps-1 ms-lg-0 ps-lg-0 mb-lg-0">
                      {" "}
                      <li className="nav-item">
                        {" "}
                        <NavLink
                          className="nav-link"
                          to="/main/home"
                          aria-controls="#picker-editor"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          to="/main/listreviews"
                          aria-controls="#picker-editor"
                        >
                          View Reviews
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          to="/user/query"
                          aria-controls="#picker-editor"
                        >
                          Any Query?
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          to="/user/addreview"
                          aria-controls="#picker-editor"
                        >
                          Add Review
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex align-items-center">
                    {" "}
                    <button
                      type="button"
                      className="btn      btn-link px-3 mb-1 me-2"
                      aria-controls="#picker-editor"
                      onClick={(e) => navigate("/main/login")}
                    >
                      Login
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-primary mb-1 me-lg-3"
                      aria-controls="#picker-editor"
                      onClick={(e) => navigate("/main/signup")}
                    >
                      Sign up
                    </button>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle d-flex align-items-center hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuAvatar"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                          className="rounded-circle"
                          height="25"
                          alt="Black and White Portrait of a Man"
                          loading="lazy"
                        />
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuAvatar"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            My profile
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Settings
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Header;
