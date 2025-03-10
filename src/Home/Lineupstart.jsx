import styles from "./Lineupstart.module.css";

function Lineupstart() {
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <img
          src={import.meta.env.BASE_URL + "/assets/BEAST-18--ENGRAVING-DESIGN-SYNDROME-NECRONOMICON-.png"}
          alt=""
        />
      </div>
      <h1 className={styles.text}>LINEUP</h1>
    </div>
  );
}

export default Lineupstart;
