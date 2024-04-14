import Intro from "@/components/meals/Intro";
import MealsGrid from "@/components/meals/MealsGrid";
import { Suspense } from "react";
import LoadingFor from "./loading";

export const metadata = {
  title: "All meals",
  description: "Browse the delicious meals shared by our vibrant comunity.",
};
export function Meals() {
  return (
    <main>
      <Intro />
      <Suspense fallback={<LoadingFor />}>
        <MealsGrid />
      </Suspense>
    </main>
  );
}

export default Meals;
