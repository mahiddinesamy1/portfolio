import { Github, Linkedin, Play, MessageSquare } from 'lucide-react';
import styles from './Introduction.module.css';
import { Laptop } from '../Laptop/Laptop';
import { Stat } from '../Utilitaires/Stats';
import { SocialButton } from '../Utilitaires/SocialButton';
import samImage from './sam.png';

export default function Introduction() {
  return (
    <div className={styles.container}>
        
      {/* The background image is handled by styles.imageContainer */}
      {/* Texte et Image */}
      <div className={styles.textImageContainer}>
        <div className={styles.gradientText}>
          <div className={styles.greeting}>👋 Hello! I'm</div>
          <h1 className={styles.heading}>
            <span className={styles.highlight}>Samy</span>, a 
            <span className={styles.highlight}> Software Engineer</span>,
            <br />
            <span className={styles.highlight}>IT Analyst</span> and a
            <br />
            <span className={styles.highlight}>Full Stack Developer</span>.
          </h1>
          <p className={styles.description}>
            Welcome to my universe! I craft intuitive web applications and create innovative solutions.
          </p>
          <div className={styles.stats}>
                
                <Stat value="4+" label="Years Experience" />
                <Stat value="50+" label="Projects Completed" />
                <Stat value="5+" label="Satisfied Clients" />
                <Stat value="40+" label="UI/UX Designs" />
          </div>
              
        
        </div> 
      </div>

      {/* Laptop */}
      <div className={styles.laptopContainer}>
        <Laptop />
      </div>
    </div>
  );
}
