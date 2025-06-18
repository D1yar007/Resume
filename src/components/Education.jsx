import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education">
      <h2>Образование</h2>
      
      <motion.div
        className="experience-item animate-on-scroll"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="company">Технологический университет МУИТ</div>
        <div className="date">2025 — настоящее время (поступаю)</div>
        <p>Программа по разработке программного обеспечения</p>
      </motion.div>

      <motion.div
        className="experience-item animate-on-scroll"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="company">MetaCoding</div>
        <div className="date">Июнь 2024 — Июнь 2025</div>
        <p>Годовой курс по программированию с углубленным изучением backend-разработки</p>
      </motion.div>

      <motion.div
        className="experience-item animate-on-scroll"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="company">Средняя школа</div>
        <div className="date">2012 — 2023</div>
        <p>11 классов образования</p>
      </motion.div>
    </section>
  );
};

export default Education;