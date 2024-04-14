import { getMealDetail } from "@/server/meals";
import Image from "next/image";
import styles from "./page.module.css";
import Error from "../error";

async function MealDetail({ params }) {
  const slug = params.mealSlug;
  const meal = await getMealDetail(slug);

  if (!meal) return <Error />;
  const { title, image, sumary, instructions, creator, creator_email } = meal;

  const covertInstruction = instructions.replace(/\n/g, "</br>");
  return (
    <>
      <div className={styles.intro}>
        <div className={styles.image}>
          <Image src={image} fill alt={title} />
        </div>
        <div className={styles.introText}>
          <h1>{title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={styles.sumary}>{sumary}</p>
        </div>
      </div>

      <div>
        <p className={styles.instruction} dangerouslySetInnerHTML={{ __html: covertInstruction }}></p>
      </div>
    </>
  );
}

export default MealDetail;
