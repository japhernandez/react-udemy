import React from "react";
import moment from "moment";
import "moment/locale/es";
import { Navbar } from "../ui/Navbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { messages } from "../../helpers/calendar-es";

moment.locale("es");

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    title: "Cumpleaños",
    start: moment().toDate,
    end: moment().add(2, "hours").toDate,
    bgcolor: "#fafafa",
  },
];

const CalendarPage = (props) => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          messages={messages}
        />
      </div>
    </div>
  );
};

export default CalendarPage;
