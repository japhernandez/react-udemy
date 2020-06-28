import React from "react";
import { getHeroByPublisher } from "../../utils/getHeroByPublisher";
import HeroCard from "./HeroCard";

const HeroeList = ({ publisher }) => {
  const heroes = getHeroByPublisher(publisher);
  return (
    <div className="card-columns">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

export default HeroeList;
