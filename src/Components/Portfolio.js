import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    const { projects } = this.props;

    if (!projects || projects.length === 0) {
      return <p>No projects available</p>;
    }

    return (
      <section id="portfolio">
        <h1>Check Out Some of My Works.</h1>
        <div className="portfolio-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
                <a
                  href={project.url}
                  title={project.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png" // GitHub logo example
                    alt="Project Link"
                    className="link-logo"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Inline CSS */}
        <style jsx>{`
          #portfolio {
            padding: 20px 0;
          }

          h1 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 24px;
          }

          .portfolio-container {
            display: flex;
            flex-wrap: nowrap;
            gap: 15px;
            overflow-x: auto;
            padding: 0 10px;
          }

          .portfolio-container::-webkit-scrollbar {
            height: 6px;
          }

          .portfolio-container::-webkit-scrollbar-thumb {
            background: #bbb;
            border-radius: 10px;
          }

          .portfolio-container::-webkit-scrollbar-thumb:hover {
            background: #888;
          }

          .project-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            width: 220px;
            min-width: 220px;
            background-color: #f9f9f9;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          .project-image {
            width: 100%;
            height: 120px;
            object-fit: cover;
            background-color: #ddd;
          }

          .project-content {
            padding: 10px;
            text-align: center;
          }

          .project-content h3 {
            margin: 5px 0;
            font-size: 18px;
            font-weight: bold;
          }

          .project-content p {
            font-size: 14px;
            margin-bottom: 10px;
          }

          .project-link {
            display: inline-block;
          }

          .link-logo {
            width: 20px;
            height: 20px;
            transition: transform 0.3s ease;
          }

          .project-link:hover .link-logo {
            transform: scale(1.2);
          }
        `}</style>
      </section>
    );
  }
}

export default Portfolio;
