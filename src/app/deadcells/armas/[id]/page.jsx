"use client"

import { useState, useEffect, use } from "react";
import React from 'react'
import styles from './arma.module.css'
import Header from '../../../components/Header/page'
import Footer from '../../../components/Footer/page'
import Link from 'next/link'
import axios from 'axios'

export default function ArmaDetalhe({ params }) {
    const [arma, setArma] = useState(null);
    const [loading, setLoading] = useState(true);

    const resolvedParams = use(params);

    const fetchArma = async (armasId) => {
        try {
            const response = await axios.get(`http://localhost:4000/armas/${armasId}`);
            setArma(response.data);
        } catch (error) {
            console.error("Erro ao buscar arma:", error);
            setArma(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (resolvedParams?.id) {
            fetchArma(resolvedParams.id);
        }
    }, [resolvedParams.id]);

    if (!arma) {
        return (
            <div className={styles.container}>
                <div className={styles.errorMessage}>
                    <h2>Arma não encontrada</h2>
                    <Link href="/deadcells/armas">
                        <button className={styles.backButton}>
                            Voltar para Armas
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.armaCard}>
                <h1 className={styles.armaTitle}>{arma.name}</h1>

                <img
                    src={arma.imageUrl}
                    alt="Arma"
                    className={styles.armaImage}
                />

                <div className={styles.armaInfo}>
                    <div>
                        <h3 className={styles.infoLabel}>Nome:</h3>
                        <p className={styles.infoText}>{arma.name}</p>
                    </div>

                    <div>
                        <h3 className={styles.infoLabel}>Descrição:</h3>
                        <p className={styles.infoText}>{arma.description}</p>
                    </div>

                    <div>
                        <h3 className={styles.infoLabel}>Tipo de Arma:</h3>
                        <p className={styles.infoText}>{arma.typeOfWeapon}</p>
                    </div>

                    <div className={styles.statsContainer}>
                        <h3 className={styles.infoLabel}>Como Obter:</h3>
                        <p className={styles.infoText}>{arma.howToGet}</p>

                        <h3 className={styles.infoLabel}>Localização:</h3>
                        <p className={styles.infoText}>{arma.location}</p>

                        <h3 className={styles.infoLabel}>Custo em Células:</h3>
                        <p className={styles.infoText}>{arma.costOfCells}</p>
                    </div>
                </div>

                <Link href="/deadcells/armas">
                    <button className={styles.backButton}>
                        ← Voltar para Lista de Armas
                    </button>
                </Link>
            </div>

            <Footer />
        </div>
    )
}
