import Link from "next/link";
import styles from "./intro.module.css";

function Intro() {
  return (
    <div className={styles.intro}>
      <h1>
        Delicious meal, created by <span className={styles.highlight}>by you</span>
      </h1>
      <p>Choose your favorite recipe and cook it yourself. It is easy and fun !!!</p>
      <p className={styles.cta}>
        <Link href="./meals/share">Share your recipe</Link>
      </p>
    </div>
  );
}

export default Intro;
