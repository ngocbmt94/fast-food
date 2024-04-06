import styles from "./header.module.css";
import logoImg from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import HeaderBackground from "./HeaderBackground";
import NavLink from "./NavLink";

function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="Fast Food logo" priority />
          <span>Fast Food</span>
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Foodies Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
