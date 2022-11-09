import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

/**
 * Results component render the given response from the api
 * pass the data to render the results.
 *
 * The component automatically identify the type of the resource 
 * and will select the right title.
 *
 * @param {Object} apiResponse - The response from the api call
 */
export default function Results({ data }) {
  const router = useRouter();
  const name = router.query.resources;

  // List of posible resources
  // and the name in the response to retrieve the title
  const resourceOptions = {
    people: { title: "name" },
    films: { title: "title" },
    starships: { title: "name" },
    vehicles: { title: "name" },
    species: { title: "name" },
    planets: { title: "name" },
  };

  
  return (
    <div>
      {data?.results.map((item) => {
        return (
          <div key={item[resourceOptions[name].title]}>
            <a href={item.url} target="__blank">{item[resourceOptions[name].title]}</a>
          </div>
        );
      })}
    </div>
  );
}

Results.propTypes = {
  data: PropTypes.object,
};
