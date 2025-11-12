import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shopsy from "../../Assets/Projects/shopsy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopsy}
              isBlog={false}
              title="Shopsy E-commers"
              description="Responsive e-commerce frontend built with React.js and Tailwind CSS featuring dynamic products and smooth user experience."
              ghLink="https://github.com/divyansh-tripathi/Ecom-shopsy.git"
              demoLink="https://ecom-shopsy.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
