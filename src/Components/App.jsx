import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Loader from "./Components/Loader";
import Services from "./Components/Services";
import Location from "./Components/Location";
import WhatsAppButton from "./Components/WhatsAppButton";
import Footer from "./Components/Footer";
import About from "./Components/About";
import BookingForm from "./Components/BookingForm";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BookingForm />
      <Location />
      <WhatsAppButton />
      <Footer />
    </>
  );
}