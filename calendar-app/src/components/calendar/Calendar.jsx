import React, { useState } from "react";
import moment from "moment";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/actions/uiActions";
import {
  eventClearActive,
  eventSetActive,
} from "../../redux/actions/eventActions";
// Components
import { Navbar } from "../ui/Navbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { CalendarEvent } from "./CalendarEvent";
import { messages } from "../../helpers/calendar-es";
import CalendarModal from "./CalendarModal";
import AddNewFab from "../ui/AddNewFab";
// Extras
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { DeletedFab } from "../ui/DeletedFab";
moment.locale("es");

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector((state) => state.calendar);

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  const onDoubleClick = (e) => dispatch(openModal());

  const onSelectEvent = (event) => dispatch(eventSetActive(event));

  const onViewChange = (event) => {
    setLastView(event);
    localStorage.setItem("lastView", event);
  };

  const onSelectSlot = () => dispatch(eventClearActive());

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "#ffffff",
    };

    return { style };
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          messages={messages}
          view={lastView}
          onView={onViewChange}
          onSelectSlot={onSelectSlot}
          onSelectEvent={onSelectEvent}
          onDoubleClickEvent={onDoubleClick}
          eventPropGetter={eventStyleGetter}
          selectable={true}
          components={{
            event: CalendarEvent,
          }}
        />
        <AddNewFab />
        {activeEvent && <DeletedFab />}

        <CalendarModal />
      </div>
    </div>
  );
};

export default CalendarPage;
