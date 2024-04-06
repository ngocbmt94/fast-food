import Link from "next/link";
import styles from "./intro.module.css";
import Slides from "./Slides";

function Intro() {
  return (
    <div className={styles.intro}>
      <div>
        <div className={styles.hero}>
          <h1>About fast food</h1>
          <p>Taste & share food from all over the world.</p>
        </div>
        <div className={styles.cta}>
          <Link href="/community">Join the Community</Link>
          <Link href="/meals">Explore Meals</Link>
        </div>
      </div>
      <Slides />
    </div>
  );
}

export default Intro;
