import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Il Disastro di Chernobyl</h1>
      </header>
      <main>
        <section className="intro">
          <h2>Introduzione</h2>
          <p>
            Il disastro di Chernobyl avvenne il 26 aprile 1986, quando il reattore
            4 della centrale nucleare esplose causando il più grave incidente
            nucleare della storia.
          </p>
        </section>
        <section className="images">
          <h2>Immagini</h2>
          <img src="/images/chernobyl-reactor.jpg" alt="Reattore di Chernobyl" />
          <img src="/images/pripyat.jpg" alt="Città di Pripyat abbandonata" />
        </section>
      </main>
      <footer>
        <p>© 2025 - Informazioni su Chernobyl</p>
      </footer>
    </div>
  );
}

export default App;
