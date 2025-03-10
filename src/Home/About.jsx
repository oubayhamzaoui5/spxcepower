import styles from "./About.module.css";

function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.backgroundcontainer}>
          <img src="src/assets/skeletons2--ENGRAVING-DESIGN-SYNDROME-NECRONOMICON-.png" alt="Background" />
        </div>

        <div className={styles.imgc}>
          {/* Background video */}
          <video className={styles.videoBg} autoPlay muted loop>
            <source src="src/assets/about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Logo image in front of the video */}
          <img src="src/assets/image00003.png" alt="Logo" className={styles.logo} />
        </div>

        <div className={styles.desc}>
          <p>
            Spxacepower is a visionary techno festival founded by{" "}
            <a
              href="https://instagram.com/tobixiety"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              @tobixiety
            </a>{" "}
            and{" "}
            <a
              href="https://instagram.com/blurry_demensioncore"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              @blurry_demensioncore
            </a>
            , designed to push the boundaries of electronic music. Our mission
            is to create a space where deep, dark techno reigns supreme,
            accompanied by immersive audiovisual experiences. Our lineup
            features top DJs and producers, each bringing their unique sound to
            fuel the festival’s electric atmosphere.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
