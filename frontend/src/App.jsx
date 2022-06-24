import React from "react";
import { BrowserRouter as Router, useRoutes, Navigate } from "react-router-dom";
import { UseSelectAuth } from "./features/authSlice";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";

const AppRoutes = () => {
  const { isLogged } = UseSelectAuth();

  return useRoutes([
    {
      path: "/",
      element: isLogged ? <PostPage /> : <Navigate to={"/login"} />,
      children: [{ path: "/posts", element: <Navigate to={"/"} /> }],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
