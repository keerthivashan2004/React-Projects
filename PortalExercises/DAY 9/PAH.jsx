import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const NavBar = () => {
  return (
    <nav style={{ background: '#333', padding: '1rem' }}>
      <h1 style={{ color: '#fff' }}>My Website</h1>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome to My Website</h2>
      <p>This is the Home Page. Feel free to explore!</p>
    </div>
  );
};

const About = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>About Us</h2>
      <p>Learn more about what we do and our mission.</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Contact Us</h2>
      <p>Reach out to us at example@gmail.com or call us at +123456789.</p>
    </div>
  );
};

const Day9pah1 = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Day9pah1;
