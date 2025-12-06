import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Проект 1',
      description: 'Описание проекта. Здесь будет информация о вашем проекте, используемых технологиях и достигнутых результатах.',
      technologies: ['React', 'JavaScript', 'CSS'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Проект 2',
      description: 'Описание проекта. Здесь будет информация о вашем проекте, используемых технологиях и достигнутых результатах.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Проект 3',
      description: 'Описание проекта. Здесь будет информация о вашем проекте, используемых технологиях и достигнутых результатах.',
      technologies: ['React', 'Redux Toolkit', 'JavaScript'],
      link: '#',
      github: '#'
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


