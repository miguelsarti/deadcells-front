import React from "react";
import styles from "./sobre.module.css";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";

export default function Sobre() {
  return (
    <div className={styles.container}>
        <Header/>
        <img
        src='img/title-deadcells.png'
        alt="Título do jogo Dead Cells"
        width={400}
        />
        <h1 className={styles.title}>Sobre mim:</h1>

        <div className={styles.content}>
            <img
            src="img/my-profile.jpg"
            alt="Minha foto"
            width={300}
            />

        </div>  
        <Footer/>
    </div>
  );
}