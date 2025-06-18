import React from 'react';
import { motion } from 'framer-motion';

const ContactModal = ({ isOpen, toggleModal }) => {
  const handleContact = (platform) => {
    if (platform === 'whatsapp') {
      window.open('https://wa.me/77475971303', '_blank');
    } else if (platform === 'telegram') {
      window.open('https://t.me/web_dep', '_blank');
    }
    toggleModal();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <motion.div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <h3>Выберите способ связи</h3>
            <div className="contact-options">
              <motion.button 
                className="contact-option whatsapp"
                onClick={() => handleContact('whatsapp')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp
              </motion.button>
              <motion.button 
                className="contact-option telegram"
                onClick={() => handleContact('telegram')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Telegram (@web_dep)
              </motion.button>
            </div>
            <button className="close-button" onClick={toggleModal}>
              Закрыть
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ContactModal;