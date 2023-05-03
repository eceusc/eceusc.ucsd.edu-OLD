import * as React from "react";
import FullCalendar from "@fullcalendar/react"; // eslint-disable-line
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Grid, Image } from "semantic-ui-react";
import "./Route.css"
import "./Home.css"


const handleEventClick = (info) => {
  // Don't let the browser navigate
  info.jsEvent.preventDefault();

  // Open event in new tab
  if (info.event.url) {
    window.open(info.event.url);
  }
};

const EVENT_DATES = [
  {
    googleCalendarId: "c_48a0f5cfdd43f7e16ae8c77aa0010857bfba8c030f65b9d02bc1f06970826423@group.calendar.google.com",
    className: "event"
  }
]

const Calendar = () => (
  <React.Fragment>
    <div class="ui header">Calendar</div>
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

const MemberItem = props => (
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
            {props.lines.map(line => (
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
        <div className="Hero-Text">
          <div className="Title">
            <div id="title">
            <b>ECE Undergraduate</b><br></br>
            <b>Student Council</b> 
            </div> 
          </div>
          <div class="Subtitle">
              <em>Serving and representing all ECE undergraduate students at UCSD</em>
          </div>
          
            <div className="Newsletter">
              <div class="Title2"><b>Join our Newsletter!</b></div>
              <div class="Subtitle">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe4L9CgfkrNSQNcNzbMf0iXQuvEGWmDPPqFj4aAdFnZub3Ypw/viewform" target="_blank" class="button">
                Subscribe
                </a>
              </div>

            </div>
        </div>

        <div className="Contain">
        <div class="ui grid" style={{paddingTop: "127px",backgroundImage: "url('../../public/background.svg')", paddingBottom:"100px"}}>
          
          <div class="ui centered row" style={{backgroundImage: "url('../../public/background.svg')", width: "100%"}}>
            <h1 class="ui centered header" style={{ width: "80%"}}>
              About Us
              <div
                class="ui divider"
                style={{ marginTop: ".25rem", marginBottom: ".5rem" }}
              ></div>
              <div class="ui centered row">
                <Grid columns={1}>
                  <Grid.Row>
                    <Grid.Column>
                      <Image src="pics/21-22/Group1.JPG" centered size="massive"/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
              <div
                class="ui divider"
                style={{ marginTop: ".25rem", marginBottom: ".5rem" }}
              ></div>
              <div class="Text">
                  The ECE Undergraduate Student Council (ECE USC) is the voice of
                  Electrical and Computer Engineering (ECE) students at UC San
                  Diego. Through community building, networking, and leadership,
                  the council strives to effect change within the department and
                  campus at large though various events and programs.
              </div>
            </h1>
          </div>
          </div>
        </div>

        <div style={{paddingTop: "127px",backgroundImage: "url('../../public/background.svg')", paddingBottom:"100px", paddingLeft:"30px", paddingRight:"30px"}}>
          <h1 style={{ textAlign:"center"}}>Upcoming Events</h1>
          <div
                class="ui divider"
                style={{ marginTop: ".25rem", marginBottom: ".5rem" }}
          ></div>
          <FullCalendar
            plugins={[dayGridPlugin, googleCalendarPlugin]}
            initialView="dayGridMonth"
            googleCalendarApiKey="AIzaSyB5iR1Vh87ViUSkGHbqlL9-Yg6Wr1HFdII"
            eventSources={EVENT_DATES}
            eventClick={handleEventClick}
            height="70vh"
            eventDidMount={(info) => {
              info.el.style.backgroundColor = '#b6b6b6';
            }}
            
            
            headerToolbar={{
              left: "title",
              center: "",
              end: "today prev,next" 
            }}
          />
        </div>
      </div>
    );
  }
}
