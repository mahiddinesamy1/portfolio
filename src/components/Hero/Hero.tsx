import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Développeur Full Stack & Analyste en Cybersécurité
          </h1>
          <p className={styles.subtitle}>
            Passionné par la création de solutions robustes et sécurisées
          </p>
          <div className={styles.buttons}>
            <a href="#contact" className={styles.primaryButton}>
              Me Contacter
            </a>
            <a href="/cv.pdf" className={styles.secondaryButton}>
              Télécharger CV
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
    
        </div>
      </div>
    </section>
  );
}