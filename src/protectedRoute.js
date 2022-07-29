import React from "react";

export const ProtectedRoute = ({ children }) => {
  const getToken = localStorage.getItem("token");
  if (!getToken) {
    window.location = "/";
    return;
  }
  console.log("welcome to dashboard", children);
  return children;
};
