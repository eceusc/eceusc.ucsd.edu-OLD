import * as React from "react";
import { Container } from "./helpers";
import members from "./members";

export default class FacultyMixers extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="Coffee with Professors"
          subheader=""
          content="Coffee With Professors is a quarterly event where we invite Professors,
          TAs, and Undergraduate students in the ECE department to come meet and mingle with 
          students and other faculties over some casual breakfast and pastries. Our goal is 
          to enhance students and faculties’ relationships and to establish meaningful connections 
          amongst them."
          contacts={[members[7]]}
        />
      </div>
    );
  }
}
