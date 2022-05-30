import * as React from "react";
import { Container } from "./helpers";
import members from "./members";
import { Grid, Image } from "semantic-ui-react";

const PhotoAlign = () => (
  <Grid>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Image src="pics/mentorPic3.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="pics/mentorPic4.png" />
      </Grid.Column>
    </Grid.Row>

  </Grid>
);

export default class Mentorship extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="Mentorship Program"
          subheader=""
          content={
            <div
                style={{
                  fontSize: "1.5rem",
                  textAlign: "center",
                  lineHeight: "1.75rem"
                }}
              >
              The Mentorship Program strives to build an inclusive community among ECE Undergraduate students at UC San Diego. <br></br><br></br>
              By pairing freshman and transfer students with upperclassmen, the Mentorship program ensures that students can get the guidance they need to be successful <b>socially, 
              professionally, and technically</b>. Running all year long, Mentorship hosts a range of events, including <b>1-1 guidance, small group socials, and large group socials</b>. 
              Covering topics like building a strong resume and LinkedIn, how to search for internships & jobs, getting involved in research, as well as the best places to study 
              and eat on campus - you're sure to get all your questions answered!
            </div>
          }
          content2={
            <div>
              <PhotoAlign />
            </div>
          }
          contacts={[members[6]]}
        />
      </div>
    );
  }
}
