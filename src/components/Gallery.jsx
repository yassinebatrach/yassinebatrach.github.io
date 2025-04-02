import React from 'react';

function Gallery() {
  return (
    <section className="images">
      <h2>Immagini</h2>
      <img src="/images/chernobyl_reactor.jpg" alt="Reattore di Chernobyl" />
      <img src="/images/pripyat.jpg" alt="Città di Pripyat abbandonata" />
    </section>
  );
}

export default Gallery;
