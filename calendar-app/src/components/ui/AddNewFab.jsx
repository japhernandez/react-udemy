import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/actions/uiActions";

const AddNewFab = () => {
  const dispatch = useDispatch();

  const uiOpenModal = (event) => {
    dispatch(openModal());
  };

  return (
    <button className="btn btn-primary fab" onClick={uiOpenModal}>
      <i className="fas fa-plus"></i>
    </button>
  );
};

export default AddNewFab;
