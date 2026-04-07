import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [showText, setShowText] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1200);

    const video = videoRef.current;

    if (video) {
      const handleTimeUpdate = () => {
        // 🔥 reinicia en 9 segundos exactos
        if (video.currentTime >= 8.2) {
          video.currentTime = 0;
          video.play();
        }
      };

      video.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        clearTimeout(timer);
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  return (
    <section className="hero" id="hero">

      {/* VIDEO DE FONDO */}
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        playsInline
        preload="auto"
        className="hero-video"
      >
        <source src="/spa-video.mp4" type="video/mp4" />
      </video>

      {/* CONTENIDO */}
      <div className="overlay">
        <img src="/logo-hero.png" alt="Moan Spa & Beauty" className="hero-logo" />

        {showText && (
          <>
            <p className="fade">
              Depilación láser y tratamientos premium
            </p>

            <button className="btn fade">
              Agendar cita
            </button>
          </>
        )}
      </div>

    </section>
  );
}