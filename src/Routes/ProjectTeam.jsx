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
              {/*<div>
                The Project Teams Program will host 2{" "}
                <b>hands-on ECE projects </b>
                for the year. There will be dedicated Project Leads for each
                project, who will guide the project progress and teach members
                necessary skills and knowledge. Our projects are designed to be
                <b> beginner-friendly</b> and suitable for all skill levels, as
                long as you’re willing to commit time to learning.
              </div>*/}
              <div>
              The Project Teams Program will host 2{" "}
                <b>hands-on ECE projects </b>
                for the year. There will be dedicated Project Leads for each
                project, who will guide the project progress and teach members
                necessary skills and knowledge. Our projects are designed to be
                <b> beginner-friendly</b> and suitable for all skill levels, as
                long as you’re willing to commit time to learning.
              </div>
            </div>
          }
          content2={
            <div>
              <Image src="pics/projectTeamPic.jpg" centered size="big" />
              <div class="ui divider" />
              <h1 class="ui centered header">
                Winter 2021 ML Bootcamp
              </h1>
            </div>
          }
          content3={
            <div 
              style={{
                fontSize: "1.0rem",
                textAlign: "center",
                marginTop: "22px"
              }}
            >
              <p style={{ marginTop: "20px", marginBottom: "40px" }}>
                The Project Program has revamped their plan this winter 21 quarter.
                Instead we'll be hosting a biweekly ML bootcamp! Join un on the odd
                weeks, Thursday, 2-3pm PST. This bootcamp is designed to be beginner-friendly
                so those without any ML experience are welcome.
              </p>
              <div class="ui centered header" 
                style={{
                  fontSize: "1.0rem",
                  textAlign: "center",
                  marginTop: "22px"
                }}
              >
                January 21st, Introduction to ML
                <br></br>
                <a
                href="https://drive.google.com/file/d/1gMnFRSi0vj2ZgT1FXUsTjKPh2BKiXw8i/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                >
                  Video
                </a>
              </div>
              {/*<div style={{ marginTop: "10px" }}>
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
            </div>*/}

            </div>
          }
          
          contacts={[members[10]]}
        />
      </div>
    );
  }
}
