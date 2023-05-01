import * as React from "react";
import { Container } from "./helpers";
import members from "./members";
import { Grid, Image } from "semantic-ui-react";

const TwoPhotoAlign = () => (
  <Grid>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Image src="pics/professPic3.JPG" />
      </Grid.Column>
      <Grid.Column>
        <Image src="pics/professPic4.jpg" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const Slides = () => (
  <React.Fragment>
    <div class="ui centered header"
    style={{
      fontSize: "1.5rem",
      textAlign: "center",
      marginTop: "22px"
    }}
    >Previous Workshop Slides
    </div>
    <div class="ui centered header"
      style={{
        fontSize: "1.0rem",
        textAlign: "center",
      }}
      >May 10th, 2021: How to make your summer productive Workshop</div>
      <div style={{ textAlign: "center" }}>
        <iframe 
          title="su-prep-recording"
          src="https://drive.google.com/file/d/1_Px_x659szuzmAfS4V0L0R1kk6Po45wC/preview"
          width="640"
          height="480">
        </iframe>
    </div>
    <div class="ui centered header"
      style={{
        fontSize: "1.0rem",
        textAlign: "center",
      }}
      >April 19th, 2021: ECE BS/MS Info Session and Panel</div>
      <div style={{ textAlign: "center" }}>
        <iframe 
          title="bsms-recording"
          src="https://drive.google.com/file/d/1YyzWF2H6JTD-bEWq3SJnqwo2NbuNVKpu/preview" 
          width="640"
          height="480">
        </iframe>
    </div>
    <div class="ui centered header"
      style={{
        fontSize: "1.0rem",
        textAlign: "center",
      }}
      >January 27th, 2021: USCxACM - Innovating your Linkedin Profile</div>
      <div style={{ textAlign: "center" }}>
        <iframe
          title="calendar"
          src="slides/UCSD ECE USC Presentation 01_27_2021.pdf"
          width="600"
          height="500"
          frameborder="0"
          scrolling="no"
        />
      </div>
    <div class="ui row">
      <div class="ui centered header"
      style={{
        fontSize: "1.0rem",
        textAlign: "center",
      }}
      >October 15th, 2020: Nailing Your Internship Application</div>
      <div style={{ textAlign: "center" }}>
        <iframe
          title="calendar"
          src="slides/UCSD ECE USC Presentation 10_15_2020.pdf"
          width="600"
          height="500"
          frameborder="0"
          scrolling="no"
        />
      </div>
    </div>
  </React.Fragment>
);


export default class Professional extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="Professional Events"
          subheader=""
          content={<div
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            lineHeight: "1.75rem"
          }}
        >
        The professional committee works to ensure that ECE students are competent in the realm of professional development. 
        While technical skills are important for industry and academia, learning how to utilize a network or making a good impression is equally important. 
        <br></br><br></br>From workshops to build a good LinkedIn and resume reviews, to elevator pitch workshops and panels with industry professionals, 
        the Professional committee is a great place to learn how to build a successful professional foundation.
        </div>}
          content2={
            <div
              style={{
                marginTop: "20px"
              }}
            >
              <TwoPhotoAlign />
              
            </div>
          }
          content3={
            <div>
              <div class="ui divider" />
              <Slides />
            </div>
          }
          contacts={[members[8]]}
        />
      </div>
    );
  }
}
