import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Location.module.css'; // Importing CSS module

function Location(){
  return (
    <div className={styles.locationContainer}>
     
      <div className={styles.locationInfo}>
      <div className={styles.back}>
        <img src="src\assets\BEAST-24--ENGRAVING-DESIGN-SYNDROME-NECRONOMICON-.png" alt="" />
      </div>
        <h2>INFORMATIONS</h2>
        <h4>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} /> LOCATION
        </h4>
        <p>BSMNT The club, Gammarth</p>
        
        <h4>
          <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} /> DATE & TIME
        </h4>
        <p>November  <span
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              28, 2024 - 9 
            </span>{" "}PM</p>
        
        <button className={styles.moreInfoButton}>MAP</button>
      </div>
      <div className={styles.locationImage}>
        <img src="https://lh3.googleusercontent.com/p/AF1QipPh6i6TI-8kgYOxpRXxCrySOKdwZ6a6PbrK43OM=s1360-w1360-h1020" alt="BSMNT THE CLUB" />
       
      </div>
    </div>
  );
};

export default Location;
