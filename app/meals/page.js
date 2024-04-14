import Intro from "@/components/meals/Intro";
import MealsGrid from "@/components/meals/MealsGrid";
import { Suspense } from "react";
import LoadingFor from "./loading";

function Meals() {
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
