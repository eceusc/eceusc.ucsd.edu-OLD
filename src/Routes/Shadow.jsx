import * as React from "react";
import { Container } from "./helpers";
import members from "./members";

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
                Are you looking to get involved in the ECE Department ? Do you
                want to meet other ECE students, learn more about the ECE
                Undergraduate Student Council, and learn more about how the
                department operates ?
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
                <a href="https://drive.google.com/file/d/1GXy_SLUbn6GGc5IhNsSlfnpqy-Ip12ig/view?usp=sharing">
                  Positional Duties!
                </a>{" "}
              </p>{" "}
              <p>
                The Shadowing Program begins <b> Week 8 of Winter Quarter </b>,
                with an expected workload of 2-3 hours per week (with flexible
                hours!). Anyone can apply, no prior experience required!{" "}
              </p>{" "}
              <p>
                Freshmen, Sophomore and Juniors are strongly encouraged to
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
                href="https://docs.google.com/forms/d/e/1FAIpQLSdKRds9-dxPFHrACEhj6ceNZE7zUSroQMq4dNL4IhCDD1XOcw/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Here{" "}
              </a>
              is the link to the application
              <br /> <br />
              <b> Please apply as soon as possible </b>{" "}
            </div>
          }
          contacts={[members[0]]}
        />{" "}
      </div>
    );
  }
}
