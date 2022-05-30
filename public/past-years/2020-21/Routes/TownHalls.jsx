import * as React from "react";
import { Container } from "./helpers";
import members from "./members";
import { Grid, Image } from "semantic-ui-react";

const Slides = () => (
  <React.Fragment>
    <div class="ui row">
      <div style={{ textAlign: "center" }}>
        <iframe
          title="slides"
          src="slides/UCSD ECE USC Town Hall 10_27_2020.pdf"
          width="575"
          height="375"
          frameborder="0"
          scrolling="no"
        />
      </div>
    </div>
  </React.Fragment>
);

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
                fontSize: "1.5rem",
                textAlign: "center",
                marginTop: "20px"
              }}
            >
              <PhotoAlign />
              <div class="ui divider" />
                Previous ECE Town Halls
            </div>
          }
          content3={
            <div style={{
              fontSize: "1.0rem",
              textAlign: "center",
              marginTop: "22px"
            }}
            >
              <div className="ui centered header"
                style={{
                  fontSize: "1.0rem",
                  marginBottom: "0px"
                }}
              >
                Fall 2020 Town Hall
              </div>
              <div className="ui centered header"
                style={{
                  fontSize: "1.0rem",
                  marginTop: "0px"
                }}
              >
                <a
                  href="https://drive.google.com/file/d/1PPK7AKiANea89wH6Diw53lmTjNMp7zDk/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video
                </a>
              </div>
              <Slides />
            </div>
          }
          contacts={[members[2]]}
        />
      </div>
    );
  }
}
