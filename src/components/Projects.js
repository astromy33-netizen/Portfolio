import React from 'react';
import './Projects.css';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="projects-section section-block">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-kicker">Проекты</span>
          <h2 className="section-title">Реальные задачи, React, Redux и API</h2>
          <p className="section-intro">
            Главный акцент здесь на проектах: что сделано, с какими технологиями
            работал и какую пользу приносил в рамках frontend-части.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="project-card"
              data-reveal
              style={{ '--reveal-delay': `${index * 0.08}s` }}
            >
              <div className="project-top">
                <div>
                  <span className="project-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="project-title">{project.name}</h3>
                </div>
                <span className="project-role">{project.role}</span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-meta">
                <div className="project-block">
                  <p className="project-label">Технологии</p>
                  <div className="project-tags">
                    {project.stack.map((item) => (
                      <span key={item} className="project-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-block">
                  <p className="project-label">Что сделал я</p>
                  <ul className="project-points">
                    {project.contributions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="project-actions">
                <a
                  href={project.githubUrl}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.githubLabel}
                </a>
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    className="project-link project-link-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.demoLabel}
                  </a>
                ) : (
                  <span className="project-note">{project.demoNote}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
