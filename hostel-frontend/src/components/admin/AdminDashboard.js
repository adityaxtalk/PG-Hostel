import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Bill from "./Bill";
import AddForm from "./AddForm";
import { Box, CssBaseline } from "@mui/material";

const AdminDashboard = () => {
  return (
    <>
      <Box component="main" sx={styles.boxStyled}>
        <CssBaseline/>
        <Routes>
          <Route path="/" element={<Navigate to="/Admin/dashboard" />} />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/bill" element={<Bill />} />
          <Route path="*" element={<Navigate to="/Admin/dashboard" />} />

        </Routes>
      </Box>
    </>
  );
};

export default AdminDashboard;

const styles = {
  boxStyled: {
    backgroundColor: (theme) => theme.palette.grey[100],
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
};
