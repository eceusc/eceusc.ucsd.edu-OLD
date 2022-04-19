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
          content="Women in ECE (WECE) is dedicated to supporting and connecting women 
          of all levels (undergrad, grad, faculty) within the Electrical and Computer 
          Engineering department at UCSD. We strive to bring together an underrepresented 
          community of the field by hosting casual meetups, socials, and professional 
          events. We welcome new members and would love to grow our tight-knit community! "
          content2={
            <div>
              <PhotoAlign />
              <div
                style={{
                  fontSize: "1.5rem",
                  textAlign: "center",
                  marginTop: "22px"
                }}
              >
                Sign up for the 2020-2021 Women in ECE Program{" "}
                <a
                  href="https://forms.gle/3nGfsaSYMejimd8Z6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                !
              </div>
            </div>
          }
          
          contacts={[members[7]]}
        />
      </div>
    );
  }
}
