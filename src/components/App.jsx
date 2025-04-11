import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Intro from "./Intro";
import Gallery from './Gallery';
import "./App.css";

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
