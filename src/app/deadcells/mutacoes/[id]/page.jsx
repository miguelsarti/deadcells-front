"use client"

import { useState, useEffect, use } from "react";
import React from 'react'
import styles from './mutacao.module.css'
import Header from '../../../components/Header/page'
import Footer from '../../../components/Footer/page'
import Link from 'next/link'
import axios from 'axios'

export default function MutacaoDetalhe({ params }) {
    const [mutacao, setMutacao] = useState(null);
    const [loading, setLoading] = useState(true);

    const resolvedParams = use(params);

    const fetchMutacao = async (mutacoesId) => {
        try {
            const response = await axios.get(`http://localhost:4000/mutacoes/${mutacoesId}`);
            setMutacao(response.data);
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            setMutacao(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (resolvedParams?.id) {
            fetchMutacao(resolvedParams.id);
        }
    }, [resolvedParams.id]);

    if (!mutacao) {
        return (
            <div className={styles.container}>
                <div className={styles.errorMessage}>
                    <h2>Mutação não encontrada</h2>
                    <Link href="/deadcells/mutacoes">
                        <button className={styles.backButton}>
                            Voltar para Mutações
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.mutationCard}>
                <h1 className={styles.mutationTitle}>{mutacao.name}</h1>

                <img
                    src={mutacao.imageUrl}
                    alt="Mutação"
                    className={styles.mutationImage}
                />

                <div className={styles.mutationInfo}>
                    <div>
                        <h3 className={styles.infoLabel}>Nome:</h3>
                        <p className={styles.infoText}>{mutacao.name}</p>
                    </div>

                    <div>
                        <h3 className={styles.infoLabel}>Descrição:</h3>
                        <p className={styles.infoText}>{mutacao.description}</p>
                    </div>

                    <div className={styles.statsContainer}>
                        <h3 className={styles.infoLabel}>Como Obter:</h3>
                        <p className={styles.infoText}>{mutacao.howToGet}</p>

                        <h3 className={styles.infoLabel}>Localização:</h3>
                        <p className={styles.infoText}>{mutacao.location}</p>

                        <h3 className={styles.infoLabel}>Custo em Células:</h3>
                        <p className={styles.infoText}>{mutacao.costOfCells}</p>
                    </div>
                </div>

                <Link href="/deadcells/mutacoes">
                    <button className={styles.backButton}>
                        ← Voltar para Lista de Mutações
                    </button>
                </Link>
            </div>

            <Footer />
        </div>
    )
}
