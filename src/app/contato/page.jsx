import React from 'react';
import styles from './contato.module.css'
import Header from '../components/Header/page'
import Footer from '../components/Footer/page'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <img
        src='img/title-deadcells.png'
        alt="Título do jogo Dead Cells"
        width={400}
        height={300}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Página de Contato
        </h1>
        <p className={styles.description}>
          Essa é a página de contato do Dead Cells, onde você pode tirar suas dúvidas, compartilhar suas idéias e sugestões. Afim de manter o site atualizado e relevante, não hesite em entrar em contato conosco.
          </p>
        </div>
      <Footer />
    </div>
  );
}

