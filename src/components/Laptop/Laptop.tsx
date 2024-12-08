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
    Twitter,
    Import
} from 'lucide-react';
import About from '../About/About';
import { ProjectCard } from '../Utilitaires/ProjectCard';
import Skills from '../Skills';
import Projects from '../Projects';
import Hero from '../Hero';

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

  return (
    <section className={styles.laptop}>
      <div className={styles.screen}>
        {/* Space background */}
        <div className={styles.spaceBackground}/>
        
        <div className={styles.content}>
        </div>
        {/* Display Folders */}
        {!screenContent && (
          
          <section className={styles.stacks}>
            <div className={styles.react}> </div>
            <div className={styles.express}> </div>
            <div className={styles.java}> </div>
            <div className={styles.sql}> </div>
            <div className={styles.git}> </div>
            <div className={styles.ts}> </div>
            <div className={styles.firebase}> </div>
            <div className={styles.docker}></div>
          </section>
        )}
       

        {/* Screen Content */}
        {screenContent ? (
          <div className={styles.screenContent}>
            <button className={styles.backButton} onClick={handleBackClick}>
              Back
            </button>
            {screenContent}
          </div>
        ) : (
          <div className={styles.dock}>
            <AppIcon icon={<User size={15} />} label="About" onClick={() => handleClick(<About />)} />
            <AppIcon icon={<Brain size={15} />} label="Skills" onClick={() => handleClick(<Skills/>)} />
            <AppIcon icon={<FileCode size={15} />} label="Projects" onClick={() => handleClick(<Projects/>)} />
            <AppIcon icon={<Trophy size={15} />} label="Experience" onClick={() => handleClick(<Hero/>)} />
            <AppIcon icon={<Github size={15} />} label="Github" href="https://github.com" />
            <AppIcon icon={<Linkedin size={15} />} label="LinkedIn" href="https://linkedin.com" />
            <AppIcon icon={<Twitter size={15} />} label="Twitter" href="https://twitter.com" />
          </div>
        )}
      </div>
      <div className={styles.keyboard}></div>
    </section>
  );
}
