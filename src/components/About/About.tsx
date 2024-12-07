import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>À Propos</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              Diplômé en Génie TI de l'École de Technologie Supérieure, je combine une expertise 
              en développement Full Stack avec une spécialisation en cybersécurité.
            </p>
            <p className={styles.paragraph}>
              Mon parcours professionnel inclut des expériences enrichissantes chez des entreprises 
              renommées comme STM, Workleap, et Desjardins, où j'ai développé des solutions 
              innovantes tout en maintenant les plus hauts standards de sécurité.
            </p>
            <p className={styles.paragraph}>
              Je suis passionné par la résolution de problèmes complexes et la création de 
              solutions technologiques robustes et évolutives.
            </p>
          </div>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <h3 className={styles.statTitle}>Formation</h3>
              <p>École de Technologie Supérieure</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statTitle}>Expérience</h3>
              <p>5+ ans en développement</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statTitle}>Spécialité</h3>
              <p>Cybersécurité</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statTitle}>Langues</h3>
              <p>Français, Anglais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}