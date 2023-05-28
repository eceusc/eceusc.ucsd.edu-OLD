import FullCalendar from "@fullcalendar/react"; // eslint-disable-line
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";

const EVENT_DATES = [
  {
    googleCalendarId:
      "c_48a0f5cfdd43f7e16ae8c77aa0010857bfba8c030f65b9d02bc1f06970826423@group.calendar.google.com",
    className: "event",
  },
];

export default function Calendar(handleEventClick) {
  return (
    <div
      style={{
        paddingTop: "127px",
        backgroundImage: "url('../../public/background.svg')",
        paddingBottom: "100px",
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Upcoming Events</h1>
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
          info.el.style.backgroundColor = "#b6b6b6";
        }}
        headerToolbar={{
          left: "title",
          center: "",
          end: "today prev,next",
        }}
      />
    </div>
  );
}
