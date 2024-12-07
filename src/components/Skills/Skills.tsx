import React from 'react';
import { Code2, Database, Shield, Workflow } from 'lucide-react';
import styles from './Skills.module.css';

const SkillCard = ({ title, skills, icon: Icon }) => (
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} size={24} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
    <div>
      {skills.map((skill, index) => (
        <div key={index} className={styles.skillItem}>
          <div className={styles.skillHeader}>
            <span className={styles.skillName}>{skill.name}</span>
            <span className={styles.skillLevel}>{skill.level}</span>
          </div>
          <div className={styles.ratingBar}>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`${styles.ratingUnit} ${
                  i < skill.rating ? styles.ratingFilled : styles.ratingEmpty
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Skills() {
  const skillCategories = [
    {
      title: "Développement",
      icon: Code2,
      skills: [
        { name: "React/React Native", rating: 5, level: "Expert" },
        { name: "TypeScript/JavaScript", rating: 5, level: "Expert" },
        { name: "C#/.NET", rating: 4, level: "Avancé" },
        { name: "Java", rating: 4, level: "Avancé" }
      ]
    },
    {
      title: "Base de données",
      icon: Database,
      skills: [
        { name: "SQL", rating: 4, level: "Avancé" },
        { name: "MongoDB", rating: 4, level: "Avancé" },
        { name: "Firebase", rating: 4, level: "Avancé" }
      ]
    },
    {
      title: "Cybersécurité",
      icon: Shield,
      skills: [
        { name: "Audit de sécurité", rating: 4, level: "Avancé" },
        { name: "SIEM", rating: 4, level: "Avancé" },
        { name: "Gestion des risques", rating: 5, level: "Expert" }
      ]
    },
    {
      title: "DevOps",
      icon: Workflow,
      skills: [
        { name: "Docker", rating: 4, level: "Avancé" },
        { name: "Kubernetes", rating: 3, level: "Intermédiaire" },
        { name: "CI/CD", rating: 4, level: "Avancé" }
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Compétences</h2>
          <p className={styles.subtitle}>Expertise technique et domaines de spécialisation</p>
        </div>
        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}