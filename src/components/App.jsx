import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Intro />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
