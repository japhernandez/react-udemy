import React, { useState } from "react";
import AddCategory from "./AddCategory";
import ListCategory from "./ListCategory";

const GifExpert = () => {
  const [categories, setCategories] = useState([""]);

  return (
    <div className="container">
      <h2>Git Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <h2>Category</h2>
      <ol>
        {categories.map((category) => (
          <ListCategory category={category} key={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpert;
