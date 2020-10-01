import * as React from "react";
import { Container } from "./helpers";
import members from "./members";
import { Grid, Image } from "semantic-ui-react";

const ThreePhotoAlign = () => (
  <Grid>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Image src="pics/professPic3.JPG" />
      </Grid.Column>
      <Grid.Column>
        <Image src="pics/professPic2.JPG" />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Image src="pics/professPic1.JPG" centered />
    </Grid.Row>
  </Grid>
);

export default class Professional extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="Professional Workshops"
          subheader=""
          content="Our professional workshops intend to help ECE students succeed academically at UCSD as well as in a professional industry environment. Through these workshops, students will learn how to have a successful interview, how to talk with company representatives when trying to land an internship or job, and how to narrow down their options when looking into post-graduation endeavors. Students will get a chance to interact with industry personnel in a casual setting and potentially form professional connections that will boost their future career.
          "
          content2={
            <div
              style={{
                marginTop: "20px"
              }}
            >
              <ThreePhotoAlign />
            </div>
          }
          content3={
            <div
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                marginTop: "22px"
              }}
            >
              Interested in being a part of our planning committee?
              <p>More information coming up soon </p>
              {/*<a href="https://goo.gl/forms/iK5SKlx7A76RLNxD2" target="_blank">
                here!
            </a>*/}
            </div>
          }
          contacts={[members[6]]}
        />
      </div>
    );
  }
}
