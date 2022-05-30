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
            <b>ECE Undergraduate Student Council</b>  
          </div>
          <div class="Subtitle">
              Serving and representing all ECE undergraduate students at UC San
              Diego
          </div>
          <div class="Title2"><b>About Us</b></div>
          <div class="Text">
              The ECE Undergraduate Student Council (ECE USC) is the voice of
              Electrical and Computer Engineering (ECE) students at UC San
              Diego. Through community building, networking, and leadership,
              the council strives to effect change within the department and
              campus at large though various events and programs.
          </div>
            <div className="Newsletter">
              <div class="Title2"><b>Join our Newsletter!</b></div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe4L9CgfkrNSQNcNzbMf0iXQuvEGWmDPPqFj4aAdFnZub3Ypw/viewform">
                <img className="subscribe" src="/Subscribe.svg" 
                    onMouseOver={e => e.currentTarget.src = '/Subscribe-h.svg'} 
                    onMouseOut={e => e.currentTarget.src = '/Subscribe.svg'}/>
              </a>
            </div>
          </div>
    );
  }
}
