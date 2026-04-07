import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const lastScroll = useRef(0); // ✅ FIX

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 50);

      if (currentScroll > lastScroll.current && currentScroll > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [menuOpen]);

  return (
    <>
      <nav className={`nav ${showNav ? "show" : "hide"} ${scrolled ? "active" : ""}`}>

        {/* BOTÓN */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>

        {/* LOGO */}
        <div className="logo">
          <img src="/public/logo.png" alt="MOAN Spa & Beauty" />
        </div>

        {/* MENÚ */}
        <div className={`menu ${menuOpen ? "open" : ""}`}>
  
  <a href="#hero" onClick={() => setMenuOpen(false)}>
    Inicio
  </a>

  <a href="#about" onClick={() => setMenuOpen(false)}>
    Nosotros
  </a>

  <a href="#services" onClick={() => setMenuOpen(false)}>
    Servicios
  </a>

  <a href="#booking" onClick={() => setMenuOpen(false)}>
    Agendar
  </a>

  <a href="#location" onClick={() => setMenuOpen(false)}>
    Ubicación
  </a>

</div>
      </nav>

      {/* OVERLAY */}
      {menuOpen && (
        <div className="overlay-menu" onClick={() => setMenuOpen(false)}></div>
      )}
    </>
  );
}