"use client";

import { useFormStatus } from "react-dom";

function ButtonSubmit() {
  const status = useFormStatus();

  return (
    <button type="submit" disabled={status.pending}>
      {status.pending ? "sharing..." : "Share Meal"}
    </button>
  );
}

export default ButtonSubmit;
