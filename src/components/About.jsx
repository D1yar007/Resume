import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about">
      <h2>Обо мне</h2>
      <motion.div
        className="animate-on-scroll"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>Backend-разработчик с коммерческим опытом работы в Европейской Академии Водителей. Специализируюсь на создании серверной логики, REST API и интеграции различных сервисов.</p>
        <p>Имею несколько завершенных проектов и один в разработке с использованием стека React, Express и Docker.</p>
        <p>Английский язык — продвинутый уровень. Поступаю в университет после завершения годового курса в MetaCoding.</p>
      </motion.div>
    </section>
  );
};

export default About;