import * as React from "react";
import { Container } from "./helpers";
import members from "./members";
import { Grid, Image } from "semantic-ui-react";

const PhotoAlign = () => (
  <Grid>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Image src="pics/studyPic1.JPG" />
      </Grid.Column>
      <Grid.Column>
        <Image src="pics/studyPic2.JPG" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default class StudyJams extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="Study Jams"
          subheader=""
          content="During midterm season and finals week, our Study Jams create an environment that promotes learning. Whether working independently or with a group, the ECE Undergraduate Student Council works to ensure that ECE students will have a place to study during these intense times. These programs will also include the refreshments/light snacks necessary to keep on studying."
          content2={
            <div
              style={{
                marginTop: "20px"
              }}
            >
              <PhotoAlign />
            </div>
          }
          contacts={[members[7]]}
        />
      </div>
    );
  }
}
