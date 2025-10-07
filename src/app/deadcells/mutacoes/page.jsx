"use client"

import React, { useState, useEffect } from 'react'
import styles from './mutacoes.module.css'
import Header from '../../components/Header/page'
import Footer from '../../components/Footer/page'
import Link from 'next/link'

export default function Mutacoes() {
    const [mostrarMutacoes, setMostrarMutacoes] = useState(false)
    const [mutacoes, setMutacoes] = useState([])
        const apiURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${apiURL}/mutacoes`)
            const data = await response.json()

            console.log(data)
            
            setMutacoes(data)
        }
        fetchData()
    }, [])

    return (
        <div className={styles.container}>
            <Header />
            
                  <img src='../img/title-deadcells.png' alt="Título do jogo Dead Cells" width={400} height={300} />
                  <h1 className={styles.title}>Mutações de Dead Cells</h1>
            <p className={styles.description}>
                Descubra todas as mutações disponíveis em Dead Cells, suas características e como obtê-las.
                Cada mutação possui seu próprio estilo de combate e estratégias únicas.
                Consulte as mutações disponíveis e escolha a que melhor se adapta ao seu estilo de jogo!
            </p>

            <div className={styles.mutationSection}>
                <button 
                    className={styles.mutationButton}
                    onClick={() => setMostrarMutacoes(!mostrarMutacoes)}
                >
                    {mostrarMutacoes ? "Ocultar Mutações" : "Mostrar Mutações"}
                    <img 
                        src="/img/mutations.png" 
                        alt="ícone de mutações" 
                        width={45} 
                        height={45}
                        style={{ filter: 'brightness(1.2)' }}
                    />
                </button>

                {mostrarMutacoes && (
                    <div className={styles.mutationContent}>
                        <div className={styles.mutationList}>
                            {mutacoes.map((mutacao) => (
                                <Link key={mutacao.id} href={`/deadcells/mutacoes/${mutacao.id}`}>
                                <div key={mutacao.id} className={styles.mutationCard}>
                                    <img 
                                        src={mutacao.imageUrl} 
                                        alt="Mutação"
                                        className={styles.mutationImage}
                                    />
                                    <h3 className={styles.mutationName}>{mutacao.name}</h3>
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
