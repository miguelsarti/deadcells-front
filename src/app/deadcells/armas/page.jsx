"use client"

import React, { useState, useEffect } from 'react'
import styles from './armas.module.css'
import Header from '../../components/Header/page'
import Footer from '../../components/Footer/page'
import Link from 'next/link'

export default function Armas() {
    const [mostrarArmas, setMostrarArmas] = useState(false)
    const [armas, setArmas] = useState([])
        const apiURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${apiURL}/armas`)
            const data = await response.json()

            console.log(data)
            
            setArmas(data)
        }
        fetchData()
    }, [])

    return (
        <div className={styles.container}>
            <Header />
            
                  <img src='../img/title-deadcells.png' alt="Título do jogo Dead Cells" width={400} height={300} />
                  <h1 className={styles.title}>Armas de Dead Cells</h1>
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
                        width={45} 
                        height={45}
                        style={{ filter: 'brightness(1.2)' }}
                    />
                </button>

                {mostrarArmas && (
                    <div className={styles.weaponContent}>
                        <div className={styles.weaponList}>
                            {armas.map((arma) => (
                                <Link key={arma.id} href={`/deadcells/armas/${arma.id}`}>
                                <div key={arma.id} className={styles.weaponCard}>
                                    <img 
                                        src={arma.imageUrl} 
                                        alt="Armas"
                                        className={styles.weaponImage}
                                    />
                                    <h3 className={styles.weaponName}>{arma.name}</h3>
                            
                                </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    )
}
