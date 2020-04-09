/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './styles/index.css';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Footer />
    </div>
  );
}

export default App;
