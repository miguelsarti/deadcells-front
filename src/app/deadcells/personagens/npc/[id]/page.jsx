"use client"

import { useState, useEffect, use } from "react";
import React from 'react'
import styles from './npc.module.css'
import Header from '../../../../components/Header/page'
import Footer from '../../../../components/Footer/page'
import Link from 'next/link'
import axios from 'axios'

export default function NpcDetalhe({ params }) {
    const [npc, setNpc] = useState(null);
    const [loading, setLoading] = useState(true);

    const resolvedParams = use(params);

    const fetchNpc = async (npcsId) => {
        try {
            const response = await axios.get(`http://localhost:4000/npcs/${npcsId}`);
            setNpc(response.data);
        } catch (error) {
            console.error("Erro ao buscar npc:", error);
            setNpc(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (resolvedParams?.id) {
            fetchNpc(resolvedParams.id);
        }
    }, [resolvedParams.id]);

    if (!npc) {
        return (
            <div className={styles.container}>
                <div className={styles.errorMessage}>
                    <h2>NPC não encontrada</h2>
                    <Link href="/deadcells/npcs">
                        <button className={styles.backButton}>
                            Voltar para NPCs
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.npcCard}>

                <img
                    src={npc.imageUrl}
                    alt="Mutação"
                    className={styles.npcImage}
                />

                <div className={styles.npcInfo}>
                    <div>
                        <h3 className={styles.infoLabel}>Nome:</h3>
                        <p className={styles.infoText}>{npc.name}</p>
                    </div>

                    <div>
                        <h3 className={styles.infoLabel}>Descrição:</h3>
                        <p className={styles.infoText}>{npc.description}</p>
                    </div>

                    <div className={styles.statsContainer}>
                        <h3 className={styles.infoLabel}>Função:</h3>
                        <p className={styles.infoText}>{npc.functionNpc}</p>

                        <h3 className={styles.infoLabel}>Localização:</h3>
                        <p className={styles.infoText}>{npc.location}</p>   
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
