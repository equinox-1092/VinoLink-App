import React from "react";
import Register from "./register/page";
import Login from "./login/page";

export const AuthLayout = () => {
  return (
    <div>
      <Login />
      <Register />
    </div>
  );
};
