import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length > 2) {
      setCategories((categories) => [value, ...categories]);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{value}</p>
      <input type="text" value={value} onChange={handleChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
