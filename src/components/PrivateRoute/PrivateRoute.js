import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="position-relative ">
          <div className="lds-ellipsis">
            <div className="bg-dark"></div>
            <div className="bg-dark"></div>
            <div className="bg-dark"></div>
            <div className="bg-dark"></div>
          </div>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
