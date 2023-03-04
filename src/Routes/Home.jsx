import * as React from "react";
import { Image } from "semantic-ui-react";
import "./Route.css"
import "./Home.css"

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

export default class Home extends React.Component {
  render() {
    return (
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
    );
  }
}
