import * as React from "react";
import { Container } from "./helpers";
import members from "./members";

export default class Interview extends React.Component {
  render() {
    return (
      <div>
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
            You missed the interview, or couldn’t make it?
            No fear! The interviews will be recorded and uploaded right below:
            </div>
          }
          
          contacts={[members[8]]}
        />
      </div>
    );
  }
}
