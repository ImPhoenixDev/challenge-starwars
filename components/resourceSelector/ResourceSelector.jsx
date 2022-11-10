import React from "react";

import PropTypes from "prop-types";
import Link from "next/link";
import iconsNames from "../../utils/starwars-glyphicons/iconsNames";

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
    "cursor-pointer border-solid border-2 border-lime  text-lime rounded-md hover:-translate-y-1 hover:translate-x-1 hover:bg-lime hover:text-white transition duration-500 ease-in-out";

  return (
    <div className="resourcesOptions text-greentxt">
      <ul className="grid grid-cols-3 grid-rows-3 gap-3 px-2">
        <li className={resource === "people" ? listItemSelected : listItem}>
          <Link href="/list/people/1" className={link}>
            <i className={`swg ${iconsNames["people"]}`}></i>
            People
          </Link>
        </li>
        <li className={resource === "films" ? listItemSelected : listItem}>
          <Link href="/list/films/1" className={link}>
            <i className={`swg ${iconsNames["films"]}`}></i>
            Films
          </Link>
        </li>
        <li className={resource === "starships" ? listItemSelected : listItem}>
          <Link href="/list/starships/1" className={link}>
            <i className={`swg ${iconsNames["starships"]}`}></i>
            Starships
          </Link>
        </li>
        <li className={resource === "vehicles" ? listItemSelected : listItem}>
          <Link href="/list/vehicles/1" className={link}>
            <i className={`swg ${iconsNames["vehicles"]}`}></i>
            Vehicles
          </Link>
        </li>
        <li className={resource === "species" ? listItemSelected : listItem}>
          <Link href="/list/species/1" className={link}>
            <i className={`swg ${iconsNames["species"]}`}></i>
            Species
          </Link>
        </li>
        <li className={resource === "planets" ? listItemSelected : listItem}>
          <Link href="/list/planets/1" className={link}>
            <i className={`swg ${iconsNames["planets"]}`}></i>
            Planets
          </Link>
        </li>
      </ul>
    </div>
  );
}

ResourceSelector.propTypes = {
  resource: PropTypes.string,
};
