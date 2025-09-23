import React from "react";
import Link from "next/link";
import styles from "./deadcells.module.css";

export default function Header() {
  return (
    <header className={styles.headerNav}>
      <nav className={styles.navMenu}>
        <ul>
          <li>
            <Link href="/" className={styles.navLink}>Home</Link>
          </li>
          <li>
            <Link href="/sobre" className={styles.navLink}>Sobre a API</Link>
          </li>
          <li>
            <Link href="/presidents" className={styles.navLink}>Consultar Presidentes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
