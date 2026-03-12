import React from 'react';
import './Skills.css';
import { stackCategories } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="skills-section section-block">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-kicker">Стек технологий</span>
          <h2 className="section-title">Технологии по категориям</h2>
          <p className="section-intro">
            Стек собран так, чтобы сразу показать основу frontend-разработки,
            опыт интеграции с API и инструменты, с которыми я работаю каждый день.
          </p>
        </div>

        <div className="skills-grid">
          {stackCategories.map((category, index) => (
            <article
              key={category.title}
              className="skill-group"
              data-reveal
              style={{ '--reveal-delay': `${index * 0.08}s` }}
            >
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
