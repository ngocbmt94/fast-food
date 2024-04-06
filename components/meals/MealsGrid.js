import styles from "./mealsGrid.module.css";
import MealItem from "./MealItem";

function mealsGrid({ meals }) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

export default mealsGrid;
