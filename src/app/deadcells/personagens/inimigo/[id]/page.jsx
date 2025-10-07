"use client"

import { useState, useEffect, use } from "react";
import React from 'react'
import styles from './inimigo.module.css'
import Header from '../../../../components/Header/page'
import Footer from '../../../../components/Footer/page'
import Link from 'next/link'
import axios from 'axios'

export default function InimigoDetalhe({ params }) {
    const [inimigo, setInimigo] = useState(null);
    const [loading, setLoading] = useState(true);

    const resolvedParams = use(params);

    const fetchInimigo = async (inimigosId) => {
        try {
            const response = await axios.get(`http://localhost:4000/inimigos/${inimigosId}`);
            setInimigo(response.data);
        } catch (error) {
            console.error("Erro ao buscar inimigo:", error);
            setInimigo(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (resolvedParams?.id) {
            fetchInimigo(resolvedParams.id);
        }
    }, [resolvedParams.id]);

    if (!inimigo) {
        return (
            <div className={styles.container}>
                <div className={styles.errorMessage}>
                    <h2>Inimigo não encontrado</h2>
                    <Link href="/deadcells/personagens">
                        <button className={styles.backButton}>
                            Voltar para Personagens
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.inimigoCard}>

                <img
                    src={inimigo.imageUrl}
                    alt="Mutação"
                    className={styles.inimigoImage}
                />

                <div className={styles.inimigoInfo}>
                    <div>
                        <h3 className={styles.infoLabel}>Nome:</h3>
                        <p className={styles.infoText}>{inimigo.name}</p>
                    </div>

                    <div>
                        <h3 className={styles.infoLabel}>Descrição:</h3>
                        <p className={styles.infoText}>{inimigo.description}</p>
                    </div>

                    <div className={styles.statsContainer}>
                        <h3 className={styles.infoLabel}>Drop:</h3>
                        <p className={styles.infoText}>{inimigo.drop}</p>

                        <h3 className={styles.infoLabel}>Localização:</h3>
                        <p className={styles.infoText}>{inimigo.location}</p>

                        
                        <h3 className={styles.infoLabel}>É um boss?</h3>
                        <p className={styles.infoText}>
                        {inimigo.isBoss === true
                            ? "Sim"
                        : "Não"}</p>   
                    </div>
                </div>

                <Link href="/deadcells/personagens">
                    <button className={styles.backButton}>
                        ← Voltar para Personagens
                    </button>
                </Link>
            </div>

            <Footer />
        </div>
    )
}
