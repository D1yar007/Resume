import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import './styles/App.css';
import './styles/components.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="app">
      <Header toggleModal={toggleModal} />
      <main className="main-content">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
}

export default App;