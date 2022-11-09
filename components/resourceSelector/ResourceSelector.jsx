import React from "react";

import PropTypes from "prop-types";
import Link from "next/link";

/**
  * This component is used to display a list of resources in a 3 x 2 grid.
  * @param {String}  - Current resource selected
  */
export default function ResourceSelector({ resource }) {

  // simplified list of classes for selected and unselected states
  const link = "w-full h-full flex flex-col items-center justify-center p-4";
  const listItemSelected =
    "cursor-pointer border-solid border-2 border-greentxt shadow-sm shadow-greentxt rounded-md";
  const listItem =
    "cursor-pointer border-solid border-2 border-lime  text-lime rounded-md";

  return (
    <div className="resourcesOptions text-greentxt">
      <ul className="grid grid-cols-3 grid-rows-3 gap-3 px-2">
        <li className={resource === "people" ? listItemSelected : listItem}>
          <Link href="/list/people/1" className={link}>
            <i className="swg swg-darthvader"></i>
            people
          </Link>
        </li>
        <li className={resource === "films" ? listItemSelected : listItem}>
          <Link href="/list/films/1" className={link}>
            films
          </Link>
        </li>
        <li className={resource === "starships" ? listItemSelected : listItem}>
          <Link href="/list/starships/1" className={link}>
            starships
          </Link>
        </li>
        <li className={resource === "vehicles" ? listItemSelected : listItem}>
          <Link href="/list/vehicles/1" className={link}>
            vehicles
          </Link>
        </li>
        <li className={resource === "species" ? listItemSelected : listItem}>
          <Link href="/list/species/1" className={link}>
            species
          </Link>
        </li>
        <li className={resource === "planets" ? listItemSelected : listItem}>
          <Link href="/list/planets/1" className={link}>
            planets
          </Link>
        </li>
      </ul>
    </div>
  );
}

ResourceSelector.propTypes = {
  resource: PropTypes.string,
};
