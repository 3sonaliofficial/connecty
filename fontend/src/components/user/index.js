import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const User = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default User;
