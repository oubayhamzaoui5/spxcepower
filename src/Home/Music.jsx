import styles from "./Music.module.css";

function Music() {
  return (
    <div className={styles.musicContainer}>
        <div className={styles.background}>
        <img
          src="src/assets/image00001.jpeg"
          alt="Background 1"
          className={styles.backgroundImage1}
        />
        <img
          src="src/assets/image00001.jpeg"
          alt="Background 2"
          className={styles.backgroundImage2}
        />
      </div>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          {/* Circular image */}
          <img
            src="src\assets\image00005.jpeg" /* Replace with your actual image */
            alt="Spxcepower"
            className={styles.logo}
          />
          {/* Text beside the image */}
          <div className={styles.text}>
            <h1>SPXCEPOWER</h1>
            <p>SPXCE POWER</p>
            <p>Tunis , Tunisia</p>
          </div>
        </div>
      </header>
      {/* Empty content section */}
      <div className={styles.content}>
        <iframe
          width="100%"
          height="100%"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/spxcepower&amp;"
        ></iframe>
      </div>
    </div>
  );
}

export default Music;
