"use client";
import styles from "./formShare.module.css";
import ButtonSubmit from "./ButtonSubmit";
import { submitActionUpdate } from "@/server/submitActionUpdate";
import { useFormState } from "react-dom";
import InputImage from "./InputImage";

// https://www.pronextjs.dev/form-actions-with-the-useformstate-hook

const initialState = {
  message: "",
};
function FormShare() {
  // give us two things: the server action function is first argrument, and the initial state is second argrument
  // On the initial render that state value will match the initial state. But after a form post the state will be whatever came back from the server.
  const [state, formAction] = useFormState(submitActionUpdate, initialState);

  //console.log(state); // this is data comback from sever
  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.row}>
        <p>
          <label htmlFor="creator">Your name</label>
          <input type="text" id="creator" name="creator" />
          {state?.errors?.creator && <span className={styles.errors}>{state?.errors?.creator}</span>}
        </p>
        <p>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" />
          {state?.errors?.creator_email && <span className={styles.errors}>{state?.errors?.creator_email}</span>}
        </p>
      </div>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
        {state?.errors?.title && <span className={styles.errors}>{state?.errors?.title}</span>}
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" name="summary" />
        {state?.errors?.summary && <span className={styles.errors}>{state?.errors?.summary}</span>}
      </p>
      <p>
        <label htmlFor="instructions">Instructions</label>
        <textarea id="instructions" name="instructions" rows="10"></textarea>
        {state?.errors?.instructions && <span className={styles.errors}>{state?.errors?.instructions}</span>}
      </p>

      <InputImage label="your image" name="image" errors={state?.errors?.image}>
        <input type="file" id="image" accept="image/*" name="image" />
      </InputImage>
      <p className={styles.actions}>
        <ButtonSubmit />
      </p>
    </form>
  );
}

export default FormShare;
