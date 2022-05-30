import * as React from "react";
import { Grid, Image } from "semantic-ui-react";
import { Container } from "./helpers";
import members from "./members";
import { getEmail } from "./helpers";

const MemberItemX = props => (
  <div style={{ width: "100px", margin: "0 auto" }}>
    <Image src={props.pic} size={100} circular />
    <div style={{ textAlign: "center" }}>
      <div class="header" style={{ fontWeight: 600 }}>
        <a href={`mailto:${getEmail(props.email)}`}>
          {props.name.split(" ")[0]}
        </a>
      </div>
      <div class="meta">
        <span class="position">{props.position}</span>
      </div>
    </div>
  </div>
);

const CouncilTeaser = () => (
  <React.Fragment>
    <div class="ui centered header">Getting in touch with the '20-'21 Council:</div>
    <div class="ui centered header">Executive</div>
    <Grid columns={3} centered stackable>
      {members
        .filter(m => m.isExec)
        .sort((a, b) => {
          // We want president in middle since more visually pleasing
          const scores = { C: 2, B: 1, T: 3 };
          const aVal = scores[a.name[0]];
          const bVal = scores[b.name[0]];
          return aVal - bVal;
        })
        .map(m => (
          <Grid.Column>
            <MemberItemX {...m} />
          </Grid.Column>
        ))}
    </Grid>
    <div class="ui centered header">General</div>
    <Grid columns={8} stackable>
      {members
        .filter(m => !m.isExec)
        .map(m => (
          <Grid.Column>
            <MemberItemX {...m} />
          </Grid.Column>
        ))}
    </Grid>
  </React.Fragment>
);

export default class OpenSource extends React.Component {
  render() {
    return (
      <div>
        <Container
          header="Contact"
          subheader="Get in contact with the council"
          content={
            <div class="ui centered row">
              <div class="ui centered sub header">
                Email: eceusc@eng.ucsd.edu
              </div>
            </div>
          }
          content2={
            <div>
              <div class="ui centered sub header">
              Facebook:{" "}
              <a href="https://www.facebook.com/ECEUSC/">
                https://www.facebook.com/ECEUSC/{" "}
              </a>{" "}
              </div>
              <div class="ui divider" />
              <div class="ui centered row">
              <div class="ui centered header">Join our Newsletter!</div>
              <div class="ui centered sub header" style={{ marginTop: "20px", marginBottom: "5px" }}>
                Subscribe to our newsletter to get weekly updates on USC related events!
              </div>
              <div class="ui centered sub header" style={{ marginTop: "5px", marginBottom: "40px" }}>
                To subscribe, click <a href="http://tinyurl.com/eceuscnewsletter">here</a>!
              </div>
              <div class="ui divider" />
            </div>
            </div>
          }
          content3={
            <div class="ui row">
              <CouncilTeaser />
            </div>
          }
        />
      </div>
    );
  }
}
