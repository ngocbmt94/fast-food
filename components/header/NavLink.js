"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";

function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link href={href} className={`${styles.link} ${path.startsWith(href) ? styles.active : ""}`}>
      {children}
    </Link>
  );
}

export default NavLink;
