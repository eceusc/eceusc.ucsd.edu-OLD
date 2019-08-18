import * as React from "react";
import { Container } from "./helpers";
import members from "./members";

export default class ProjectTeam extends React.Component {
  render() {
    return (
      <Container
        header="Project Teams"
        subheader=""
        content=""
        content2={
          <div
            style={{
              fontSize: "1.3rem",
              textAlign: "center",
              marginTop: "22px"
            }}
          >
            More information coming up soon
            {/*Sign up for the 2019-2020 Outreach Committee{" "}
            {/*<a href="https://goo.gl/forms/7ClxPLGr4HdboiUG2" target="_blank">
              here!
          </a>*/}
          </div>
        }
        contacts={[members[9]]}
      />
    );
  }
}
