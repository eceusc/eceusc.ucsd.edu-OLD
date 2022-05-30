import * as React from "react";
import { Container } from "./helpers";
import members from "./members";
import { Grid, Image } from "semantic-ui-react";

const PhotoAlign = () => (
  <Grid>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Image src="pics/facultyMixer1.JPG" />
      </Grid.Column>
      <Grid.Column>
        <Image src="pics/facultyMixer2.JPG" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

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
          content2={
            <div
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
              marginTop: "22px"
            }}
            >
              Currently, due to Covid-19, Coffee with Professors by USC is 
              delayed until further notice.
            </div>
          }
          content3={
            <div
              style={{
                marginTop: "20px"
              }}
            >
              <PhotoAlign />
            </div>
          }
          contacts={[members[8]]}
        />
      </div>
    );
  }
}
