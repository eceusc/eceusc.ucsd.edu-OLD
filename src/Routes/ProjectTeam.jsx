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
                The Project Teams Program will host 2{" "}
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
                Details about the projects and the
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
                Interested in joining the 2020-2021 Project Teams?
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
                Come to our Projects Launch event on October 14th, 2020 at
                7PM-8PM
              </div>
              <div style={{ marginTop: "10px" }}>
                Launch Zoom link {" "}
                <a
                href="https://ucsd.zoom.us/j/94725608079"
                target="_blank"
                rel="noopener noreferrer"
                >
                  here
                </a>
                !
              </div>
              <div style={{ marginTop:"10px"}}>
                Sign up for Projects{" "}
                <a
                href="https://tinyurl.com/eceuscprojects"
                target="_blank"
                rel="noopener noreferrer"
                >
                  here
                </a>
                !
              </div>

            </div>
          }
          
          contacts={[members[10]]}
        />
      </div>
    );
  }
}
