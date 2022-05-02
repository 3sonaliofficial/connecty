import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const Authenticator = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  if (currentUser === null) {
    Swal.fire({
      icon: "error",
      title: "Need to Login to do that!!",
    });
    return <Navigate to="/main/login" />;
  }

  return <>{children}</>;
};

export default Authenticator;
