import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("November 28, 2024 21:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // If the event time is reached
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.heroContainer}>
      <div  className={styles.soundcloudButton}>
       <a
        href="https://soundcloud.com/your-soundcloud-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Listen on SoundCloud
      </a>
      </div>
    
      <div className={styles.background}>
        <img
          src={import.meta.env.BASE_URL + "/assets/image00001.jpeg"}
          alt="Background 1"
          className={styles.backgroundImage1}
        />
        <img
          src="src/assets/image00001.jpeg"
          alt="Background 2"
          className={styles.backgroundImage2}
        />
      </div>
      <div className={styles.logoContainer}>
     

        <img
          src="src/assets/image00003.png"
          alt="Logo"
          className={styles.logo}
        />
        <p className={styles.title}>OPENING NOVEMBER 28</p>
        <p className={styles.text}>BSMNT The club, Gammarth</p>
        {/* Countdown Timer */}
        <div className={styles.countdown}>
          <p>
            {timeLeft.days} Days &nbsp; {String(timeLeft.hours).padStart(2, "0")}&nbsp;:&nbsp;
            {String(timeLeft.minutes).padStart(2, "0")}&nbsp;:&nbsp;
            {String(timeLeft.seconds).padStart(2, "0")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
