import * as React from "react";
import { Container } from "./helpers";
import members from "./members";
import { Grid, Image } from "semantic-ui-react";

const PhotoAlign = () => (
  <Grid>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Image src="pics/townHall1.JPG" />
      </Grid.Column>
      <Grid.Column>
        <Image src="pics/townHall2.JPG" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default class TownHalls extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="Town Halls"
          subheader=""
          content="Through our quarterly Town Halls, students can give feedback about different aspects of the ECE curriculum and opportunities in addition to desired changes. Students will have their voices heard from the ECE department chair himself, who has the ability to make a change in the ECE curriculum and student resources.
        "
          content2={
            <div
              style={{
                marginTop: "20px"
              }}
            >
              <PhotoAlign />
            </div>
          }
          contacts={[members[3]]}
        />
      </div>
    );
  }
}
