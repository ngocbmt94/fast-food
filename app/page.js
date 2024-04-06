import Intro from "@/components/home/Intro";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Intro />
      <main>
        <section className={styles.section}>
          <h2>How it works</h2>
          <p>NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to discover new dishes, and to connect with other food lovers.</p>
          <p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
        </section>

        <section className={styles.section}>
          <h2>Why NextLevel Food?</h2>
          <p>NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to discover new dishes, and to connect with other food lovers.</p>
          <p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
        </section>
      </main>
    </>
  );
}
