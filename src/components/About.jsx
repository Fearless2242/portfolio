// src/components/About.jsx
import aboutPic from "../assets/about-pic.png";
import experienceIcon from "../assets/experience.png";
import educationIcon from "../assets/education.png";
import arrow from "../assets/arrow.png";

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={aboutPic} alt="Profile" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experienceIcon} alt="Experience" className="icon" />
              <h3>Experience</h3>
              <p>
                3+ years <br /> Fullstack Development
              </p>
            </div>
            <div className="details-container">
              <img src={educationIcon} alt="Education" className="icon" />
              <h3>Education</h3>
              <p>
                Fullstack Udemy Class
                <br />
                ND. National Diploma
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              👋 Hi, I'm Favour (aka Favurr) — a full-stack web developer with
              5+ years of experience crafting responsive, user-friendly websites
              and web apps. <br /> 🛠️ I specialize in JavaScript, React, Node.js, and
              love turning static designs into functional, scalable solutions
              using modern frameworks like Vite and Next.js. <br /> 💼 I build for real
              people and brands — from portfolios to e-commerce, fashion,
              beauty, and charity projects. <br /> 🚀
              Always learning, always building. Let’s connect and collaborate!
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "#experience")}
      />
    </section>
  );
};

export default About;
