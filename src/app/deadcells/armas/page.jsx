"use client"

import React, { useState } from 'react'
import styles from './armas.module.css'
import Header from '../../components/Header/page'
import Footer from '../../components/Footer/page'

export default function Armas() {
    const [mostrarArmas, setMostrarArmas] = useState(false)

    const armas = [
        {
            id: 1,
            nome: "Espada Quebrada",
            descricao: "Uma espada simples e rápida, perfeita para iniciantes.",
            imagem: "/img/weapons/broken-sword.png"
        },
        {
            id: 2,
            nome: "Adaga Gêmea",
            descricao: "Par de adagas que causa dano rápido e crítico.",
            imagem: "/img/weapons/twin-daggers.png"
        },
        {
            id: 3,
            nome: "Arco Rápido",
            descricao: "Arco veloz para ataques à distância.",
            imagem: "/img/weapons/quick-bow.png"
        },
        {
            id: 4,
            nome: "Escudo de Madeira",
            descricao: "Proteção básica contra ataques inimigos.",
            imagem: "/img/weapons/wooden-shield.png"
        }
    ]

    return (
        <div className={styles.container}>
            <Header />
            
                  <img src='../img/title-deadcells.png' alt="Título do jogo Dead Cells" width={400} height={300} />
                  <h1 className={styles.title}>Armas em Dead Cells</h1>
            <p className={styles.description}>
                Descubra todas as armas disponíveis em Dead Cells, suas características e como obtê-las.
                Cada arma possui seu próprio estilo de combate e estratégias únicas.
                Consulte as armas disponíveis e escolha a que melhor se adapta ao seu estilo de jogo!
            </p>

            <div className={styles.weaponSection}>
                <button 
                    className={styles.weaponButton}
                    onClick={() => setMostrarArmas(!mostrarArmas)}
                >
                    {mostrarArmas ? "Ocultar Armas" : "Mostrar Armas"}
                    <img 
                        src="/img/gears.png" 
                        alt="ícone de armas" 
                        width={30} 
                        height={30}
                        style={{ filter: 'brightness(1.2)' }}
                    />
                </button>

                {mostrarArmas && (
                    <div className={styles.weaponContent}>
                        <div className={styles.weaponList}>
                            {armas.map((arma) => (
                                <div key={arma.id} className={styles.weaponCard}>
                                    <img 
                                        src={arma.imagem} 
                                        alt={arma.nome}
                                        className={styles.weaponImage}
                                    />
                                    <h3 className={styles.weaponName}>{arma.nome}</h3>
                                    <p className={styles.weaponDescription}>{arma.descricao}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    )
}
