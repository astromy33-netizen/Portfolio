import React from 'react';
import './Goals.css';
import { goalPoints } from '../data/portfolioData';

const Goals = () => {
  return (
    <section id="goals" className="goals-section section-block">
      <div className="container">
        <div className="goals-card" data-reveal>
          <div>
            <span className="section-kicker">Мои цели</span>
            <h2 className="section-title">Расти в боевой команде и работать с реальными продуктами</h2>
            <p className="goals-text">
              Хочу развиваться как frontend-разработчик, работать с реальными
              продуктами, улучшать навыки React-разработки и получать опыт
              командной разработки.
            </p>
          </div>

          <ul className="goal-points">
            {goalPoints.map((item, index) => (
              <li key={item} style={{ '--reveal-delay': `${index * 0.06}s` }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Goals;
