import FormShare from "@/components/form/FormShare";
import Intro from "@/components/share/Intro";
import classes from "./page.module.css";

export default function ShareMealPage() {
  return (
    <>
      <Intro />
      <main className={classes.main}>
        <FormShare />
      </main>
    </>
  );
}
