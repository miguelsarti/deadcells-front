"use client"

import React from 'react'
import { useState } from 'react'
// import axios from 'axios' 
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
          <div className={styles.link}>
            <img src="./img/gears.png" alt="armas" width={80} height={80} className={styles.imageIcon}/>
            <Link href="/deadcells/armas">
              <p className={styles.linkTitle}>Armas</p>
            </Link>
          </div>
            <div className={styles.link}>
                <img src="./img/personagens.png" alt="personagens" width={80} height={80} className={styles.imageIcon}/>
            <Link href="/deadcells/personagens">
              <p className={styles.linkTitle}>Personagens</p>
            </Link>
          </div>
          <div className={styles.link}>
            <div className={styles.imageIconDiv}>
            <img src="./img/mutations.png" alt="mutacoes" width={80} height={80} className={styles.imageIcon}/>
            </div>
            <Link href="/deadcells/mutacoes">
              <p className={styles.linkTitle}>Mutações</p>
            </Link>
        </div>
      </div>
    </div>
      < Footer />
    </div>
  )
}

/* Ideia do modelo de consulta:
Personagens: Abrir uma página que possuem NPCs e Inimigos 
com o icone do lado, e assim que apertasse 
abriria uma lista abaixo com o conteudo do que você clicou. 

Em todos os tipos de consultar abrir um site so com o
 conteudo delas e assim que apertar no certo 
 conteudo mostrar a explicacao com foto e detalhes do back

 Importante: pegar fotos da wiki do dead cells
 */