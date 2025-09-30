import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <h1 className={styles.footerTitle}>
            Dead Cells
          </h1>
          <p className={styles.footerDescription}>Um jogo de ação no estilo roguelike e metroidvania, desenvolvido pela Motion Twin.</p>
          <h1 className={styles.footerCopyright}>© 2025 Dead Cells</h1>
        </div>
      </div>
    </footer>
  );
}   