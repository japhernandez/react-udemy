import React, { useState } from "react";
import PropTypes from "prop-types";

const Counter = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => setCounter(counter + 1);

  const handleReset = () => setCounter(value);

  const handleSubstrac = () => setCounter(counter - 1);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstrac}>-1</button>
    </>
  );
};

Counter.propTypes = {
  value: PropTypes.number,
};

export default Counter;
