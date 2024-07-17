import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const { authenticated } = useSelector((store) => store.user);
  console.log(children);
  return authenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
