import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import styles from '../Projects/Projects.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string; // liveUrl est désormais facultatif
  tech: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, githubUrl, liveUrl, tech }) => (
  <div className={styles.card}>
    <img src={image} alt={title} className={styles.image} />
    <div className={styles.content}>
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.tags}>
        {tech.map((item, index) => (
          <span key={index} className={styles.tag}>
            {item}
          </span>
        ))}
      </div>
      <div className={styles.links}>
        {githubUrl && (
          <a href={githubUrl} 
             target="_blank" 
             rel="noopener noreferrer"
             className={styles.link}>
            <Github className={styles.linkIcon} />
            Code
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} 
             target="_blank" 
             rel="noopener noreferrer"
             className={styles.link}>
            <ExternalLink className={styles.linkIcon} />
            Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

export default function Projects() {
  const projects = [
    {
      title: "Course Planner",
      description: "Application web pour optimiser la planification des cours et la gestion des activités Moodle",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=500",
      githubUrl: "https://github.com/mahiddinesamy1/course-planner",
      liveUrl: "https://mahiddinesamy1.github.io/course-planner/",
      tech: ["React", "TypeScript", "Material-UI"]
    },
    {
      title: "Fight Time Championship",
      description: "Plateforme de gestion d'événements sportifs de combat au Canada",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=500",
      githubUrl: "https://github.com/mahiddinesamy1/fighttimechampionship",
      liveUrl: "https://fighttimechampionship-firebase.web.app",
      tech: ["React", "Firebase", "Tailwind CSS"]
    },
    {
      title: "Global API Newsletter",
      description: "API RESTful pour la gestion des abonnements aux newsletters",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=500",
      githubUrl: "https://github.com/mahiddinesamy1/Global-API-Newsletter",
      tech: ["Node.js", "Express", "MongoDB"] // Pas de liveUrl ici
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
    
        <h2 className={styles.title}>Projets</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

    </section>
  );
}
