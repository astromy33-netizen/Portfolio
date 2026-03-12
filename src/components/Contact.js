import React from 'react';
import './Contact.css';
import { contacts, profile } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section-block">
      <div className="container contact-layout">
        <div className="contact-copy" data-reveal>
          <div className="section-head">
            <span className="section-kicker">Контакты</span>
            <h2 className="section-title">Открыт к стажировке и первым продуктовым задачам</h2>
            <p className="section-intro">
              Если вам нужен junior frontend-разработчик, который уже работал с
              React, Redux и API и хочет быстро расти в команде, со мной можно
              связаться любым удобным способом ниже.
            </p>
          </div>

          <div className="contact-actions">
            <a
              className="button-link"
              href={`mailto:${profile.email}?subject=Предложение по стажировке`}
            >
              Написать на email
            </a>
            <a
              className="button-link button-link-secondary"
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              Открыть GitHub
            </a>
          </div>
        </div>

        <div className="contact-card" data-reveal style={{ '--reveal-delay': '0.08s' }}>
          {contacts.map((item) => (
            <div key={item.label} className="contact-row">
              <span className="contact-label">{item.label}</span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {item.value}
                </a>
              ) : (
                <strong>{item.value}</strong>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
