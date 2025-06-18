import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Проекты</h2>
      <motion.div
        className="project-item animate-on-scroll"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="project-name">EduOk - Образовательная платформа</div>
        <div className="date">Январь 2024 — настоящее время</div>
        <ul>
          <li>Разработка платформы для поиска университетов по критериям</li>
          <li>Реализация сложной фильтрации и поиска</li>
          <li>Интеграция с API университетов</li>
          <li>Использование React, Express.js и MongoDB</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Projects;