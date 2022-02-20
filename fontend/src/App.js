import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/home";
import AddVendor from "./components/admin/addVendor";
import Admin from "./components/admin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="main">
            <Route element={<Home />} path="home" />
          </Route>
          <Route element={<Admin />} path="admin">
            {/* <Route element={<AdminDashboard />} path="dashboard" /> */}
            <Route element={<AddVendor />} path="addvendor" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
