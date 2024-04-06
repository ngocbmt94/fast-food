import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/header/Header";
import Loading from "./loading";

export const metadata = {
  title: "Fast Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
