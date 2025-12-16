import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shopsy from "../../Assets/Projects/shopsy.png";
import ecom from "../../Assets/Projects/e-comm.png";
import bookstore from "../../Assets/Projects/bookstore.png";
import blog from "../../Assets/Projects/blogapp.png";
import watch from "../../Assets/Projects/stopwatch.png";
import emp from "../../Assets/Projects/emp.png";

function Projects() {
  // You could later move this into an array and map it,
  // but for now we just split visually into 2 sections.

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Top 3 section */}
        <h1 className="project-heading">
          Top <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of highlighted projects.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-commerce Website"
              description="A dynamic e-commerce platform to browse, manage, and shop products effortlessly with a complete user dashboard."
              ghLink="https://github.com/divyansh-tripathi/new-ecomm/tree/af26be04c73ab98cbb6816ed15072974d8699562/frontend"
              demoLink="https://e-commerce-xi-nine-56.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="100xBooks"
              description="A sleek and interactive frontend for browsing, searching, and exploring a vast collection of books."
              ghLink="https://github.com/divyansh-tripathi/BookStore-Application-main.git"
              demoLink="https://book-store-application-main.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog App UI"
              description="A clean and responsive user interface for creating, reading, and managing blog posts effortlessly."
              ghLink="https://github.com/divyansh-tripathi/blogApp-UI-main.git"
              demoLink="https://blog-app-ui-main.vercel.app/"
            />
          </Col>
        </Row>

        {/* Latest by category section */}
        <h2 className="project-heading" style={{ fontSize: "2rem", marginTop: "30px" }}>
          Latest <strong className="purple">Projects </strong>
        </h2>
        <p style={{ color: "white" }}>
          Recent work grouped by different categories.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watch}
              isBlog={false}
              title="Stopwatch Mini Project (Latest)"
              description="A simple and responsive stopwatch to track time with start, stop, and reset functionality."
              ghLink="https://github.com/divyansh-tripathi/Stopwatch.git"
              demoLink="https://stopwatch-ten-chi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emp}
              isBlog={false}
              title="Employee Management System (Latest)"
              description="An Employee Management System to manage employees, assign tasks, and track work status efficiently."
              ghLink="https://github.com/divyansh-tripathi/ems-project.git"
              demoLink="https://ems-dun-mu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopsy}
              isBlog={false}
              title="Shopsy E-commerce (Latest)"
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
