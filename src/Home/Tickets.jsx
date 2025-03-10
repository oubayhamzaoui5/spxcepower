import styles from "./Tickets.module.css";

function Tickets() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgcontainer}>
          <img
            src={import.meta.env.BASE_URL + "/assets/were-wolf-25-designsyndrome-necronomicon.png"}
            alt=""
            className={styles.first}
          />
        </div>
        <div className={styles.back}>
          <img
            src={import.meta.env.BASE_URL + "/assets/SYMBOLS 35 - ENGRAVING-DESIGN-SYNDROME-NECRONOMICON-.png"}
            alt=""
          />
        </div>
        <div className={styles.desc}>
          <h1>TICKETS AVAILABLE NOW</h1>
          <div className={styles.places}>
            <h2>IN TUNIS / BEN AROUS / MANOUBA</h2>
            <h2>SOUSSE / MONASTIR</h2>
          </div>
          <h3>
            TICKETS PRICE :{" "}
            <span
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              20
            </span>{" "}
            TND
          </h3>
          <h3>
            AT THE DOOR :{" "}
            <span
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              30
            </span>{" "}
            TND
          </h3>
          <div className={styles.contact}>
            <h3>GET YOURS NOW!</h3>
            <a
              href="mailto:info@spxacepower.com"
              className={styles.contactLink}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tickets;
