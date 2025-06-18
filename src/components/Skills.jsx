import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'REST API', 'JWT', 'Websockets']
    },
    {
      category: 'Frontend',
      items: ['React', 'HTML/CSS']
    },
    {
      category: 'Инструменты',
      items: ['Docker', 'Git', 'Postman', 'Nginx']
    },
    {
      category: 'Базы данных',
      items: ['MongoDB', 'PostgreSQL']
    }
  ];

  return (
    <section id="skills">
      <h2>Навыки</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.category}
            className="skill-category animate-on-scroll"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;