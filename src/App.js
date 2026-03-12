import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Strengths from './components/Strengths';
import Goals from './components/Goals';
import Contact from './components/Contact';
import { heroFacts, heroHighlights, profile } from './data/portfolioData';

const navItems = [
  { label: 'Главная', href: '#home' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Стек', href: '#skills' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Команде', href: '#strengths' },
  { label: 'Цели', href: '#goals' },
  { label: 'Контакты', href: '#contact' },
];

const particles = [
  { left: '6%', top: '14%', size: '8px', duration: '18s', delay: '-4s' },
  { left: '13%', top: '64%', size: '6px', duration: '22s', delay: '-8s' },
  { left: '18%', top: '34%', size: '4px', duration: '16s', delay: '-2s' },
  { left: '26%', top: '78%', size: '10px', duration: '20s', delay: '-11s' },
  { left: '34%', top: '18%', size: '6px', duration: '17s', delay: '-6s' },
  { left: '45%', top: '56%', size: '12px', duration: '24s', delay: '-9s' },
  { left: '53%', top: '22%', size: '5px', duration: '15s', delay: '-3s' },
  { left: '62%', top: '72%', size: '7px', duration: '19s', delay: '-7s' },
  { left: '71%', top: '16%', size: '9px', duration: '23s', delay: '-10s' },
  { left: '77%', top: '42%', size: '5px', duration: '14s', delay: '-5s' },
  { left: '84%', top: '68%', size: '11px', duration: '21s', delay: '-12s' },
  { left: '91%', top: '26%', size: '6px', duration: '18s', delay: '-1s' },
];

const STORAGE_KEY = 'portfolio-theme';

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const revealStyle = (index, step = 0.08) => ({
  '--reveal-delay': `${index * step}s`,
});

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const appRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const elements = document.querySelectorAll('[data-reveal]');

    if (reduceMotion.matches) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -10%',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = appRef.current;

    if (!root) {
      return undefined;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reduceMotion.matches) {
      return undefined;
    }

    const updatePointer = (pointerX, pointerY, parallaxX, parallaxY) => {
      root.style.setProperty('--pointer-x', `${pointerX}%`);
      root.style.setProperty('--pointer-y', `${pointerY}%`);
      root.style.setProperty('--parallax-x', `${parallaxX}px`);
      root.style.setProperty('--parallax-y', `${parallaxY}px`);
      frameRef.current = null;
    };

    const handlePointerMove = (event) => {
      const pointerX = (event.clientX / window.innerWidth) * 100;
      const pointerY = (event.clientY / window.innerHeight) * 100;
      const parallaxX = (event.clientX / window.innerWidth - 0.5) * 16;
      const parallaxY = (event.clientY / window.innerHeight - 0.5) * 16;

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = window.requestAnimationFrame(() => {
        updatePointer(pointerX, pointerY, parallaxX, parallaxY);
      });
    };

    const resetPointer = () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = window.requestAnimationFrame(() => {
        updatePointer(50, 42, 0, 0);
      });
    };

    const handleWindowLeave = (event) => {
      if (!event.relatedTarget && !event.toElement) {
        resetPointer();
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('blur', resetPointer);
    window.addEventListener('mouseout', handleWindowLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('blur', resetPointer);
      window.removeEventListener('mouseout', handleWindowLeave);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div ref={appRef} className="app-shell">
      <div className="site-background" aria-hidden="true">
        <div className="background-gradient" />
        <div className="background-mesh" />
        <div className="background-grid" />
        <div className="background-spotlight" />
        <div className="background-orb orb-one" />
        <div className="background-orb orb-two" />
        <div className="background-orb orb-three" />
        <div className="background-particles">
          {particles.map((particle) => (
            <span
              key={`${particle.left}-${particle.top}`}
              className="particle"
              style={{
                '--particle-left': particle.left,
                '--particle-top': particle.top,
                '--particle-size': particle.size,
                '--particle-duration': particle.duration,
                '--particle-delay': particle.delay,
              }}
            />
          ))}
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            Дастан Кутманбеков
          </a>

          <div className="nav-actions">
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-toolbar">
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на темную тему'}
                aria-pressed={theme === 'dark'}
              >
                <span className="theme-toggle-track">
                  <span className="theme-icon theme-icon-sun" />
                  <span className="theme-icon theme-icon-moon" />
                  <span className="theme-toggle-thumb">
                    <span className="theme-toggle-core" />
                  </span>
                </span>
              </button>

              <button
                className="mobile-menu-toggle"
                onClick={toggleMenu}
                aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
              >
                {menuOpen ? 'Close' : 'Menu'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-ambient" aria-hidden="true">
            <span className="hero-blob hero-blob-one" />
            <span className="hero-blob hero-blob-two" />
            <span className="hero-blob hero-blob-three" />
            <span className="hero-grid-overlay" />
            <span className="hero-shimmer" />
          </div>

          <div className="container hero-layout">
            <div className="hero-copy" data-reveal>
              <span className="hero-badge">Open to internship</span>
              <h1 className="hero-title">{profile.name}</h1>
              <p className="hero-role">{profile.role}</p>
              <p className="hero-summary">{profile.summary}</p>

              <div className="hero-actions">
                <a
                  className="button-link"
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="button-link button-link-secondary"
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Резюме
                </a>
                <a className="button-link button-link-ghost" href="#contact">
                  Связаться
                </a>
              </div>

              <div className="hero-facts">
                {heroFacts.map((fact, index) => (
                  <article
                    key={fact.value}
                    className="fact-card"
                    data-reveal
                    style={revealStyle(index + 1)}
                  >
                    <h2>{fact.value}</h2>
                    <p>{fact.label}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="hero-panel" data-reveal style={revealStyle(1)}>
              <div>
                <p className="panel-kicker">Что я уже умею</p>
                <ul className="hero-highlights">
                  {heroHighlights.map((item, index) => (
                    <li key={item} style={revealStyle(index, 0.06)}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hero-panel-footer">
                <div className="hero-panel-item">
                  <span>Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
                <div className="hero-panel-item">
                  <span>GitHub</span>
                  <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                    astromy33-netizen
                  </a>
                </div>
                <div className="hero-panel-item">
                  <span>Город</span>
                  <strong>{profile.city}</strong>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <About />
        <Skills />
        <Projects />
        <Strengths />
        <Goals />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-content" data-reveal>
          <p>Дастан Кутманбеков</p>
          <span>Frontend Developer | React Developer</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
