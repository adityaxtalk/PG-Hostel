import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/landingpage/Home";
import Login from "./components/Login";
import AdminDashboard from "./components/admin/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/Admin/*" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={true} closeOnClick={true}/>
    </>
  );
}

export default App;
