'use client'

import { useState, useEffect } from 'react'

export default function Inimigos() {
    const [inimigos, setInimigos] = useState([])
    const apiURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${apiURL}/inimigos`)
            const data = await response.json()

            console.log(data)
            
            setInimigos(data)
        }
        fetchData()
    }, [])

    return (
        <div>
            {inimigos.map((inimigo) => (
                <div key={inimigo.id}>
                    <h2>{inimigo.name}</h2>
                    <p>{inimigo.description}</p>
                </div>
            ))}
        </div>
    )
}