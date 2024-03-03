// import "./App.css";
import "./Main.css";
import Home from "./pages/home/HomeScreen/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/home/Navbar";
import Projects from "./pages/home/Projects";
import AboutMe from "./pages/home/AboutMe";
import MyPortfolio from "./pages/home/MyPortfolio";
import Education from "./pages/home/Education";
import ContactMe from "./pages/home/ContactMe";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/myportfolio" element={<MyPortfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contactme" element={<ContactMe />} />

          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
