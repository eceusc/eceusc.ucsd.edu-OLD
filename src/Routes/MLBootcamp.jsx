import * as React from "react";
import { Container } from "./helpers";
import members from "./members";

export default class ProjectTeam extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="Winter 2021 ML Bootcamp"
          subheader=""
          
          content={
            <div 
              style={{
                fontSize: "1.0rem",
                textAlign: "center"
              }}
            >
              <p>
                The Project Program has revamped their plan this winter 21 quarter.
                Instead we'll be hosting a biweekly ML bootcamp! Join un on the odd
                weeks, Thursday, 2-3pm PST. This bootcamp is designed to be beginner-friendly
                so those without any ML experience are welcome.
              </p>
              <div
                style={{
                  fontSize: "1.5rem",
                  textAlign: "center",
                  marginTop: "22px"
                }}
              >
                <div class="ui divider" />
                Previous Bootcamp Sessions
              </div>
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
                  Intro Video 
                </a><br></br>
                <a
                href="https://docs.google.com/presentation/d/1yso05WGkqqGNo2k8dD0srbm04j4uis2HZR7xpzDlZc0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer">
                Intro Slides  
                </a><br></br>
                <a
                href="https://forms.gle/iKpChzU8LaY1UR2P6"
                target="_blank"
                rel="noopener noreferrer"
                >
                  Intro Quiz
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
