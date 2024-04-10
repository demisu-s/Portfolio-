import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import car from "../../Assets/Projects/car rental.png"
import inventory from "../../Assets/Projects/inventory.png"
import sona from "../../Assets/Projects/sona.png"

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
              title="inventory management"
              description="The MinT Inventory Management System is a robust solution designed to enhance and simplify 
              inventory control processes for ministry of innovation and technology. It offers a user-friendly interface and powerful features to 
              facilitate efficient inventory management 
              Generate customizable reports for actionable insights."
              ghLink="https://github.com/mulukenhailu/MintProject1.0/tree/demis_branch"
             
            />
          </Col>
          
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Tabor Car Rental"
              description="At Tabor Car Rental Services, we believe that renting a car
               should be an effortless and enjoyable experience. That's why we offer a
                wide selection of high-quality vehicles to choose from, along with
                 competitive pricing and exceptional customer service."
              ghLink="https://github.com/demisu-s/Tabor_Car_Rental_service/tree/master"
             
            />
          </Col>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={sona}
              isBlog={false}
              title="Tabor Car Rental"
              description="At Tabor Car Rental Services, we believe that renting a car
               should be an effortless and enjoyable experience. That's why we offer a
                wide selection of high-quality vehicles to choose from, along with
                 competitive pricing and exceptional customer service."
              ghLink="https://github.com/demisu-s/restaurant-menu/tree/master"
             
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
