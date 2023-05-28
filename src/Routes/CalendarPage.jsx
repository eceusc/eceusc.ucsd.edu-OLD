import FullCalendar from "@fullcalendar/react"; // eslint-disable-line
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import Calendar from "../Components/Calendar";

const handleEventClick = (info) => {
  // Don't let the browser navigate
  info.jsEvent.preventDefault();

  // Open event in new tab
  if (info.event.url) {
    window.open(info.event.url);
  }
};

export default function CalendarPage() {
  return (
    <Calendar handleEventClick />
  );
}
