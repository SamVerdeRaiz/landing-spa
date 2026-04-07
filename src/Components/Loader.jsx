
import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${hidden ? "hidden" : ""}`}>
      <div className="loader-content">
       <img src="/logo.png" alt="loading..." className="loader-logo" />
        <div className="line"></div>
      </div>
    </div>
  );
}
