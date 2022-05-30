import * as React from "react";
import { Container } from "./helpers";
import members from "./members";
import { Image } from "semantic-ui-react";

export default class Shadow extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="ECE Undergraduate Student Council Shadowing Program"
          subheader="Get involved with the council and the ECE department!"
          content={
            <div
                style={{
                  fontSize: "1.5rem",
                  textAlign: "center",
                  lineHeight: "1.75rem"
                }}
              >
                Are you looking to get involved in the ECE Department?
                <br></br>
                Do you want to meet other ECE students, get involved in program
                and event planning, and gain more leadership experience?
                <br></br>
                <br></br>
                
                The{" "}
                <b>
                  ECE Undergraduate Student Council is hosting a Shadowing
                  Program
                </b> open to all students! 
                <br></br>
                Come shadow a Council member to see what
                they work on, and help support the Council with our new
                initiatives and programs designed to benefit all ECE students!
                
                Check out our{" "}
                <a href="https://docs.google.com/document/d/1WDOt6li_Bu_Hbc-ovbrhRgi5TQELHh5mzIXlY_kwomY/edit?usp=sharing">
                  Positional Duties!
                </a><br></br><br></br>
                The Shadowing Program officially begins <b> Week 1 of Spring Quarter </b>,
                with an expected workload of 2-3 hours per week (with flexible
                hours!). Anyone can apply, no prior experience required!{" "}
             
                <b>Freshmen and Sophomores are strongly encouraged to
                apply.</b>
            </div>
          }
          content2={
            <div
              style={{
                fontSize: "2.0rem",
                textAlign: "center",
                marginTop: "22px",
                lineHeight: "2.0rem"
              }}
            >
              The 2023 shadowing program applications will open sometime late Winter 2023!! 
            </div>
          }
          contacts={[members[0]]}
        />{" "}
      </div>
    );
  }
}
