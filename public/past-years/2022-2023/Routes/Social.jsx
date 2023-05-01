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

export default class Social extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="Social Events"
          subheader=""
          content={
            <div
                style={{
                  fontSize: "1.5rem",
                  textAlign: "center",
                  lineHeight: "1.75rem"                  
                }}
              >
                The Social committee works to ensure that ECE students are rewarded for all their hard work! Through social events and outings, 
                ECE USC’s Social team helps build a community within ECE. Whether it’s meeting new people over boba and ice cream, watching movies off-campus, 
                or hosting a study social before finals - the social committee ensures that you can meet other like minded ECE students, make new friends, and blow off some steam.
            </div>
          }
          content2={
            <div
              style={{
                marginTop: "20px"
              }}
            >
              <PhotoAlign />
            </div>
          }
          contacts={[members[9]]}
        />
      </div>
    );
  }
}
