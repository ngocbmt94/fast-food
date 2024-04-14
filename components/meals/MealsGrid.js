import styles from "./mealsGrid.module.css";
import MealItem from "./MealItem";
import { getMeals } from "@/server/meals";

async function mealsGrid() {
  const meals = await getMeals();

  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

export default mealsGrid;
