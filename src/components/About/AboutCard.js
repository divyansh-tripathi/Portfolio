import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           👋 Hi Everyone, I’m <span className="purple">Divyansh Narayan Tripathi </span>
           from  <span className="purple">Lucknow, India.</span>
            <br />
            <br/>
            I’m a <span className="purple">Full Stack Developer</span>  passionate about creating scalable, modern, and user-focused web applications.
            <br />
           Currently, I’m training at QSpider, Noida, where I work with the MERN stack to build responsive and efficient web solutions.
            <br />
            <br />
           I enjoy turning ideas into reality using React.js, Node.js, Express.js, MongoDB, Django, and Tailwind CSS, while constantly exploring new technologies to enhance my craft.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🎮 Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> 🌍 Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight />✍️ Writing Tech Content
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Divyansh Narayan Tripathi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
