import Intro from "@/components/meals/Intro";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/server/meals";

async function Meals() {
  const meals = await getMeals();

  return (
    <>
      <Intro />
      <MealsGrid meals={meals} />
    </>
  );
}

export default Meals;
