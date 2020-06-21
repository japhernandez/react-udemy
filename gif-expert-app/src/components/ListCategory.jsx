import React from "react";
import PropTypes from "prop-types";
import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const ListCategory = ({ category }) => {
  const { loading, data: images } = useFetchGifs(category);

  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        images.map((img) => <GifItem key={img.id} {...img} />)
      )}
    </>
  );
};

ListCategory.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ListCategory;
