import * as React from "react";
import { Container } from "./helpers";
import members from "./members";
import { Grid, Image } from "semantic-ui-react";

const PhotoAlign = () => (
  <Grid>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Image src="pics/wecePic2.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="pics/wecePic1.png" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default class Wece extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="Women in ECE"
          subheader=""
          content={
          <div style={{
            fontSize: "1.5rem",
            textAlign: "center",
            lineHeight: "1.75rem",
            marginBottom: "20px"
          }}>
          The Women in ECE program at ECE USC strives to build a community for women in ECE. <br></br>
          As an underrepresented group in Electrical and Computer Engineering, 
          WECE strives towards hosting events that can give women a better look into what it means to be an engineer in this field. 
          From social events to panels with women in industry, WECE works to build a network where one can learn from others 
          and establish a successful career as an Electrical or Computer Engineer.
          </div>}
          content2={
            <div>
              <PhotoAlign />
            </div>
          }
          
          contacts={[members[7]]}
        />
      </div>
    );
  }
}
