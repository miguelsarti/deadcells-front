"use client"

import React from 'react'
import styles from './deadcells.module.css'
import Header from '../components/Header/page'
import Footer from '../components/Footer/page'
import Link from 'next/link'

export default function DeadCells() {


  return (
    <div className={styles.container}>
      <Header />
      <img src='img/title-deadcells.png' alt="Título do jogo Dead Cells" width={400} height={300} />
      <div className={styles.content}>
        <h1 className={styles.title}>Consulte sobre o jogo aqui!</h1>
        <p className={styles.description}>Por aqui você pode descobrir diversas coisas sobre o jogo, como armas, inimigos, npcs, e mutações, além de outras informações importantes sobre cada um. Explicado detalhadamente para o jogador compreender e se familiarizar com o jogo. Acesse abaixo:</p>
        <div className={styles.links}>
          <Link href="/deadcells/armas" className={styles.link}>
            <img src="./img/gears.png" alt="armas" width={80} height={80} className={styles.imageIcon}/>
            <p className={styles.linkTitle}>Armas</p>
          </Link>
          
          <Link href="/deadcells/personagens" className={styles.link}>
            <img src="./img/personagens.png" alt="personagens" width={80} height={80} className={styles.imageIcon}/>
            <p className={styles.linkTitle}>Personagens</p>
          </Link>
          
          <Link href="/deadcells/mutacoes" className={styles.link}>
            <img src="./img/mutations.png" alt="mutacoes" width={80} height={80} className={styles.imageIcon}/>
            <p className={styles.linkTitle}>Mutações</p>
          </Link>
      </div>
    </div>
      < Footer />
    </div>
  )
}