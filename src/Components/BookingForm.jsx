import { useState } from "react";

const servicios = [
  "Depilación láser",
  "Facial",
  "Limpieza profunda",
];

const horariosDisponibles = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "16:00",
  "17:00",
  "18:00",
];

export default function BookingForm() {
  const [form, setForm] = useState({
    nombre: "",
    servicio: "",
    fecha: "",
    hora: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const seleccionarHora = (hora) => {
    setForm({ ...form, hora });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.hora) {
      alert("Selecciona una hora");
      return;
    }

    const mensaje = `Hola, soy ${form.nombre}. Quiero ${form.servicio} el ${form.fecha} a las ${form.hora}`;

    window.open(
      `https://wa.me/527226832559?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

  return (
    <section className="booking" id="booking">
      <h2>Agendar cita</h2>

      {/* 🔥 SOCIAL PROOF */}
      <p className="clients">
        Más de 120 citas agendadas este mes
      </p>

      {/* FORM */}
      <form className="booking-form" onSubmit={handleSubmit}>
        
        <input
          name="nombre"
          placeholder="Tu nombre"
          onChange={handleChange}
          required
        />

        {/* 🔥 SELECT SERVICIO */}
        <select
          name="servicio"
          onChange={handleChange}
          required
          value={form.servicio}
        >
          <option value="">Selecciona un servicio</option>
          {servicios.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>

        {/* FECHA */}
        <input
          type="date"
          name="fecha"
          onChange={handleChange}
          required
        />

        {/* 🔥 HORARIOS COMO BOTONES */}
        <div className="horarios">
          {horariosDisponibles.map((hora) => (
            <button
              type="button"
              key={hora}
              className={`hora-btn ${
                form.hora === hora ? "active" : ""
              }`}
              onClick={() => seleccionarHora(hora)}
            >
              {hora}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button type="submit" className="main-btn">
          Agendar con promoción
        </button>

        <p className="microcopy">
          Confirmación inmediata por WhatsApp
        </p>
      </form>
    </section>
  );
}