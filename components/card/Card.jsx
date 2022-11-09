import React from "react";
import PropTypes from "prop-types";

/**
 * Render a card with the given data
 * render the title and a icon
 *
 * @param {string} title - The title of the card
 * @param {string} icon - Pass a valid icon name to render
 * @param {string} url - Used to redirect when the card is clicked
 *
 **/
export default function Card({ title, icon, url }) {
  console.log(icon);

  const icons = {
    people: "swg-darthvader",
    films: "swg-40starwars",
    starships: "swg-falcon",
    vehicles: "swg-landspeeder",
    species: "swg-porg-2",
    planets: "swg-deathstar",
  }

  return (
    <div className="card">
      <div className="grid grid-cols-1 max-w-sm min-h-full p-4 bg-white rounded-lg border border-gray-200 shadow-lg">
        <a href="#">
          <i className={`swg ${icons[icon]} swg-6x text-greentxt`}></i>
        </a>
        <div className="flex flex-col justify-evenly">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-greentxt">
              {title}
            </h5>
          </a>
          <a
            href={url}
            className="inline-flex items-center py-2 px-2 text-sm font-medium text-center text-white bg-lime rounded-lg hover:opacity-75 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <span className="mr-2">Read more </span>
            <i className="swg swg-decals-4 swg-1x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  url: PropTypes.string,
};
