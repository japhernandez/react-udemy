import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/actions/uiActions";
import {
  eventAddNew,
  eventClearActive,
  eventUpdate,
} from "../../redux/actions/eventActions";

import DateTimePicker from "react-datetime-picker";
import moment from "moment";
import Modal from "react-modal";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const now = moment().minutes(0).seconds(0).add(1, "hours");
const nowPlusOne = now.clone().add(1, "hours");

const initEvent = {
  title: "",
  notes: "",
  start: now.toDate(),
  end: nowPlusOne.toDate(),
};

const CalendarModal = () => {
  const { openModal } = useSelector((state) => state.ui);
  const { activeEvent } = useSelector((state) => state.calendar);

  const dispatch = useDispatch();

  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(nowPlusOne.toDate());
  const [titleIsValid, setTitleIsValid] = useState(true);

  const [formValues, setFormValues] = useState(initEvent);

  const { notes, title, start, end } = formValues;

  useEffect(() => {
    if (activeEvent) {
      setFormValues(activeEvent);
    } else {
      setFormValues(initEvent);
    }
  }, [activeEvent, setFormValues]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const uiCloseModal = (event) => {
    dispatch(closeModal());
    dispatch(eventClearActive());
    setFormValues(initEvent);
  };

  const handleStartDateChange = (event) => {
    setDateStart(event);
    setFormValues({ ...formValues, start: event });
  };

  const handleEndDateChange = (event) => {
    setDateEnd(event);
    setFormValues({ ...formValues, end: event });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const momentStart = moment(start);
    const momentEnd = moment(end);

    if (momentStart.isSameOrAfter(momentEnd)) {
      console.log("Fecha 2 debe de ser mayor");

      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "La fecha de finalización debe de ser mayor a la fecha de inicio",
      });
    }

    title.trim() < 2 ? setTitleIsValid(false) : setTitleIsValid(true);

    if (activeEvent != null) {
      dispatch(eventUpdate(formValues));
      uiCloseModal();
    } else {
      dispatch(
        eventAddNew({
          ...formValues,
          user: {
            id: new Date().getTime(),
            name: "John Doe",
          },
        })
      );
    }

    dispatch(closeModal());
  };

  return (
    <div>
      <Modal
        isOpen={openModal}
        onRequestClose={uiCloseModal}
        style={customStyles}
        closeTimeoutMS={200}
        className="modal"
        overlayClassName="modal-fondo"
      >
        <h1> {activeEvent ? "Actualizar evento" : "Nuevo evento"} </h1>
        <hr />
        <form className="container" onSubmit={handleSubmitForm}>
          <div className="form-group">
            <label>Fecha y hora inicio</label>
            <div>
              <DateTimePicker
                onChange={handleStartDateChange}
                value={dateStart}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Fecha y hora fin</label>
            <div>
              <DateTimePicker
                onChange={handleEndDateChange}
                value={dateEnd}
                className="form-control"
                minDate={dateStart}
              />
            </div>
          </div>

          <hr />
          <div className="form-group">
            <label>Titulo y notas</label>
            <input
              type="text"
              className={`form-control ${!titleIsValid && "is-invalid"}`}
              name="title"
              autoComplete="off"
              value={title}
              onChange={handleInputChange}
            />
            {!titleIsValid ? (
              <small id="emailHelp" className="form-text text-danger">
                El título es requerido
              </small>
            ) : (
              ""
            )}
          </div>

          <div className="form-group">
            <textarea
              type="text"
              className="form-control"
              placeholder="Notas"
              rows="5"
              name="notes"
              value={notes}
              onChange={handleInputChange}
            ></textarea>
            <small id="emailHelp" className="form-text text-muted">
              Información adicional
            </small>
          </div>

          <button type="submit" className="btn btn-outline-primary btn-block">
            <i className="far fa-save"></i>
            <span> Guardar</span>
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default CalendarModal;
