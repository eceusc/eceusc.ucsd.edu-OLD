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
  <React.Fragment >
    <div class="ui centered header" style={{fontSize: "1.75rem"}}>Executive</div>
    <div
              class="ui divider"
              style={{ marginTop: ".25rem", marginBottom: ".5rem" }}
            ></div>
    <Grid columns={1} centered stackable>
      {members
        .filter(m => m.isPrez)
        .map(m => (
          <Grid.Column>
            <MemberItemX {...m} />
          </Grid.Column>
        ))}
    </Grid>
    <Grid columns={3} centered stackable>
      {members
        .filter(m => m.isExec)
        .map(m => (
          <Grid.Column>
            <MemberItemX {...m} />
          </Grid.Column>
        ))}
    </Grid>
    <div class="ui centered header" style={{fontSize: "1.75rem"}}>General</div>
    <div
              class="ui divider"
              style={{ marginTop: ".25rem", marginBottom: ".5rem" }}
            ></div>
    <Grid columns={5}>
      {members
        .filter(m => m.isFirstRow)
        .map(m => (
          <Grid.Column>
            <MemberItemX {...m} />
          </Grid.Column>
        ))}
    </Grid>
    <Grid columns={6}>
      <Grid.Column></Grid.Column>
      {members
        .filter(m => m.isSecondRow)
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
