// src/components/Projects.jsx
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import arrow from "../assets/arrow.png";

const Projects = () => {
  const projectData = [
    { image: project1, title: "Project One" },
    { image: project2, title: "Project Two" },
    { image: project3, title: "Project Three" },
  ];

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projectData.map(({ image, title }, index) => (
            <div className="details-container color-container" key={index}>
              <div className="article-container">
                <img src={image} alt={title} className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">{title}</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://github.com/")}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://github.com/")}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "#contact")}
      />
    </section>
  );
};

export default Projects;