import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ toggleModal }) => {
  return (
    <header className="header">
      <div className="header-content">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Дияр Илиев
        </motion.h1>
        <motion.div 
          className="title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Backend Developer (Express.js)
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Разработчик образовательной платформы EduOk. Специализация: Node.js, Express, REST API.
        </motion.p>
        
        <div className="contact-info">
          <motion.div 
            className="contact-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span>📍</span>
            <span>Алматы, Казахстан</span>
          </motion.div>
          <motion.div 
            className="contact-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <span>✉</span>
            <span>diyar.iliyev@gmail.com</span>
          </motion.div>
          <motion.div 
            className="contact-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span>📱</span>
            <span>Telegram: @web_dep</span>
          </motion.div>
        </div>

        <motion.button 
          className="contact-button"
          onClick={toggleModal}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Написать мне
        </motion.button>
      </div>
    </header>
  );
};

export default Header;