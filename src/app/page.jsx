import React from 'react';
import styles from './page.module.css'
import Header from './components/Header/page'
import Footer from './components/Footer/page'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <img
        src='img/title-deadcells.png'
        alt="Título do jogo Dead Cells"
        width={400}
        height={300}
        className={styles.titleImage}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          O que fala sobre?
        </h1>
        <p className={styles.description}>
          Dead Cells é um jogo indie de ação no estilo roguelike e metroidvania, desenvolvido pela Motion Twin. Lançado originalmente em 2018, o jogo combina combate rápido e fluido, exploração não linear e elementos de progressão permanente. Nele, o jogador controla uma entidade sem forma que ocupa corpos mortos para escapar de uma ilha em constante mutação. Com gráficos em pixel art e trilha sonora intensa, Dead Cells se destaca pela dificuldade desafiadora, variedade de armas e habilidades, e um alto fator de rejogabilidade.
        </p>
        <img
          src="img/dead-cells.jpg"
          alt="Dead Cells"
          width={600}
        />
        <h1 className={styles.subtitle}>
          Qual a importância do site?
          </h1>
        <p className={styles.subdescription}>
          A importância do site do Dead Cells funciona como uma wiki colaborativa e é uma ferramenta essencial para jogadores, oferecendo informações detalhadas sobre armas, inimigos, mutações, e NPC. Ele é importante porque centraliza o conhecimento da comunidade, facilita a aprendizagem de mecânicas complexas do jogo e ajuda tanto iniciantes quanto veteranos a explorarem todo o potencial que Dead Cells oferece. Além disso, sua constante atualização acompanha as mudanças e DLCs, mantendo o conteúdo sempre relevante.
        </p>
        <img 
          src='img/second-image.png'
          alt="Final Boss"
          width={600}
          />
      </div>
      <Footer />
    </div>
  );
}

