import * as React from "react";
import { Container } from "./helpers";
import members from "./members";

export default class Outreach extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="Outreach"
          subheader=""
          content="ECE Undergraduate Student Council’s Outreach committee will plan to collaborate with other engineering and diversity organizations on campus with their outreach efforts. There are many student organizations at UCSD with great outreach missions, and we want to lend a hand in expanding and enriching those missions with our own talents and resources.
        "
          content2={
            <div
              style={{
                fontSize: "1.3rem",
                textAlign: "center",
                marginTop: "22px"
              }}
            >
              Sign up for the 2019-2020 Outreach Committee{" "}
              <p>More information coming up soon </p>
              {/*<a href="https://goo.gl/forms/7ClxPLGr4HdboiUG2" target="_blank">
                here!
            </a>*/}
            </div>
          }
          contacts={[members[1]]}
        />
      </div>
    );
  }
}
