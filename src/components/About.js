import React from 'react';
import './About.css';
import { aboutHighlights, profile } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="about-section section-block">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-kicker">Обо мне</span>
          <h2 className="section-title">Коротко и по делу</h2>
          <p className="section-intro">{profile.about}</p>
        </div>

        <div className="about-grid">
          {aboutHighlights.map((item, index) => (
            <article
              key={item.title}
              className="about-card"
              data-reveal
              style={{ '--reveal-delay': `${index * 0.08}s` }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
