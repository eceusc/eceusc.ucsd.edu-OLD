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
          content={
            <div>
              <div>
                The Project Teams Program will host 3 to 4{" "}
                <b>hands-on ECE projects</b>
                for the year. There will be dedicated Project Leads for each
                project, who will guide the project progress and teach members
                necessary skills and knowledge. Our projects are designed to be
                <b> beginner-friendly</b> and suitable for all skill levels, as
                long as you’re willing to commit time to learning.
              </div>
              <div
                style={{
                  marginTop: "5px"
                }}
              >
                In this program, you will <b>meet weekly</b> throughout the
                duration of the project to attend team meetings and workshops
                led by a Project Lead. Details about the projects and the
                meetings will be announced in our Projects Team Launch event.
              </div>
            </div>
          }
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
          content3={
            <div
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                marginTop: "22px"
              }}
            >
              Interested in being a Project Lead? Sign up{" "}
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
