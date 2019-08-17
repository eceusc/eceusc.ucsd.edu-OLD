import * as React from "react";
import { Container } from "./helpers";
import members from "./members";

export default class Mentorship extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="Mentorship Program"
          subheader=""
          content={
            <div>
              <div>
                The Mentorship Program is an annual program to form{" "}
                <b>mentorship groups</b> of ECE students consisting of
                upperclassmen as mentors and underclassmen as mentees. The
                mentors and mentees will participate in{" "}
                <b>
                  large group socials and mixers, small group meetings, and
                  one-on-one mentorship opportunities
                </b>
                each quarter.
              </div>
              <div style={{ marginTop: "5px" }}>
                {" "}
                The Mentorship Program strives to bring ECE students of all
                class levels together to build connections with fellow students,
                alumni and professors. The program encourages personal growth
                through professional workshops as well as guidance in academic
                and career paths.
              </div>
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
              Sign up for the 2019-2020 Mentorship Program{" "}
              <a href="https://goo.gl/forms/Rdx6kjTDsOwXdD4H2" target="_blank">
                here!
              </a>
            </div>
          }
          contacts={[members[5]]}
        />
      </div>
    );
  }
}
