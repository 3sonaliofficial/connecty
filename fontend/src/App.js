import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/home";
import AddVendor from "./components/admin/addVendor";
import AddReview from "./components/admin/addReview";
import Admin from "./components/admin";
import AdminDashboard from "./components/admin/dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="main">
            <Route element={<Home />} path="home" />
            <Route element={<AddReview />} path="addreview" />
          </Route>
          <Route element={<Admin />} path="admin">
            <Route element={<AdminDashboard />} path="dashboard" />

            <Route element={<AddVendor />} path="addvendor" />
          </Route>
          <Route exact element={<Navigate to="/main/home" />} path="" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
