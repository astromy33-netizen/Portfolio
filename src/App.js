import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">Portfolio</a>
          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Frontend Developer</h1>
          <p className="subtitle">Начинающий разработчик</p>
          <p>Создаю современные и интерактивные веб-приложения</p>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Portfolio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
