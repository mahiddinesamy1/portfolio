import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.info}>
            <p className={styles.name}>Samy Mahiddine</p>
            <p className={styles.title}>Développeur Full Stack & Analyste en Cybersécurité</p>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://github.com/mahiddinesamy1" 
               target="_blank" 
               rel="noopener noreferrer"
               className={styles.socialLink}>
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/samy-mahiddine/" 
               target="_blank" 
               rel="noopener noreferrer"
               className={styles.socialLink}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:mahiddinesamy@gmail.com" 
               className={styles.socialLink}>
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} Samy Mahiddine. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}