import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "COMPUTER ENGINEER",
          "FULL STACK DEVELOPER",
          "UI/UX DESIGNER",
          "FREELANCER",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
