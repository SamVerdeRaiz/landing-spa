import { useEffect, useState, useRef } from "react";
export default function About() {
  const aboutRef = useRef();

  useEffect(() => {
    const elements = aboutRef.current.querySelectorAll(".animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);
  
  return (
    <section className="about" ref={aboutRef} id="about">
      <h2 className="about-title">¿Por qué elegirnos?</h2>

      <div className="about-grid">

        {/* 1 */}
        <div className="about-item animate fade-down">
          <img src="/img1.jpg" alt="Tecnología avanzada" />
        </div>

        {/* 2 */}
        <div className="about-item animate fade-down delay">
          <img src="/img2.jpg" alt="Atención personalizada" />
        </div>

        {/* 3 */}
        <div className="about-item animate fade-up text-block">
          <h3>Tecnología avanzada</h3>
          <p>Equipos modernos para ofrecer resultados visibles y seguros en cada tratamiento.</p>

          <h3>Atención personalizada</h3>
          <p>Cada servicio se adapta a las necesidades específicas de cada cliente.</p>

          <h3>Ambiente relajante</h3>
          <p>Un espacio diseñado para desconectar, cuidar tu cuerpo y elevar tu bienestar.</p>
        </div>

        {/* 4 */}
        <div className="about-item animate slide-right">
          <img src="/img3.jpg" alt="Spa ambiente" />
        </div>

      </div>
    </section>
  );
}