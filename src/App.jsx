import { useState, useEffect } from "react";
import About from "./Home/About";
import Location from "./Home/Location";
import Tickets from "./Home/Tickets";
import Hero from "./Home/Hero";
import Footer from "./Home/Footer";
import Music from "./Home/Music";
import Lineup from "./Home/Lineup";
import Lineupstart from "./Home/Lineupstart";
import styles from "./App.module.css"; // Create this CSS file for styling the loading screen

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show the loading screen for at least 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Change this duration as needed

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading && (
        <div className={styles.loadingContainer}>
          <img src="/assets/image00003.png" alt="Loading" className={styles.loadingImage} />
        </div>
      )}
      {/* Render the main content even while loading */}
      <div className={isLoading ? styles.hidden : styles.visible}>
        <Hero />
        <About />
        <Music />
        <Tickets />
        <Location />
        <Lineupstart />
        <Lineup />
        <Footer />
      </div>
    </div>
  );
}

export default App;
