import React from 'react';

function Gallery() {
  return (
    <section className="gallery">
      <h2 className="gallery-title">Immagini</h2>
      <div className="gallery-images">
        <img src="/images/chernobyl_reactor.jpg" alt="Reattore di Chernobyl" />
        <img src="/images/pripyat.jpg" alt="Città di Pripyat abbandonata" />
      </div>
    </section>
  );
}

export default Gallery;
