import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/landingpage/Home";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
