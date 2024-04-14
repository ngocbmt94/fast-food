"use server";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
// provided by node JS, allow to us work with file system
const db = sql("meals.db");

export async function getMeals() {
  // just to see loading indicator for user experience
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return db.prepare("SELECT * FROM meals").all();
}

export async function getMealDetail(slug) {
  // just to see loading indicator for user experience
  debugger;
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return await db.prepare("SELECT  * FROM meals WHERE slug = ?").get(slug);
}

export async function updateMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  //store image in public folder
  const extension = meal.image.name.split(".").pop(); // name: 'default-user.jpg', => [''default-user', 'jpg']
  const fileName = `${meal.title}-${Math.floor(Math.random() * 1000000 + 1)}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (err) => {
    if (err) throw new Error("Saving image failed !");
  });
  // store path image in database
  meal.image = `/images/${fileName}`; // can remove public beucase all request will be sent to public folder automatically
  // store meal in database
  db.prepare(
    `INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
      VALUES ( @slug, @title, @image, @summary, @instructions, @creator, @creator_email )`
  ).run(meal);
}
