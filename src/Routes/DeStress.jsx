import * as React from "react";
import { Container } from "./helpers";
import members from "./members";
import { Grid, Image } from "semantic-ui-react";

const ThreePhotoAlign = () => (
  <Grid columns={2}>
    <Grid.Row>
      <Grid.Column>
        <Image src="pics/deePic3.JPG" />
      </Grid.Column>
      <Grid.Column>
        <div
          style={{
            marginBottom: "22px"
          }}
        >
          <Image src="pics/deePic2.JPG" size="medium" />
        </div>
        <Image src="pics/deePic1.JPG" size="medium" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default class DeStress extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="dEEstressers"
          subheader=""
          content="ECE is a stressful major, therefore we host our dEEstresser events where we invite all ECE students and faculties to come and socialize while making some ECE-related mini projects such as decorating their own USB, making an Ethernet cable, making a motor car, etc… Students can temporarily leave behind stressful thoughts, simply have fun and socialize through some activities and snacks! 
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
          contacts={[members[7]]}
        />
      </div>
    );
  }
}
