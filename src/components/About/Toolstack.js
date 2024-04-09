import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFigma } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiCanva,

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiCanva />
      </Col>
    </Row>
  );
}

export default Toolstack;
