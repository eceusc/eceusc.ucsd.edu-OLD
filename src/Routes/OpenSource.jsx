import * as React from "react";
import { Container } from "./helpers";
import members from "./members";

export default class OpenSource extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="Project Teams"
          subheader=""
          content="The Project Teams Program will host 3 to 4 hands-on ECE projects 
          for the year. There will be dedicated Project Leads for each project, who 
          will guide the project progress and teach members necessary skills and knowledge. 
          Our projects are designed to be beginner-friendly and suitable for all skill levels, 
          as long as you’re willing to commit time to learning."
          content2={
            <div
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                marginTop: "22px"
              }}
            >
              Sign up for the 2019-2020 Project Teams{" "}
              <a href="https://goo.gl/forms/iK5SKlx7A76RLNxD2" target="_blank">
                here!
              </a>
            </div>
          }
          contacts={[members[2], members[9]]}
        />
      </div>
    );
  }
}
