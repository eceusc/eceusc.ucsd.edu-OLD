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
              <div>
                The Mentorship Program is an annual program to form{" "}
                <b>mentorship groups</b> of ECE students consisting of
                upperclassmen as mentors and underclassmen as mentees. The
                mentors and mentees will participate in{" "}
                <b>
                  large group socials and mixers, small group meetings, and
                  one-on-one mentorship opportunities{" "}
                </b>
                each quarter.
              </div>
              <div style={{ marginTop: "5px", marginBottom: "10px" }}>
                {" "}
                The Mentorship Program strives to bring ECE students of all
                class levels together to build connections with fellow students,
                alumni and professors. The program encourages personal growth
                through professional workshops as well as guidance in academic
                and career paths.
              </div>
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
