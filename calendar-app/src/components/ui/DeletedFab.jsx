import React from "react";
import { useDispatch } from "react-redux";
import { eventDelete } from "../../redux/actions/eventActions";

export const DeletedFab = () => {
  const dispatch = useDispatch();

  const handleDeleted = () => dispatch(eventDelete());

  return (
    <button className="btn btn-danger fab-danger" onClick={handleDeleted}>
      <i className="fas fa-trash"></i>
      <span> Borrar evento</span>
    </button>
  );
};
