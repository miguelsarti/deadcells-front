import React from 'react';
import styles from './contato.module.css'
import Header from '../components/Header/page'
import Footer from '../components/Footer/page'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <h1 className={styles.title}>Entre em Contato</h1>
        <p className={styles.description}>
          Envie suas dúvidas, sugestões ou comentários sobre Dead Cells. Estamos sempre buscando melhorar e sua opinião é muito importante para nós!
        </p>
        
        <div className={styles.formContainer}>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Nome:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className={styles.input}
                placeholder="Digite seu nome"
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>E-mail:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className={styles.input}
                placeholder="Digite seu e-mail"
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Mensagem:</label>
              <textarea 
                id="message" 
                name="message" 
                className={styles.textarea}
                placeholder="Digite sua mensagem"
                required 
              />
            </div>

            <button type="submit" className={styles.button}>
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

