import React from "react";
import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const ListCategory = ({ category }) => {
  const { loading, data: images } = useFetchGifs(category);

  return (
    <>
      {loading
        ? "Cargando..."
        : images.map((img) => <GifItem key={img.id} {...img} />)}
    </>
  );
};

export default ListCategory;
