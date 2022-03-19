import React from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Profile from "./Profile";

const routes = {
  "/dashboard": () => <Dashboard />,
  "/profile": () => <Profile />,
  //"/changepassword": () => <ChangePass />,
};
export default routes;