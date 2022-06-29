import { Outlet } from "react-router-dom";
import { UseSelectAuth } from "../features/authSlice";
import { Navigate } from "react-router-dom";

// use to authenticate the token if the token is exist or not
// use to authenticate the token if the token is expired or not
// if not refresh the token
// if yes return to login

const UseAuth = () => {
  const authData = UseSelectAuth();

  return (
    <>
      {/* check if token is exist */}
      {!authData.accessToken || authData.accessToken.length == 0 ? (
        <Navigate to="/" />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default UseAuth;
