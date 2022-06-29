import React, { useEffect } from "react";
import { BrowserRouter as Router, useRoutes, Navigate } from "react-router-dom";
import { UseSelectAuth } from "./features/authSlice";
import UseAuth from "./hooks/UseAuth";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/ProfilePage";
import { menuItems } from "./utils/menuItems";

const AppRoutes = () => {
  const { isLogged, accessToken } = UseSelectAuth();

  return useRoutes([
    {
      path: "/",
      element: isLogged ? <UseAuth /> : <Navigate to={"/login"} />,
      children: [
        { path: `${menuItems[0].key}`, element: <PostPage /> },
        { path: `${menuItems[1].key}`, element: <ProfilePage /> },
      ],
    },
    // Public Page
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
