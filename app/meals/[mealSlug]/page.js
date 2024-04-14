import { getMealDetail } from "@/server/meals";
import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

// generate meta data for dynamic page
export async function generateMetadata({ params }) {
  const slug = params.mealSlug;
  const meal = await getMealDetail(slug);

  if (!meal) notFound();
  return {
    title: meal.title,
    description: meal.sumary,
  };
}

async function MealDetail({ params }) {
  const slug = params.mealSlug;
  const meal = await getMealDetail(slug);

  if (!meal) notFound();
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
