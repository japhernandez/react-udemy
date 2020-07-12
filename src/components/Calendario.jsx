import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const localizer = momentLocalizer(moment);
const event = [
  {
    title: "Cumpleaños jefe",
    start: moment().toDate(),
    end: moment().add("2", "hours").toDate(),
    bgcolor: "#fafafa",
  },
];

const Calendario = () => {
  return (
    <div>
      <BigCalendar
        localizer={localizer}
        events={event}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default Calendario;
