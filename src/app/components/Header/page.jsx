import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.headerNav}>
      <nav className={styles.navMenu}>
        <ul>
          <li>
            <Link href="/" className={styles.navLink}>Home</Link>
          </li>
          <li>
            <Link href="/sobre" className={styles.navLink}>Sobre Mim</Link>
          </li>
          <li>
            <Link href="/deadcells" className={styles.navLink}>Dead Cells</Link>
          </li>
            <li>
            <Link href="/contato" className={styles.navLink}>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
