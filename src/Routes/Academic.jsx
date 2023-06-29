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
          header="Academic Events"
          subheader=""
          content={
            <div
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                lineHeight: "1.75rem"                  
              }}
            >
            Our Academic events is the bridge between the ECE department and undergraduate students. <br></br>
            Their biggest event is their town hall, where students can provide feedback to ECE department professors, as well as ask any questions they have. <br></br><br></br>
            Our Academic events also hosts professors for more informal AMAs - so if students have questions or would like to get to know a professor better, they can do so!
            <br></br><br></br>Another key Academic event is our ECE Interviews!
            Click <a href="/ece-interview">here</a> to view our past interviews and their recordings/slides.
            
            </div>
        }
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
          contacts={[members[9]]}
        />
      </div>
    );
  }
}
