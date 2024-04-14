import styles from "./intro.module.css";
function Intro() {
  return (
    <div className={styles.intro}>
      <h1>
        Share your <span className={styles.highlight}>favorite meal</span>
      </h1>
      <p>Or any other meal you feel needs sharing!</p>
    </div>
  );
}

export default Intro;
