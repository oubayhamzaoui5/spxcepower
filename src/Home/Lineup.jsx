import styles from "./Lineup.module.css";

function Lineup() {
  const profiles = [
    {
      name: "KARMASMATIK",
      image: "https://i1.sndcdn.com/avatars-94XhLvFZcFkuwS2O-y483yQ-t500x500.jpg",
      soundCloudUrl: "1929791756",
    },
    {
      name: "VØLK",
      image: "https://i1.sndcdn.com/avatars-rR50OUcxyuufVNT1-DFc1mQ-t500x500.jpg",
      soundCloudUrl: "1934867369",
    },
    {
      name: "GËRM",
      image: "https://i1.sndcdn.com/avatars-fJDejCCPI53rbj3t-7BdrJg-t500x500.jpg",
      soundCloudUrl: "1854985977",
    },
    {
      name: "Ak47",
      image: "https://i1.sndcdn.com/avatars-dXeByqnwKX1PAxqQ-5qObxg-t500x500.jpg",
      soundCloudUrl: "1919408615",
    },
    {
      name: "TØBI",
      image: "https://i1.sndcdn.com/avatars-Tbu41v82Iv9PCa9J-LSxzAg-t500x500.jpg",
      soundCloudUrl: "1923259805",
    },
    {
      name: "Skoutchi99",
      image: "https://i1.sndcdn.com/avatars-4k0IbWj4TZke8wWz-WzR4Zw-t500x500.jpg",
      soundCloudUrl: "1929809912",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Background images */}
        <div className={styles.background}>
          <img
            src={import.meta.env.BASE_URL + "/assets/image00001.jpeg"}
            alt="Background 1"
            className={styles.backgroundImage1}
          />
          <img
            src={import.meta.env.BASE_URL + "/assets/image00001.jpeg"}
            alt="Background 2"
            className={styles.backgroundImage2}
          />
        </div>

        {/* Profile section */}
        <div className={styles.grid}>
          {profiles.map((profile, index) => (
            <div key={index} className={styles.profile}>
              {/* Profile Image on the left */}
              <div className={styles.profileImageContainer}>
                <img
                  src={profile.image}
                  alt={profile.name}
                  className={styles.profileImage}
                />
                <p className={styles.artistName}>{profile.name}</p>
              </div>

              {/* SoundCloud iframe on the right */}
              <div className={styles.music}>
                <iframe
                  width="100%"
                  height="80%"
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${profile.soundCloudUrl}&amp;show_artwork=false`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lineup;
