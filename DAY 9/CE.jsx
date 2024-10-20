
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const NavBar = () => {
  return (
    <nav style={{ background: '#333', padding: '1rem' }}>
      <h1 style={{ color: '#fff' }}>Music World</h1>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li>
          <Link to="/" style={{ color: '#fff' }}>Home</Link>
        </li>
        <li>
          <Link to="/singers" style={{ color: '#fff' }}>Singers</Link>
        </li>
        <li>
          <Link to="/albums" style={{ color: '#fff' }}>Albums</Link>
        </li>
      </ul>
    </nav>
  );
};

const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome to Music World</h2>
      <p>Explore your favorite singers and albums!</p>
    </div>
  );
};

const Singers = () => {
  const singers = [
    { name: 'Adele', year: 2008 },
    { name: 'Ed Sheeran', year: 2011 },
    { name: 'Taylor Swift', year: 2006 },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Singers List</h2>
      <ul>
        {singers.map((singer, index) => (
          <li key={index}>
            {singer.name} - {singer.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Albums = () => {
  const albums = [
    { name: '25', singer: 'Adele' },
    { name: 'Divide', singer: 'Ed Sheeran' },
    { name: '1989', singer: 'Taylor Swift' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Albums List</h2>
      <ul>
        {albums.map((album, index) => (
          <li key={index}>
            {album.name} - {album.singer}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Day9ce1 = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singers" element={<Singers />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </Router>
  );
};

export default Day9ce1;
