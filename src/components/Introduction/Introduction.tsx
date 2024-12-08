import { Github, Linkedin, Play, MessageSquare } from 'lucide-react';
import styles from './Introduction.module.css';
import { Laptop } from '../Laptop/Laptop';
import { Stat } from '../Utilitaires/Stats';
import { SocialButton } from '../Utilitaires/SocialButton';
import samImage from './sam.png';

export default function Introduction() {
  return (
  <div className={styles.gradientText}>
    <div className={styles.greeting}>👋  Bienvenue </div>
    <h1 className={styles.heading}>
      <span className={styles.highlight}> Ingénieur logiciel</span>
      <br />
      <span className={styles.highlight}>Analyste en informatique</span>
      <br />
      <span className={styles.highlight}>Développeur full stack</span>
    </h1>
    <br/>
    <p className={styles.description}>Conception d'applications web et de solutions innovantes.</p> 
    <div className={styles.stats}>
      <Stat value="04+" label="Years Experience" />
      <Stat value="50+" label="Projects Completed" />
      <Stat value="05+" label="Satisfied Clients" />
      <Stat value="10+" label="Years In Technologie" />
    </div>
  </div> 


  );
}
