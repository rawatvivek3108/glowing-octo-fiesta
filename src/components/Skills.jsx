import React from 'react';
import styles from './Skills.module.css';
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5 } from 'react-icons/fa';

const skills = [
  {
    name: 'React',
    icon: FaReact,
    color: '#61DBFB',
    link: 'https://github.com/rawatvivek92658/turbo-broccoli'
  },
  {
    name: 'JavaScript',
    icon: FaJsSquare,
    color: '#F0DB4F'
  },
  {
    name: 'CSS3',
    icon: FaCss3Alt,
    color: '#264de4',
    link: 'https://github.com/rawatvivek92658/congenial-winner'
  },
  {
    name: 'HTML',
    icon: FaHtml5,
    color: '#F1502F'
  }
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.title}>Skills Overview</h2>
      <div className={styles.skillsContainer}>
        {skills.map(({ name, icon: Icon, color, link }, index) => {
          const content = (
            <div className={styles.skillBadge} title={name}>
              <div className={styles.iconWrapper}>
                <Icon size={48} color={color} className={styles.icon} />
              </div>
              <span>{name}</span>
            </div>
          );
          return link ? (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkWrapper}
            >
              {content}
            </a>
          ) : (
            <div key={index}>{content}</div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
