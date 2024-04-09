import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import clone from "../../Assets/Projects/clone1.PNG";
import inventory from "../../Assets/Projects/inventory.png";

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

          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="Mini Inventory Management System"
              description="The Dan Inventory Management System is a robust solution designed to enhance and simplify inventory control processes for businesses of all sizes. It offers a user-friendly interface and powerful features to facilitate efficient inventory management.

              Features
              Product Management:
              
              Easily add, edit, and delete products.
              Categorize products for improved organization.
              Track product details such as quantity and cost.
              Inventory Tracking:
              
              Real-time updates on stock levels.
              Set low-stock alerts for timely replenishment.
              Reporting and Analytics:
              
              Generate customizable reports for actionable insights."
              ghLink="https://github.com/Filmon12345/Mini-Inventory-Managment-Syatem"
             
            />
          </Col>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={clone}
              isBlog={false}
              title="Youtube Clone"
              description="Feature: 
              Watch video
              Increase Views
              Like and dislike video
              Download video
              Comment & reply for video
              Update video details
              Delete video
              Subscribe to a channel
              View liked videos
              Trending
              Subscriptions
              History
              Watch history
              Search history
              Settings
              Modify channel name and email
              Change password
              Upload channel avatar"
              ghLink="https://github.com/Filmon12345/youtube-clone"
             
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
