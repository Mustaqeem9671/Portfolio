// import "./App.css";
import "./Main.css";
import Home from "./pages/home/HomeScreen/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/home/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>404 Not Found</div>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
