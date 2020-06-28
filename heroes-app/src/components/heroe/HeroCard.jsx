import React from "react";
import { Link } from "react-router-dom";

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card" style={{ width: 360 }}>
      <img
        src={`./assets/img/heroes/${id}.jpg`}
        className="card-img-top img-bottom"
        alt={superhero}
      />
      <div className="card-body">
        <h5 className="card-title">{superhero}</h5>
        <p className="card-text">{alter_ego}</p>
        {alter_ego !== characters && <p className="card-text">{characters}</p>}
        <p>
          <small className="text-muted">{first_appearance}</small>
        </p>
        <Link to={`/hero/${id}`}>Más...</Link>
      </div>
    </div>
  );
};

export default HeroCard;
