import { useEffect, useState, useRef } from "react";

export default function Location() {
  return (
    <section id="location" className="location">

      <h2>Ubicación</h2>
      <p>
        <p>Avenida Tecnológico, 52172 Metepec, México</p>
      </p>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.4503625027887!2d-99.58160712581086!3d19.262771646084545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd89cfd45625f5%3A0x98ce054f200ac08f!2sMOAN%20spa%20%26%20beauty!5e0!3m2!1ses!2smx!4v1774712375309!5m2!1ses!2smx"
          loading="lazy"
        ></iframe>
      </div>

      <a
        href="https://www.google.com/maps?q=MOAN+spa+%26+beauty"
        target="_blank"
        className="btn"
      >
        Cómo llegar
      </a>

      {/* 🐧 Pingüino */}
      <div className="penguin">
        🐧
      </div>

    </section>
  );
}