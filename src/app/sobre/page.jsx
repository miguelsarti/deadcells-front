import React from "react";
import styles from "./sobre.module.css";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";

export default function Sobre() {
  return (
    <div className={styles.container}>
      <Header />
      <img
        src='img/title-deadcells.png'
        alt="Título do jogo Dead Cells"
        width={400}
      />

      <div className={styles.content}>
        <div className={styles.imageProfile}>
          <img
            src="./img/picture.jpg"
            alt="Minha foto de perfil"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Miguel Sarti</h1>
          <p className={styles.description}>
            Eu me chamo Miguel Sarti, tenho 17 anos, sou estudante do SESI e SENAI e atualmente estou na turma 2TDS2. Estou no meu segundo ano de desenvolvimento web, e estou muito animado para continuar aprendendo e crescendo nessa área. O que eu mais gosto de fazer é jogar videogame, ir pra academia e passear.
          </p>
          <div className={styles.perfilCards}>
            <div className={styles.card}>
              <p className={styles.cardTitle}>🌍 Inglês Fluente</p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardTitle}>📚 Curso Técnico - DS</p>
            </div>
                        <div className={styles.card}>
              <p className={styles.cardTitle}>🧠 Boa criatividade</p>
            </div>
          </div>
          <h2 className={styles.motivacional}>"Nunca desista dos seus sonhos, pois cada passo dado é uma conquista rumo ao sucesso!"</h2>
        </div>

      </div>
      <Footer />
    </div>
  );
}