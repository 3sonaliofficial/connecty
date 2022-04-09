import { NavLink } from "react-router-dom";

const Header = ({}) => {
  return (
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
          <NavLink className="navbar-brand" to="/main/home">
            Connecty
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/main/login"
                >
                  Login
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/main/link">
                  Link
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
