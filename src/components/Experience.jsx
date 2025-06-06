// src/components/Experience.jsx
import checkmark from "../assets/checkmark.png";
import arrow from "../assets/arrow.png";

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {[
                "JavaScript",
                "HTML",
                "CSS",
                "SASS",
                "TypeScript",
                "Material UI",
              ].map((skill) => (
                <article key={skill}>
                  <img src={checkmark} alt="Checkmark" className="icon" />
                  <div>
                    <h3>{skill}</h3>
                    <p>
                      {skill === "Material UI"
                        ? "Basic"
                        : skill === "TypeScript" ||
                          skill === "JavaScript" ||
                          skill === "SASS"
                        ? "Intermediate"
                        : "Experienced"}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              {["Node JS", "Express JS", "Git", "PostgreSQL"].map((skill) => (
                <article key={skill}>
                  <img src={checkmark} alt="Checkmark" className="icon" />
                  <div>
                    <h3>{skill}</h3>
                    <p>
                      {skill === "Node JS" ||
                      skill === "Express JS" ||
                      skill === "Git"
                        ? "Intermediate"
                        : "Basic"}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "#projects")}
      />
    </section>
  );
};

export default Experience;
