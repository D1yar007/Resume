import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Опыт работы</h2>
      <motion.div
        className="experience-item animate-on-scroll"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="job-title">Backend Developer</div>
        <div className="company">Европейская Академия Водителей</div>
        <div className="date">Май 2024 — Июль 2024 (3 месяца)</div>
        <ul>
          <li>Разработка API для внутренних систем академии</li>
          <li>Создание и оптимизация баз данных</li>
          <li>Интеграция платежных систем</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Experience;