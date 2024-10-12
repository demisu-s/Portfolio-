import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Damisu </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />
            I recently graduated with a degree in Computer Engineering from Addis Ababa University.
            <br />
            I have completed My Internship Time 
            in <span className="purple">FrontEnd and Backend</span> WEB Development at 
            Ministry of Innovation And Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> participating in Voluntary Activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing And Watching Football 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I may not be the best, 
             but I’m definitely not like the rest !!!"{" "}
          </p>
          {/* <footer className="blockquote-footer">Jean-Jacques Roussseau</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
