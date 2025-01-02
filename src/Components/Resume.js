import React, { Component } from "react";
import image from "../images/header-background.jpg";

class Resume extends Component {
  render() {
    var skills = [
      { name: "Java", icon: "https://img.icons8.com/?size=512&id=GPfHz0SM85FX&format=png" },
      { name: "Kotlin", icon: "https://img.icons8.com/?size=512&id=ZoxjA0jZDdFZ&format=png" },
      { name: "C++", icon: "https://img.icons8.com/?size=512&id=TpULddJc4gTh&format=png" },
      { name: "C", icon: "https://img.icons8.com/?size=512&id=shQTXiDQiQVR&format=png" },
      { name: "Python", icon: "https://img.icons8.com/?size=512&id=13441&format=png" },
      { name: "MySQL", icon: "https://img.icons8.com/?size=512&id=qGUfLiYi1bRN&format=png" },
      { name: "Spring Boot", icon: "https://img.icons8.com/?size=512&id=90519&format=png" },
      { name: "MongoDB", icon: "https://img.icons8.com/?size=512w&id=bosfpvRzNOG8&format=png" },
      { name: "JWT", icon: "https://img.icons8.com/?size=512&id=rHpveptSuwDz&format=png" },
      { name: "XML", icon: "https://img.icons8.com/?size=512w&id=GIchiTBRmoJm&format=png" },
      { name: "Firebase", icon: "https://img.icons8.com/?size=512&id=62452&format=png" },
      { name: "Flutter", icon: "https://img.icons8.com/?size=512&id=7I3BjCqe9rjG&format=png" },
      { name: "OpenMP", icon: "https://www.openmp.org/wp-content/uploads/openmp-header-logo-100h.png" },
      { name: "OneTBB", icon: "https://avatars.githubusercontent.com/u/144704571?s=48&v=4" },
      { name: "CUDA", icon: "https://www.svgrepo.com/show/373541/cuda.svg" },
      { name: "AWS", icon: "https://img.icons8.com/?size=512w&id=mHi46t5vguiz&format=png" },
      { name: "Postman", icon: "https://img.icons8.com/?size=512&id=QEQQKirln6Tf&format=png" },
      { name: "Docker", icon: "https://img.icons8.com/?size=512&id=22813&format=png" },
      { name: "Android Studio", icon: "https://img.icons8.com/?size=512&id=04OFrkjznvcd&format=png" },
      { name: "IntelliJ IDEA", icon: "https://img.icons8.com/?size=512&id=F7REdHlg6KJX&format=png" },
      { name: "VS Code", icon: "https://img.icons8.com/?size=512&id=0OQR1FYCuA9f&format=png" },
    ];

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });

      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon"
                  />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CSS Styles */}
        <style jsx>{`
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr); /* Default: 7 columns */
    grid-auto-rows: auto; /* Automatically adjust rows */
    gap: 5px; /* Adjust gap as needed */
    padding: 0;
  }

  .skill-item {
    text-align: center;
    margin: 0;
  }

  .skill-item img {
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
  }

  /* Media Query for Tablet Screens */
  @media (max-width: 1024px) {
    .skills-grid {
      grid-template-columns: repeat(5, 1fr); /* Reduce to 5 columns */
    }
  }

  /* Media Query for Mobile Screens */
  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: repeat(3, 1fr); /* Reduce to 3 columns */
    }
  }

  /* Media Query for Very Small Screens */
  @media (max-width: 480px) {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr); /* Reduce to 2 columns */
    }
  }
`}</style>


      </section>
    );
  }
}

export default Resume;
