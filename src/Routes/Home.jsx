import * as React from "react";
import FullCalendar from "@fullcalendar/react"; // eslint-disable-line
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Grid, Image } from "semantic-ui-react";
import "./Route.css";
import "./Home.css";
import Podcast from "../Components/Podcast";
import Calendar from "../Components/Calendar";
import Podcast_Info from "./Podcast_Info";

const handleEventClick = (info) => {
  // Don't let the browser navigate
  info.jsEvent.preventDefault();

  // Open event in new tab
  if (info.event.url) {
    window.open(info.event.url);
  }
};

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

const MemberItem = (props) => (
  <div class="item">
    <div class="ui small image">
      <img src={props.pic} alt="memberPic" />
    </div>
    <div class="content">
      <div class="header">{props.name}</div>
      <div class="meta">
        <span class="position">{props.position}</span>
      </div>
      <div class="description">
        <div class="ui bulleted list">
          <div class="item">
            {props.major} {props.depth ? <span>({props.depth})</span> : null}
          </div>
          {props.lines.map((line) => (
            <div class="item">{line}</div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="background"></div>
        <div className="Hero-Text">
          <div className="Title">
            <div id="title">
              <b>ECE Undergraduate</b>
              <br></br>
              <b>Student Council</b>
            </div>
          </div>

          <div className="fadeIn">
          <div className="Subtitle">
            <em>Representing all ECE undergraduate students at UCSD</em>
          </div>

          <div className="Newsletter">
            <div className="Subtitle">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe4L9CgfkrNSQNcNzbMf0iXQuvEGWmDPPqFj4aAdFnZub3Ypw/viewform"
                target="_blank"
                class="button"
              >
                Join our Newsletter!
              </a>
            </div>
          </div>

          </div>
        </div>

        <div className="Contain">
          <div
            className="ui grid"
            style={{
              paddingTop: "127px",
              backgroundImage: "url('../../public/background.svg')",
              paddingBottom: "100px",
            }}
          >
            <div
              class="ui centered row"
              style={{
                backgroundImage: "url('../../public/background.svg')",
                width: "100%",
              }}
            >
              <h1 class="ui centered header">
                About Us
                <div
                  class="ui divider"
                  style={{ marginTop: ".25rem", marginBottom: ".5rem" }}
                ></div>
                <div class="ui centered row">
                  <Grid columns={1}>
                    <Grid.Row>
                      <Grid.Column>
                        <Image
                          src="pics/22-23/all_officers.png"
                          centered
                          size="massive"
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </div>
                <br />

                <div class="Text">
                  The ECE Undergraduate Student Council (ECE USC) is the voice
                  of Electrical and Computer Engineering (ECE) students at UC
                  San Diego. Through community building, networking, and
                  leadership, the council strives to effect change within the
                  department and campus at large though various events and
                  programs.
                </div>
              </h1>
            </div>
          </div>
        </div>

        <Calendar handleEventClick />

        <div className="Contain">
          <div
            class="ui grid"
            style={{
              paddingTop: "127px",
              backgroundImage: "url('../../public/background.svg')",
              paddingBottom: "100px",
            }}
          >
            <div
              class="ui centered row"
              style={{
                backgroundImage: "url('../../public/background.svg')",
                width: "100%",
              }}
            >
              <h1 class="ui centered header" style={{ width: "80%" }}>
                This Week's Podcast Series
                <div
                  class="ui divider"
                  style={{ marginTop: ".25rem", marginBottom: ".5rem" }}
                ></div>
              </h1>
              <div>
                <h2 style={{ marginBottom: 0 }}>
                  EP{Podcast_Info.at(0).episode}: {Podcast_Info.at(0).guest}
                </h2>
                <h3
                  style={{
                    textAlign: "center",
                    width: "70vw",
                    fontSize: "1rem",
                    marginBotton: 10,
                    marginTop: 5,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  {Podcast_Info.at(0).description}
                </h3>
                <iframe
                  width="560"
                  height="315"
                  src={Podcast_Info.at(0).url}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div
              class="ui centered row"
              style={{ paddingTop: 0, marginBottom: 20 }}
            >
              <div class="Subtitle">
                <a href="./podcast" class="button">
                  More Podcasts!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
