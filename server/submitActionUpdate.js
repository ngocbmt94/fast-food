"use server";

import { redirect } from "next/navigation";
import { updateMeal } from "./meals";
import { z } from "zod";

const MAX_FILE_SIZE = 5000000; // 5MB
const schema = z.object({
  creator_email: z.string().refine((value) => value.trim() !== "" && value.includes("@"), {
    message: "Invalid email. Please input correct email",
  }),
  title: z.string().refine((value) => value.trim() !== "", { message: "Input of title can not empty!" }),
  creator: z.string().refine((value) => value.trim() !== "", { message: "Input of name can not empty!" }),
  summary: z.string().refine((value) => value.trim() !== "", { message: "Input of summary can not empty!" }),
  instructions: z.string().refine((value) => value.trim() !== "", { message: "Input of instructions can not empty!" }),
  image: z.any().refine((file) => file?.size <= MAX_FILE_SIZE, "Max image size is 5MB."),
});

// server action that will receive the data from the form (formData), and prevState,
export async function submitActionUpdate(prevState, formData) {
  const validatedFields = schema.safeParse({
    title: formData.get("title"),
    creator: formData.get("creator"),
    creator_email: formData.get("email"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    //console.log("validatedFields error", validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const meal = {
    title: formData.get("title"),
    creator: formData.get("creator"),
    creator_email: formData.get("email"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  await updateMeal(meal);
  redirect("/meals");
}
