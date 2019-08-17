import * as React from "react";
import { Container } from "./helpers";

export default class OpenSource extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="Contact"
          subheader="Get in contact with the council"
          content="Email: eceusc@eng.ucsd.edu"
          content2={
            <div>
              Facebook:{" "}
              <a href="https://www.facebook.com/ECEUSC/">
                https://www.facebook.com/ECEUSC/{" "}
              </a>{" "}
            </div>
          }
        />
      </div>
    );
  }
}
