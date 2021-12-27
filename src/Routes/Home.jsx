import * as React from "react";
import { Button, Segment, Grid, Image } from "semantic-ui-react";
import members from "./members";
import { getEmail } from "./helpers";
import { Link } from "react-router-dom";

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

const Calendar = () => (
  <React.Fragment>
    <div class="ui centered header">Calendar</div>
    <div class="ui row">
      <div style={{ textAlign: "center" }}>
        <iframe
          title="calendar"
          src="https://calendar.google.com/calendar/b/2/embed?title=ECE%20USC%20Events&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;mode=MONTH&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=eceusc%40eng.ucsd.edu&amp;color=%232F6309&amp;ctz=America%2FLos_Angeles"
          width="800"
          height="400"
          frameborder="0"
          scrolling="no"
        />
      </div>
    </div>
  </React.Fragment>
);

const CouncilTeaser = () => (
  <React.Fragment>
    <div class="ui centered header">'20-'21 Council</div>
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
    <Segment
      textAlign="center"
      style={{ margin: "0 auto", marginTop: 35, width: "200px" }}
    >
      <Button primary as={Link} to="/about">
        Meet the council!
      </Button>
    </Segment>
  </React.Fragment>
);

export default class Home extends React.Component {
  render() {
    return (
      <div class="ui grid" >
        <div class="ui centered row">
          <h1 class="ui centered header">
            ECE Undergraduate Student Council
            <div
              class="ui divider"
              style={{ marginTop: ".25rem", marginBottom: ".5rem" }}
            />
            <div class="ui sub header" style={{ textTransform: "none" }}>
              Serving and representing all ECE undergraduate students at UC San
              Diego
            </div>
          </h1>
        </div>

        <div class="ui row">
          <div class="three wide column" />
          
          <div class="ten wide column">
            <div class="ui row">
              <div class="ui centered header">About Us</div>
              <p style={{ marginTop: "20px", marginBottom: "40px" }}>
                The ECE Undergraduate Student Council (ECE USC) is the voice of
                Electrical and Computer Engineering (ECE) students at UC San
                Diego. Through community building, networking, and leadership,
                the council strives to effect change within the department and
                campus at large though various events and programs.
              </p>
              <div class="ui divider" />
            </div>
            <div class="ui centered row">
              <div class="ui centered header">Join our Newsletter!</div>
              <p align="center" style={{ marginTop: "20px", marginBottom: "0px" }}>
                Subscribe to our newsletter to get weekly updates on USC related events!
              </p>
              <p align="center" style={{ marginTop: "0px", marginBottom: "40px" }}>
                To subscribe, click <a href="http://tinyurl.com/eceuscnewsletter">here</a>!
              </p>
              <div class="ui divider" />
            </div>
            <div class="ui row">
                
                <div class="ui divider" />
              </div>
            <div class="ui row">
            </div>
          </div>
          <div class="three wide column" />
        </div>
      </div>
    );
  }
}
