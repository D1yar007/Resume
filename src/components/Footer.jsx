import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <p>© {new Date().getFullYear()} Дияр Илиев | Все права защищены</p>
    </motion.footer>
  );
};

export default Footer;