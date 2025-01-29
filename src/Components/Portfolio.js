import React, { Component } from 'react';
import mobile from '../images/mobile.png';

class Portfolio extends Component {
  render() {
    const { projects } = this.props;

    if (!projects || projects.length === 0) {
      return <p>No projects available</p>;
    }

    return (
      <section id="portfolio">
        <h1>Check Out Some of My Works.</h1>
        <div className="portfolio-wrapper">
          <div className="portfolio-container">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                  <div className="project-links">
                    <a
                      href={project.url}
                      title={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="Project Link"
                        className="link-logo"
                      />
                    </a>
                    
                    <a
                      href={project.liveUrl}
                      title="Extra Link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <img
                        src={
                          project.type === "mobile"
                            ? mobile
                            : "https://e7.pngegg.com/pngimages/798/799/png-clipart-web-development-logo-world-wide-web-website-web-symbol-s-web-design-symmetry.png"
                        }
                        alt="Extra Link"
                        className="link-logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          #portfolio {
            padding: 20px 0;
            width: 100%;
          }

          h1 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 24px;
          }

          .portfolio-wrapper {
            display: flex;
            justify-content: center;
            width: 100%;
            padding: 0 20px;
          }

          .portfolio-container {
            display: flex;
            flex-wrap: nowrap;
            gap: 15px;
            overflow-x: auto;
            max-width: 100%;
            padding: 10px 0;
            margin: 0 auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: thin;
            -ms-overflow-style: -ms-autohiding-scrollbar;
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
            margin-left: 10px;
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