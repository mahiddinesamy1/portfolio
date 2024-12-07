import { useState } from 'react';
import styles from './Laptop.module.css';
import { Stat } from '../Utilitaires/Stats';
import { SocialButton } from '../Utilitaires/SocialButton';
import { AppIcon } from '../Utilitaires/AppIcone';
import {
    User,
    Brain,
    FileCode,
    Wrench,
    Github,
    Trophy,
    Linkedin,
    Twitter
} from 'lucide-react';
import About from '../About/About';
import { ProjectCard } from '../Utilitaires/ProjectCard';

export function Laptop() {
  const [screenContent, setScreenContent] = useState<string | JSX.Element>('');
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = (content: JSX.Element) => {
    setScreenContent(content);
    setShowDetails(true);
  };

  const handleBackClick = () => {
    setShowDetails(false);
    setScreenContent('');
  };

  // Sample projects data
  const projects = [
    {
      title: 'Project 1',
      description: 'A cool project',
      imageUrl: 'https://via.placeholder.com/120x120',
      onClick: () => handleClick(<div>Project 1 Details</div>)
    },
    {
      title: 'Project 2',
      description: 'Another project',
      imageUrl: 'https://via.placeholder.com/120x120',
      onClick: () => handleClick(<div>Project 2 Details</div>)
    },
    {
      title: 'Project 3',
      description: 'Yet another project',
      imageUrl: 'https://via.placeholder.com/120x120',
      onClick: () => handleClick(<div>Project 3 Details</div>)
    }
  ];

  // Generate 50 random stars
  const stars = Array.from({ length: 50 }).map((_, i) => (
    <div
      key={i}
      className={styles.star}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    ></div>
  ));

  return (
    <div className={styles.laptop}>
      <div className={styles.screen}>
        {/* Space background */}
        <div className={styles.spaceBackground}>{stars}</div>
        <div className={styles.content}>
            <div>
              <div className={styles.greeting}>👋 Hello! I'm</div>
              <h1 className={styles.heading}>
                <span className={styles.highlight}>Samy</span>, a 
                <span className={styles.highlight}> Software Engineer</span>,
                <br/>
                <span className={styles.highlight}>IT Analyst</span> and a
                <br />
                <span className={styles.highlight}>Full Stack Developer</span>.
              </h1>
              <p className={styles.description}>
                Welcome to my  universe! I craft intuitive web applications and create innovative solutions.
              </p>
            </div>

            
          </div>
        {/* Display Folders */}
        {!screenContent && (
          <div className={styles.folders}>
            <div className={styles.folder}  onClick={() => handleClick(<div>Project 1 Page</div>)}>

              <p>Project 1</p>
            </div>
            <div className={styles.folder} onClick={() => handleClick(<div>Project 2 Page</div>)}>
             
              <p>Project 2</p>
            </div>
            <div className={styles.folder} onClick={() => handleClick(<div>Project 3 Page</div>)}>
             
              <p>Project 3</p>
            </div>
          </div>
        )}

        {/* Screen Content */}
        {screenContent ? (
          <div className={styles.screenContent}>
            <button className={styles.backButton} onClick={handleBackClick}>
              Back to Apps
            </button>
            {screenContent}
          </div>
        ) : (
          <div className={styles.dock}>
       
            <AppIcon icon={<User size={24} />} label="About" onClick={() => handleClick(<About />)} />
            <AppIcon icon={<Brain size={24} />} label="Skills" onClick={() => handleClick(<div>Skills Content</div>)} />
            <AppIcon icon={<FileCode size={24} />} label="Projects" onClick={() => handleClick(<div>Projects Content</div>)} />
            <AppIcon icon={<Wrench size={24} />} label="Tools" onClick={() => handleClick(<div>Tools Content</div>)} />
            <AppIcon icon={<Trophy size={24} />} label="Experience" onClick={() => handleClick(<div>Experience Content</div>)} />
            <AppIcon icon={<Github size={24} />} label="Github" href="https://github.com" />
            <AppIcon icon={<Linkedin size={24} />} label="LinkedIn" href="https://linkedin.com" />
            <AppIcon icon={<Twitter size={24} />} label="Twitter" href="https://twitter.com" />
          </div>
        )}
      </div>
      <div className={styles.keyboard}></div>
    </div>
  );
}
