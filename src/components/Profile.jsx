// src/components/Profile.jsx
import profilePic from "../assets/profile-pic.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import resumePDF from "../assets/resume-example.pdf";

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profilePic} alt="John Doe profile" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Emeka Favour</h1>
        <p className="section__text__p2">Fullstack Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open(resumePDF)}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedin}
            alt="LinkedIn"
            className="icon"
            onClick={() =>
              window.open(
                "https://linkedin.com//in/emeka-ezeamaka-246556227",
                "_blank"
              )
            }
          />
          <img
            src={github}
            alt="Github"
            className="icon"
            onClick={() =>
              window.open("https://github.com/Fearless2242", "_blank")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
