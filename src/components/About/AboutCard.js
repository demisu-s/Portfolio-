import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Philimona </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />
            I am currently Studing Computer Engineering at Arbaminch University .
            <br />
            I have completed My Internship Time 
            in <span className="purple">FrontEnd and Backend</span> WEB Development at 
            Dan Energy PLC.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Spiritual Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I may not be better than other people,
            but at least i'm Different !!!"{" "}
          </p>
          <footer className="blockquote-footer">Jean-Jacques Roussseau</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
