import React from 'react';
import './Strengths.css';
import { softSkills, teamStrengths } from '../data/portfolioData';

const Strengths = () => {
  return (
    <section id="strengths" className="strengths-section section-block">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-kicker">Чем я полезен команде</span>
          <h2 className="section-title">Практическая польза и soft skills</h2>
          <p className="section-intro">
            Этот блок показывает, что я не просто изучаю технологии, а уже умею
            применять их в проектах и работать в понятном командном ритме.
          </p>
        </div>

        <div className="strengths-grid">
          <article className="strength-card" data-reveal style={{ '--reveal-delay': '0s' }}>
            <h3>Чем я полезен команде</h3>
            <ul>
              {teamStrengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="strength-card" data-reveal style={{ '--reveal-delay': '0.08s' }}>
            <h3>Soft skills</h3>
            <ul>
              {softSkills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Strengths;
