"use client"

import React, { useState, useEffect } from 'react'
import styles from './personagens.module.css'
import Header from '../../components/Header/page'
import Footer from '../../components/Footer/page'
import Link from 'next/link'

export default function Personagens() {
    const [mostrarNPCs, setMostrarNPCs] = useState(false)
    const [mostrarInimigos, setMostrarInimigos] = useState(false)
        const [inimigos, setInimigos] = useState([])
        const [npcs, setNPCs] = useState([])

        const apiURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${apiURL}/npcs`) 
            const responseData = await fetch(`${apiURL}/inimigos`)

            const data = await response.json()
            const database = await responseData.json()

            console.log(data)
            
            setNPCs(data)
            setInimigos(database)
        }
        fetchData()
    }, [])

    return (
        <div className={styles.container}>
            <Header />
            <img src='../img/title-deadcells.png' alt="Título do jogo Dead Cells" width={400} height={300} />
            <h1 className={styles.title}>Personagens de Dead Cells</h1>
            <p className={styles.description}>
                Conheça os diversos personagens que você encontrará em sua jornada por Dead Cells.
                De NPCs amigáveis a inimigos mortais, cada um tem seu papel único no jogo.
            </p>

            <div className={styles.buttonContainer}>
                <button 
                    className={styles.sectionButton}
                    onClick={() => setMostrarNPCs(!mostrarNPCs)}
                >
                    {mostrarNPCs ? "Ocultar NPCs" : "Mostrar NPCs"}
                    <img 
                        src="/img/personagens.png" 
                        alt="ícone de NPCs" 
                        width={45} 
                        height={45}
                        style={{ filter: 'brightness(1.2)' }}
                    />
                </button>

                <button 
                    className={styles.sectionButton}
                    onClick={() => setMostrarInimigos(!mostrarInimigos)}
                >
                    {mostrarInimigos ? "Ocultar Inimigos" : "Mostrar Inimigos"}
                    <img 
                        src="/img/inimigo.png" 
                        alt="ícone de inimigos" 
                        width={45} 
                        height={45}
                        style={{ filter: 'brightness(1.2)' }}
                    />
                </button>
            </div>

            <div className={styles.characterSection}>
                {mostrarNPCs && (
                    <div className={styles.characterContent}>
                        <h2 className={styles.characterName}>NPCs</h2>
                        <div className={styles.characterGrid}>
                            {npcs.map((npc) => (
                                <Link key={npc.id} href={`/deadcells/personagens/npc/${npc.id}`}>
                                <div key={npc.id} className={styles.characterCard}>
                                    <img 
                                        src={npc.imageUrl} 
                                        alt="NPC"
                                        className={styles.characterImage}
                                    />
                                    <h3 className={styles.characterName}>{npc.name}</h3>
                                </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {mostrarInimigos && (
                    <div className={styles.characterContent}>
                        <h2 className={styles.characterName}>Inimigos</h2>
                        <div className={styles.characterGrid}>
                            {inimigos.map((inimigo) => (
                                <Link key={inimigo.id} href={`/deadcells/personagens/inimigo/${inimigo.id}`}>
                                <div key={inimigo.id} className={styles.characterCard}>
                                    <img 
                                        src={inimigo.imageUrl} 
                                        alt={inimigo.nome}
                                        className={styles.characterImage}
                                    />
                                    <h3 className={styles.characterName}>{inimigo.name}</h3>
                                </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
)}

