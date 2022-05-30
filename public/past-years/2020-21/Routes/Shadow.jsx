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
            <div>
              <p>
                Are you looking to get involved in the ECE Department?
                Do you want to meet other ECE students, get involved in program
                and event planning, and gain more leadership experience?
              </p>{" "}
              <p>
                The{" "}
                <b>
                  {" "}
                  ECE Undergraduate Student Council is hosting a Shadowing
                  Program{" "}
                </b>{" "}
                open to all students! Come shadow a Council member to see what
                they work on, and help support the Council with our new
                initiatives and programs designed to benefit all ECE students!
                Check out our{" "}
                <a href="https://docs.google.com/document/d/130I63BJZePH-WKJ7hHNKafwfFGw7AExPkbGQ5wKrHFY/edit?usp=sharing">
                  Positional Duties!
                </a>{" "}
              </p>{" "}
              <p>
                The Shadowing Program officially begins <b> Week 1 of Spring Quarter </b>,
                with an expected workload of 2-3 hours per week (with flexible
                hours!). Anyone can apply, no prior experience required!{" "}
              </p>{" "}
              <p>
                Freshmen and Sophomores are strongly encouraged to
                apply.{" "}
              </p>{" "}
            </div>
          }
          content2={
            <div
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                marginTop: "22px"
              }}
            >
              <a
                href="https://forms.gle/RH5m6WTQP5hy6MMd9"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Apply Here{" "}
              </a>
              to join the 2021 Shadowing Program 
              <br></br><br></br>
              <Image src="pics/Shadow_21.png" centered size="big" />
            </div>
          }
          contacts={[members[0]]}
        />{" "}
      </div>
    );
  }
}
