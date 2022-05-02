import "./App.css";
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/home";

import AddVendor from "./components/admin/addVendor";
import Admin from "./components/admin";
import AdminDashboard from "./components/admin/dashboard";
import User from "./components/user";
import Dashboard from "./components/user/dashboard";
import AddQuery from "./components/user/addQuery";
import Login from "./components/main/login";
import Signup from "./components/main/signup";
import AddReview from "./components/user/addReview";
import ListReviews from "./components/main/listReviews";
import Header from "./header";
import Authenticator from "./authenticator";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Main />} path="main">
            <Route element={<Home />} path="home" />
            <Route element={<Signup />} path="signup" />
            <Route element={<Login />} path="login" />
            <Route element={<ListReviews />} path="listreviews" />
          </Route>

          <Route
            element={
              <Authenticator>
                <User />
              </Authenticator>
            }
            path="user"
          >
            <Route element={<AddReview />} path="addreview" />
            <Route element={<Dashboard />} path="dashboard" />
            {<Route element={<AddQuery />} path="query" />}
          </Route>
          <Route element={<Admin />} path="admin">
            <Route element={<AdminDashboard />} path="dashboard" />

            <Route element={<AddVendor />} path="addvendor" />
          </Route>
          <Route element={<Navigate to="/main/home" />} path="" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
