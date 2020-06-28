import React from "react";
import HeroeList from "../components/heroe/HeroeList";

const MarvelPage = () => {
  return (
    <div>
      <h1>Marvel page</h1>
      <hr />
      <HeroeList publisher="Marvel Comics" />
    </div>
  );
};

export default MarvelPage;
