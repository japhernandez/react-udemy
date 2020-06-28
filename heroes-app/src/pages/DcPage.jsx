import React from "react";
import HeroeList from "../components/heroe/HeroeList";

const DcPage = () => {
  return (
    <div className="row">
      <div className="col-12">
        <h1>Dc Page</h1>
        <hr />
        <br />
        <HeroeList publisher="DC Comics" />
      </div>
    </div>
  );
};

export default DcPage;
