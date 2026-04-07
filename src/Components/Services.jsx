
import { useEffect, useState, useRef } from "react";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "Depilación definitiva",
      content: "Depilación láser en distintas zonas del cuerpo."
    },
    {
      title: "Modelado corporal",
      content:
        "Flacidez, grasa localizada, celulitis, cicatrices, estrías, aumento de glúteo y busto, postoperatorio."
    },
    {
      title: "Faciales",
      content:
        "Rejuvenecimiento, perfilamiento facial, antiacné, limpieza profunda, despigmentante."
    },
    {
      title: "Spa",
      content:
        "Masajes relajantes, descontracturantes, deportivos y drenaje linfático manual."
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="services spa-wall" id="services">
      <h2>Servicios</h2>

      <div className="grid">
        {services.map((s, i) => (
          <div
            className={`service-card ${activeIndex === i ? "active" : ""}`}
            key={i}
            onClick={() => handleToggle(i)}
          >
            <div className="card-box">

              <div className="card-front">
                <h3>{s.title}</h3>
              </div>

              <div className="card-back">
                <p>{s.content}</p>

                <a
                  href="https://wa.me/521XXXXXXXXXX?text=Hola,%20quiero%20información"
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="btn"
                >
                  Agendar cita
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}