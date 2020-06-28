import React from "react";
import { useParams, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { getHeroById } from "../utils/getHeroById";

const HeroPage = ({ history }) => {
  const { id } = useParams();

  console.log(id);

  const hero = getHeroById(id);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  const handleReturn = () => {
    history.push("/");
  };

  return (
    <div className="row">
      <div className="col-4">
        <img
          className="img-thumbnail"
          src={`../assets/img/heroes/${id}.jpg`}
          alt={superhero}
        />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>
        <ul>
          <li>
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li>
            <b>Publicer: </b> {publisher}
          </li>
          <li>
            <b>First appearance: </b> {first_appearance}
          </li>
        </ul>

        <h5>Characters</h5>
        <p>{characters}</p>

        <hr />

        <button className="btn btn-outline" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
