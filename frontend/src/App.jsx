import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";

const AppRouter = () =>
  useRoutes([
    { path: "/", element: <LoginPage /> },
    { path: "/posts", element: <PostPage /> },
  ]);

const App = () => (
  <Router>
    <AppRouter />
  </Router>
);

export default App;
