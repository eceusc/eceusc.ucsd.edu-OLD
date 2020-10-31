import * as React from "react";
import { Container } from "./helpers";
import members from "./members";

const Slides = () => (
  <React.Fragment>
    <div class="ui row">
      <div style={{ textAlign: "center" }}>
        <iframe
          title="slides"
          src="slides/UCSD ECE USC Interview 10_28_2020.pdf"
          width="575"
          height="375"
          frameborder="0"
          scrolling="no"
        />
      </div>
    </div>
  </React.Fragment>
);

export default class Interview extends React.Component {
  render() {
    return (
      <div >
        <Container
          header="ECE Interviews"
          subheader=""
          content="The newest addition to the events, ECE interview 
          was created to benefit those remote learning. ECE interview 
          invites a professor to come and present what they do here at UCSD, 
          with the professor representing a specific depth that ECE students 
          can take. Once finished, students who come or answer a form can 
          question the professor about anything, be it research, the classes 
          they teach, or even how they have been handling the quarantine."
          content2={
            <div
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                marginTop: "22px"
              }}
            >
            <div class="ui divider" />
            Previous ECE Interviews
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
              <div className="ui centered header"
                style={{
                  marginBottom: "0px"
                }}
              >
                October 28th, 2020: Hanh-Phuc Le
              </div>
              <div className="ui centered header"
                style={{
                  marginTop: "0px"
                }}
              >
                <a
                  href="https://drive.google.com/file/d/18r-2oTG70d3ataE847DSWOBwzBZloUPJ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video
                </a>
              </div>
              <Slides />
            </div>
          }
          contacts={[members[8]]}
        />
      </div>
    );
  }
}
