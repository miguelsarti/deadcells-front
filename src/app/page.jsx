import React from 'react';
import Image from "next/image";
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dead Cells</h1>
    </div>
  );
}

