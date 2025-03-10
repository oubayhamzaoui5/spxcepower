import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";

function Footer() {
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
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.footerContainer}>
      <div className={styles.backone}>
        <img src="src\assets\112-design-syndrome-necronomicon-.png" alt="" />
      </div>
      <div className={styles.backtwo}>
        <img src="src\assets\112-design-syndrome-necronomicon-.png" alt="" />
      </div>
      <div>
        <div className={styles.logoContainer}>
          <img
            src="src/assets/image00003.png"
            alt="Logo"
            className={styles.logo}
          />
        </div>
        <div className={styles.socialsAndCountdown}>
          <div className={styles.socials}>
            <div className={styles.col}>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                Spxacepower
              </a>
            </div>
            <div className={styles.col}>
              <a
                href="https://www.soundcloud.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faSoundcloud} />
                </div>
                Spxacepower
              </a>
            </div>
          </div>
       
        </div>
      </div>

      <div className={styles.copyright}>
      <div className={styles.countdown}>
          <p>
            {timeLeft.days} Days &nbsp; {String(timeLeft.hours).padStart(2, "0")}&nbsp;:&nbsp;
            {String(timeLeft.minutes).padStart(2, "0")}&nbsp;:&nbsp;
            {String(timeLeft.seconds).padStart(2, "0")}
          </p>
          </div>
        <p>© 2024 Spxacepower. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
