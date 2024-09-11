//import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("gray");
      document.body.style.backgroundColor = 'gray';
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  };
  

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about"  element={<About heading="About" />} />
            <Route
              exact
              path="/textform"
              element={<TextForm heading="Enter your text here to analyze" mode={mode}/>}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
