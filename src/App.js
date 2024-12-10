import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Todo from "./components/Todo";
import Home from "./pages/Home";
import About from "./pages/About";
import ReactDOM from 'react-dom';



function App() {
  return (
    <Router>
      <nav style={navStyles}>
        <Link to="/" style={linkStyles}>Home</Link>
        <Link to="/about" style={linkStyles}>About</Link>
        <Link to="/counter" style={linkStyles}>Counter</Link>
        <Link to="/form" style={linkStyles}>Form</Link>
        <Link to="/todo" style={linkStyles}>Todo</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<Form />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
}

const navStyles = {
  display: "flex",
  justifyContent: "space-around",
  padding: "1rem",
  backgroundColor: "#6c5ce7",
};

const linkStyles = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

export default App;