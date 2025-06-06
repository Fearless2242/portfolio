// src/components/Contact.jsx
import email from "../assets/email.png";
import github from "../assets/github.png";

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img src={email} alt="Email icon" className="icon contact-icon email-icon" />
          <p><a href="mailto:emekafavi2019@gmail.com">emekafavi2019@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img src={github} alt="Github icon" className="icon contact-icon" />
          <p><a href="https://github.com/Fearless2242">Github</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;