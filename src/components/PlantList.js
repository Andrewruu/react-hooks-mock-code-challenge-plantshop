import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants,onDeletePlant,onUpdatePlant}) {
  return (
    <ul className="cards">{plants.map((plant)=>{
      return(
        <PlantCard key={plant.id} plant={plant} onUpdatePlant={onUpdatePlant} onDeletePlant={onDeletePlant}/>
      )

    })}</ul>
  );
}

export default PlantList;
