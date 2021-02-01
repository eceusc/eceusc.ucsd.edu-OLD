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
    >Previous Workshop Slides</div>
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
    </div>
  </React.Fragment>
);

export default class Professional extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="Professional Workshops"
          subheader=""
          content="Our professional workshops intend to help ECE students succeed
           academically at UCSD as well as in a professional industry environment. 
           Through these workshops, students will learn how to have a successful 
           interview, how to talk with company representatives when trying to land 
           an internship or job, and how to narrow down their options when looking 
           into post-graduation endeavors. Students will get a chance to interact 
           with industry personnel in a casual setting and potentially form 
           professional connections that will boost their future career."
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
          contacts={[members[6]]}
        />
      </div>
    );
  }
}
