import * as React from "react";
import { Container } from "./helpers";
import members from "./members";
import { Image } from "semantic-ui-react";

export default class ProjectTeam extends React.Component {
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
                <b>hands-on ECE projects </b>
                for the year. There will be dedicated Project Leads for each
                project, who will guide the project progress and teach members
                necessary skills and knowledge. Our projects are designed to be
                <b> beginner-friendly</b> and suitable for all skill levels, as
                long as you’re willing to commit time to learning.
              </div>
              <div
                style={{
                  marginTop: "5px",
                  marginBottom: "15px"
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
            <div>
              <Image src="pics/projectTeamPic.jpg" centered size="big" />

              <div
                style={{
                  fontSize: "1.5rem",
                  textAlign: "center",
                  marginTop: "22px"
                }}
              >
                Interested in joining the 2019-2020 Project Teams?
              </div>
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
              <div>
                Come to our Projects Launch event on October 8th, 2019 at
                6PM-7PM
              </div>
              <div style={{ marginTop: "10px" }}>
                in Henry Booker Room (Jacobs building 2nd Floor)
              </div>
            </div>
          }
          contacts={[members[2], members[9]]}
        />
      </div>
    );
  }
}
