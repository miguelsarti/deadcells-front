import React from 'react';
import styles from './deadcells.module.css'
import Header from '../components/Header/page'
import Footer from '../components/Footer/page'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
        <div className={styles.container}>


        </div>
      <Footer />
    </div>
  );
}

