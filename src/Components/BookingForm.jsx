
import { useEffect, useState, useRef } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const mensaje = `Hola, soy ${form.nombre}. Quiero ${form.servicio} el ${form.fecha} a las ${form.hora}`;

    window.open(
      `https://wa.me/527226832559?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

  return (
    <section className="booking" id="booking">
      <h2>Agendar cita</h2>

      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
          required
        />

        <input
          name="servicio"
          placeholder="Servicio"
          onChange={handleChange}
          required
        />

        <input type="date" name="fecha" onChange={handleChange} required />

        <input type="time" name="hora" onChange={handleChange} required />

        <button type="submit">Agendar</button>
      </form>
    </section>
  );
}