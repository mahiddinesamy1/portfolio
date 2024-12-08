import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <h1 className={styles.logo}>Samy Mahiddine</h1>
        <div className={styles.links}>
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://github.com/mahiddinesamy1" target="_blank" rel="noopener noreferrer">
            <Github size={34} />
          </a>
          <a href="https://www.linkedin.com/in/samy-mahiddine/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={34} />
          </a>
          <a href="mailto:mahiddinesamy@gmail.com">
            <Mail size={34} />
          </a>
        </div>
      </nav>
    </header>
  );
}