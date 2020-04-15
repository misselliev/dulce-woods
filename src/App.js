/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './styles/index.css';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
