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
          content3={
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
              <Image src="pics/projectTeamPic.jpg" centered size="big" />
            </div>
          }
          content={
            <div>
              <div
                style={{
                  fontSize: "1.5rem",
                  textAlign: "center",
                  
                }}
              >
                Due to Covid-19 and the remote environment of the 2020-21 school year
                the Project team will<b> not </b>be doing annual projects.
              </div>
            </div>
          }
          content2={
            <div
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                marginTop: "30px"
              }}
            >
              <div>
                Instead the Project Leads are hosting a Machine Learning Bootcamp for the Winter '21 quarter.
              </div>
              <div style={{ marginTop: "11px" }}>
                To learn more click this link {" "}
                <a
                href="https://eceusc.ucsd.edu/ML-bootcamp"
                target="_blank"
                rel="noopener noreferrer"
                >
                  here
                </a>
                !
              </div>
              <div class="ui divider" />
            </div>
          }
          
          contacts={[members[10]]}
        />
      </div>
    );
  }
}
